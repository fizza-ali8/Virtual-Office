"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroHomeImage from "@/media/Hero_Home.png";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const copyInner = (
    <>
      <p className={styles.kicker}>Virtual office</p>
      <h1 className={styles.title}>
        Build trust and protect privacy
        <br />
        with a
        <br />
        Virtual Office
        <br />
        from <span className={styles.priceHighlight}>£9.99 + VAT</span>
      </h1>
      <p className={`muted ${styles.lead}`}>
        Work anywhere, impress clients, manage mail — affordably and without compromise.
      </p>
      <div className={styles.ctas}>
        <motion.a href="#packages" className="btn btn-primary" whileTap={{ scale: 0.98 }}>
          Start your virtual office
        </motion.a>
        <motion.a
          href="#process"
          className={`btn btn-outline ${styles.secondaryCta}`}
          whileTap={{ scale: 0.98 }}
        >
          How it works
        </motion.a>
      </div>
      <div className={styles.trustRow} aria-label="Trust signal">
        <span className={styles.trustStars} aria-hidden>
          ★★★★★
        </span>
        <span className={styles.trustText}>Trusted by 10,000+ businesses</span>
      </div>
    </>
  );

  return (
    <section className={`surface-cream ${styles.hero}`} id="virtual-office">
      <div className={`container ${styles.grid}`}>
        {reduce ? (
          <div className={styles.copy}>{copyInner}</div>
        ) : (
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.04 }}
          >
            {copyInner}
          </motion.div>
        )}

        {reduce ? (
          <div className={styles.art} aria-hidden>
            <div className={styles.artCard}>
              <Image
                src={heroHomeImage}
                alt="Virtual office dashboard illustration"
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.blob} />
          </div>
        ) : (
          <motion.div
            className={styles.art}
            aria-hidden
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.12 }}
          >
            <motion.div
              className={styles.artCard}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
            >
              <Image
                src={heroHomeImage}
                alt="Virtual office dashboard illustration"
                className={styles.heroImage}
                priority
              />
            </motion.div>
            <motion.div
              className={styles.blob}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
