import "./ProjectPreview.css";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
  variant?: "card" | "page";
  eager?: boolean;
}

function hostOf(url?: string) {
  if (!url) return "source";
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "source";
  }
}

export function ProjectPreview({ project, variant = "card", eager = false }: Props) {
  const { t } = useLanguage();
  const [active, setActive] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [imgFallback, setImgFallback] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const [imgBroken, setImgBroken] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const isMobile = project.categoryKey === "mobile";

  const isIframe = project.previewMode === "iframe" && !!project.liveUrl;
  const hasImages = project.previewMode === "image" && !!project.images?.length;
  const showImage = (hasImages && !imgBroken) || (isIframe && imgFallback && !!project.images?.length);

  /* Lazy-activate when near viewport (iframe + image modes) */
  useEffect(() => {
    if (eager || active) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active, eager]);

  const showIframe = isIframe && active && !failed && !imgFallback;

  const onIframeError = () => {
    if (project.images?.length) setImgFallback(true);
    else setFailed(true);
  };

  const inner = showIframe ? (
    <>
      {!loaded && (
        <div className="pp__loading preview-loading" aria-hidden="true">
          <span className="pp__loading-text">{t.preview.loading}</span>
          <span className="pp__loading-bar" />
        </div>
      )}
      <iframe
        className={`pp__iframe ${loaded ? "is-loaded" : ""}`}
        src={project.liveUrl}
        title={`${project.title} — ${t.preview.liveLabel}`}
        loading="lazy"
        tabIndex={loaded ? 0 : -1}
        onLoad={() => setLoaded(true)}
        onError={onIframeError}
      />
    </>
  ) : showImage ? (
    <div className="pp__gallery">
      <img
        className="pp__img"
        src={project.images?.[imgIdx]}
        alt={`${project.title} screenshot`}
        loading="lazy"
        onError={() => setImgBroken(true)}
      />
      {project.images && project.images.length > 1 && (
        <div className="pp__thumbs">
          {project.images.map((src, i) => (
            <button
              key={src}
              className={`pp__thumb ${i === imgIdx ? "is-active" : ""}`}
              onClick={() => setImgIdx(i)}
              aria-label={`Show screenshot ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="pp__fallback">
      {failed && <span className="pp__fallback-note">{t.work.unavailable}</span>}
      <span className="pp__fallback-title">{project.title}</span>
      <span className="pp__fallback-cat">{project.category.en}</span>
      <div className="pp__fallback-actions">
        {project.liveUrl && (
          <a className="pp__btn" href={project.liveUrl} target="_blank" rel="noreferrer noopener" onClick={(e) => e.stopPropagation()}>
            {t.work.openProject} ↗
          </a>
        )}
        {project.githubUrl && (
          <a className="pp__btn pp__btn--ghost" href={project.githubUrl} target="_blank" rel="noreferrer noopener" onClick={(e) => e.stopPropagation()}>
            {t.work.viewSource} ↗
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`pp pp--${variant} ${failed || (!isIframe && !showImage) ? "pp--fallback" : ""} ${
        isMobile ? "pp--mobile" : ""
      }`}
      data-parallax
    >
      {!isMobile && (
        <div className="pp__bar">
          <span className="pp__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="pp__host">
            {isIframe || showImage ? hostOf(project.liveUrl ?? project.githubUrl) : hostOf(project.githubUrl)}
          </span>
          <span className="pp__actions">
            {project.liveUrl && (
              <a
                className="pp__act"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                title={t.a11y.openNew}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="pp__act-label">{t.work.openSite}</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                className="pp__act"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                title={t.a11y.openNew}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="pp__act-label">{t.work.github}</span>
                <span aria-hidden="true">{"</>"}</span>
              </a>
            )}
          </span>
        </div>
      )}

      {isMobile ? (
        <div className="pp__phone">
          <div className="pp__phone-screen" ref={wrapRef}>
            {inner}
          </div>
        </div>
      ) : (
        <div className="pp__frame" ref={wrapRef}>
          {inner}
        </div>
      )}
    </div>
  );
}
