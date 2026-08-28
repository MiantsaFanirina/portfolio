import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ProjectPreview } from "../ProjectPreview/ProjectPreview";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
  index: number;
  size?: "feature" | "standard";
}

export function ProjectCard({ project, index, size = "standard" }: Props) {
  const { lang } = useLanguage();
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className={`pc pc--${size}`} data-cursor="VIEW">
      <Link to={`/work/${project.slug}`} className="pc__link">
        <ProjectPreview project={project} variant="card" eager={size === "feature"} />

        <div className="pc__foot">
          <div className="pc__foot-main">
            <span className="pc__num">{num}</span>
            <h3 className="pc__title">{project.title}</h3>
          </div>
          <div className="pc__foot-meta">
            <span className="t-mono">
              {project.category[lang]} · {project.year}
            </span>
            <span className="pc__arrow" aria-hidden="true">
              →
            </span>
          </div>
        </div>

        <ul className="pc__tech" aria-label="technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="pc__tech-item">
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li className="pc__tech-item pc__tech-item--more">
              +{project.technologies.length - 4}
            </li>
          )}
        </ul>
      </Link>
    </article>
  );
}
