"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "footer";
  delay?: number;
};

export function RevealSection({ children, className, id, as = "section", delay = 0 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as === "footer" ? "footer" : "section";
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  if (as === "footer") {
    return (
      <motion.footer
        className={className}
        id={id}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px", amount: 0.2 }}
        transition={{ duration: 0.5, delay, ease }}
      >
        {children}
      </motion.footer>
    );
  }

  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.section>
  );
}
