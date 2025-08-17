"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { skills, Skill } from '@/data/portfolio';

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const getCategoryColor = (category: Skill['category']) => {
        switch (category) {
            case 'frontend':
                return 'from-blue-400 to-cyan-400';
            case 'backend':
                return 'from-green-400 to-emerald-400';
            case 'mobile':
                return 'from-purple-400 to-pink-400';
            case 'tools':
                return 'from-yellow-400 to-orange-400';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
        >
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
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
          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} text-gray-900 font-medium capitalize`}>
            {skill.category}
          </span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Skills() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                style={{ rotateX }}
                className="absolute top-1/4 right-10 w-32 h-32 border border-green-400/20 rounded-full"
            />
            <motion.div
                style={{ rotateX: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
                className="absolute bottom-1/4 left-10 w-24 h-24 border border-blue-400/20 rounded-full"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-full text-blue-400 text-sm font-mono mb-4"
                    >
                        skills.map()
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white font-mono mb-6">
                        Tech <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">Stack</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit built through years of hands-on experience and continuous learning.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* Categories Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mt-12"
                >
                    {[
                        { category: 'frontend', color: 'from-blue-400 to-cyan-400', label: 'Frontend' },
                        { category: 'backend', color: 'from-green-400 to-emerald-400', label: 'Backend' },
                        { category: 'mobile', color: 'from-purple-400 to-pink-400', label: 'Mobile' },
                        { category: 'tools', color: 'from-yellow-400 to-orange-400', label: 'Tools' }
                    ].map((item, index) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-center space-x-2"
                        >
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                            <span className="text-gray-400 text-sm">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}