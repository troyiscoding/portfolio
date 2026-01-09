Building a Homelab HPC Environment with Slurm and MPI on Ubuntu

Author: Troy
Platform: Ubuntu 25.10 (questing)
Hardware: 13th-gen Intel Core i7 laptop, 16 GB RAM
Scheduler: Slurm 24.11.5
Authentication: Munge
MPI: MPICH with PMI2 via Slurm
Scope: Single-node HPC environment that supports batch jobs and MPI jobs

⸻

Executive summary

This project builds a small but realistic HPC environment on personal hardware. The focus is on the skills used in day-to-day research computing support:
	•	Linux administration and troubleshooting using systemd and logs
	•	Slurm configuration and operation, including node states and job lifecycle management
	•	MPI compilation and execution under Slurm using srun
	•	Debugging modern Linux issues such as cgroups v2 configuration and CPU topology mismatches
	•	Clear documentation of root causes and fixes

The goal is correctness and reproducibility rather than performance tuning.

⸻

Goals
	1.	Bring up a working Slurm environment with clean node registration.
	2.	Submit and run batch jobs using sbatch, then validate output and job state transitions.
	3.	Compile and run an MPI program, then launch it through Slurm so ranks behave correctly.
	4.	Document real failures and their resolutions in a way that is useful to other users.

⸻

System design

This is a single-node Slurm cluster. The same machine acts as:
	•	Controller node running slurmctld
	•	Compute node running slurmd
	•	Login node where users compile and submit jobs

This design is common for learning and validation environments because it keeps complexity low while preserving real scheduler behavior.

⸻

Installation overview

Base packages
	•	munge
	•	slurmctld, slurmd, slurm-client
	•	Slurm plugins pulled in by the Slurm packages

MPI toolchain
	•	mpich, libmpich-dev
	•	PMI libraries used for Slurm to MPI integration: libpmi0, libpmi2-0

⸻

Slurm configuration

Configuration file
	•	Path: /etc/slurm/slurm.conf

Design choices
	•	One partition named debug
	•	Node definition based on detected resources
	•	Simple process tracking appropriate for a homelab
	•	Stability and debuggability prioritized over advanced isolation

Representative configuration

ClusterName=homelab
ControlMachine=pong

SlurmUser=slurm

SlurmctldLogFile=/var/log/slurmctld.log
SlurmdLogFile=/var/log/slurmd.log

StateSaveLocation=/var/lib/slurm/slurmctld
SlurmdSpoolDir=/var/lib/slurm/slurmd

SchedulerType=sched/backfill
SelectType=select/cons_tres
SelectTypeParameters=CR_Core

ProctrackType=proctrack/pgid
TaskPlugin=task/none

NodeName=pong CPUs=12 RealMemory=15000 State=UNKNOWN
PartitionName=debug Nodes=pong Default=YES MaxTime=INFINITE State=UP

Required directories and permissions

Slurm requires its state and spool directories to exist and to be owned by the slurm user:
	•	/var/lib/slurm/slurmctld
	•	/var/lib/slurm/slurmd

⸻

Batch job validation

Minimal batch job

File: hello.sh

#!/bin/bash
echo "Hello from $(hostname)"

Submit:

sbatch hello.sh

Monitor:

squeue -u troy

Inspect output:

cat slurm-<jobid>.out

This confirms basic scheduling works end to end: submission, allocation, execution, and output capture.

⸻

MPI demonstration

MPI program

File: mpi_hello_world.c

#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
    MPI_Init(&argc, &argv);

    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    printf("Hello from rank %d of %d on %s\n", rank, size, getenv("HOSTNAME"));

    MPI_Finalize();
    return 0;
}

Compile with MPICH:

mpicc mpi_hello_world.c -o mpi_hello

Run under Slurm using PMI2:

srun --mpi=pmi2 -n 4 ./mpi_hello

Expected output (order may vary):

Hello from rank 0 of 4 on pong
Hello from rank 1 of 4 on pong
Hello from rank 2 of 4 on pong
Hello from rank 3 of 4 on pong

This confirms Slurm launched four tasks and MPICH correctly formed a single MPI communicator.

⸻

Troubleshooting and lessons learned

This section documents real failures encountered and the steps taken to resolve them.

1) slurmd failed at startup due to hybrid cgroups

Symptom
slurmd failed with a message indicating hybrid cgroup mode was not supported.

Root cause
The system had cgroup v2 mounted alongside a legacy cgroup v1 controller, which created a hybrid configuration.

Resolution
Force unified cgroup v2 by adding these kernel parameters in GRUB and rebooting:
	•	systemd.unified_cgroup_hierarchy=1
	•	cgroup_no_v1=all

After reboot, only cgroup v2 remained mounted and slurmd started successfully.

⸻

2) Node entered DRAIN or INVALID_REG due to topology mismatch

Symptom
The node state included DRAIN or INVALID_REG and Slurm reported low socket, core, thread, or CPU counts.

Root cause
Hybrid CPU detection created mismatches between configured values and the resources Slurm detected at runtime.

Resolution
Use slurmd -C to get Slurm’s detected hardware line and align NodeName accordingly. After correction, resume the node:

sudo scontrol update NodeName=pong State=RESUME Reason=""


⸻

3) Slurm client commands failed due to missing controller daemon

Symptom
Commands like sinfo failed with “Unable to contact slurm controller,” and systemctl showed slurmctld.service missing.

Root cause
The controller and compute daemons were removed by package changes, while configuration files remained.

Resolution
Reinstall daemons and client tools, then start services:

sudo apt install slurmctld slurmd slurm-client
sudo systemctl restart munge
sudo systemctl enable --now slurmctld
sudo systemctl enable --now slurmd

To reduce churn during development, hold packages:

sudo apt-mark hold slurmctld slurmd slurm-client


⸻

4) MPI launched, but every process reported “rank 0 of 1”

Symptom
Running srun -n 4 produced four lines of “rank 0 of 1.”

Root cause
MPI was not attaching to Slurm’s PMI environment, so each process initialized as a separate single-process MPI world.

Resolution
Install PMI libraries and run using the PMI2 interface:

sudo apt install libpmi0 libpmi2-0
srun --mpi=pmi2 -n 4 ./mpi_hello


⸻

5) OpenMPI install failed due to dependency conflicts

Symptom
OpenMPI packages could not be installed due to PMIx and dependency version conflicts.

Resolution
Use MPICH for this environment. In production environments, MPI selection should match the site-supported toolchain, often provided through environment modules.

⸻

What this project demonstrates

This work aligns directly with common HPC consulting responsibilities:
	•	Linux troubleshooting with logs and services
	•	Slurm administration and job management
	•	MPI build and execution workflows
	•	Diagnosing node states, scheduling issues, and runtime library problems
	•	Clear written documentation of problems and resolutions

⸻

Future improvements
	•	Add a second compute node via containers or lightweight VMs
	•	Add environment modules (Lmod) to manage multiple compiler and MPI versions
	•	Add Apptainer for HPC-friendly container workflows
	•	Add job arrays and workflow examples commonly used by research groups

⸻

Conclusion

This project produces a functioning Slurm and MPI environment on a modern Ubuntu system and documents the practical issues encountered along the way. The final result supports batch scheduling and MPI execution through Slurm, and the troubleshooting history reflects real operational problems seen in research computing environments.