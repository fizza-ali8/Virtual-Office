import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FaqClient } from "@/components/faq/FaqClient";
import pageStyles from "@/app/content-pages.module.css";
import styles from "./faqs.module.css";

export const metadata: Metadata = {
  title: "FAQs | Virtual Office",
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={`${pageStyles.hero} ${styles.hero}`}>
          <div className="container">
            <h1 className={pageStyles.h1}>Frequently Asked Questions</h1>
            <p className={`${pageStyles.lead} ${styles.lead}`}>
              Everything you need to know about our virtual office service. Can&apos;t find your answer?{" "}
              <Link href="/contact">Contact us</Link> and we&apos;ll get back to you within one business day.
            </p>
            <div className={styles.divider} aria-hidden />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <FaqClient />
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.ctaPanel}`}>
            <h2 className={pageStyles.h2}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Our team is happy to help with anything not covered above. Get in touch and we&apos;ll respond within
              one business day.
            </p>
            <div className={pageStyles.ctaRow}>
              <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
