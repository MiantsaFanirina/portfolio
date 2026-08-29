import type { Localized } from "./projects";

export interface CapabilityGroup {
  index: string;
  title: Localized;
  items: string[];
}

export interface ExperienceItem {
  year: string;
  role: Localized;
  org: Localized;
  note?: Localized;
}

export const profile = {
  name: "Miantsa Fanirina",
  firstName: "Miantsa",
  lastName: "Fanirina",
  role: {
    en: "Full-Stack Web & Mobile Developer",
    fr: "Développeur Full-Stack Web & Mobile",
  } as Localized,
  location: {
    en: "Building for the web & mobile",
    fr: "Constructions pour le web & mobile",
  } as Localized,
  github: "https://github.com/MiantsaFanirina",
  githubHandle: "MiantsaFanirina",
  email: "MiantsaFanirinaRakotondrafara@gmail.com",
  phone: "+971 56 736 5388",
  linkedin: "https://linkedin.com/in/miantsa-fanirina-b65a102b5",
  basedIn: "Sharjah, UAE",
  contactNote: {
    en: "Available for freelance and collaborative work.",
    fr: "Disponible pour des missions freelance et collaborations.",
  } as Localized,
};

export const capabilities: CapabilityGroup[] = [
  {
    index: "01",
    title: { en: "Frontend", fr: "Frontend" },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Animation (Framer Motion)",
      "Responsive interfaces",
      "Tailwind CSS",
    ],
  },
  {
    index: "02",
    title: { en: "Backend", fr: "Backend" },
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Databases (PostgreSQL, MySQL)",
      "ORM (Prisma, TypeORM)",
      "Auth (Clerk, Plaid, JWT)",
    ],
  },
  {
    index: "03",
    title: { en: "Mobile", fr: "Mobile" },
    items: [
      "React Native",
      "Expo",
      "Cross-platform architecture",
      "Realtime (Convex)",
      "API integration",
    ],
  },
  {
    index: "04",
    title: { en: "Infrastructure", fr: "Infrastructure" },
    items: [
      "Git & version control",
      "Docker",
      "CI/CD",
      "Vercel deployment",
      "Testing (Jest)",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2025–2026",
    role: { en: "Web Developer & E-Commerce Specialist", fr: "Développeur Web & Spécialiste E-Commerce" },
    org: { en: "Wellness Theories (France → Dubai)", fr: "Wellness Theories (France → Dubaï)" },
    note: {
      en: "Maintained and optimized a Shopify store, redesigned UX for a premium silk brand, and improved SEO and customer engagement.",
      fr: "Maintenance et optimisation d'une boutique Shopify, refonte de l'UX pour une marque de soie haut de gamme, et amélioration du SEO et de l'engagement client.",
    },
  },
  {
    year: "2025",
    role: { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
    org: { en: "Forex Timeframe Alignment (Private Client)", fr: "Forex Timeframe Alignment (Client privé)" },
    note: {
      en: "Built a real-time Forex analysis web app with Next.js, TypeScript and Tailwind, integrating 5+ data sources and new indicators.",
      fr: "Application web d'analyse Forex temps réel avec Next.js, TypeScript et Tailwind, intégrant 5+ sources de données et de nouveaux indicateurs.",
    },
  },
  {
    year: "2025",
    role: { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
    org: { en: "Forex AI Trading Platform (FinTech)", fr: "Plateforme de Trading Forex IA (FinTech)" },
    note: {
      en: "Built an AI-powered Forex platform (Next.js 13, TypeScript) with multi-chart views, 8 technical indicators and automated risk assessment.",
      fr: "Plateforme Forex propulsée par l'IA (Next.js 13, TypeScript) avec visualisations multi-graphiques, 8 indicateurs techniques et évaluation automatisée des risques.",
    },
  },
  {
    year: "2025",
    role: { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
    org: { en: "AlocCars (Switzerland)", fr: "AlocCars (Suisse)" },
    note: {
      en: "Led redesign and development of the car-rental platform (aloccars.ch) with a Next.js frontend, Symfony backend and admin panel.",
      fr: "Direction de la refonte et du développement de la plateforme de location (aloccars.ch) avec frontend Next.js, backend Symfony et panneau admin.",
    },
  },
  {
    year: "2024",
    role: { en: "Project Manager & Technical Lead", fr: "Chef de projet & Lead Technique" },
    org: { en: "ESTI (University Competition)", fr: "ESTI (Compétition universitaire)" },
    note: {
      en: "Led a team of 5 developers to design and deliver an online banking system under competition conditions.",
      fr: "Encadrement d'une équipe de 5 développeurs pour concevoir et livrer un système bancaire en ligne dans un cadre de compétition.",
    },
  },
  {
    year: "2024",
    role: { en: "Front-End Expert & Mentor", fr: "Expert Front-End & Mentor" },
    org: { en: "GDG Antananarivo (Google Developer Group)", fr: "GDG Antananarivo (Google Developer Group)" },
    note: {
      en: "Ran front-end and UI/UX expert sessions for 50+ participants and mentored modern web development.",
      fr: "Animations de sessions expertes front-end et UI/UX pour 50+ participants et mentorat en développement web moderne.",
    },
  },
  {
    year: "2023",
    role: { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
    org: { en: "BIG DEV COMPANY", fr: "BIG DEV COMPANY" },
    note: {
      en: "Developed social networking platforms with Laravel and Next.js in an Agile team, focused on performance and responsive design.",
      fr: "Développement de plateformes de réseaux sociaux avec Laravel et Next.js en équipe Agile, axé sur la performance et le responsive.",
    },
  },
];

export const heroStatement = {
  en: "I build digital experiences from interface to infrastructure: web, mobile, and the systems between.",
  fr: "Je construis des expériences numériques de l'interface à l'infrastructure : web, mobile et les systèmes entre les deux.",
} as Localized;

export const aboutText = {
  en: "Miantsa is a full-stack developer working across the web and mobile. The practice moves between product interfaces, real-time systems and the backend glue that holds them together: always with an eye for motion, typography and the small details that make software feel considered. Recent work spans fintech, trading tooling, game editors and commissioned portfolios.",
  fr: "Miantsa est un développeur full-stack évoluant entre le web et le mobile. La pratique navigue entre interfaces produit, systèmes temps réel et la couche backend qui les relie : avec un soin constant pour le motion, la typographie et les détails qui rendent un logiciel pensé. Les travaux récents couvrent la fintech, les outils de trading, les éditeurs de jeux et des portfolios commandés.",
} as Localized;
