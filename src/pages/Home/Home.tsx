import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { Statement } from "../../components/Statement/Statement";
import { SelectedWork } from "../../components/SelectedWork/SelectedWork";
import { Capabilities } from "../../components/Capabilities/Capabilities";
import { About } from "../../components/About/About";
import { Experience } from "../../components/Experience/Experience";
import { Github } from "../../components/Github/Github";
import { ProjectArchive } from "../../components/ProjectArchive/ProjectArchive";
import { Contact } from "../../components/Contact/Contact";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Statement />
      <SelectedWork />
      <Capabilities />
      <About />
      <Experience />
      <Github />
      <ProjectArchive />
      <Contact />
      <Footer />
    </main>
  );
}
