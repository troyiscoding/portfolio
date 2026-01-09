import React, { useEffect, useState } from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaLinux, FaUbuntu, FaRedhat, FaWindows, FaServer, FaNetworkWired, FaBook, FaGraduationCap, FaPython, FaShieldAlt, FaMicrochip, FaTasks, FaProjectDiagram, FaCode, FaTachometerAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiCplusplus, SiGnubash, SiPowershell, SiVmware } from 'react-icons/si';
import { Skill } from '../types';

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
};


import { skillsData } from '../data';

// ... iconMap ...

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
