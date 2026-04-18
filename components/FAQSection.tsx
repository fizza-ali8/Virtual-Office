"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import styles from "./FAQSection.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

type Tab = "general" | "buy" | "after";

const faqData: Record<
  Tab,
  { q: string; a: string }[]
> = {
  general: [
    {
      q: "How can this service offer company formations for free?",
      a: "Companies House fees have risen sharply over time. The service partners with providers and earns commissions on selected services, which helps subsidise formations so starting up stays more accessible.",
    },
    {
      q: "When can my business be up and running?",
      a: "Many submissions sent before midday return the same day, though this is not guaranteed. Most applications are processed within 36 hours unless extra checks are required (for example, a company name review).",
    },
  ],
  buy: [
    {
      q: "What is included in a virtual office package?",
      a: "You receive a professional Manchester address suitable for registration and marketing, plus mail handling according to your tier — including digital forwarding limits that scale with Professional and Premium.",
    },
    {
      q: "Can I switch between monthly and annual billing?",
      a: "Billing switches are common during growth phases. Confirm the exact policy with the team at purchase — annual plans often include savings similar to those shown on this demo page.",
    },
  ],
  after: [
    {
      q: "How do I receive scanned mail?",
      a: "Mail arriving at the office is scanned and routed to your inbox through a secure workflow, so you can action items quickly even when you are remote.",
    },
    {
      q: "Can I book meeting rooms after signup?",
      a: "Yes — meeting space is designed for occasional client meetings and focused work sessions. Availability and booking details are shared once your account is active.",
    },
  ],
};

export function FAQSection() {
  const [tab, setTab] = useState<Tab>("general");
  const [open, setOpen] = useState<string | null>(faqData.general[0].q);
  const reduce = useReducedMotion();

  const items = useMemo(() => faqData[tab], [tab]);

  return (
    <motion.section
      className={`section ${styles.section}`}
      id="faq"
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.12 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="container">
        <h2 className={styles.h2}>Frequently asked questions</h2>
        <p className={`muted ${styles.sub}`}>Tap a topic, then expand a question to read the answer.</p>

        <motion.div
          className={styles.tabs}
          role="tablist"
          aria-label="FAQ categories"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.35 }}
        >
          {(
            [
              ["general", "General"],
              ["buy", "Buy virtual office"],
              ["after", "After you buy"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={`${styles.tab} ${tab === id ? styles.tabActive : ""}`}
              onClick={() => {
                setTab(id);
                setOpen(faqData[id][0]?.q ?? null);
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <div className={styles.list} role="tabpanel">
          {items.map((item) => {
            const isOpen = open === item.q;
            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.q)}
                >
                  <span>{item.q}</span>
                  <span className={styles.chevron} data-open={isOpen} aria-hidden />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    reduce ? (
                      <p key={item.q} className={styles.answer}>
                        {item.a}
                      </p>
                    ) : (
                      <motion.div
                        key={item.q}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22, ease }}
                      >
                        <p className={styles.answer}>{item.a}</p>
                      </motion.div>
                    )
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
