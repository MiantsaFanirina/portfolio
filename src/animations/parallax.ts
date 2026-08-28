import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Layered parallax. Returns a style-ready transform for a given element
 * relative to the viewport scroll. `distance` is in pixels (desktop feel);
 * it is auto-attenuated on mobile and disabled under reduced motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  distance = 80,
  opts?: { axis?: "y" | "x"; reverse?: boolean },
) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const axis = opts?.axis ?? "y";
  const dir = opts?.reverse ? -1 : 1;
  const mobileFactor = typeof window !== "undefined" && window.innerWidth < 768 ? 0.4 : 1;
  const amount = reduced ? 0 : distance * mobileFactor * dir;

  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const x = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return {
    ref,
    style: axis === "y" ? { y } : { x },
  };
}
