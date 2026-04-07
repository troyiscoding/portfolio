import React from 'react';
import './CloudflareFailover.css';

const CloudflareFailover: React.FC = () => {
  return (
    <div className="cloudflare-failover-container">
      <header className="cloudflare-failover-header">
        <p className="cloudflare-failover-eyebrow">Writeup</p>
        <h1>Why I Moved My Site to Cloudflare Pages, At Least for Now</h1>
        <div className="cloudflare-failover-meta">
          <span>Failover planning</span>
          <span>Cloudflare Pages</span>
          <span>GitHub deploys</span>
          <span>Homelab continuity</span>
        </div>
      </header>

      <section className="cloudflare-failover-section">
        <h2>The Decision</h2>
        <p>
          Once I confirmed the SSD in my homelab server was at real risk of failure, I knew I needed a failover option
          for the public-facing parts of my setup. The server was still up, but I did not want my website depending on
          a drive that had already started showing bad sectors and repeated I/O errors.
        </p>
        <p>
          I do love owning my own stuff though. I like keeping my photos and files locally on my NAS, and naturally I
          like having my website on my own physical machine too. That is still my preference. I just needed a practical
          answer for the moment while the hardware side was in question.
        </p>
        <p>
          At that point the question was not whether I should move it. The question was what I could stand up quickly
          without turning the situation into a giant migration project.
        </p>
      </section>

      <section className="cloudflare-failover-section">
        <h2>The Fastest Good Option</h2>
        <p>
          The fastest good option was Cloudflare Pages. My site is static, so it made sense to move the public website
          to infrastructure that was built for exactly that kind of workload while I work on getting the rest of the
          parts together for my homelab cluster.
        </p>
        <p>
          That let me separate one important service from the shaky hardware immediately. Instead of waiting for a full
          hardware refresh, I could protect the public site first and keep moving.
        </p>
      </section>

      <section className="cloudflare-failover-section">
        <h2>What Changed</h2>
        <p>
          The website now deploys through GitHub. When I push changes, Cloudflare Pages runs the build and starts
          serving the updated site automatically to anyone who visits it.
        </p>
        <ul>
          <li>I make a change locally</li>
          <li>I push it to GitHub</li>
          <li>Cloudflare Pages runs the build</li>
          <li>The updated site goes live without me touching the homelab server</li>
        </ul>
        <p>
          That setup gives me a cleaner workflow and removes one more thing I have to babysit on the physical host.
        </p>
      </section>

      <section className="cloudflare-failover-section">
        <h2>What Stayed on the Homelab</h2>
        <p>
          I kept Cloudflare Tunnel in place for the rest of my homelab sites that I visit myself. That still makes the
          most sense for the internal tools and services I want available remotely without directly exposing the host.
        </p>
        <p>
          So now the public portfolio site and the homelab services have different jobs:
        </p>
        <ul>
          <li>Cloudflare Pages handles the static public website</li>
          <li>Cloudflare Tunnel still fronts the homelab services I use and manage privately</li>
        </ul>
      </section>

      <section className="cloudflare-failover-section">
        <h2>Why I Like This Setup</h2>
        <p>
          It solved the immediate problem without forcing me to rush the bigger rebuild. The website is no longer tied
          to a single failing SSD, and I still get to keep the rest of my homelab flow mostly the same while I plan the
          cluster the right way.
        </p>
        <p>
          Honestly, this is the kind of change I like most. It was practical, quick to put in place, and it reduced
          risk right away.
        </p>
      </section>

      <footer className="cloudflare-failover-footer">
        <h2>Closing Thought</h2>
        <p>
          Sometimes the best failover plan is not the most complicated one. In this case it was just moving the static
          site to a platform that is better at serving static sites, then leaving the tunnel in place for everything
          else until the next version of the homelab is ready.
        </p>
      </footer>
    </div>
  );
};

export default CloudflareFailover;
