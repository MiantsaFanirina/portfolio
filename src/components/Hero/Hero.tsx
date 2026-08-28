import "./Hero.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { heroStatement, profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { EASE, lineReveal, stagger } from "../../animations/motionVariants";

export function Hero() {
  const { t, lang } = useLanguage();
  const nameLines = [profile.firstName, profile.lastName];
  const marquee = [...projects, ...projects].map((p) => p.title);

  return (
    <section className="hero" id="top" data-cursor="EXPLORE">
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {marquee.map((m, i) => (
            <span key={i} className="hero__marquee-item">
              {m}
              <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <div className="hero__inner container">
        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE.out, delay: 0.2 }}
        >
          <span className="hero__status">
            <i /> {t.hero.available}
          </span>
          <span className="t-mono">{t.hero.based}</span>
        </motion.div>

        <div className="hero__name">
          {nameLines.map((line, i) => (
            <span className="hero__name-line" key={line}>
              <motion.span
                className="hero__name-inner"
                custom={i}
                variants={lineReveal}
                initial="hidden"
                animate="show"
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="hero__role-tag">{t.hero.role}</span>
        </div>

        <div className="hero__lower">
          <motion.p
            className="hero__statement text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE.out, delay: 0.7 }}
          >
            {heroStatement[lang]}
          </motion.p>

          <motion.div
            className="hero__index"
            variants={stagger(0.08, 0.9)}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={lineReveal}>{t.hero.intro}</motion.span>
            <motion.span variants={lineReveal}>EST. 2024</motion.span>
            <motion.span variants={lineReveal}>
              {String(projects.length).padStart(2, "0")} PROJECTS
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="t-mono">{t.hero.scroll}</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
