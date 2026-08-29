import "./About.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { aboutText, profile } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";
import { useParallax } from "../../animations/parallax";

export function About() {
  const { t, lang } = useLanguage();
  const { ref, style } = useParallax<HTMLDivElement>(60);

  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__head">
          <span className="section-head__index">05 - {t.about.label}</span>
          <h2 className="section-head__title">{t.about.title}</h2>
        </div>

        <div className="about__body">
          <Reveal>
            <p className="about__text">{aboutText[lang]}</p>
          </Reveal>

          <motion.div ref={ref} style={style} className="about__side" aria-hidden="false">
            <div className="about__stat">
              <span className="about__stat-num">04</span>
              <span className="about__stat-label">{t.capabilities.label}</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">17</span>
              <span className="about__stat-label">Repositories</span>
            </div>
            <p className="about__role">{profile.role[lang]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
