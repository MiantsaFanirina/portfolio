import "./Contact.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import { EASE, lineReveal, stagger } from "../../animations/motionVariants";

export function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      cursor: "EMAIL",
      external: false,
    },
    {
      label: t.contact.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      cursor: "OPEN",
      external: false,
    },
    {
      label: t.contact.github,
      value: `github.com/${profile.githubHandle}`,
      href: profile.github,
      cursor: "OPEN",
      external: true,
    },
    {
      label: t.contact.linkedin,
      value: "linkedin.com/in/miantsa-fanirina-b65a102b5",
      href: profile.linkedin,
      cursor: "OPEN",
      external: true,
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <span className="t-label contact__label">{t.contact.label}</span>

        <motion.h2
          className="contact__title"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.span variants={lineReveal} className="contact__line">
            {t.contact.title}
          </motion.span>
          <motion.span variants={lineReveal} className="contact__line contact__line--accent">
            {t.contact.title2}
          </motion.span>
        </motion.h2>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: EASE.out, delay: 0.3 }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              className="contact__link"
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer noopener" : undefined}
              data-cursor={l.cursor}
            >
              <span className="contact__link-label">{l.label}</span>
              <span className="contact__link-value">{l.value}</span>
              <span className="contact__link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </motion.div>

        <p className="contact__note t-muted">
          {t.contact.note}
          {profile.basedIn ? ` · ${t.contact.location} ${profile.basedIn}` : ""}
        </p>
      </div>
    </section>
  );
}
