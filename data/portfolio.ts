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
    bio: "Passionate full-stack developer with 4+ years of experience crafting digital experiences. I turn coffee into code and bugs into features. Always learning, always building.",
    location: "Dubai, UAE",
    email: "MiantsaFanirinaRakotondrafara@gmail.com",
    github: "MiantsaFanirina",
    linkedin: "miantsa-fanirina-b65a102b5",
    avatar: "/me.png"
};

export const skills: Skill[] = [
    { name: "TypeScript/JavaScript", level: 99, category: "frontend" },
    { name: "React/Next.js", level: 98, category: "frontend" },
    { name: "React Native", level: 85, category: "mobile" },
    { name: "Node.js/Nest.js", level: 92, category: "backend" },
    { name: "Django Rest Framework", level: 90, category: "backend" },
    { name: "GraphQL", level: 90, category: "backend" },
    { name: "PostgreSQL", level: 88, category: "backend" },
    { name: "Docker", level: 90, category: "tools" },
    { name: "GCP", level: 90, category: "tools" },
    { name: "AWS", level: 90, category: "tools" },
    { name: "Unity3D/Unreal Engine", level: 89, category: "tools" },
    { name: "Adobe", level: 89, category: "tools" },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "Instagreen",
        type: "mobile",
        description: [
            "Instagram-inspired mobile app built with React Native and Expo.",
            "Features include user authentication with Clerk, real-time backend with Convex, post creation with image uploads, and interactive likes and comments.",
            "Includes a scrollable feed and user profile pages with post history."
        ],
        technologies: ["React Native", "Expo", "Convex", "Clerk"],
        image: "/projects/instagreen.png",
        githubUrl: "https://github.com/MiantsaFanirina/Instagreen",
        featured: true
    },
    {
        id: "2",
        title: "Horizon",
        type: "web",
        description: [
            "Modern banking service application with secure financial data integration.",
            "Features include user authentication, bank account linking via Plaid, real-time balances and transactions, and a financial insights dashboard.",
            "Designed with a clean and responsive UI for a seamless digital banking experience."
        ],
        technologies: ["Next.js", "Prisma", "Plaid", "Tailwind CSS", "PostgreSQL", "TypeScript"],
        image: "/projects/horizon.png",
        githubUrl: "https://github.com/demo/horizon",
        featured: false
    },
    {
        id: "3",
        title: "Mamisoa Hyacinthe – Portfolio",
        type: "web",
        description: [
            "Professional portfolio website showcasing profile, experience, and skills.",
            "Features smooth animations, responsive design, and sections for about, experience, projects, and contact.",
            "Built with performance and accessibility in mind, deployed on Vercel."
        ],
        technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Vercel"],
        image: "/projects/portfolioMamisoa.png", // placeholder portfolio screenshot
        demoUrl: "https://portfolio-mamisoa.vercel.app",
        githubUrl: "https://github.com/MiantsaFanirina/PortfolioMamisoa",
        featured: false
    }
    ,
    {
        id: "4",
        title: "Aloc-Cars",
        type: "web",
        description: [
            "Car rental web application developed for the Swiss-based company aloccars.ch.",
            "Includes vehicle browsing with filters, booking system with date selection, and an admin panel for managing cars and reservations.",
            "Built with a robust Symfony backend and responsive Next.js frontend, featuring secure authentication and multilingual support (planned)."
        ],
        technologies: ["Symfony", "Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Axios"],
        image: "/projects/aloc-cars.png", // placeholder car rental image
        demoUrl: "https://aloccars.ch",
        githubUrl: "https://github.com/MiantsaFanirina/Aloc-Cars-Client",
        featured: false
    }
    ,
    {
        id: "5",
        title: "Forex Timeframe Alignment",
        type: "web",
        description: [
            "Professional web application designed to help forex traders analyze and identify multi-timeframe alignment for better trading decisions.",
            "Includes real-time visualization of forex timeframe alignment, smooth and intuitive user experience, and responsive design for desktop and mobile."
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        image: "/projects/fx-alignment.png", // placeholder trading dashboard image
        demoUrl: "https://professional-forex-timeframe-alignm.vercel.app",
        githubUrl: "https://github.com/MiantsaFanirina/professional-forex-timeframe-alignment-analysis",
        featured: false
    }

];