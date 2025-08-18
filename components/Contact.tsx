"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import {ChangeEvent, FormEvent, useRef, useState} from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';

export default function Contact() {
    const ref = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section ref={ref} className="py-20 bg-gray-950 relative overflow-hidden">
            {/* Background Effects */}
            <motion.div
                style={{ y }}
                className="absolute inset-0"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
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
                            contact()
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white font-mono mb-6">
                            Let&apos;s <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Connect</span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Have a project in mind or just want to chat about technology?
                            I&apos;d love to hear from you. Drop me a message and let&apos;s build something amazing together.
                        </p>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="space-y-2"
                                >
                                    <label className="flex items-center space-x-2 text-gray-300 font-medium">
                                        <User className="w-4 h-4" />
                                        <span>Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                                        placeholder="Your name"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-2"
                                >
                                    <label className="flex items-center space-x-2 text-gray-300 font-medium">
                                        <Mail className="w-4 h-4" />
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-2"
                            >
                                <label className="flex items-center space-x-2 text-gray-300 font-medium">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                                    placeholder="Tell me about your project or just say hello..."
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 30px rgba(0, 255, 65, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-4 bg-gray-950/95 text-gray-100 font-semibold rounded-lg hover:text-green-300 transition-all flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Alternative Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-400 mb-4">Or reach out directly</p>
                        <motion.a
                            href="mailto:MiantsaFanirinaRakotondrafara@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm md:text-lg"
                        >
                            <Mail className="w-5 h-5" />
                            <span>MiantsaFanirinaRakotondrafara@gmail.com</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}