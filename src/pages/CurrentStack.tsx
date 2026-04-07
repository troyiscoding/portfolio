import React from 'react';
import './CurrentStack.css';

const exposureCards = [
  {
    title: 'Protected Edge Access',
    description:
      'Public access is fronted through Cloudflare rather than exposing infrastructure details directly. Sensitive dashboards stay behind authentication and additional controls.',
  },
  {
    title: 'Reverse Proxy Layer',
    description:
      'A reverse proxy handles web routing and keeps service boundaries clean while reducing how much of the underlying host is visible from the outside.',
  },
  {
    title: 'Security-First Publishing',
    description:
      'This page intentionally avoids internal addresses, ports, versions, filesystem paths, enrollment details, and anything else that would make reconnaissance easier.',
  },
];

const stackGroups = [
  {
    title: 'Public & Protected Services',
    items: [
      {
        name: 'Portfolio Website',
        summary: 'A lightweight personal site served through the proxy layer and kept simple on purpose.',
      },
      {
        name: 'Self-Hosted Workflow App',
        summary: 'An application tracker and resume workflow tool running behind protected access rather than being left wide open.',
      },
      {
        name: 'Cloudflare Protected Dashboards',
        summary: 'Selected internal tools can be published through authenticated entry points when remote access actually makes sense.',
      },
    ],
  },
  {
    title: 'Security & Observability',
    items: [
      {
        name: 'Host Monitoring and Metrics',
        summary: 'System and network health are collected into dashboards that help with visibility, trend tracking, and troubleshooting.',
      },
      {
        name: 'Security Monitoring',
        summary: 'A local security stack watches host events, highlights suspicious behavior, and supports log-driven investigation.',
      },
      {
        name: 'Automated Response and Hardening',
        summary: 'Baseline protections such as ban rules, agent-based telemetry, and routine patching help keep the host steady.',
      },
    ],
  },
  {
    title: 'Smart Home & Device Integration',
    items: [
      {
        name: 'Home Automation Bridge',
        summary: 'A bridge layer connects otherwise separate device ecosystems into a cleaner Apple Home workflow.',
      },
      {
        name: 'Camera Integration',
        summary: 'Camera services are routed through a dedicated bridge so they work more smoothly with the rest of the home setup.',
      },
      {
        name: 'Containerized Updates',
        summary: 'Services that benefit from it are containerized and kept easier to maintain over time.',
      },
    ],
  },
  {
    title: 'Core Platform',
    items: [
      {
        name: 'Linux Host',
        summary: 'Ubuntu is the base platform for web services, monitoring, automation, and general homelab operations.',
      },
      {
        name: 'Database and Runtime Services',
        summary: 'A small application stack runs locally with a database backend and supporting service layers where needed.',
      },
      {
        name: 'Virtualization and Remote Admin',
        summary: 'The host also supports remote administration and virtualization work while staying manageable for a personal lab.',
      },
    ],
  },
];

const safeguards = [
  'No internal IP addresses, ports, or local hostnames are published on this page.',
  'No exact software versions, agent enrollment details, or filesystem paths are exposed here.',
  'Real dashboards are kept behind access controls instead of being linked casually from a public page.',
  'Preview panels below are stylized mockups rather than screenshots of live systems.',
];

const CurrentStack: React.FC = () => {
  return (
    <div className="current-stack-container">
      <header className="current-stack-hero">
        <p className="current-stack-eyebrow">Current Systems</p>
        <h1>What I&apos;m Running Right Now</h1>
        <p className="current-stack-intro">
          This page gives a high-level view of the services I run in my homelab and how I think about operating them.
          It is intentionally written to show the architecture and purpose of the stack without publishing sensitive
          implementation details that would make the host easier to target.
        </p>
        <div className="current-stack-pill-row">
          <span>Cloudflare protected access</span>
          <span>Monitoring and alerting</span>
          <span>Containerized where practical</span>
          <span>Security-aware by design</span>
        </div>
      </header>

      <section className="current-stack-section">
        <h2>How It Is Exposed</h2>
        <div className="current-stack-exposure-grid">
          {exposureCards.map((card) => (
            <article key={card.title} className="current-stack-panel">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="current-stack-section">
        <h2>Service Overview</h2>
        <div className="current-stack-group-list">
          {stackGroups.map((group) => (
            <article key={group.title} className="current-stack-group">
              <h3>{group.title}</h3>
              <div className="current-stack-card-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="current-stack-card">
                    <h4>{item.name}</h4>
                    <p>{item.summary}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="current-stack-section">
        <h2>Redacted Preview Panels</h2>
        <p className="current-stack-supporting-copy">
          Instead of using live screenshots with hostnames, alerts, or device details, I built safe visual previews that
          still show the kind of work the stack supports.
        </p>
        <div className="current-stack-preview-grid">
          <article className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-body">
              <div className="preview-heading">Security Overview</div>
              <div className="preview-row preview-row-strong" />
              <div className="preview-chart preview-chart-security">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="preview-row" />
              <div className="preview-row preview-row-short" />
            </div>
          </article>

          <article className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-body">
              <div className="preview-heading">Metrics Dashboard</div>
              <div className="preview-metric-grid">
                <div className="preview-metric" />
                <div className="preview-metric" />
                <div className="preview-metric" />
              </div>
              <div className="preview-chart preview-chart-metrics">
                <div />
              </div>
              <div className="preview-row" />
            </div>
          </article>

          <article className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-body">
              <div className="preview-heading">Service Workflow</div>
              <div className="preview-list">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="preview-row preview-row-short" />
              <div className="preview-row" />
            </div>
          </article>
        </div>
      </section>

      <section className="current-stack-section">
        <h2>What I Intentionally Keep Private</h2>
        <div className="current-stack-safeguards">
          {safeguards.map((item) => (
            <div key={item} className="current-stack-safeguard">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CurrentStack;
