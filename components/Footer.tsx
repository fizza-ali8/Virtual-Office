import { NewsletterForm } from "@/components/NewsletterForm";
import { RevealSection } from "@/components/motion/RevealSection";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <RevealSection as="footer" className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <a href="#" className={styles.logo}>
            <span className={styles.logoMark}>S</span>
            <span>Virtual Office</span>
          </a>
          <p className={styles.tagline}>Manchester virtual office — professional address, flexible mail, real support.</p>
        </div>
        <div>
          <h3 className={styles.colTitle}>Quick links</h3>
          <ul className={styles.list}>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colTitle}>Our services</h3>
          <ul className={styles.list}>
            <li>
              <a href="#packages">Virtual office</a>
            </li>
            <li>
              <a href="#services">Business services</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
          </ul>
        </div>
        <div className={styles.news}>
          <h3 className={styles.colTitle}>Newsletter</h3>
          <p className={styles.newsHint}>Product updates and compliance reminders — no spam.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Virtual office demo. Not affiliated with the live site.</p>
        <div className={styles.social} aria-label="Social links">
          <a href="#" aria-label="Instagram">
            IG
          </a>
          <a href="#" aria-label="LinkedIn">
            in
          </a>
          <a href="#" aria-label="Facebook">
            f
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
