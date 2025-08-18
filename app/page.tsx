import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
    return (
        <main className="bg-gray-950">
            <Navigation />
            <div id="home">
                <Hero />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </main>
    );
}