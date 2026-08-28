import "./Github.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";

interface GhRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
}

const CACHE_KEY = "gh-repos-cache-v1";

function showcasedSlugs() {
  return new Set(
    projects
      .map((p) => p.githubUrl?.split("/").pop()?.toLowerCase())
      .filter(Boolean) as string[],
  );
}

export function Github() {
  const { t, lang } = useLanguage();
  const [repos, setRepos] = useState<GhRepo[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as GhRepo[];
        if (parsed.length) {
          setRepos(parsed);
          return;
        }
      } catch {
        /* ignore */
      }
    }
    fetch(
      `https://api.github.com/users/${profile.githubHandle}/repos?per_page=100&sort=updated&type=public`,
    )
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((data: GhRepo[]) => {
        if (cancelled) return;
        const shown = data
          .filter((r) => !r.fork && !showcasedSlugs().has(r.name.toLowerCase()))
          .sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at));
        setRepos(shown);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(shown));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        /* keep curated fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const curated = projects.filter((p) => p.githubUrl);
  const list = repos ?? curated;

  const items = list.map((item) => {
    if (repos) {
      const r = item as GhRepo;
      const meta = [r.language, r.stargazers_count ? `★ ${r.stargazers_count}` : null]
        .filter(Boolean)
        .join("  ·  ");
      return {
        key: r.id,
        name: r.name,
        meta,
        title: r.description || r.language || t.github.meta,
        url: r.html_url,
      };
    }
    const p = item as (typeof curated)[number];
    return {
      key: p.id,
      name: p.title,
      meta: p.technologies.slice(0, 3).join(" · "),
      title: p.description[lang],
      url: p.githubUrl as string,
    };
  });

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
          {items.map((it, i) => (
            <Reveal key={it.key} delay={i * 0.03}>
              <li className="gh__row">
                <a
                  className="gh__link"
                  href={it.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="OPEN"
                  title={it.title}
                >
                  <span className="gh__name">
                    <span className="gh__num">{String(i + 1).padStart(2, "0")}</span>
                    {it.name}
                  </span>
                  <span className="gh__tech">{it.meta}</span>
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
