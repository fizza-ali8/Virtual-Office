import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PricingSection } from "@/components/PricingSection";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Director's Service Address from £9.99 + VAT",
};

const faqs = [
  [
    "What is a director's service address?",
    "It is the public correspondence address for company directors on Companies House records.",
  ],
  [
    "Can I use Bartle House for multiple directors?",
    "Yes. One company can register multiple directors using this service address.",
  ],
  [
    "Will this keep my home address private?",
    "Yes. Using a service address keeps your residential address off the public register in normal cases.",
  ],
  [
    "Is it Companies House compliant?",
    "Yes, this address is suitable for Companies House filings and official correspondence.",
  ],
  [
    "How quickly can I switch to this address?",
    "Most updates are completed shortly after verification and filing submission.",
  ],
];

export default function DirectorsServiceAddressPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Director service address</p>
            <h1 className={styles.h1}>Director&apos;s Service Address from £9.99 + VAT</h1>
            <p className={styles.lead}>
              UK directors must list a personal correspondence address on public record. Use Bartle House instead and
              keep your home address private.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>Public record privacy</span>
              <span className={styles.chip}>Companies House compliant</span>
              <span className={styles.chip}>From £9.99 + VAT</span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                View plans
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>Why use a director&apos;s service address?</h2>
            <p className={styles.text}>
              Directors are required to provide an address for public listing. If you use your home address, it can be
              searched and shared publicly.
            </p>
            <p className={styles.text}>
              Our Bartle House address gives you a compliant, credible business address while preserving personal
              privacy.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Choose your plan</h2>
          </div>
          <PricingSection />
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className="container">
            <h2 className={styles.h2}>Director&apos;s service address FAQs</h2>
            <div className={styles.faqGrid}>
              {faqs.map(([q, a]) => (
                <details className={styles.faqItem} key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.footerCta}`}>
            <h2 className={styles.h2}>Keep your home address private from day one</h2>
            <p className={styles.text}>
              Switch to a compliant service address and keep your director details professional.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Choose a plan
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Speak to our team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
