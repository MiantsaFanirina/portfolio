"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";
import { skills, Skill } from "@/data/portfolio";

const SkillCard = ({
                       skill,
                       index,
                       scrollYProgress,
                   }: {
    skill: Skill;
    index: number;
    scrollYProgress: any;
}) => {
    const getCategoryColor = (category: Skill["category"]) => {
        switch (category) {
            case "frontend":
                return "from-blue-400 to-cyan-400";
            case "backend":
                return "from-green-400 to-emerald-400";
            case "mobile":
                return "from-purple-400 to-pink-400";
            case "tools":
                return "from-yellow-400 to-orange-400";
        }
    };

    const Logo = skill.logo;

    // Randomized transition duration per card between 0.1s and 0.4s
    const randomDuration = useMemo(() => 0.1 + Math.random() * 0.3, []);
    const randomDelay = useMemo(() => Math.random() * 0.2, []);

    // Random rotation between -6° and 6°
    const randomRotate = useMemo(() => (Math.random() - 0.5) * 30, []);
    // Random x movement between -10px and 10px
    const randomX = useMemo(() => (Math.random() - 0.5) * 20, []);
    // Random y movement between -10px and 10px
    const randomY = useMemo(() => (Math.random() - 0.5) * 20, []);

    // Parallax fade/scale with random rotation and x/y movement
    const start = 0.6;
    const end = 1;

    const scale = useTransform(scrollYProgress, [start, end], [1, 0.4]);
    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const rotate = useTransform(scrollYProgress, [start, end], [0, randomRotate]);
    const x = useTransform(scrollYProgress, [start, end], [0, randomX]);
    const y = useTransform(scrollYProgress, [start, end], [0, randomY]);

    return (
        <motion.div
            style={{ scale, opacity, rotate, x, y }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: randomDuration, delay: randomDelay }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="snap-center flex-shrink-0 w-[75%] md:w-full px-4 md:px-0"
        >
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        {Logo && <Logo className="text-xl text-blue-400" />}
                        <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                    </div>
                    <span className="text-gray-400 text-sm font-mono">{skill.level}%</span>
                </div>

                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative`}
                    >
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute right-0 top-0 h-full w-2 bg-white rounded-full opacity-80"
                        />
                    </motion.div>
                </div>

                <div className="mt-3">
          <span
              className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
                  skill.category
              )} text-gray-900 font-medium capitalize`}
          >
            {skill.category}
          </span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const layoutOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.6]);

    return (
        <motion.section
            ref={ref}
            id="skills"
            className="py-20 bg-gray-900 relative overflow-hidden"
            style={{ opacity: layoutOpacity }}
        >
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    
                    <div className="inline-block px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-mono mb-4">
                        &lt; Stack /&gt;
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-mono mb-6">
                        Tech{" "}
                        <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                            Stack
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit built through years of hands-on experience and continuous learning.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden md:grid">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} scrollYProgress={scrollYProgress} />
                    ))}
                </div>

                {/* Mobile Scroll Snap */}
                <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 py-4 -mx-4 px-4 scrollbar-hide">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} scrollYProgress={scrollYProgress} />
                    ))}
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

            </div>


        </motion.section>
    );
}
