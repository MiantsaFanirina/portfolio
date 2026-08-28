import "./Github.css";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";

export function Github() {
  const { t } = useLanguage();
  const repos = projects.filter((p) => p.githubUrl);

  return (
    <section className="gh section" id="github">
      <div className="container">
        <div className="section-head">
          <span className="section-head__index">07 — {t.github.label}</span>
          <h2 className="section-head__title">{t.github.title}</h2>
          <a
            className="section-head__meta link-underline"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t.github.view} ↗
          </a>
        </div>

        <p className="gh__subtitle t-mono">{t.github.subtitle}</p>

        <ul className="gh__list">
          {repos.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.03}>
              <li className="gh__row">
                <a
                  className="gh__link"
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="OPEN"
                >
                  <span className="gh__name">
                    <span className="gh__num">{String(i + 1).padStart(2, "0")}</span>
                    {p.title}
                  </span>
                  <span className="gh__tech">
                    {p.technologies.slice(0, 3).join(" · ")}
                  </span>
                  <span className="gh__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
