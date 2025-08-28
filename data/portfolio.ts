// data/portfolio.ts
import { IconType } from "react-icons";
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiNestjs, SiDjango, SiGraphql, SiPostgresql, SiDocker, SiGooglecloud, SiUnity, SiAdobe, SiExpo, SiUnrealengine } from "react-icons/si";
import {FaAws} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

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
} // 👈 type for icons

export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'mobile' | 'tools';
    logo?: IconType;
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
    { name: "TypeScript", level: 99, category: "frontend", logo: SiTypescript },
    { name: "JavaScript", level: 99, category: "frontend", logo: SiJavascript  },
    { name: "React", level: 98, category: "frontend", logo: SiReact },
    { name: "Next.js", level: 98, category: "frontend", logo: RiNextjsFill  },
    { name: "React Native", level: 85, category: "mobile", logo: SiExpo },
    { name: "Node.js", level: 92, category: "backend", logo: SiNodedotjs },
    { name: "Nest.js", level: 92, category: "backend", logo: SiNestjs },
    { name: "Django", level: 90, category: "backend", logo: SiDjango },
    { name: "GraphQL", level: 90, category: "backend", logo: SiGraphql },
    { name: "PostgreSQL", level: 88, category: "backend", logo: SiPostgresql },
    { name: "Docker", level: 90, category: "tools", logo: SiDocker },
    { name: "GCP", level: 90, category: "tools", logo: SiGooglecloud },
    { name: "AWS", level: 90, category: "tools", logo: FaAws  },
    { name: "Unity3D", level: 89, category: "tools", logo: SiUnity },
    { name: "Unreal Engine", level: 89, category: "tools", logo: SiUnrealengine  },
    { name: "Adobe", level: 89, category: "tools", logo: SiAdobe },
];


export const projects: Project[] = [

    {
        id: "1",
        title: "Forex AI",
        type: "web",
        description: [
            "Cutting-edge AI-powered Forex trading platform built with Next.js and modern web technologies.",
            "Provides professional traders with advanced charting tools, AI-driven trading signals, and comprehensive market analysis capabilities.",
            "Includes multiple chart types, technical indicators, AI recommendations with risk assessments, and real-time market data streaming."
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
        image: "/projects/forex-ai.png", // placeholder trading dashboard image
        githubUrl: "https://github.com/MiantsaFanirina/forex-ai",
        featured: true
    },
    {
        id: "2",
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
        featured: true
    },
    {
        id: "3",
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
        id: "4",
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
    },
];
