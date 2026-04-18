"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Mail, MapPin, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./FeatureGrid.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const items: {
  n: string;
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    n: "01",
    title: "An all-in-one professional business address",
    body: "Add credibility with a registered and director service address you can use on letterhead, email footers, your website, and Companies House.",
    Icon: MapPin,
  },
  {
    n: "02",
    title: "Efficient and convenient mail handling",
    body: "Mail is scanned and forwarded digitally so you stay notified wherever you work — fewer missed documents, fewer surprises.",
    Icon: Mail,
  },
  {
    n: "03",
    title: "Top-notch meeting rooms",
    body: "Book professional spaces when you need face-time with clients — fast Wi‑Fi, comfortable layouts, and a polished arrival experience.",
    Icon: Building2,
  },
  {
    n: "04",
    title: "Access to business add-ons",
    body: "From call answering to local numbers and referrals to trusted partners, support can scale with you as your needs grow.",
    Icon: Sparkles,
  },
];

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease },
  },
};

export function FeatureGrid() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className={`section ${styles.section}`}
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.12 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className={`container ${styles.inner}`}>
        <header className={styles.intro}>
          <motion.h2
            className={styles.h2}
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            What else do you get from our{" "}
            <span className={styles.h2Accent}>virtual office</span>?
          </motion.h2>
          <div className={styles.titleRule} aria-hidden />
          <motion.p
            className={styles.sub}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: 0.05 }}
          >
            For a low monthly or annual fee, you unlock essentials that read as enterprise-grade.
          </motion.p>
        </header>
        <motion.div
          className={styles.grid}
          variants={reduce ? undefined : grid}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((item) => {
            const { Icon } = item;
            return (
              <motion.article key={item.n} className={styles.card} variants={reduce ? undefined : card}>
                <div className={styles.cardHead}>
                  <div className={styles.iconWrap} aria-hidden>
                    <Icon className={styles.iconSvg} strokeWidth={2} />
                  </div>
                  <span className={styles.num}>{item.n}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.body}>{item.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
