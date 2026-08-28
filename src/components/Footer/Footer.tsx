import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Miantsa Fanirina</span>
          <span className="footer__role t-mono">{profile.role.en}</span>
        </div>

        <button className="footer__top" onClick={toTop}>
          <span className="t-mono">{t.footer.top}</span>
          <span aria-hidden="true">↑</span>
        </button>

        <div className="footer__meta">
          <span className="t-mono">
            © {year} · {t.footer.rights}
          </span>
          <span className="t-mono">{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
