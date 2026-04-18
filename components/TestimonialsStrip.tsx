"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./TestimonialsStrip.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

type Item = {
  id: string;
  brand: string;
  quote: string;
  name: string;
  company: string;
  tone: "blue" | "yellow" | "pink";
  initial: string;
};

const testimonials: Item[] = [
  {
    id: "1",
    brand: "Evolving Sanctuary",
    quote:
      "It was so easy working with you! I appreciated the speed and attention to detail with the assets I needed for launch.",
    name: "Max Kabanuk",
    company: "Evolving Sanctuary",
    tone: "blue",
    initial: "M",
  },
  {
    id: "2",
    brand: "Northline Studio",
    quote:
      "Clear communication, professional setup, and a virtual address that finally feels credible to our clients.",
    name: "Sarah Chen",
    company: "Northline Studio",
    tone: "yellow",
    initial: "S",
  },
  {
    id: "3",
    brand: "Bloom & Co.",
    quote:
      "Mail handling is seamless and the portal keeps everything organised — exactly what we needed as a remote team.",
    name: "James Porter",
    company: "Bloom & Co.",
    tone: "pink",
    initial: "J",
  },
  {
    id: "4",
    brand: "Atlas Foundry",
    quote:
      "We switched from a generic mailbox provider and immediately noticed better support and faster responses.",
    name: "Priya Nair",
    company: "Atlas Foundry",
    tone: "blue",
    initial: "P",
  },
  {
    id: "5",
    brand: "Fieldwork Labs",
    quote:
      "The onboarding was straightforward and the pricing is transparent — no surprises on invoices.",
    name: "Oliver Wright",
    company: "Fieldwork Labs",
    tone: "yellow",
    initial: "O",
  },
  {
    id: "6",
    brand: "Riverstone",
    quote:
      "Having a proper address without renting office space has been a game-changer for our registrations.",
    name: "Aisha Malik",
    company: "Riverstone",
    tone: "pink",
    initial: "A",
  },
];

function buildExtended(visible: number, items: Item[]) {
  const n = items.length;
  if (n === 0) return [];
  const take = Math.min(visible, n);
  const head = items.slice(-take);
  const tail = items.slice(0, take);
  const merged = [...head, ...items, ...tail];
  return merged.map((t, i) => ({
    item: t,
    key: `${t.id}__${i}`,
  }));
}

export function TestimonialsStrip() {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef(false);
  const [visible, setVisible] = useState(3);
  const [stepPx, setStepPx] = useState(0);
  const [cardWidthPx, setCardWidthPx] = useState(0);
  const [index, setIndex] = useState(3);
  const [paused, setPaused] = useState(false);
  const [instant, setInstant] = useState(false);

  const n = testimonials.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const update = () => setVisible(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const extended = useMemo(() => buildExtended(visible, testimonials), [visible]);

  const startIndex = visible;
  const endDuplicateIndex = visible + n;

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const gap = 16;
    const measure = () => {
      const w = el.offsetWidth;
      const cardW = Math.max(0, (w - (visible - 1) * gap) / visible);
      setCardWidthPx(cardW);
      setStepPx(cardW + gap);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [visible]);

  const goNext = useCallback(() => {
    setIndex((i) => i + 1);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => i - 1);
  }, []);

  useEffect(() => {
    if (reduce || paused || stepPx === 0) return;
    const id = window.setInterval(goNext, 2000);
    return () => window.clearInterval(id);
  }, [reduce, paused, stepPx, goNext]);

  const translateX = stepPx > 0 ? -index * stepPx : 0;

  const handleAnimationComplete = useCallback(() => {
    if (jumpRef.current) {
      jumpRef.current = false;
      return;
    }
    if (index === endDuplicateIndex) {
      jumpRef.current = true;
      setInstant(true);
      setIndex(startIndex);
      requestAnimationFrame(() => {
        setInstant(false);
      });
    } else if (index === 0) {
      jumpRef.current = true;
      setInstant(true);
      setIndex(n);
      requestAnimationFrame(() => {
        setInstant(false);
      });
    }
  }, [index, endDuplicateIndex, startIndex, n]);

  const transition = instant
    ? { duration: 0 }
    : reduce
      ? { duration: 0 }
      : { type: "spring" as const, stiffness: 380, damping: 38 };

  return (
    <motion.section
      className={styles.section}
      aria-labelledby="reviews-heading"
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className={`container ${styles.wrap}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden>
              💬
            </span>
            Client-first
          </p>
          <h2 id="reviews-heading" className={styles.h2}>
            Reviews that speak volumes.
          </h2>
          <p className={`muted ${styles.sub}`}>
            Don&apos;t just take our word for it — hear what people have to say about us.
          </p>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <button type="button" className={styles.navBtn} aria-label="Previous reviews" onClick={goPrev}>
            <span aria-hidden>◀</span>
          </button>

          <div className={styles.viewport} ref={viewportRef}>
            <motion.div
              className={styles.track}
              animate={{ x: translateX }}
              transition={transition}
              onAnimationComplete={handleAnimationComplete}
            >
              {extended.map(({ item: t, key }) => (
                <article
                  key={key}
                  className={`${styles.card} ${styles[`tone_${t.tone}`]}`}
                  style={
                    cardWidthPx > 0
                      ? { flex: `0 0 ${cardWidthPx}px`, width: cardWidthPx, minWidth: cardWidthPx }
                      : undefined
                  }
                >
                  <header className={styles.cardHead}>
                    <span className={styles.brandMark} aria-hidden />
                    <span className={styles.brand}>{t.brand}</span>
                  </header>
                  <blockquote className={styles.quote}>{t.quote}</blockquote>
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <footer className={styles.footer}>
                    <div className={styles.avatar} aria-hidden>
                      {t.initial}
                    </div>
                    <div>
                      <div className={styles.author}>{t.name}</div>
                      <div className={styles.company}>{t.company}</div>
                    </div>
                  </footer>
                </article>
              ))}
            </motion.div>
          </div>

          <button type="button" className={`${styles.navBtn} ${styles.navBtnRight}`} aria-label="Next reviews" onClick={goNext}>
            <span aria-hidden>▶</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
