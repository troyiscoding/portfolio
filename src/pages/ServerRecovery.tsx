import React from 'react';
import './ServerRecovery.css';

const ServerRecovery: React.FC = () => {
  return (
    <div className="server-recovery-container">
      <header className="server-recovery-header">
        <p className="server-recovery-eyebrow">Writeup</p>
        <h1>Two Hours to Save a Server</h1>
        <div className="server-recovery-meta">
          <span>Homelab troubleshooting</span>
          <span>Ubuntu Linux</span>
          <span>SMART and kernel logs</span>
          <span>Backup recovery planning</span>
        </div>
      </header>

      <section className="server-recovery-section">
        <h2>The Mystery</h2>
        <p>
          For months, my homelab server had been randomly becoming completely unresponsive. No SSH. No web services.
          No anything. The only fix each time was a hard power reset.
        </p>
        <p>
          The weird part was how inconsistent it felt. It could run perfectly for weeks, then suddenly lock up without
          warning. That night I finally decided to stop guessing and actually hunt it down.
        </p>
      </section>

      <section className="server-recovery-section">
        <h2>Reading the Black Box</h2>
        <p>
          I started with the boot history using <code>journalctl --list-boots</code>. That was the moment it stopped
          feeling random. I found 29 unclean reboots logged since June 2025.
        </p>
        <p>
          At that point it was obvious this was not a one-off crash. Something had been failing for a while and I just
          had not connected the dots yet.
        </p>
        <div className="server-recovery-code-block">
          <pre>
{`ata1.00: error: { UNC }
I/O error, dev sda, sector 362558184
ata1: SError: { CommWake }
ata1.00: failed command: READ FPDMA QUEUED`}
          </pre>
        </div>
        <p>
          That was the smoking gun. The SSD had developed bad sectors. The operating system would try to read from a
          damaged area, the request would go sideways, and the whole machine would hang hard enough to take everything
          down with it.
        </p>
        <p>
          The same pattern showed up in the crash logs just hours before each reboot. Cause and effect, confirmed.
        </p>
      </section>

      <section className="server-recovery-section">
        <h2>SMART Doesn't Lie</h2>
        <p>
          After that I pulled SMART data from the drive itself. It was a Samsung SSD 860 EVO 500GB with more than
          15,700 power-on hours, which works out to about 655 days of continuous operation.
        </p>
        <div className="server-recovery-table">
          <div className="server-recovery-row server-recovery-row-header">
            <span>Attribute</span>
            <span>Value</span>
            <span>What it meant</span>
          </div>
          <div className="server-recovery-row">
            <span>Uncorrectable Error Count</span>
            <span>69</span>
            <span>Sectors the drive could no longer read cleanly</span>
          </div>
          <div className="server-recovery-row">
            <span>ATA Error Count</span>
            <span>83</span>
            <span>Hardware-level I/O failures already on record</span>
          </div>
          <div className="server-recovery-row">
            <span>Reallocated Sector Count</span>
            <span>1</span>
            <span>The drive had already started remapping dying storage</span>
          </div>
          <div className="server-recovery-row">
            <span>Runtime Bad Block</span>
            <span>1</span>
            <span>An active bad block existed right then</span>
          </div>
          <div className="server-recovery-row">
            <span>Power-Off Recovery Count</span>
            <span>20</span>
            <span>That matched the history of hard resets almost perfectly</span>
          </div>
        </div>
        <p>
          The same LBA kept showing up over and over in the error history. One bad region had been causing repeated
          hangs for weeks.
        </p>
        <p>
          The funny part is that SMART still reported the drive as <code>PASSED</code>. That was a good reminder that
          SMART thresholds are conservative. Waiting for a drive to officially say <code>FAILED</code> is not a great
          strategy.
        </p>
      </section>

      <section className="server-recovery-section">
        <h2>A Second Problem</h2>
        <p>
          While I was already in investigation mode, I checked memory usage and found another issue sitting right next
          to the disk problem. The server was using 3.1 GB out of 3.2 GB of RAM, and swap was also fully exhausted.
        </p>
        <p>
          That machine was doing a lot for its size. It was running monitoring, dashboards, a local security stack, a
          smart home camera hub, a home automation bridge, a self-hosted web application, a database, and the reverse
          proxy in front of everything else.
        </p>
        <p>
          The memory pressure was not the main cause of the crashes, but constant swap activity on a drive that was
          already failing definitely was not helping.
        </p>
      </section>

      <section className="server-recovery-section">
        <h2>The Race</h2>
        <p>
          Once I had confirmed the drive was failing, the whole problem changed. It was no longer just a troubleshooting
          exercise. It became a race to get the important data off the disk before the next bad read took the system
          down for good.
        </p>
        <p>
          I set up SSH key-based access from the server to my Synology NAS and wrote a backup script that could move
          the important parts quickly without wasting time on junk that could be rebuilt.
        </p>
        <ul>
          <li>Archived Docker volumes for dashboards, configs, and security data</li>
          <li>Synced the home directory and application configuration</li>
          <li>Synced web content and reverse proxy configuration</li>
          <li>Captured home automation configuration and device pairing data</li>
          <li>Excluded caches, logs, and dependency folders to keep transfers lean</li>
        </ul>
        <p>
          The first full backup completed successfully. After that I set up a daily 2 a.m. cron job so incremental
          changes would keep flowing to the NAS every night.
        </p>
        <p>
          Total time from diagnosis to a working backup pipeline was about two hours.
        </p>
      </section>

      <section className="server-recovery-section">
        <h2>What Was at Risk</h2>
        <ul>
          <li>Security monitoring and alerting infrastructure</li>
          <li>Metrics collection, dashboards, and general observability tooling</li>
          <li>Smart home camera and automation services</li>
          <li>A self-hosted job search application and its supporting data</li>
          <li>The portfolio site itself and the configuration around it</li>
          <li>General server configuration and recovery knowledge built up over time</li>
        </ul>
      </section>

      <section className="server-recovery-section">
        <h2>What I Took Away From It</h2>
        <ul>
          <li>Random crashes are usually not random. There is almost always a trail if you go look for it.</li>
          <li>Kernel logs and SMART data can tell a very clear story when you line them up together.</li>
          <li>SMART saying <code>PASSED</code> does not mean a drive is healthy enough to trust.</li>
          <li>Backups should be there before the emergency, not created during it.</li>
          <li>Resource pressure matters. Even when it is not the root cause, it can make a bad situation worse.</li>
          <li>A Synology, rsync, and SSH keys can get you to a good backup pipeline very quickly.</li>
        </ul>
      </section>

      <footer className="server-recovery-footer">
        <h2>Closing Thought</h2>
        <p>
          I liked this problem because it started as a vague, annoying failure and ended with a clean chain of evidence.
        </p>
      </footer>
    </div>
  );
};

export default ServerRecovery;
