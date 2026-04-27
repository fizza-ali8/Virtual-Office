import { NewsletterForm } from "@/components/NewsletterForm";
import { RevealSection } from "@/components/motion/RevealSection";
import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <RevealSection as="footer" className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>V</span>
            <span>Virtual Office</span>
          </Link>
          <p className={styles.tagline}>Virtual office — professional address, flexible mail, real support.</p>
        </div>
        <div>
          <h3 className={styles.colTitle}>Quick links</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colTitle}>Our services</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/virtual-office">Virtual Office</Link>
            </li>
            <li>
              <Link href="/registered-office-address">Registered Office Address</Link>
            </li>
            <li>
              <Link href="/directors-service-address">Director&apos;s Service Address</Link>
            </li>
            <li>
              <Link href="/services">All Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colTitle}>Legal</h3>
          <ul className={styles.list}>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookie Policy</a>
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
