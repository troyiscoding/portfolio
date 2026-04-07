import React from 'react';
import './RuntimePlatform.css';

const RuntimePlatform: React.FC = () => {
  return (
    <div className="runtime-container">
      <header className="runtime-header">
        <p className="runtime-eyebrow">Platform Notes</p>
        <h1>What Troyyy.com Runs On Today</h1>
        <p className="runtime-intro">
          This site currently runs on a repurposed HP 15-bs020wm laptop. I kept it in service instead of throwing it
          away, and it has become a practical small-footprint host for homelab and portfolio workloads.
        </p>
        <div className="runtime-meta">
          <span>Host: HP 15-bs020wm</span>
          <span>Architecture: x86_64</span>
          <span>CPU: Intel Pentium N3710</span>
          <span>Cores: 4</span>
        </div>
      </header>

      <section className="runtime-section">
        <h2>Why I Chose This Host</h2>
        <div className="runtime-grid">
          <article className="runtime-card">
            <h3>Reused Hardware</h3>
            <p>
              This laptop was already available to me, so reusing it extended the life of working hardware and avoided
              turning a functional machine into waste.
            </p>
          </article>
          <article className="runtime-card">
            <h3>Built-in Ride-Through</h3>
            <p>
              Because it already has a battery, short power interruptions do not require a separate UPS for this
              personal setup. That makes it simple and resilient for low-risk workloads.
            </p>
          </article>
          <article className="runtime-card">
            <h3>Lower-Footprint Hosting</h3>
            <p>
              For a portfolio site and small lab services, a lightweight host keeps the always-on footprint modest
              while still giving me a real system to operate and document.
            </p>
          </article>
        </div>
      </section>

      <section className="runtime-section">
        <h2>Hardware Snapshot</h2>
        <div className="runtime-spec-grid">
          <div className="runtime-spec">
            <span className="runtime-spec-label">CPU</span>
            <strong>Intel Pentium N3710 @ 1.60 GHz</strong>
          </div>
          <div className="runtime-spec">
            <span className="runtime-spec-label">Max Frequency</span>
            <strong>2.56 GHz</strong>
          </div>
          <div className="runtime-spec">
            <span className="runtime-spec-label">Cores / Threads</span>
            <strong>4 / 4</strong>
          </div>
          <div className="runtime-spec">
            <span className="runtime-spec-label">Addressing</span>
            <strong>36-bit physical, 48-bit virtual</strong>
          </div>
        </div>

        <div className="runtime-code-block">
          <pre>
{`Architecture:                x86_64
CPU(s):                      4
Vendor ID:                   GenuineIntel
Model name:                  Intel(R) Pentium(R) CPU N3710 @ 1.60GHz
Thread(s) per core:          1
Core(s) per socket:          4
Socket(s):                   1
CPU max MHz:                 2560.0000
CPU min MHz:                 480.0000`}
          </pre>
        </div>
      </section>

      <section className="runtime-section">
        <h2>Operational Tradeoffs</h2>
        <div className="runtime-tradeoffs">
          <article className="runtime-tradeoff">
            <h3>Strengths</h3>
            <ul>
              <li>Reliable enough for lightweight web and lab services</li>
              <li>Battery-backed continuity for short outages</li>
              <li>Quiet, space-efficient, and easy to keep online</li>
              <li>Useful for learning lifecycle thinking on constrained hardware</li>
            </ul>
          </article>
          <article className="runtime-tradeoff">
            <h3>Constraints</h3>
            <ul>
              <li>Limited compute headroom compared with server-class hardware</li>
              <li>Laptop thermals and consumer components require careful workload sizing</li>
              <li>Not intended for heavy virtualization or high-throughput services</li>
              <li>Capacity planning matters more when resources are intentionally small</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="runtime-section">
        <h2>Why This Page Belongs Here</h2>
        <p>
          I wanted this site to show more than finished output. Documenting the host platform shows how I think about
          infrastructure decisions: lifecycle reuse, operational resilience, sustainability, constraints, and matching
          workloads to the right hardware.
        </p>
      </section>
    </div>
  );
};

export default RuntimePlatform;
