"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, Project } from '@/data/portfolio';

const TypeBadge = ({ type }: { type: Project['type'] }) => {
    const getTypeIcon = (t: Project['type']) => {
        switch (t) {
            case 'mobile':
                return <Smartphone className="w-4 h-4" />;
            case 'web':
                return <Globe className="w-4 h-4" />;
            case 'hackathon':
                return <Trophy className="w-4 h-4" />;
        }
    };
    const getTypeColor = (t: Project['type']) => {
        switch (t) {
            case 'mobile':
                return 'text-blue-300 bg-blue-400/10 border-blue-400/20';
            case 'web':
                return 'text-green-300 bg-green-400/10 border-green-400/20';
            case 'hackathon':
                return 'text-yellow-300 bg-yellow-400/10 border-yellow-400/20';
        }
    };
    return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium ${getTypeColor(type)}`}>
            {getTypeIcon(type)}
            <span className="capitalize">{type}</span>
        </span>
    );
};

const ProjectSlide = ({ project, index }: { project: Project; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

    // Deterministic per-card floating parameters (avoid SSR randomness)
    const floatX = useMemo(() => ((index * 37) % 21) - 10, [index]); // -10..10 px
    const floatY = useMemo(() => ((index * 53) % 25) - 12, [index]); // -12..12 px
    const floatRotate = useMemo(() => (((index * 23) % 9) - 4) * 0.35, [index]); // ~ -1.4..1.4 deg
    const floatDuration = useMemo(() => 3.5 + ((index * 11) % 20) / 10, [index]); // 3.5..5.5s
    const floatDelay = useMemo(() => ((index * 7) % 10) / 20, [index]); // 0..0.45s

    // Responsive amplitude scaling (reduce movement on small screens)
    const [amplitudeScale, setAmplitudeScale] = useState(1);
    const [rotateScale, setRotateScale] = useState(1);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setAmplitudeScale(w < 768 ? 0.45 : w < 1024 ? 0.75 : 1);
            setRotateScale(w < 768 ? 0.35 : w < 1024 ? 0.7 : 1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, scale }}
            className="snap-center flex-shrink-0 mx-3 md:mx-4 lg:mx-6 w-[88vw] sm:w-[78vw] md:w-[68vw] lg:w-[52vw] xl:w-[46vw]"
        >
            <motion.article
                initial={{ opacity: 0.9, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{ x: [0, floatX * amplitudeScale, 0], y: [0, floatY * amplitudeScale, 0], rotate: [0, floatRotate * rotateScale, 0] }}
                transition={{ duration: floatDuration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: floatDelay }}
                className="rounded-2xl relative overflow-hidden bg-gray-950/40 ring-1 ring-white/10"
            >
                {/* Image area (no text overlay) */}
                <div className="relative h-[350px]">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.06 : 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
                    <div className="absolute top-4 left-4">
                        <TypeBadge type={project.type} />
                    </div>
                </div>

                {/* Details panel (separate from image) */}
                <div className="bg-gray-950/80 backdrop-blur px-5 py-4 md:px-6 md:py-5 flex flex-col justify-between h-auto">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl md:text-2xl font-extrabold text-white">{project.title}</h3>
                    </div>
                    <div className="mt-1 space-y-1.5 overflow-hidden">
                        {project.description.map((d, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + i * 0.05 }}
                                className="text-gray-200/90 text-xs md:text-sm leading-relaxed"
                            >
                                {d}
                            </motion.p>
                        ))}
                    </div>
                    <div className="mt-3 flex relative bottom-0 items-center justify-between gap-4">
                        <div className="hidden sm:flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((tech, i) => (
                                <span key={tech + i} className="px-2.5 py-1 rounded-full text-[11px] bg-gray-900/70 border border-white/10 text-green-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-400 text-gray-900 font-semibold hover:bg-green-300 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="text-xs md:text-sm">Live</span>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                                >
                                    <Github className="w-4 h-4" />
                                    <span className="text-xs md:text-sm">Code</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.article>
        </motion.div>
    );
};

export default function Projects() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    const { scrollXProgress } = useScroll({ container: listRef });

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;
        const update = () => {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        };
        update();
        el.addEventListener('scroll', update, { passive: true } as any);
        window.addEventListener('resize', update);
        return () => {
            el.removeEventListener('scroll', update as any);
            window.removeEventListener('resize', update);
        };
    }, []);

    const scrollBySlide = (direction: 'left' | 'right') => {
        const el = listRef.current;
        if (!el) return;
        const firstSlide = el.querySelector('article') as HTMLElement | null;
        const gapPx = 32; // gap-8
        const delta = firstSlide ? firstSlide.offsetWidth + gapPx : Math.round(el.clientWidth * 0.85);
        el.scrollBy({ left: direction === 'right' ? delta : -delta, behavior: 'smooth' });
    };

    return (
        <section ref={sectionRef} id="projects" className="py-20 md:px-30 bg-gray-950 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,65,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,212,255,0.1),transparent_50%)]" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-block px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-mono mb-4">
                        &lt; Projects /&gt;
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-mono mb-4">
                        Projects <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Overview</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Explore a curated selection of my work across platforms, with elegant interactions and thoughtful UX.
                    </p>
                </motion.div>

                {/* Horizontal Carousel (all breakpoints) */}
                <div className="relative">
                    <div
                        ref={listRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-6 -mx-8 px-8 scrollbar-hide"
                    >
                        {projects.map((project, index) => (
                            <ProjectSlide key={project.id} project={project} index={index} />
                        ))}
                    </div>
                    {/* Large screen navigation buttons */}
                    <div className="hidden lg:block">
                        <button
                            aria-label="Scroll left"
                            onClick={() => scrollBySlide('left')}
                            disabled={!canScrollLeft}
                            className={`absolute -left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur pointer-events-auto ${!canScrollLeft ? 'hidden' : ''}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            aria-label="Scroll right"
                            onClick={() => scrollBySlide('right')}
                            disabled={!canScrollRight}
                            className={`absolute -right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur pointer-events-auto ${!canScrollRight ? 'hidden' : ''}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    
                    {/* Advanced Swipe Right Hand Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="relative left-1/2 transform -translate-x-1/2 md:hidden flex items-center justify-center"
                    >
                        {/* Hand SVG */}
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            animate={{ x: [0, 24, 0], scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 10l4 4m0 0l-4 4m4-4H3"
                            />
                        </motion.svg>

                        {/* Optional subtle trail effect */}
                        <motion.div
                            className="absolute w-8 h-1 bg-green-400/50 rounded-full"
                            animate={{ x: [0, 24, 0], opacity: [0.6, 0.2, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                        />
                    </motion.div>
                    
                    {/* Progress bar */}
                    <div className="mt-6 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            style={{ scaleX: scrollXProgress, transformOrigin: '0% 50%' }}
                            className="h-full bg-gradient-to-r from-green-400 to-blue-400"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}