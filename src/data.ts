
import { ContactMe, Project, Skill, TimelineItem, WorkPermit, Certification, ProfileBanner } from './types';
import profilePic from './images/troy.jpg';

export const contactMeData: ContactMe = {
    profilePicture: { url: profilePic },
    name: "Troy Manning",
    title: "Full Stack Developer",
    summary: "Experienced Full Stack Developer with a passion for building scalable web applications.",
    companyUniversity: "Tech Company",
    linkedinLink: "https://linkedin.com/in/troymanning1",
    email: "troymanning@ieee.org",
    phoneNumber: "+1 480 665 1426"
};

export const projectsData: Project[] = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Vite.",
        techUsed: "React, Vite, TypeScript, CSS",
        image: { url: "https://troyyy.com" }
    },
    {
        title: "Boat Safety Device",
        description: "Obtained Provisional Patent for automatic flag raising and lowering system for boats.",
        techUsed: "ESP32, C++, BluetoothLE, CAD, Rapid Prototyping",
        image: { url: "https://via.placeholder.com/300" }
    }
];

export const skillsData: Skill[] = [
    { name: "React", category: "Frontend", description: "Building UI components", icon: "FaReact" },
    { name: "Node.js", category: "Backend", description: "Server-side logic", icon: "FaNodeJs" },
    { name: "TypeScript", category: "Languages", description: "Type-safe JavaScript", icon: "SiTypescript" },
    { name: "C++", category: "Languages", description: "Type-safe JavaScript", icon: "SiTypescript" },
    { name: "BluetoothLE", category: "Languages", description: "Type-safe JavaScript", icon: "SiTypescript" },
    { name: "CAD", category: "Languages", description: "Type-safe JavaScript", icon: "SiTypescript" },
    { name: "Rapid Prototyping", category: "Languages", description: "Type-safe JavaScript", icon: "SiTypescript" }

];

export const timelineData: TimelineItem[] = [
    {
        name: "BYU Physics and Astronomy Department - Provo, Utah",
        timelineType: "work",
        title: "Systems Engineer/ JR. Systems Administrator",
        techStack: "RHEL Server Management, Linux, Windows, JAMF, Active Directory, Windows Server 2019, Network Management, Security Management, ",
        summaryPoints: ["Led development of key features.", "Mentored Help Desk Team.", "Led configuration of experimental departmental servers."],
        dateRange: "2020 - Present"
    },
    {
        name: "BYU Ira A. Fulton College of Engineering - Provo, Utah ",
        timelineType: "education",
        title: "Computer Engineering",
        techStack: "Embedded Systems, Microcontrollers, Digital Logic Design, Computer Architecture, Computer Networks, Computer Security, Computer Vision, Machine Learning",
        summaryPoints: ["GPA: 3.5/4.0", " Dean's List: 2025"],
        dateRange: "2021-2025"
    }
];

export const workPermitData: WorkPermit = {
    visaStatus: "Citizen",
    expiryDate: "N/A", // This might error if type is Date.
    summary: "eligible to work",
    additionalInfo: "No sponsorship required."
};

export const certificationsData: Certification[] = [
    {
        title: "Network+",
        issuer: "CompTIA",
        issuedDate: "Coming 2026",
        link: "https://www.comptia.org/certifications/network",
        iconName: "network"
    },
    {
        title: "Security+",
        issuer: "CompTIA",
        issuedDate: "Coming 2026",
        link: "https://www.comptia.org/certifications/security",
        iconName: "security"
    }
];

export const profileBannerData: ProfileBanner = {
    backgroundImage: { url: "https://via.placeholder.com/1500x500" },
    headline: "Building the future of technology",
    resumeLink: { url: "#" },
    linkedinLink: "https://linkedin.com/in/troymanning",
    profileSummary: "Passionate developer creating intuitive and dynamic user experiences."
};
