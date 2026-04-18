"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./ProcessSteps.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: 1,
    title: "Select a package",
    caption: "Pick monthly or annual billing and the tier that matches your mail volume.",
  },
  {
    n: 2,
    title: "Complete onboarding",
    caption: "Share the details we need to register your address and verify your business.",
  },
  {
    n: 3,
    title: "Start using your address",
    caption: "Add your new address to Companies House, your site, and client-facing materials.",
  },
  {
    n: 4,
    title: "Manage mail digitally",
    caption: "Receive scans, request forwards, and book space when you need to meet in person.",
  },
];

const row = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const stepV = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export function ProcessSteps() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="section"
      id="process"
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="container">
        <motion.div
          className={styles.intro}
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <h2 className={styles.h2}>The step-by-step onboarding process</h2>
          <p className={`muted ${styles.lead}`}>
            A simple, quick framework you can complete online — built for founders who would rather spend
            time shipping than on paperwork.
          </p>
        </motion.div>
        <motion.div
          className={styles.row}
          variants={reduce ? undefined : row}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
        >
          {steps.map((s) => (
            <motion.div key={s.n} className={styles.step} variants={reduce ? undefined : stepV}>
              <motion.div
                className={styles.badge}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
              >
                {s.n}
              </motion.div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.caption}>{s.caption}</p>
              <StepArt index={s.n} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function StepArt({ index }: { index: number }) {
  return (
    <div className={styles.art} aria-hidden>
      {index === 1 ? (
        <svg viewBox="0 0 160 110" width="140" height="96">
          <rect x="10" y="20" width="42" height="72" rx="6" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <rect x="18" y="30" width="26" height="16" rx="3" fill="#ffd60a" />
          <rect x="18" y="52" width="26" height="4" rx="2" fill="#d1d5db" />
          <rect x="18" y="60" width="26" height="4" rx="2" fill="#d1d5db" />
          <rect x="18" y="68" width="18" height="10" rx="2" fill="#f3f4f6" stroke="#d1d5db" />

          <rect x="46" y="14" width="54" height="82" rx="7" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <rect x="57" y="26" width="32" height="18" rx="3" fill="#ffd60a" />
          <rect x="57" y="50" width="32" height="4" rx="2" fill="#d1d5db" />
          <rect x="57" y="58" width="32" height="4" rx="2" fill="#d1d5db" />
          <rect x="57" y="66" width="30" height="14" rx="3" fill="#ffd60a" opacity="0.9" />

          <rect x="94" y="20" width="42" height="72" rx="6" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <rect x="102" y="30" width="26" height="16" rx="3" fill="#ffd60a" />
          <rect x="102" y="52" width="26" height="4" rx="2" fill="#d1d5db" />
          <rect x="102" y="60" width="26" height="4" rx="2" fill="#d1d5db" />
          <rect x="102" y="68" width="18" height="10" rx="2" fill="#f3f4f6" stroke="#d1d5db" />

          <path d="M126 84l20 18" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
          <circle cx="121" cy="79" r="9" fill="none" stroke="#0a0a0a" strokeWidth="3" />
        </svg>
      ) : index === 2 ? (
        <svg viewBox="0 0 160 110" width="140" height="96">
          <rect x="20" y="20" width="120" height="80" rx="10" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <circle cx="42" cy="40" r="11" fill="#1f2937" />
          <path d="M34 53c3-7 13-7 16 0" fill="#1f2937" />
          <rect x="60" y="34" width="60" height="4" rx="2" fill="#d1d5db" />
          <rect x="60" y="42" width="72" height="4" rx="2" fill="#e5e7eb" />

          <rect x="42" y="58" width="86" height="16" rx="4" fill="#fff" stroke="#9ca3af" />
          <path d="M30 64l4 4 8-8" fill="none" stroke="#a3d233" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="42" y="80" width="86" height="16" rx="4" fill="#fff" stroke="#9ca3af" />
          <path d="M30 86l4 4 8-8" fill="none" stroke="#a3d233" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : index === 3 ? (
        <svg viewBox="0 0 160 110" width="140" height="96">
          <path d="M20 92l12-34h92l16 34z" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
          <path d="M26 92l22-24h26l-10 24z" fill="#fff" />
          <path d="M66 92l8-24h30l8 24z" fill="#fff" />
          <path d="M110 92l-10-24h22l16 24z" fill="#fff" />

          <path d="M80 18c14 0 24 10 24 23 0 18-24 34-24 34S56 59 56 41c0-13 10-23 24-23z" fill="#f26b3f" stroke="#cc4f29" strokeWidth="2" />
          <circle cx="80" cy="41" r="10" fill="#fff" />

          <circle cx="116" cy="66" r="16" fill="#a3d233" stroke="#7ea420" strokeWidth="2" />
          <path d="M108 66l6 6 10-12" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          <rect x="46" y="70" width="15" height="10" rx="3" fill="#ffd60a" />
          <circle cx="53.5" cy="75" r="2" fill="#fff" />
        </svg>
      ) : (
        <svg viewBox="0 0 160 110" width="140" height="96">
          <rect x="18" y="24" width="124" height="74" rx="9" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <rect x="18" y="24" width="124" height="16" rx="9" fill="#1f2937" />
          <circle cx="30" cy="32" r="3" fill="#ffd60a" />
          <circle cx="40" cy="32" r="3" fill="#f59e0b" />
          <circle cx="50" cy="32" r="3" fill="#6b7280" />

          <rect x="28" y="48" width="20" height="16" rx="4" fill="#ffd60a" />
          <path d="M34 56l4 3 6-6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="56" y="50" width="54" height="4" rx="2" fill="#4b5563" />
          <rect x="56" y="58" width="46" height="4" rx="2" fill="#9ca3af" />
          <circle cx="120" cy="56" r="2.5" fill="#e5e7eb" />
          <circle cx="128" cy="56" r="2.5" fill="#e5e7eb" />

          <rect x="28" y="68" width="20" height="16" rx="4" fill="#ffd60a" />
          <path d="M34 76l4 3 6-6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="56" y="70" width="54" height="4" rx="2" fill="#4b5563" />
          <rect x="56" y="78" width="46" height="4" rx="2" fill="#9ca3af" />
          <circle cx="120" cy="76" r="2.5" fill="#e5e7eb" />
          <circle cx="128" cy="76" r="2.5" fill="#e5e7eb" />

          <circle cx="138" cy="30" r="10" fill="#ffd60a" stroke="#0a0a0a" strokeWidth="2" />
          <text x="138" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0a0a0a" fontFamily="Arial, sans-serif">3</text>
        </svg>
      )}
    </div>
  );
}
