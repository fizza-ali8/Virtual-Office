"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import virtualOfficeImage from "@/media/Virtual_Office.png";
import styles from "./InfoSplit.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = { once: false, margin: "-60px", amount: 0.2 } as const;

export function InfoSplit() {
  const reduce = useReducedMotion();

  const imageMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, x: -56 },
        whileInView: { opacity: 1, x: 0 },
        viewport,
        transition: { duration: 0.6, ease },
      };

  const textMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 56 },
        whileInView: { opacity: 1, x: 0 },
        viewport,
        transition: { duration: 0.6, delay: 0.1, ease },
      };

  return (
    <section className={`section surface-cream ${styles.wrap}`} id="services">
      <div className={`container ${styles.grid}`}>
        <motion.div className={styles.visual} {...imageMotion}>
          <Image
            src={virtualOfficeImage}
            alt=""
            className={styles.photo}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={false}
          />
        </motion.div>
        <motion.div className={styles.copy} {...textMotion}>
          <h2 className={styles.h2}>Is our virtual office right for you?</h2>
          <p className="muted">
            If you are building a brand, registering a company, or simply need a credible address without
            committing to full-time space, a virtual office keeps your home address private while you stay
            flexible.
          </p>
          <p className="muted">
            The setups typically bundle a professional city-centre address with mail scanning and
            optional meeting space — ideal for freelancers, startups, and growing teams that want polish
            without overhead.
          </p>
          <a href="#packages" className={`btn btn-primary ${styles.cta}`}>
            Get started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
