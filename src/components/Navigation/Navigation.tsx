import "./Navigation.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import { EASE } from "../../animations/motionVariants";

const SECTIONS = [
  { id: "work", key: "nav.work" },
  { id: "about", key: "nav.about" },
  { id: "experience", key: "nav.experience" },
  { id: "contact", key: "nav.contact" },
] as const;

function tPath(t: (k: string) => string, k: string) {
  const parts = k.split(".");
  let cur: any = t;
  for (const p of parts) cur = cur?.[p];
  return cur as string;
}

export function Navigation() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/#" + id);
    }
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <Link
          to="/"
          className="nav__brand"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="nav__brand-name">Miantsa Fanirina</span>
          <span className="nav__brand-mark" aria-hidden="true">
            MF
          </span>
        </Link>

        <nav className="nav__links" aria-label={t.a11y.mainNav}>
          {SECTIONS.map((s) => (
            <button key={s.id} className="nav__link" onClick={() => go(s.id)}>
              {tPath(t as any, s.key)}
            </button>
          ))}
          <a
            className="nav__link nav__link--ext"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t.nav.github} ↗
          </a>
        </nav>

        <div className="nav__tools">
          <button
            className="nav__lang"
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={t.a11y.langSwitch}
          >
            <span className={lang === "fr" ? "is-active" : ""}>FR</span>
            <span className="nav__lang-sep">/</span>
            <span className={lang === "en" ? "is-active" : ""}>EN</span>
          </button>

          <button
            className="nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            <span className={`nav__burger-box ${open ? "is-open" : ""}`}>
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE.out }}
          >
            <motion.ul
              className="nav__overlay-list"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {SECTIONS.map((s, i) => (
                <motion.li
                  key={s.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE.out } },
                  }}
                >
                  <button onClick={() => go(s.id)}>
                    <span className="nav__overlay-index">
                      0{i + 1}
                    </span>
                    {tPath(t as any, s.key)}
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE.out } },
                }}
              >
                <a href={profile.github} target="_blank" rel="noreferrer noopener">
                  <span className="nav__overlay-index">↗</span>
                  {t.nav.github}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
