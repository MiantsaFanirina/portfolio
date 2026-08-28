import "./Experience.css";
import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";
import { revealRow } from "../../animations/revealAnimations";

export function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section className="exp section" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="section-head__index">06 — {t.experience.label}</span>
          <h2 className="section-head__title">{t.experience.title}</h2>
          <span className="section-head__meta">{t.experience.meta}</span>
        </div>

        <ul className="exp__list">
          {experience.map((item, i) => (
            <Reveal key={item.year + item.org.en} variants={revealRow} delay={i * 0.05}>
              <li className="exp__row">
                <span className="exp__year">{item.year}</span>
                <div className="exp__main">
                  <span className="exp__role">{item.role[lang]}</span>
                  <span className="exp__org">{item.org[lang]}</span>
                </div>
                {item.note && <span className="exp__note t-muted">{item.note[lang]}</span>}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
