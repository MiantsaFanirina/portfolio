export type PreviewMode = "iframe" | "image" | "github";
export type ProjectTier = "featured" | "selected" | "archive";
export type CategoryKey =
  | "web"
  | "mobile"
  | "fullstack"
  | "experimental"
  | "opensource";

export interface Localized {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: Localized;
  category: Localized;
  categoryKey: CategoryKey;
  year: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewMode: PreviewMode;
  tier: ProjectTier;
  featured?: boolean;
  role?: Localized;
  highlights?: { en: string[]; fr: string[] };
  images?: string[];
}

const RAW = "https://raw.githubusercontent.com/MiantsaFanirina";

export const projects: Project[] = [
  {
    id: "miangola",
    slug: "miangola",
    title: "Miangola",
    description: {
      en: "The flagship live web application, the latest production build deployed on Vercel, featured as the primary showcase.",
      fr: "L'application web phare, la dernière build de production déployée sur Vercel, mise en avant comme vitrine principale.",
    },
    category: { en: "Web · Flagship", fr: "Web · Phare" },
    categoryKey: "web",
    year: "2026",
    technologies: ["React", "TypeScript", "Vite", "SCSS"],
    githubUrl: "https://github.com/MiantsaFanirina/portfolio-miangola",
    liveUrl: "https://meja-miangola.vercel.app",
    previewMode: "iframe",
    tier: "featured",
    featured: true,
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
    highlights: {
      en: [
        "Modern React + TypeScript architecture",
        "SCSS-driven design system",
        "Deployed and maintained in production",
      ],
      fr: [
        "Architecture moderne React + TypeScript",
        "Système de design en SCSS",
        "Déployée et maintenue en production",
      ],
    },
  },
  {
    id: "mamisoa",
    slug: "mamisoa-portfolio",
    title: "Mamisoa Hyacinthe - Portfolio",
    description: {
      en: "A commissioned portfolio for a client, built with cinematic motion and editorial composition.",
      fr: "Un portfolio commandé pour un client, avec un motion design cinématographique et une composition éditoriale.",
    },
    category: { en: "Web · Client", fr: "Web · Client" },
    categoryKey: "web",
    year: "2025",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/MiantsaFanirina/PortfolioMamisoa",
    liveUrl: "https://portfolio-mamisoa.vercel.app",
    previewMode: "iframe",
    tier: "featured",
    featured: true,
    role: {
      en: "Design & development",
      fr: "Conception & développement",
    },
    highlights: {
      en: [
        "Smooth animations and section transitions",
        "Responsive across all screen sizes",
        "About, experience, projects and contact sections",
        "Performance and accessibility minded build",
      ],
      fr: [
        "Animations et transitions fluides",
        "Responsive sur tous les écrans",
        "Sections à propos, expérience, projets, contact",
        "Performance et accessibilité au cœur de la conception",
      ],
    },
  },
  {
    id: "mamy-portfolio",
    slug: "mamy-portfolio",
    title: "Mamy RAZAFINDRAKOTO - Portfolio",
    description: {
      en: "A commissioned portfolio for a client, featuring EN/FR localization, smooth animations and a responsive layout.",
      fr: "Un portfolio commandé pour un client, avec localisation EN/FR, animations fluides et mise en page responsive.",
    },
    category: { en: "Web · Client", fr: "Web · Client" },
    categoryKey: "web",
    year: "2026",
    technologies: ["React", "TypeScript", "Framer Motion", "i18next"],
    githubUrl: "https://github.com/MiantsaFanirina/mamy-portfolio",
    liveUrl: "https://mamy-razafindrakoto.vercel.app",
    previewMode: "iframe",
    tier: "featured",
    featured: true,
    role: {
      en: "Design & development",
      fr: "Conception & développement",
    },
    highlights: {
      en: [
        "EN/FR multilingual support with i18next",
        "Smooth page transitions and scroll animations",
        "Responsive across all screen sizes",
      ],
      fr: [
        "Support multilingue EN/FR avec i18next",
        "Transitions de page et animations au scroll fluides",
        "Responsive sur tous les écrans",
      ],
    },
  },
  {
    id: "tilemap",
    slug: "tilemap-editor",
    title: "TileMap Editor",
    description: {
      en: "A professional 2D tile-map editor with a desktop build and a browser version.",
      fr: "Un éditeur de cartes en tuiles 2D professionnel, décliné en application de bureau et en web.",
    },
    category: { en: "Web · Tooling", fr: "Web · Outil" },
    categoryKey: "experimental",
    year: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Electron", "PixiJS"],
    githubUrl: "https://github.com/MiantsaFanirina/map-editor",
    previewMode: "image",
    tier: "selected",
    images: [
      "/img/tilemap-editor/Screenshot-0.png",
      "/img/tilemap-editor/Screenshot-1.png",
      "/img/tilemap-editor/Screenshot-2.png",
    ],
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
    highlights: {
      en: [
        "Brush, rectangle, circle, line and flood-fill tools",
        "Maps up to 10,000 × 10,000 tiles",
        "Unlimited undo / redo history",
        "Persistence via IndexedDB",
        "Electron desktop build with TXT import / export",
      ],
      fr: [
        "Outils pinceau, rectangle, cercle, ligne, remplissage",
        "Cartes jusqu'à 10 000 × 10 000 tuiles",
        "Historique annuler / rétablir illimité",
        "Persistance via IndexedDB",
        "Build de bureau Electron avec import / export TXT",
      ],
    },
  },
  {
    id: "aloc-cars",
    slug: "aloc-cars",
    title: "Aloc-Cars",
    description: {
      en: "A car-rental platform for a Swiss client, pairing a Symfony API with a Next.js frontend.",
      fr: "Une plateforme de location de voitures pour un client suisse, associant une API Symfony et un frontend Next.js.",
    },
    category: { en: "Full-Stack · Client", fr: "Full-Stack · Client" },
    categoryKey: "fullstack",
    year: "2025",
    technologies: ["Next.js", "Symfony", "TypeScript", "MySQL", "Tailwind CSS", "Axios"],
    githubUrl: "https://github.com/MiantsaFanirina/Aloc-Cars-Client",
    liveUrl: "https://aloccars.vercel.app/",
    previewMode: "iframe",
    tier: "featured",
    featured: true,
    role: {
      en: "Frontend & integration",
      fr: "Frontend & intégration",
    },
    highlights: {
      en: [
        "Vehicle browsing with brand, model and availability filters",
        "Booking system with date selection",
        "Admin panel for fleet and reservation management",
        "Secure authentication and session handling",
        "Symfony API + MySQL data layer",
      ],
      fr: [
        "Recherche de véhicules avec filtres marque, modèle, dispo",
        "Système de réservation avec choix des dates",
        "Panneau admin pour flotte et réservations",
        "Authentification et sessions sécurisées",
        "API Symfony + base MySQL",
      ],
    },
  },
  {
    id: "phone-case",
    slug: "phone-case-maker",
    title: "Phone Case Maker",
    description: {
      en: "An iPhone case customizer with a live 3D preview, letting users design and visualize cases in real time.",
      fr: "Un personnalisateur de coques iPhone avec aperçu 3D en direct, permettant de concevoir et visualiser les coques en temps réel.",
    },
    category: { en: "Web · 3D", fr: "Web · 3D" },
    categoryKey: "experimental",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Three.js", "Prisma"],
    githubUrl: "https://github.com/MiantsaFanirina/phone-case-maker",
    liveUrl: "https://ipcasemaker.vercel.app/designs",
    previewMode: "iframe",
    tier: "selected",
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
    images: [`${RAW}/phone-case-maker/master/public/placeholder.png`],
    highlights: {
      en: [
        "Interactive 3D case preview",
        "Real-time design updates",
        "Customizable layouts and artwork",
      ],
      fr: [
        "Aperçu 3D interactif de la coque",
        "Mise à jour du design en temps réel",
        "Dispositions et visuels personnalisables",
      ],
    },
  },
  {
    id: "instagreen",
    slug: "instagreen",
    title: "Instagreen",
    description: {
      en: "An Instagram-style social app built with React Native, Expo, Convex and Clerk. Shown through interface screenshots.",
      fr: "Un réseau social inspiré d'Instagram en React Native, Expo, Convex et Clerk. Présenté via captures d'écran.",
    },
    category: { en: "Mobile · Social", fr: "Mobile · Social" },
    categoryKey: "mobile",
    year: "2025",
    technologies: ["React Native", "Expo", "Convex", "Clerk"],
    githubUrl: "https://github.com/MiantsaFanirina/Instagreen",
    previewMode: "image",
    tier: "selected",
    role: {
      en: "Solo mobile developer",
      fr: "Développeur mobile en autonomie",
    },
    images: [
      `${RAW}/Instagreen/main/assets/screenshots/feed.PNG`,
      `${RAW}/Instagreen/main/assets/screenshots/login.PNG`,
      `${RAW}/Instagreen/main/assets/screenshots/comments.PNG`,
    ],
    highlights: {
      en: [
        "Authentication and sessions via Clerk",
        "Realtime database and backend with Convex",
        "Post creation with image uploads",
        "Like and comment interactions",
        "Scrollable feed and user profiles",
      ],
      fr: [
        "Authentification et sessions via Clerk",
        "Base et backend temps réel avec Convex",
        "Création de posts avec upload d'images",
        "Interactions like et commentaires",
        "Fil d'actualité et profils utilisateurs",
      ],
    },
  },
  {
    id: "self-portfolio-v1",
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: {
      en: "The previous iteration of this portfolio, a deployed personal site.",
      fr: "L'itération précédente de ce portfolio, un site personnel déployé.",
    },
    category: { en: "Web · Archive", fr: "Web · Archive" },
    categoryKey: "web",
    year: "2025",
    technologies: ["React", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/MiantsaFanirina/portfolio",
    liveUrl: "https://miantsa-fanirina.vercel.app",
    previewMode: "iframe",
    tier: "archive",
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
  },
  {
    id: "forex-alignment",
    slug: "forex-alignment",
    title: "Forex Alignment",
    description: {
      en: "A tool to identify multi-timeframe alignment for forex trading decisions. Shown through its dashboard screenshot.",
      fr: "Un outil pour identifier l'alignement multi-timeframes dans les décisions de trading forex. Présenté via capture.",
    },
    category: { en: "Web · Experimental", fr: "Web · Expérimental" },
    categoryKey: "experimental",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/MiantsaFanirina/forex-alignment",
    liveUrl: "https://forex-alignment.vercel.app",
    previewMode: "iframe",
    tier: "archive",
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
    images: [`${RAW}/forex-alignment/main/public/screenshot.png`],
  },
  {
    id: "java-moba",
    slug: "java-2d-game-demo",
    title: "Java 2D MOBA Engine",
    description: {
      en: "A 2D MOBA game engine written in pure Java.",
      fr: "Un moteur de jeu MOBA 2D écrit en Java pur.",
    },
    category: { en: "Open Source · Game", fr: "Open Source · Jeu" },
    categoryKey: "opensource",
    year: "2026",
    technologies: ["Java"],
    githubUrl: "https://github.com/MiantsaFanirina/java-2d-game-demo",
    previewMode: "github",
    tier: "archive",
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
  },
  {
    id: "bleddm",
    slug: "bleddm-led-controller",
    title: "GLK-BLEDDM LED Controller",
    description: {
      en: "A GUI to control the GLK-BLEDDM LED strip.",
      fr: "Une interface graphique pour piloter le ruban LED GLK-BLEDDM.",
    },
    category: { en: "Open Source · Hardware", fr: "Open Source · Hardware" },
    categoryKey: "opensource",
    year: "2025",
    technologies: ["Python"],
    githubUrl: "https://github.com/MiantsaFanirina/clk-bleddm-led-model-controller",
    previewMode: "github",
    tier: "archive",
    role: {
      en: "Solo developer",
      fr: "Développeur en autonomie",
    },
  },
  {
    id: "moba-backup",
    slug: "moba-backup",
    title: "MOBA Backup",
    description: {
      en: "A backup and reference build of the MOBA engine work.",
      fr: "Une sauvegarde et référence du travail sur le moteur MOBA.",
    },
    category: { en: "Open Source · Game", fr: "Open Source · Jeu" },
    categoryKey: "opensource",
    year: "2026",
    technologies: ["Java"],
    githubUrl: "https://github.com/MiantsaFanirina/moba_backup",
    previewMode: "github",
    tier: "archive",
  },
  {
    id: "mp3-refactor",
    slug: "mp3-metadata-maker",
    title: "MP3 Metadata Maker",
    description: {
      en: "A utility to refactor and write MP3 metadata.",
      fr: "Un utilitaire pour réorganiser et écrire les métadonnées MP3.",
    },
    category: { en: "Open Source · Tool", fr: "Open Source · Outil" },
    categoryKey: "opensource",
    year: "2025",
    technologies: ["Python"],
    githubUrl: "https://github.com/MiantsaFanirina/mp3-refactor-and-metadata-maker",
    previewMode: "github",
    tier: "archive",
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAdjacent = (slug: string) => {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  return { prev, next };
};
