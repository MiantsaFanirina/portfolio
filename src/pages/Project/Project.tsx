import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getAdjacent, getProject, projects } from "../../data/projects";
import { ProjectPreview } from "../../components/ProjectPreview/ProjectPreview";
import { Reveal } from "../../components/Reveal/Reveal";
import "../../pages/Project/Project.css";
import { Footer } from "../../components/Footer/Footer";
import { clipWipe } from "../../animations/pageTransitions";
import { lineReveal, stagger } from "../../animations/motionVariants";

export function Project() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Miantsa Fanirina`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", project.description.en);
    }
    window.scrollTo({ top: 0 });
  }, [project]);

  if (!project) {
    return (
      <main className="container project-missing">
        <h1 className="t-h2">Not found</h1>
        <Link to="/" className="link-underline">
          {t.work.back} →
        </Link>
      </main>
    );
  }

  const { prev, next } = getAdjacent(project.slug);
  const related = projects
    .filter((p) => p.slug !== project.slug && p.categoryKey === project.categoryKey)
    .slice(0, 2);
  while (related.length < 2) {
    const cand = projects.find(
      (p) => p.slug !== project.slug && !related.includes(p),
    );
    if (!cand) break;
    related.push(cand);
  }

  return (
    <main className="project">
      <motion.header
        className="project__hero"
        variants={clipWipe}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <Link to="/#work" className="project__back t-mono">
            ← {t.work.back}
          </Link>
          <span className="project__cat t-label">{project.category[lang]}</span>
          <motion.h1
            className="project__title"
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
          >
            {project.title.split(" ").map((word, i) => (
              <span className="project__title-line" key={i}>
                <motion.span className="project__title-word" variants={lineReveal} custom={i}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>
      </motion.header>

      <div className="container">
        <Reveal>
          <dl className="project__meta">
            <div>
              <dt className="t-label">Year</dt>
              <dd className="t-mono">{project.year}</dd>
            </div>
            <div>
              <dt className="t-label">Role</dt>
              <dd className="t-mono">{project.role?.[lang] ?? "-"}</dd>
            </div>
            <div>
              <dt className="t-label">Category</dt>
              <dd className="t-mono">{project.category[lang]}</dd>
            </div>
            <div>
              <dt className="t-label">Stack</dt>
              <dd className="t-mono">{project.technologies.join(", ")}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal>
          <p className="project__statement">{project.description[lang]}</p>
        </Reveal>

        <section className="project__preview" aria-label={t.preview.liveLabel}>
          <ProjectPreview project={project} variant="page" eager />
        </section>

        <section className="project__cols">
          <div className="project__col">
            <h2 className="project__col-title t-label">{t.work.caseStudy}</h2>
            <ul className="project__features">
              {(project.highlights?.[lang] ?? []).map((h, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <li className="project__feature">
                    <span className="project__feature-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {h}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="project__col project__col--side">
            <h2 className="project__col-title t-label">Stack</h2>
            <ul className="project__stack">
              {project.technologies.map((tech) => (
                <li key={tech} className="project__stack-item">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project__cta">
              {project.liveUrl && (
                <a
                  className="project__btn"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="OPEN"
                >
                  {t.work.openSite} ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  className="project__btn project__btn--ghost"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="OPEN"
                >
                  {t.work.github} ↗
                </a>
              )}
            </div>
          </aside>
        </section>

        {related.length > 0 && (
          <section className="project__related">
            <span className="section-head__index">{t.work.related}</span>
            <div className="project__related-grid">
              {related.map((p) => (
                <Link key={p.id} to={`/work/${p.slug}`} className="project__related-card" data-cursor="VIEW">
                  <span className="project__related-title">{p.title}</span>
                  <span className="t-mono">
                    {p.category[lang]} · {p.year}
                  </span>
                  <span className="project__related-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <nav className="project__nav" aria-label="project navigation">
        {prev && (
          <Link to={`/work/${prev.slug}`} className="project__nav-link project__nav-link--prev">
            <span className="t-mono">← {t.work.back}</span>
            <span className="project__nav-title">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link
            to={`/work/${next.slug}`}
            className="project__nav-link project__nav-link--next"
          >
            <span className="t-mono">{t.footer.top}</span>
            <span className="project__nav-title">{next.title}</span>
          </Link>
        )}
      </nav>

      <Footer />
    </main>
  );
}
