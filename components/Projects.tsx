"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
// import { ExternalLink, Github, Smartphone, Globe, Trophy } from 'lucide-react';
// import { projects, Project } from '@/data/portfolio';

// const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const cardRef = useRef(null);
//
//     // Get scroll progress for parallax effect
//     const { scrollYProgress } = useScroll({
//         target: cardRef,
//         offset: ["start end", "end start"]
//     });
//
//     const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//     const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
//
//     const getTypeIcon = (type: Project['type']) => {
//         switch (type) {
//             case 'mobile':
//                 return <Smartphone className="w-5 h-5" />;
//             case 'web':
//                 return <Globe className="w-5 h-5" />;
//             case 'hackathon':
//                 return <Trophy className="w-5 h-5" />;
//         }
//     };
//
//     const getTypeColor = (type: Project['type']) => {
//         switch (type) {
//             case 'mobile':
//                 return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
//             case 'web':
//                 return 'text-green-400 bg-green-400/10 border-green-400/20';
//             case 'hackathon':
//                 return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
//         }
//     };
//
//     return (
//         <motion.div
//             ref={cardRef}
//             style={{ y: project.featured ? y : undefined, scale: project.featured ? scale : undefined }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className={`relative group ${project.featured ? 'lg:col-span-2' : ''}`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <motion.div
//                 className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col h-full"
//                 whileHover={{
//                     y: -10,
//                     boxShadow: "0 20px 40px rgba(0, 255, 65, 0.1)"
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//             >
//                 {/* Project Image */}
//                 <div className="relative h-1/2 overflow-hidden">
//                     <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover"
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
//
//                     {/* Project Type Badge */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: index * 0.1 + 0.3 }}
//                         className={`absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-medium ${getTypeColor(project.type)}`}
//                     >
//                         {getTypeIcon(project.type)}
//                         <span className="capitalize">{project.type}</span>
//                     </motion.div>
//
//                     {/* Hover Overlay */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: isHovered ? 1 : 0 }}
//                         className="absolute inset-0 bg-gray-900/80 flex items-center justify-center space-x-4"
//                     >
//                         {project.demoUrl && (
//                             <motion.a
//                                 href={project.demoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="p-3 bg-green-400 text-gray-900 rounded-full hover:bg-green-300 transition-colors"
//                             >
//                                 <ExternalLink className="w-5 h-5" />
//                             </motion.a>
//                         )}
//                         {project.githubUrl && (
//                             <motion.a
//                                 href={project.githubUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
//                             >
//                                 <Github className="w-5 h-5" />
//                             </motion.a>
//                         )}
//                     </motion.div>
//                 </div>
//
//                 {/* Project Content */}
//                 <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
//                     <div>
//                         <motion.h3
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ delay: index * 0.1 + 0.4 }}
//                             className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors"
//                         >
//                             {project.title}
//                         </motion.h3>
//
//                         <div className="space-y-3 mt-2">
//                             {project.description.map((desc, descIndex) => (
//                                 <motion.p
//                                     key={descIndex}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: index * 0.1 + 0.5 + descIndex * 0.1 }}
//                                     className="text-gray-400 leading-relaxed"
//                                 >
//                                     {desc}
//                                 </motion.p>
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* Technologies */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: index * 0.1 + 0.6 }}
//                         className="flex flex-wrap gap-2 mt-4"
//                     >
//                         {project.technologies.map((tech, techIndex) => (
//                             <motion.span
//                                 key={tech}
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.1 }}
//                                 whileHover={{ scale: 1.05 }}
//                                 className="px-3 py-1 bg-gray-800 border border-gray-700 text-green-400 text-sm rounded-full"
//                             >
//                                 {tech}
//                             </motion.span>
//                         ))}
//                     </motion.div>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

export default function Projects() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={ref} id="projects" className="py-20 bg-gray-950  overflow-hidden">
            {/* Animated Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 opacity-10"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,65,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,212,255,0.1),transparent_50%)]" />
            </motion.div>

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
                        className="inline-block px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-mono mb-4"
                    >
                        &lt; Projects /&gt;
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white font-mono mb-6">
                        Featured <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Work</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        From mobile apps to web platforms, here are some projects that showcase my passion for creating
                        innovative solutions with clean code and beautiful user experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                {/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">*/}
                {/*    {projects.map((project, index) => (*/}
                {/*        <ProjectCard key={project.id} project={project} index={index} />*/}
                {/*    ))}*/}
                {/*</div>*/}

                {/*/!* View More Button *!/*/}
                {/*<motion.div*/}
                {/*    initial={{ opacity: 0, y: 50 }}*/}
                {/*    whileInView={{ opacity: 1, y: 0 }}*/}
                {/*    transition={{ duration: 0.6, delay: 0.3 }}*/}
                {/*    viewport={{ once: true }}*/}
                {/*    className="text-center mt-16"*/}
                {/*>*/}
                {/*    <motion.button*/}
                {/*        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 65, 0.2)" }}*/}
                {/*        whileTap={{ scale: 0.95 }}*/}
                {/*        className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-gray-900 font-semibold rounded-lg hover:from-green-300 hover:to-blue-300 transition-all"*/}
                {/*    >*/}
                {/*        View All Projects*/}
                {/*    </motion.button>*/}
                {/*</motion.div>*/}
            </div>
        </section>
    );
}