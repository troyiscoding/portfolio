
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
        title: "Current Host Platform",
        description: "A repurposed HP laptop hosting this site with documented hardware constraints, battery-backed ride-through, and sustainability tradeoffs.",
        techUsed: "Linux, Server Hardware, Capacity Planning, Sustainability",
        image: { url: "https://picsum.photos/seed/runtime-platform/300/200" },
        link: "/runtime-platform"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Vite.",
        techUsed: "React, Vite, TypeScript, CSS",
        image: { url: "https://picsum.photos/seed/website/300/200" }
    },
    {
        title: "Boat Safety Device",
        description: "Obtained Provisional Patent for automatic flag raising and lowering system for boats.",
        techUsed: "ESP32, C++, BluetoothLE, CAD, Rapid Prototyping",
        image: { url: "https://picsum.photos/seed/lake/300/200" }
    },
    {
        title: "Home Lab HPC Environment",
        description: "Single-node Slurm cluster with MPI support, simulating a real-world research computing environment.",
        techUsed: "Slurm, Munge, MPICH, Ubuntu, Bash",
        image: { url: "https://picsum.photos/seed/hpc/300/200" },
        link: "/hpc"
    }
];

export const skillsData: Skill[] = [
    { name: "Windows Failover Clustering", category: "Infrastructure & Reliability", description: "Hands-on experience with Windows high availability design, cluster operations, and resilient service delivery.", icon: "FaWindows" },
    { name: "Windows Server", category: "Infrastructure & Reliability", description: "Administration across Windows Server environments with a focus on uptime, patching, and operational consistency.", icon: "FaWindows" },
    { name: "Hyper-V", category: "Infrastructure & Reliability", description: "Virtualized Windows infrastructure and host-level platform operations for lab and enterprise-style workloads.", icon: "SiVmware" },
    { name: "Server Hardware", category: "Infrastructure & Reliability", description: "Bare-metal provisioning, hardware troubleshooting, and practical lifecycle management on constrained and enterprise systems.", icon: "FaServer" },

    { name: "Active Directory", category: "Core Services", description: "Identity, domain-joined systems, and policy-driven administration in Windows-centric environments.", icon: "FaWindows" },
    { name: "DNS", category: "Core Services", description: "Core name-resolution services for hybrid infrastructure, troubleshooting, and platform reliability.", icon: "FaNetworkWired" },
    { name: "Networking", category: "Core Services", description: "TCP/IP, VLANs, DNS/DHCP, and practical network troubleshooting for service availability.", icon: "FaNetworkWired" },
    { name: "Security Hardening", category: "Core Services", description: "System hardening, least-privilege thinking, and security-conscious operational practice.", icon: "FaShieldAlt" },

    { name: "PowerShell Automation", category: "Automation & Operations", description: "Automation for Windows administration, repeatable system changes, and operational efficiency.", icon: "SiPowershell" },
    { name: "Bash & Linux Automation", category: "Automation & Operations", description: "Scripting for Linux administration, service control, repeatable provisioning, and troubleshooting.", icon: "SiGnubash" },
    { name: "Documentation", category: "Automation & Operations", description: "Runbooks, technical guides, and system mapping that support reliable team operations.", icon: "FaBook" },
    { name: "Monitoring & KPIs", category: "Automation & Operations", description: "Operational awareness using service health, alerting, and measurable infrastructure outcomes.", icon: "FaChartLine" },

    { name: "Linux Administration", category: "Hybrid Systems", description: "Ubuntu and RHEL administration for mixed-platform environments and service support.", icon: "FaLinux" },
    { name: "Virtualization", category: "Hybrid Systems", description: "Hyper-V, VMware, and virtual lab design to support testing, validation, and platform learning.", icon: "SiVmware" },
    { name: "Incident Troubleshooting", category: "Hybrid Systems", description: "Structured debugging across services, operating systems, and infrastructure dependencies.", icon: "FaTools" },
    { name: "Operational Reliability", category: "Hybrid Systems", description: "Focus on uptime, change discipline, recovery readiness, and scalable operational habits.", icon: "FaServer" }
];

export const timelineData: TimelineItem[] = [
    {
        name: "BYU Physics and Astronomy Department - Provo, Utah",
        timelineType: "work",
        title: "Systems Engineer / Jr. Systems Administrator",
        techStack: "Windows Server, Linux Administration, Active Directory, Windows High Availability, JAMF, Network Operations, Security Practices, Technical Documentation",
        summaryPoints: [
            "Supported mixed Windows and Linux infrastructure for departmental systems, user services, and research environments.",
            "Worked on Windows Server administration, Active Directory, and high-availability-minded infrastructure improvements for reliability and uptime.",
            "Configured, deployed, and troubleshot departmental servers while documenting operational knowledge for more consistent support.",
            "Mentored Help Desk staff on troubleshooting, escalation, and day-to-day systems support practices."
        ],
        dateRange: "2020 - 2026"
    },
    {
        name: "BYU Ira A. Fulton College of Engineering - Provo, Utah ",
        timelineType: "education",
        title: "Computer Engineering",
        techStack: "Embedded Systems, Microcontrollers, Digital Logic Design, Computer Architecture, Computer Networks, Computer Security, Computer Vision, Machine Learning",
        summaryPoints: ["GPA: 3.5/4.0", "Dean's List: 2025"],
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
        status: "In Progress",
        targetDate: "Target completion: July 2026",
        summary: "Strengthening core networking knowledge for infrastructure operations, troubleshooting, and service delivery.",
        focusAreas: ["Subnetting and routing", "DNS and DHCP fundamentals", "Switching and network troubleshooting"],
        link: "https://www.comptia.org/certifications/network",
        iconName: "network"
    },
    {
        title: "Security+",
        issuer: "CompTIA",
        status: "In Progress",
        targetDate: "Target completion: October 2026",
        summary: "Building deeper security fundamentals for hardening, compliance-aware operations, and incident response.",
        focusAreas: ["Identity and access control", "System hardening and risk reduction", "Security monitoring and response"],
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
