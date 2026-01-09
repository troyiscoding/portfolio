import React from 'react';
import './HomeHPC.css';
import { FaServer, FaTerminal, FaBug, FaProjectDiagram, FaBullseye, FaLightbulb, FaRocket } from 'react-icons/fa';

const HomeHPC: React.FC = () => {
    return (
        <div className="hpc-container">
            <header className="hpc-header">
                <h1>Building a Homelab HPC Environment with Slurm and MPI on Ubuntu</h1>
                <div className="hpc-meta">
                    <span>Author: Troy</span>
                    <span>Platform: Ubuntu 25.10</span>
                    <span>Scheduler: Slurm 24.11.5</span>
                    <span>MPI: MPICH with PMI2</span>
                </div>
            </header>

            <section className="hpc-section">
                <h2>Executive Summary</h2>
                <p>
                    This project builds a small but realistic HPC environment on personal hardware. The focus is on the skills used in day-to-day research computing support:
                </p>
                <ul>
                    <li>Linux administration and troubleshooting using systemd and logs</li>
                    <li>Slurm configuration and operation, including node states and job lifecycle management</li>
                    <li>MPI compilation and execution under Slurm using srun</li>
                    <li>Debugging modern Linux issues such as cgroups v2 configuration and CPU topology mismatches</li>
                    <li>Clear documentation of root causes and fixes</li>
                </ul>
                <p>The goal is correctness and reproducibility rather than performance tuning.</p>
            </section>

            <section className="hpc-section">
                <h2><FaBullseye /> Goals</h2>
                <ol>
                    <li>Bring up a working Slurm environment with clean node registration.</li>
                    <li>Submit and run batch jobs using <code>sbatch</code>, then validate output and job state transitions.</li>
                    <li>Compile and run an MPI program, then launch it through Slurm so ranks behave correctly.</li>
                    <li>Document real failures and their resolutions in a way that is useful to other users.</li>
                </ol>
            </section>

            <section className="hpc-section">
                <h2><FaProjectDiagram /> System Design</h2>
                <p>
                    This is a single-node Slurm cluster. The same machine acts as:
                </p>
                <ul>
                    <li><strong>Controller node</strong> running <code>slurmctld</code></li>
                    <li><strong>Compute node</strong> running <code>slurmd</code></li>
                    <li><strong>Login node</strong> where users compile and submit jobs</li>
                </ul>
                <p>This design is common for learning and validation environments because it keeps complexity low while preserving real scheduler behavior.</p>
            </section>

            <section className="hpc-section">
                <h2><FaServer /> Installation Overview</h2>
                <h3>Base Packages</h3>
                <ul>
                    <li>munge</li>
                    <li>slurmctld, slurmd, slurm-client</li>
                    <li>Slurm plugins pulled in by the Slurm packages</li>
                </ul>
                <h3>MPI Toolchain</h3>
                <ul>
                    <li>mpich, libmpich-dev</li>
                    <li>PMI libraries used for Slurm to MPI integration: libpmi0, libpmi2-0</li>
                </ul>
            </section>

            <section className="hpc-section">
                <h2><FaTerminal /> Slurm Configuration</h2>
                <p><strong>Path:</strong> <code>/etc/slurm/slurm.conf</code></p>
                <p><strong>Design Choices:</strong></p>
                <ul>
                    <li>One partition named <code>debug</code></li>
                    <li>Node definition based on detected resources</li>
                    <li>Simple process tracking appropriate for a homelab</li>
                    <li>Stability and debuggability prioritized over advanced isolation</li>
                </ul>
                <div className="code-block">
                    <pre>
                        {`ClusterName=homelab
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
PartitionName=debug Nodes=pong Default=YES MaxTime=INFINITE State=UP`}
                    </pre>
                </div>
                <p><strong>Required directories and permissions:</strong> Slurm requires its state and spool directories (<code>/var/lib/slurm/slurmctld</code> and <code>/var/lib/slurm/slurmd</code>) to exist and be owned by the <code>slurm</code> user.</p>
            </section>

            <section className="hpc-section">
                <h2>Batch Job Validation</h2>
                <p><strong>File: hello.sh</strong></p>
                <div className="code-block">
                    <pre>
                        {`#!/bin/bash
echo "Hello from $(hostname)"`}
                    </pre>
                </div>
                <p>Submit and Monitor:</p>
                <div className="code-block">
                    <pre>
                        {`sbatch hello.sh
squeue -u troy`}
                    </pre>
                </div>
                <p>This confirms basic scheduling works end to end: submission, allocation, execution, and output capture.</p>
            </section>

            <section className="hpc-section">
                <h2>MPI Demonstration</h2>
                <p><strong>File: mpi_hello_world.c</strong></p>
                <div className="code-block">
                    <pre>
                        {`#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
    MPI_Init(&argc, &argv);

    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    printf("Hello from rank %d of %d on %s\\n", rank, size, getenv("HOSTNAME"));

    MPI_Finalize();
    return 0;
}`}
                    </pre>
                </div>
                <p>Compile and Run under Slurm using PMI2:</p>
                <div className="code-block">
                    <pre>
                        {`mpicc mpi_hello_world.c -o mpi_hello
srun --mpi=pmi2 -n 4 ./mpi_hello`}
                    </pre>
                </div>
                <p><strong>Expected Output:</strong></p>
                <div className="code-block output">
                    <pre>
                        {`Hello from rank 0 of 4 on pong
Hello from rank 1 of 4 on pong
Hello from rank 2 of 4 on pong
Hello from rank 3 of 4 on pong`}
                    </pre>
                </div>
                <p>This confirms Slurm launched four tasks and MPICH correctly formed a single MPI communicator.</p>
            </section>

            <section className="hpc-section">
                <h2><FaBug /> Troubleshooting & Lessons Learned</h2>
                <p>This section documents real failures encountered and the steps taken to resolve them.</p>

                <div className="troubleshooting-item">
                    <h3>1) slurmd failed at startup due to hybrid cgroups</h3>
                    <p><strong>Symptom:</strong> <code>slurmd</code> failed with a message indicating hybrid cgroup mode was not supported.</p>
                    <p><strong>Root Cause:</strong> The system had cgroup v2 mounted alongside a legacy cgroup v1 controller, which created a hybrid configuration.</p>
                    <p><strong>Resolution:</strong> Force unified cgroup v2 by adding these kernel parameters in GRUB and rebooting:</p>
                    <div className="code-block">
                        <pre>systemd.unified_cgroup_hierarchy=1 cgroup_no_v1=all</pre>
                    </div>
                    <p>After reboot, only cgroup v2 remained mounted and <code>slurmd</code> started successfully.</p>
                </div>

                <div className="troubleshooting-item">
                    <h3>2) Node entered DRAIN or INVALID_REG due to topology mismatch</h3>
                    <p><strong>Symptom:</strong> The node state included DRAIN or INVALID_REG and Slurm reported low socket, core, thread, or CPU counts.</p>
                    <p><strong>Root Cause:</strong> Hybrid CPU detection created mismatches between configured values and the resources Slurm detected at runtime.</p>
                    <p><strong>Resolution:</strong> Use <code>slurmd -C</code> to get Slurm’s detected hardware line and align <code>NodeName</code> accordingly. After correction, resume the node:</p>
                    <div className="code-block">
                        <pre>sudo scontrol update NodeName=pong State=RESUME Reason=""</pre>
                    </div>
                </div>

                <div className="troubleshooting-item">
                    <h3>3) Slurm client commands failed due to missing controller daemon</h3>
                    <p><strong>Symptom:</strong> Commands like <code>sinfo</code> failed with “Unable to contact slurm controller,” and <code>systemctl</code> showed <code>slurmctld.service</code> missing.</p>
                    <p><strong>Root Cause:</strong> The controller and compute daemons were removed by package changes, while configuration files remained.</p>
                    <p><strong>Resolution:</strong> Reinstall daemons and client tools, then start services:</p>
                    <div className="code-block">
                        <pre>
                            {`sudo apt install slurmctld slurmd slurm-client
sudo systemctl restart munge
sudo systemctl enable --now slurmctld
sudo systemctl enable --now slurmd`}
                        </pre>
                    </div>
                </div>

                <div className="troubleshooting-item">
                    <h3>4) MPI launched, but every process reported “rank 0 of 1”</h3>
                    <p><strong>Symptom:</strong> Running <code>srun -n 4</code> produced four lines of “rank 0 of 1.”</p>
                    <p><strong>Root Cause:</strong> MPI was not attaching to Slurm’s PMI environment, so each process initialized as a separate single-process MPI world.</p>
                    <p><strong>Resolution:</strong> Install PMI libraries and run using the PMI2 interface:</p>
                    <div className="code-block">
                        <pre>
                            {`sudo apt install libpmi0 libpmi2-0
srun --mpi=pmi2 -n 4 ./mpi_hello`}
                        </pre>
                    </div>
                </div>

                <div className="troubleshooting-item">
                    <h3>5) OpenMPI install failed due to dependency conflicts</h3>
                    <p><strong>Symptom:</strong> OpenMPI packages could not be installed due to PMIx and dependency version conflicts.</p>
                    <p><strong>Resolution:</strong> Use MPICH for this environment. In production environments, MPI selection should match the site-supported toolchain, often provided through environment modules.</p>
                </div>
            </section>

            <section className="hpc-section">
                <h2><FaLightbulb /> What this project demonstrates</h2>
                <p>This work aligns directly with common HPC consulting responsibilities:</p>
                <ul>
                    <li>Linux troubleshooting with logs and services</li>
                    <li>Slurm administration and job management</li>
                    <li>MPI build and execution workflows</li>
                    <li>Diagnosing node states, scheduling issues, and runtime library problems</li>
                    <li>Clear written documentation of problems and resolutions</li>
                </ul>
            </section>

            <section className="hpc-section">
                <h2><FaRocket /> Future Improvements</h2>
                <ul>
                    <li>Add a second compute node via containers or lightweight VMs</li>
                    <li>Add environment modules (Lmod) to manage multiple compiler and MPI versions</li>
                    <li>Add Apptainer for HPC-friendly container workflows</li>
                    <li>Add job arrays and workflow examples commonly used by research groups</li>
                </ul>
            </section>

            <footer className="hpc-footer">
                <h2>Conclusion</h2>
                <p>
                    This project produces a functioning Slurm and MPI environment on a modern Ubuntu system and documents the practical issues encountered along the way. The final result supports batch scheduling and MPI execution through Slurm, and the troubleshooting history reflects real operational problems seen in research computing environments.
                </p>
            </footer>
        </div>
    );
};

export default HomeHPC;
