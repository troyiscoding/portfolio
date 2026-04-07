import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { certificationsData } from '../data';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'security': <FaShieldAlt />,
  'network': <FaNetworkWired />
};

const Certifications: React.FC = () => {
  const certifications = certificationsData;

  return (
    <div className="certifications-container">
      <header className="certifications-hero">
        <p className="certifications-eyebrow">Certification Roadmap</p>
        <h1 className="certifications-title">Actively Pursuing Infrastructure and Security Credentials</h1>
        <p className="certifications-intro">
          I am currently studying toward certifications that reinforce the networking, security, and operational
          foundations behind the Windows/Linux infrastructure work I enjoy most.
        </p>
      </header>

      <div className="certifications-highlights">
        <span>Hands-on lab aligned</span>
        <span>Target dates set</span>
        <span>Focused on platform operations</span>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-header">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <span className="certification-status">{cert.status}</span>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p className="certification-summary">{cert.summary}</p>
              <span className="issued-date">{cert.targetDate}</span>
              <ul className="certification-focus-list">
                {cert.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>

      <section className="certifications-note">
        <h2>Why this matters</h2>
        <p>
          These certifications support the kind of work I want to keep growing in: reliable infrastructure, clearer
          troubleshooting, stronger security posture, and better operational judgment for platform engineering roles.
        </p>
      </section>
    </div>
  );
};

export default Certifications;
