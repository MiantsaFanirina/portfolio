import type { Variants } from "framer-motion";
import { EASE } from "./motionVariants";

/* Page-level transition for route changes (Home <-> Project) */
export const pageContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE.out, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE.inout },
  },
};

/* Clip-path wipe used on project hero transitions */
export const clipWipe: Variants = {
  initial: { clipPath: "inset(0 0 100% 0)" },
  animate: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: EASE.expo },
  },
  exit: {
    clipPath: "inset(100% 0 0 0)",
    transition: { duration: 0.5, ease: EASE.inout },
  },
};

/* Shared viewport config so sections reveal once, reliably */
export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
