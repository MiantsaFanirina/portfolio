export interface Project {
    id: string;
    title: string;
    type: 'mobile' | 'web' | 'hackathon';
    description: string[];
    technologies: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Profile {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    avatar: string;
}

export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export const profile: Profile = {
    name: "Miantsa Fanirina",
    title: "Full Stack Developer & Code Architect",
    bio: "Passionate full-stack developer with 5+ years of experience crafting digital experiences. I turn coffee into code and bugs into features. Always learning, always building.",
    location: "Dubai, UAE",
    email: "MiantsaFanirinaRakotondrafara@gmail.com",
    github: "MiantsaFanirina",
    linkedin: "Miantsa Fanirina",
    avatar: "/me.png"
};

export const skills: Skill[] = [
    { name: "TypeScript", level: 95, category: "frontend" },
    { name: "React/Next.js", level: 98, category: "frontend" },
    { name: "Node.js", level: 92, category: "backend" },
    { name: "PostgreSQL", level: 88, category: "backend" },
    { name: "React Native", level: 85, category: "mobile" },
    { name: "Docker", level: 82, category: "tools" },
    { name: "AWS", level: 78, category: "tools" },
    { name: "GraphQL", level: 90, category: "backend" },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "TaskFlow Pro",
        type: "mobile",
        description: [
            "A revolutionary productivity app that combines AI-powered task management with beautiful UX design.",
            "Features real-time collaboration, smart notifications, and cross-platform synchronization.",
            "Built with React Native and Node.js backend, serving 10K+ active users."
        ],
        technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
        image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        demoUrl: "https://taskflow-demo.com",
        githubUrl: "https://github.com/demo/taskflow",
        featured: true
    },
    {
        id: "2",
        title: "CodeShare Platform",
        type: "web",
        description: [
            "Real-time collaborative code editor with syntax highlighting and live preview.",
            "Supports 20+ programming languages with intelligent auto-completion.",
            "Features include room-based collaboration, version history, and export options."
        ],
        technologies: ["Next.js", "Socket.io", "Monaco Editor", "Supabase"],
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        demoUrl: "https://codeshare-demo.com",
        githubUrl: "https://github.com/demo/codeshare",
        featured: true
    },
    {
        id: "3",
        title: "EcoTrack",
        type: "hackathon",
        description: [
            "Winner of GreenTech Hackathon 2023 - Carbon footprint tracking app.",
            "Uses ML algorithms to analyze user habits and suggest eco-friendly alternatives.",
            "Built in 48 hours with a team of 4 developers."
        ],
        technologies: ["React", "Python", "TensorFlow", "Firebase"],
        image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        demoUrl: "https://ecotrack-demo.com",
        featured: false
    },
    {
        id: "4",
        title: "CryptoVault",
        type: "web",
        description: [
            "Secure cryptocurrency portfolio tracker with real-time price updates.",
            "Features advanced charting, profit/loss calculations, and portfolio analytics."
        ],
        technologies: ["Vue.js", "Express.js", "MongoDB", "Chart.js"],
        image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
        githubUrl: "https://github.com/demo/cryptovault",
        featured: false
    },
    {
        id: "5",
        title: "FitnessBuddy",
        type: "mobile",
        description: [
            "AI-powered fitness companion with personalized workout plans.",
            "Integrates with wearables for comprehensive health tracking."
        ],
        technologies: ["Flutter", "Firebase", "TensorFlow Lite"],
        image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
        demoUrl: "https://fitnessbuddy-demo.com",
        featured: false
    },
    {
        id: "6",
        title: "DevConnect",
        type: "hackathon",
        description: [
            "Social platform for developers to share projects and collaborate.",
            "Built for TechConnect Hackathon - 2nd place winner."
        ],
        technologies: ["Svelte", "Supabase", "Tailwind CSS"],
        image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
        githubUrl: "https://github.com/demo/devconnect",
        featured: false
    }
];