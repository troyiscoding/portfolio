
import { ContactMe, Project, Skill, TimelineItem, WorkPermit, Certification, ProfileBanner } from './types';
import profilePic from './images/troy.jpg';

export const contactMeData: ContactMe = {
    profilePicture: { url: profilePic },
    name: "Troy Manning",
    title: "Systems Administrator",
    summary: "Experienced Systems Administrator with a passion for designing, securing, and maintaining robust IT infrastructure.",
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
    // Systems & Infrastructure
    { name: "Linux Admin", category: "Systems & Infrastructure", description: "Expertise in Ubuntu & RHEL environments", icon: "FaLinux" },
    { name: "Windows Server", category: "Systems & Infrastructure", description: "Clustering, HA, Active Directory", icon: "FaWindows" },
    { name: "Server Hardware", category: "Systems & Infrastructure", description: "Rack management, bare metal provisioning", icon: "FaServer" },
    { name: "High Availability", category: "Systems & Infrastructure", description: "Failover clustering & load balancing", icon: "FaServer" },
    { name: "Virtualization", category: "Systems & Infrastructure", description: "VMware, Hyper-V, & Containerization", icon: "SiVmware" },

    // Networking & Security
    { name: "Networking", category: "Networking", description: "TCP/IP, VLANs, DNS/DHCP, VPNs", icon: "FaNetworkWired" },
    { name: "Security", category: "Networking", description: "Firewall config, system hardening", icon: "FaShieldAlt" },

    // Tools & Administration
    { name: "Shell Scripting", category: "Tools", description: "Bash & PowerShell automation", icon: "SiGnubash" },
    { name: "Documentation", category: "Tools", description: "Technical guides & system mapping", icon: "FaBook" },
    { name: "Education Tech", category: "Tools", description: "LMS, classroom AV & support", icon: "FaGraduationCap" },
    { name: "Windows Tools", category: "Tools", description: "SCCM, Jamf, Group Policy", icon: "FaWindows" },

    // Programming
    { name: "Python (ML)", category: "Programming", description: "Automation & Machine Learning models", icon: "FaPython" },
    { name: "C / C++", category: "Programming", description: "System-level application development", icon: "SiC" },
    { name: "Java", category: "Programming", description: "Object-oriented backend development", icon: "FaJava" },
    { name: "React", category: "Programming", description: "Modern frontend web interfaces", icon: "FaReact" }
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
    headline: "Reliable Systems & Infrastructure",
    resumeLink: { url: "#" },
    linkedinLink: "https://linkedin.com/in/troymanning1",
    profileSummary: "Passionate Systems Administrator ensuring uptime, security, and scalability of complex enterprise environments."
};
