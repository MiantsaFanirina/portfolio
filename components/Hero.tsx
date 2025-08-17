"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

type Particle = {
    left: string;
    top: string;
    xOffset: number;
    duration: number;
    delay: number;
};

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const codeLines = [
        "const developer = {",
        "  name: 'Miantsa Fanirina',",
        "  skills: ['JavaScript', 'TypeScript', 'React'],",
        "  passion: 'Building amazing things',",
        "  coffee: Infinity",
        "};",
    ];

    // --- Pre-generate particle positions only on client ---
    const [particles, setParticles] = useState<Particle[]>([]);
    useEffect(() => {
        const generated = Array.from({ length: 20 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            xOffset: Math.random() * 100 - 50,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setParticles(generated);
    }, []);

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gray-950 relative overflow-hidden"
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400 rounded-full"
                        animate={{
                            y: [0, -100, 0],
                            x: [0, p.xOffset, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                        style={{
                            left: p.left,
                            top: p.top,
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 min-h-screen flex items-center"
            >
                <div className="container mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center space-x-2 text-green-400"
                                >
                  <span className="text-sm font-mono">
                    Hello World! I&apos;m
                  </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-bold text-white font-mono"
                                >
                                    {profile.name}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xl md:text-2xl text-blue-400 font-mono"
                                >
                                    {profile.title}
                                </motion.p>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-300 text-lg leading-relaxed"
                            >
                                {profile.bio}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center space-x-2 text-gray-400"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>{profile.location}</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex space-x-6"
                            >
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Email</span>
                                </a>
                                <a
                                    href={`https://github.com/${profile.github}`}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={`https://linkedin.com/in/${profile.linkedin}`}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span>LinkedIn</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-2xl">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-400 text-sm ml-4">
                    developer.js
                  </span>
                                </div>

                                <div className="font-mono text-sm space-y-2">
                                    {codeLines.map((line, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.9 + index * 0.2 }}
                                            className="text-gray-300"
                                        >
                      <span className="text-gray-500 mr-4">
                        {index + 1}
                      </span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: line
                                                        .replace(
                                                            /'([^']*)'/g,
                                                            "<span class='text-green-400'>'$1'</span>"
                                                        )
                                                        .replace(
                                                            /(\w+):/g,
                                                            "<span class='text-blue-400'>$1</span>:"
                                                        )
                                                        .replace(
                                                            /(const|let|var)/g,
                                                            "<span class='text-purple-400'>$1</span>"
                                                        )
                                                        .replace(
                                                            /Infinity/g,
                                                            "<span class='text-yellow-400'>Infinity</span>"
                                                        ),
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Avatar */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-4 border-green-400 overflow-hidden shadow-lg shadow-green-400/25"
                            >
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-green-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
