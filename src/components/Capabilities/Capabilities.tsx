import "./Capabilities.css";
import { useLanguage } from "../../context/LanguageContext";
import { capabilities } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";

export function Capabilities() {
  const { t, lang } = useLanguage();

  return (
    <section className="caps section" id="capabilities">
      <div className="container">
        <div className="section-head">
          <span className="section-head__index">04 — {t.capabilities.label}</span>
          <h2 className="section-head__title">{t.capabilities.title}</h2>
          <span className="section-head__meta">{t.capabilities.meta}</span>
        </div>

        <div className="caps__grid">
          {capabilities.map((group, i) => (
            <Reveal key={group.index} delay={i * 0.06}>
              <div className="caps__item">
                <span className="caps__index">{group.index}</span>
                <h3 className="caps__title">{group.title[lang]}</h3>
                <ul className="caps__list">
                  {group.items.map((item) => (
                    <li key={item} className="caps__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
