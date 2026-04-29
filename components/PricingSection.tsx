"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./PricingSection.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

type Cycle = "monthly" | "annually";

const packages: {
  id: string;
  name: string;
  blurb: string;
  monthly: string;
  annual: string;
  highlight?: boolean;
  saveAnnual?: string;
  features: string[];
}[] = [
  {
    id: "pro",
    name: "Professional package",
    blurb: "For growing businesses that need more mail throughput and a polished presence.",
    monthly: "£12.99",
    annual: "£129.99",
    saveAnnual: "Save ~16%",
    features: [
      "Registered and director service address for Companies House, web, and marketing",
      "Unlimited digital forwarding of statutory mail",
      "Up to 5 items/month of digital and post forwarding for business mail",
    ],
  },
  {
    id: "basic",
    name: "Basic package",
    blurb: "For new businesses who want a prestigious address and a strong first impression.",
    monthly: "£9.99",
    annual: "£99.99",
    highlight: true,
    saveAnnual: "Save ~16%",
    features: [
      "Registered and director service address for Companies House, web, and marketing",
      "Unlimited digital forwarding of statutory mail",
      "Up to 2 items/month of digital forwarding for business-related mail",
    ],
  },
  {
    id: "premium",
    name: "Premium package",
    blurb: "For ambitious teams that want maximum mail handling and premium support.",
    monthly: "£39.99",
    annual: "£399.99",
    saveAnnual: "Save up to 25%",
    features: [
      "Registered and director service address for Companies House, web, and marketing",
      "Unlimited digital and post forwarding of statutory mail",
      "Up to 100 items/month of digital and post forwarding for business mail",
    ],
  },
];

export function PricingSection() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardsInView = useInView(gridRef, { amount: 0.55, margin: "-12% 0px -12% 0px" });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 961px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const cardMotion = (index: number) => {
    if (reduce || !isDesktop) {
      return {
        animate: { x: 0, opacity: 1, scale: 1, zIndex: index === 1 ? 3 : 2 },
        transition: { duration: 0.25, ease },
      };
    }

    const collapsedX = index === 0 ? 84 : index === 2 ? -84 : 0;
    const collapsedScale = index === 1 ? 1.03 : 0.92;
    const collapsedOpacity = index === 1 ? 1 : 0.84;

    return {
      animate: cardsInView
        ? { x: 0, opacity: 1, scale: 1, zIndex: index === 1 ? 3 : 2 }
        : { x: collapsedX, opacity: collapsedOpacity, scale: collapsedScale, zIndex: index === 1 ? 3 : 1 },
      transition: {
        duration: 0.7,
        ease,
      },
    };
  };

  return (
    <motion.section
      className="section"
      id="packages"
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.12 }}
      transition={{ duration: 0.55, ease }}
    >
      <div className="container">
        <motion.div
          className={styles.intro}
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className={styles.h2}>Discover our virtual office packages</h2>
          <p className={`muted ${styles.sub}`}>
            No fixed-term contracts. No hidden setup fees. Choose monthly or annual billing — whichever
            suits your cash flow.
          </p>
          <div className={styles.trust} role="img" aria-label="Highly rated on Trustpilot">
            <span className={styles.stars} aria-hidden>
              ★★★★★
            </span>
            <span className={styles.trustText}>Excellent · Trustpilot-style rating</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.toggleRow}
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <span className={styles.toggleLabel}>Pay monthly</span>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setCycle((c) => (c === "monthly" ? "annually" : "monthly"))}
            aria-pressed={cycle === "annually"}
            aria-label={`Billing: ${cycle === "monthly" ? "monthly" : "annually"}`}
          >
            <span className={styles.knob} data-on={cycle === "annually"} />
          </button>
          <span className={styles.toggleLabel}>Pay annually</span>
        </motion.div>

        <motion.div className={`${styles.grid} ${styles.stackGrid}`} ref={gridRef}>
          {packages.map((p, index) => {
            const motionCfg = cardMotion(index);
            return (
            <motion.article
              key={p.id}
              className={`${styles.card} ${styles.stackCard} ${index === 1 ? styles.middleCard : ""} ${p.highlight ? styles.cardHighlight : ""}`}
              initial={false}
              animate={motionCfg.animate}
              transition={motionCfg.transition}
              whileHover={reduce ? undefined : { y: -5, transition: { duration: 0.2 } }}
            >
              {cycle === "annually" && p.saveAnnual ? (
                <span className={styles.ribbon}>{p.saveAnnual}</span>
              ) : null}
              <div className={styles.cardTop}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.blurb}>{p.blurb}</p>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.from}>From</span>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{cycle === "monthly" ? p.monthly : p.annual}</span>
                  <span className={styles.period}>
                    /{cycle === "monthly" ? "month" : "year"} + VAT
                  </span>
                </div>
              </div>
              <MiniArt variant={p.id} />
              <ul className={styles.list}>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <motion.a
                href="/contact"
                className={`btn ${p.highlight ? "btn-dark" : "btn-dark"} ${styles.buy}`}
                whileTap={{ scale: 0.98 }}
              >
                Order now
              </motion.a>
            </motion.article>
          );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function MiniArt({ variant }: { variant: string }) {
  return (
    <div className={styles.miniArt} aria-hidden>
      {variant === "basic" ? (
        <svg viewBox="0 0 120 80" width="120" height="80">
          <rect x="8" y="20" width="104" height="52" rx="10" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <rect x="22" y="32" width="36" height="22" rx="6" fill="#ffd60a" />
        </svg>
      ) : variant === "pro" ? (
        <svg viewBox="0 0 120 80" width="120" height="80">
          <rect x="8" y="22" width="104" height="48" rx="10" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
          <rect x="24" y="34" width="72" height="10" rx="4" fill="#e5e7eb" />
          <rect x="24" y="50" width="48" height="10" rx="4" fill="#ffd60a" />
        </svg>
      ) : (
        <svg viewBox="0 0 120 80" width="120" height="80">
          <circle cx="60" cy="40" r="26" fill="#ffd60a" stroke="#0a0a0a" strokeWidth="2" />
          <path d="M48 40h24M60 28v24" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
