import "./Cursor.css";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [overIframe, setOverIframe] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      if (el) {
        setLabel((el as HTMLElement).getAttribute("data-cursor"));
        setActive(true);
      } else {
        setLabel(null);
        setActive(false);
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
  }, [reduced, x, y]);

  if (!enabled || overIframe) return null;

  return (
    <motion.div
      className={`cursor ${active ? "is-active" : ""} ${label ? "has-label" : ""}`}
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    >
      <span className="cursor__dot" />
      <span className="cursor__ring" />
      <span className="cursor__label">{label}</span>
    </motion.div>
  );
}
