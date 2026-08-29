import "./ProjectArchive.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { projects, type Project } from "../../data/projects";
import { ProjectPreview } from "../ProjectPreview/ProjectPreview";
import { EASE } from "../../animations/motionVariants";

export function ProjectArchive() {
  const { t, lang } = useLanguage();
  const [hovered, setHovered] = useState<Project | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const sorted = [...projects].sort((a, b) => b.year.localeCompare(a.year));

  const onMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="archive section" id="archive" onMouseMove={onMove}>
      <div className="container">
        <div className="section-head">
          <span className="section-head__index">08 - {t.archive.label}</span>
          <h2 className="section-head__title">{t.archive.title}</h2>
          <span className="section-head__meta">{t.archive.meta}</span>
        </div>

        <p className="archive__hint t-mono">{t.archive.hint}</p>

        <ul className="archive__list">
          {sorted.map((p, i) => (
            <li key={p.id} className="archive__row">
              <Link
                to={`/work/${p.slug}`}
                className="archive__link"
                data-cursor="VIEW"
                onMouseEnter={() => setHovered(p)}
                onMouseLeave={() => setHovered((h) => (h?.id === p.id ? null : h))}
              >
                <span className="archive__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="archive__title">{p.title}</span>
                <span className="archive__cat">{p.category[lang]}</span>
                <span className="archive__tech">
                  {p.technologies.slice(0, 3).join(" · ")}
                </span>
                <span className="archive__year">{p.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="archive__preview"
            style={{
              left: Math.min(pos.x + 24, window.innerWidth - 380),
              top: Math.min(pos.y - 120, window.innerHeight - 260),
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: EASE.out }}
            aria-hidden="true"
          >
            <ProjectPreview project={hovered} variant="card" eager />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
