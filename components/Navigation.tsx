"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    const navItems = [
        { name: "About Me", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    // Track which section is active while scrolling
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;

                        if (window.location.hash !== `#${id}`) {
                            history.replaceState(null, "", `#${id}`);
                            setActiveSection(id);
                        }
                    }
                });
            },
            {
                threshold: 0.4, // trigger when 40% of section is visible
                rootMargin: "-80px 0px -40% 0px",
                // top margin = height of navbar (80px)
                // bottom margin = so next section becomes active before fully visible
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Handle case when page loads with a hash in the URL
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            setActiveSection(id);
        }
    }, []);

    // Handle link click (desktop + mobile)
    const handleNavClick = (href: string) => {
        const sectionId = href.replace("#", "");
        setIsMobileMenuOpen(false);

        // Update URL first
        history.replaceState(null, "", `#${sectionId}`);

        // Then update active section
        setActiveSection(sectionId);

        // Smooth scroll to section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-gray-950/95 backdrop-blur-sm border-b border-gray-800"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <span className="text-green-400 font-mono font-bold text-xl">
                            &lt;<span className="text-white">MiantsaFanirina</span>/&gt;
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                className={`transition-colors font-medium ${
                                    activeSection === item.href.replace("#", "")
                                        ? "text-green-400"
                                        : "text-gray-300 hover:text-green-400"
                                }`}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? "auto" : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-sm rounded-lg mt-2"
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : -20,
                                }}
                                transition={{ delay: index * 0.1 }}
                                className={`block w-full text-left px-4 py-2 rounded transition-all ${
                                    activeSection === item.href.replace("#", "")
                                        ? "text-green-400 bg-gray-800"
                                        : "text-gray-300 hover:text-green-400 hover:bg-gray-800"
                                }`}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
