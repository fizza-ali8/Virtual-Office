"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import styles from "./FaqClient.module.css";

type Category = "general" | "signing" | "mail" | "billing" | "companies" | "meeting";
type Tab = "all" | Category;
type QA = { q: string; a: string; category: Category };

const faqs: QA[] = [
  {
    category: "general",
    q: "What is a virtual office?",
    a: "A virtual office gives your business a professional postal address in a real city-centre building without renting office space. You can use it on Companies House, your website, email signatures, and marketing materials. Mail is received, scanned, and sent to you digitally. Meeting rooms are available whenever you need in-person client meetings.",
  },
  {
    category: "general",
    q: "Is a virtual office legal in the UK?",
    a: "Yes. Using a virtual office address as your registered office address or director's service address is fully legal under UK company law and accepted by Companies House and HMRC.",
  },
  {
    category: "general",
    q: "Is the Bartle House address a real physical building?",
    a: "Yes. Bartle House, Oxford Court, M2 3WQ is a real operational commercial building with a staffed reception and meeting rooms.",
  },
  {
    category: "general",
    q: "Who typically uses a virtual office?",
    a: "Freelancers, startups, small remote teams, overseas companies establishing a UK presence, and e-commerce businesses commonly use virtual office services.",
  },
  {
    category: "general",
    q: "How quickly can I start using my address?",
    a: "After checkout and identity verification, most accounts are activated within 1–2 business days.",
  },
  {
    category: "signing",
    q: "How do I sign up?",
    a: "Choose a package on the pricing section, click order, and complete onboarding and identity verification. Once verified, your account is activated and ready to use.",
  },
  {
    category: "signing",
    q: "What's the difference between monthly and annual billing?",
    a: "Monthly billing is flexible month-to-month. Annual billing gives a discount by charging for fewer months than you receive in service.",
  },
  {
    category: "signing",
    q: "Can I upgrade my plan later?",
    a: "Yes. You can move from Basic to Professional or Premium at any time. Billing updates immediately on monthly plans and is prorated on annual plans.",
  },
  {
    category: "signing",
    q: "Do I need to sign a long-term contract?",
    a: "No. There are no fixed-term contracts. Monthly plans can be cancelled with 30 days' notice.",
  },
  {
    category: "mail",
    q: "How does mail forwarding work?",
    a: "Mail arriving at Bartle House is received, scanned, and sent to your inbox. Professional and Premium plans can also include physical forwarding.",
  },
  {
    category: "mail",
    q: "How quickly will I be notified when mail arrives?",
    a: "We aim to scan and notify on the same day, or within one business day at the latest.",
  },
  {
    category: "mail",
    q: "What is statutory mail?",
    a: "Statutory mail is official correspondence from Companies House, HMRC, courts, and regulators. This is handled with priority.",
  },
  {
    category: "mail",
    q: "What happens to junk mail and unsolicited post?",
    a: "Obvious junk mail is recycled by default unless you request otherwise.",
  },
  {
    category: "mail",
    q: "Is my mail secure?",
    a: "Yes. Bartle House is staffed and secure, and scans are sent digitally using secure systems.",
  },
  {
    category: "billing",
    q: "Do prices include VAT?",
    a: "Prices are listed excluding VAT. Standard VAT is added at checkout and shown on invoices.",
  },
  {
    category: "billing",
    q: "What payment methods do you accept?",
    a: "Major credit/debit cards and direct debit are supported via secure payment providers.",
  },
  {
    category: "billing",
    q: "Can I cancel my subscription?",
    a: "Yes. Cancel any time with 30 days' written notice by emailing contact@virtualoffice.com.",
  },
  {
    category: "billing",
    q: "Is there a setup fee or hidden charges?",
    a: "No setup fees and no hidden charges. Optional extras are clearly listed in your dashboard.",
  },
  {
    category: "companies",
    q: "Can I use this address as my registered office address?",
    a: "Yes. Bartle House, Oxford Court, M2 3WQ is accepted by Companies House as a registered office address.",
  },
  {
    category: "companies",
    q: "Will HMRC accept this address?",
    a: "Yes. HMRC accepts virtual office addresses for business correspondence.",
  },
  {
    category: "companies",
    q: "What is a director's service address and why do I need it?",
    a: "It is the address directors place on public record. Using our service address helps keep your home address private.",
  },
  {
    category: "companies",
    q: "Can one address be used as both the registered office and director's service address?",
    a: "Yes. The same Bartle House address can be used for both.",
  },
  {
    category: "meeting",
    q: "Do I get access to meeting rooms?",
    a: "Meeting room access is available as an add-on or with selected plans depending on package terms.",
  },
  {
    category: "meeting",
    q: "How do I book a meeting room?",
    a: "Once your account is active, book through your portal or by contacting support directly.",
  },
  {
    category: "meeting",
    q: "How much does a meeting room cost?",
    a: "Typical rates start around £15/hour for smaller rooms and rise for larger boardrooms.",
  },
];

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "signing", label: "Signing Up" },
  { id: "mail", label: "Mail Handling" },
  { id: "billing", label: "Billing & Cancellation" },
  { id: "companies", label: "Companies House" },
  { id: "meeting", label: "Meeting Rooms" },
];

export function FaqClient() {
  const [tab, setTab] = useState<Tab>("all");
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  const items = useMemo(() => (tab === "all" ? faqs : faqs.filter((f) => f.category === tab)), [tab]);

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`${styles.tab} ${tab === t.id ? styles.tabActive : ""}`}
            onClick={() => {
              setTab(t.id);
              setOpen(null);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {items.map((item) => {
          const isOpen = open === item.q;
          return (
            <div className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`} key={item.q}>
              <button
                type="button"
                className={styles.faqButton}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.q)}
              >
                <p className={styles.q}>{item.q}</p>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden>
                  <span className={styles.iconGlyph} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    className={styles.answerWrap}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}
