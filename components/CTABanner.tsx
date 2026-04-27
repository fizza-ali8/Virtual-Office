import { RevealSection } from "@/components/motion/RevealSection";
import styles from "./CTABanner.module.css";

export function CTABanner() {
  return (
    <RevealSection className={`surface-cream ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.h2}>Need business support?</h2>
        <p className={`muted ${styles.lead}`}>
          Join a business support programme for founder essentials — formations help, compliance pointers, and
          referrals when you need specialist expertise.
        </p>
        <a href="/contact" className={`btn btn-primary ${styles.btn}`}>
          Get in touch now
        </a>
      </div>
    </RevealSection>
  );
}
