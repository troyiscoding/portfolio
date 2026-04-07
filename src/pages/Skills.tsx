import React from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaLinux, FaUbuntu, FaRedhat, FaWindows, FaServer, FaNetworkWired, FaBook, FaGraduationCap, FaPython, FaShieldAlt, FaMicrochip, FaTasks, FaProjectDiagram, FaCode, FaTachometerAlt, FaChalkboardTeacher, FaChartLine, FaTools } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiCplusplus, SiGnubash, SiPowershell, SiVmware } from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaLinux: <FaLinux />,
  FaUbuntu: <FaUbuntu />,
  FaRedhat: <FaRedhat />,
  FaWindows: <FaWindows />,
  FaServer: <FaServer />,
  FaNetworkWired: <FaNetworkWired />,
  FaBook: <FaBook />,
  FaGraduationCap: <FaGraduationCap />,
  FaPython: <FaPython />,
  FaShieldAlt: <FaShieldAlt />,
  SiC: <SiCplusplus />,
  SiGnubash: <SiGnubash />,
  SiPowershell: <SiPowershell />,
  SiVmware: <SiVmware />,
  FaMicrochip: <FaMicrochip />,
  FaTasks: <FaTasks />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaCode: <FaCode />,
  FaTachometerAlt: <FaTachometerAlt />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaChartLine: <FaChartLine />,
  FaTools: <FaTools />,
};


import { skillsData } from '../data';

const categoryOrder = [
  'Infrastructure & Reliability',
  'Core Services',
  'Automation & Operations',
  'Hybrid Systems',
];

const strengths = [
  'Windows Server and high availability',
  'Hybrid Windows/Linux administration',
  'PowerShell and Bash automation',
  'Documentation, monitoring, and reliability',
];

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: Record<string, typeof skillsData>, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <div className="skills-container">
      <header className="skills-hero">
        <p className="skills-eyebrow">Skills</p>
        <h1 className="skills-title">Infrastructure Skills with a Focus on Reliability, Windows Systems, and Automation</h1>
        <p className="skills-intro">
          My strongest work has been around keeping systems reliable, supporting Windows and Linux environments, and
          using automation and documentation to make infrastructure easier to operate.
        </p>
        <div className="skills-highlight-row">
          {strengths.map((strength) => (
            <span key={strength} className="skills-highlight-pill">{strength}</span>
          ))}
        </div>
      </header>

      <section className="skills-focus-panel">
        <h2>What I enjoy working on</h2>
        <p>
          I tend to do my best work where infrastructure, operations, and troubleshooting meet: Windows services,
          clustering and availability work, hybrid environments, and the day-to-day details that keep systems steady.
        </p>
      </section>

      {categoryOrder.filter((category) => skillsByCategory[category]).map((category, index) => (
        <section key={index} className="skill-category">
          <h2 className="category-title">{category}</h2>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
