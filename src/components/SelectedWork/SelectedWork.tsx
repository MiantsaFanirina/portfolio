import "./SelectedWork.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { projects, type CategoryKey, type Project } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Reveal } from "../Reveal/Reveal";
import { EASE } from "../../animations/motionVariants";

const FILTERS: CategoryKey[] = [
  "web",
  "mobile",
  "fullstack",
  "experimental",
  "opensource",
];

export function SelectedWork() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | CategoryKey>("all");

  const base = projects.filter((p) => p.tier !== "archive");
  const featured = base.filter((p) => p.featured);
  const selected = base.filter((p) => !p.featured);
  const filtered = filter === "all" ? base : base.filter((p) => p.categoryKey === filter);

  const renderCard = (p: Project, i: number, feature = false) => (
    <Reveal key={p.id} variants={feature ? undefined : undefined}>
      <ProjectCard project={p} index={i} size={feature ? "feature" : "standard"} />
    </Reveal>
  );

  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="section-head">
          <span className="section-head__index">02 - {t.work.label}</span>
          <h2 className="section-head__title">{t.work.title}</h2>
          <span className="section-head__meta">{t.work.meta}</span>
        </div>

        <div className="work__filters" role="tablist" aria-label="project filters">
          <button
            className={`work__filter ${filter === "all" ? "is-active" : ""}`}
            onClick={() => setFilter("all")}
            role="tab"
            aria-selected={filter === "all"}
          >
            {t.filters.all}
          </button>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`work__filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >
              {t.filters[f]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="work__list"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE.out }}
          >
            {filter === "all" ? (
              <>
                <div className="work__featured">
                  {featured.map((p, i) => renderCard(p, i, true))}
                </div>
                <div className="work__grid">
                  {selected.map((p, i) => renderCard(p, i + featured.length))}
                </div>
              </>
            ) : (
              <div className="work__grid">
                {filtered.map((p, i) => renderCard(p, i))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
