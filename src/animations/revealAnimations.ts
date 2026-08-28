import type { Variants } from "framer-motion";
import { EASE } from "./motionVariants";

/* Reusable scroll-reveal variants for editorial sections. */

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE.out },
  },
};

export const revealClip: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.4 },
  show: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: EASE.expo },
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE.out },
  },
};

/* Metadata row that slides in from the side */
export const revealRow: Variants = {
  hidden: { opacity: 0, x: -18 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE.out },
  },
};
