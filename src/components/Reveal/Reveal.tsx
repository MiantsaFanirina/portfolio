import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../../animations/motionVariants";
import { viewportOnce } from "../../animations/pageTransitions";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variants?: typeof fadeUp;
}

export function Reveal({
  children,
  delay = 0,
  className,
  variants = fadeUp,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
