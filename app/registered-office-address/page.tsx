import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocationSection } from "@/components/LocationSection";
import { PricingSection } from "@/components/PricingSection";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Registered Office Address from £9.99 + VAT",
};

const serviceFaqs = [
  [
    "Can I change my registered office address later?",
    "Yes, you can update it any time via Companies House WebFiling and we provide address confirmation details.",
  ],
  [
    "Will my address appear on the Companies House website?",
    "Yes. Registered office addresses are public, which is why using a professional address is recommended.",
  ],
  [
    "What happens if I receive legal documents?",
    "We prioritise and scan legal correspondence quickly, then notify you as fast as possible.",
  ],
  [
    "Can I use this address on my invoices and website?",
    "Yes. You can display this address on your website, invoices, business cards, and email footer.",
  ],
  [
    "Do I need to be physically present at the address?",
    "No. Mail is handled digitally and you only visit if you choose to use meeting rooms.",
  ],
];

export default function RegisteredOfficePage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Registered office address</p>
            <h1 className={styles.h1}>Registered Office Address from £9.99 + VAT</h1>
            <p className={styles.lead}>
              Every UK limited company must have a registered office address on public record. Protect your home
              address and boost credibility with a professional business address.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>Companies House accepted</span>
              <span className={styles.chip}>Home privacy protected</span>
              <span className={styles.chip}>No setup fees</span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                View packages
              </Link>
              <Link href="/#location" className="btn btn-outline">
                See the address
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>What is a registered office address?</h2>
            <p className={styles.text}>
              UK limited companies must provide a registered office address on Companies House. This address is
              public and used for official legal and government correspondence.
            </p>
            <p className={styles.text}>
              It must be a real UK location where important mail can be received reliably. It does not need to be
              your working location.
            </p>
            <p className={styles.text}>Most owners choose a virtual office address instead of using home details.</p>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>Why you should not use your home address</h2>
            <ul className={styles.list}>
              <li>Your home address is publicly visible on Companies House.</li>
              <li>Unwanted visitors and deliveries may arrive at your front door.</li>
              <li>Your details can be scraped for unsolicited marketing.</li>
            </ul>
            <p className={styles.text} style={{ marginTop: "0.8rem" }}>
              A registered office address at Bartle House keeps your home private and presents a professional business
              profile.
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>Why choose our registered office address service?</h2>
            <ul className={styles.list}>
              <li>Fully compliant with Companies House and HMRC</li>
              <li>Same-day scanning for official correspondence</li>
              <li>Real occupied building at Bartle House</li>
              <li>No fixed contracts and 30-day cancellation</li>
              <li>From £9.99/month + VAT</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Choose your registered office address plan</h2>
            <p className={styles.text}>No setup fees. No long-term contracts. Cancel any time.</p>
          </div>
          <PricingSection />
        </section>

        <LocationSection />

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Registered office FAQs</h2>
            <div className={styles.faqGrid}>
              {serviceFaqs.map(([q, a]) => (
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
            <h2 className={styles.h2}>Protect your privacy. Register your business address today.</h2>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Get started — view plans
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Have a question? Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
