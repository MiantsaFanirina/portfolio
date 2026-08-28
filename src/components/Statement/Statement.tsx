import "./Statement.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Reveal } from "../Reveal/Reveal";
import { useParallax } from "../../animations/parallax";

export function Statement() {
  const { t } = useLanguage();
  const { ref, style } = useParallax<HTMLSpanElement>(120);

  return (
    <section className="statement section" id="statement">
      <div className="container statement__inner">
        <span className="t-label statement__label">{t.statement.label}</span>
        <Reveal>
          <p className="statement__text text-balance">
            {t.statement.body}
          </p>
        </Reveal>
        <motion.span ref={ref} style={style} className="statement__mark" aria-hidden="true">
          ✳
        </motion.span>
      </div>
    </section>
  );
}
