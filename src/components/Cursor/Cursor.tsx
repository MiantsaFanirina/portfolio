import "./Cursor.css";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

export function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [link, setLink] = useState(false);
  const [overIframe, setOverIframe] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const interactiveSel = 'a, button, [role="button"], [data-cursor]';
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.(interactiveSel) as
        | HTMLElement
        | null;
      if (!el) {
        setLabel(null);
        setLink(false);
        return;
      }
      const raw = el.getAttribute("data-cursor");
      const text = raw ? raw.toUpperCase() : null;
      const isViewOpen = text === "VIEW" || text === "OPEN";
      const isInteractive = !!el.matches?.('a, button, [role="button"]');
      if (isInteractive && !isViewOpen) {
        setLink(true);
        setLabel(text);
      } else if (text) {
        setLink(false);
        setLabel(text);
      } else {
        setLink(false);
        setLabel(null);
      }
    };
    const over = (e: MouseEvent) => {
      if (e.target instanceof HTMLIFrameElement) setOverIframe(true);
    };
    const out = (e: MouseEvent) => {
      if (e.target instanceof HTMLIFrameElement) setOverIframe(false);
    };
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseout", out, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.body.classList.remove("has-cursor");
    };
  }, [reduced, x, y, setEnabled]);

  if (!enabled || overIframe) return null;

  const isLabel = !!label && !link;

  return (
    <motion.div
      className={`cursor ${link ? "is-link" : ""} ${
        isLabel ? "is-active" : ""
      } ${label ? "has-label" : ""}`}
      style={{ x, y }}
      aria-hidden="true"
    >
      <span className="cursor__dot" />
      <span className="cursor__ring" />
      <span className="cursor__label">{label}</span>
    </motion.div>
  );
}
