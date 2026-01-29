export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    link?: string;
    github?: string;
    personality: 'cyber' | 'design' | 'music' | 'aerospace';
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    downloadUrl?: string;
}

export const CYBER_PROJECTS: Project[] = [
    {
        id: 'uniscan',
        title: 'UniScan',
        description: 'Advanced vulnerability scanner for web applications.',
        longDescription: 'UniScan is a comprehensive automated vulnerability scanning tool designed to identify common web security flaws such as SQL injection, XSS, and broken authentication. It features a custom fingerprinting engine and real-time reporting.',
        technologies: ['Python', 'Request', 'BeautifulSoup', 'Threading'],
        github: 'https://github.com/aymaneoug/uniscan',
        personality: 'cyber'
    },
    {
        id: 'vault-guard',
        title: 'Vault Guard',
        description: 'Encrypted password manager with biometric authentication.',
        longDescription: 'A secure-by-design password management solution utilizing AES-256 encryption and Argon2 key derivation. Features include password strength analysis, breach monitoring, and secure cloud synchronization.',
        technologies: ['Rust', 'React', 'Tauri', 'SQLite'],
        personality: 'cyber'
    }
];

export const AERO_PROJECTS: Project[] = [
    {
        id: 'Comming Soon',
        title: 'Comming Soon',
        description: '',
        longDescription: '',
        technologies: [''],
        personality: 'aerospace'
    },

];

export const CERTIFICATES: Certificate[] = [
    {
        id: 'CITC',
        title: 'introduction to cybersecurity',
        issuer: 'Cisco',
        date: '2025',
        description: '',
        downloadUrl: '/images/certificates/cyber/I2CSUpdate20251209-31-wi0e9h.pdf'
    },
    {
        id: 'Nexhunt',
        title: 'Participated in Nexhunt CTF',
        issuer: 'Nexhunt',
        date: '2025',
        description: 'eLearnSecurity Junior Penetration Tester v2 - Focuses on core penetration testing skills.',
        downloadUrl: '/certs/ejptv2.pdf'
    },
    {
        id: 'ceh-practical',
        title: 'CEH Practical',
        issuer: 'EC-Council',
        date: '2023',
        description: '',
        downloadUrl: '/images/certificates/cyber/NexHUNT_CTF_h4k.pdf'
    }
];

