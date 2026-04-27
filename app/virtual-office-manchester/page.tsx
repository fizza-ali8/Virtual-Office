import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoSplit } from "@/components/InfoSplit";
import { LocationSection } from "@/components/LocationSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Virtual Office Address from £9.99 + VAT",
};

const quickFaqs = [
  ["How long until I can start using my address?", "Typically 1–2 business days after verification."],
  ["Can I use this address for Companies House?", "Yes, it is fully compliant as a registered office address."],
  ["Do I need to visit the office location?", "No. Everything is managed online and digitally."],
  ["Can I cancel if my business grows?", "Yes, cancel with 30 days' notice and no penalties."],
  ["Is this address used by other businesses too?", "Yes, like serviced offices, multiple businesses use this commercial address."],
];

export default function VirtualOfficeManchesterPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Virtual office address</p>
            <h1 className={styles.h1}>Virtual Office Address from £9.99 + VAT</h1>
            <p className={styles.lead}>
              Work anywhere. Impress clients. Manage mail — affordably and without compromise. Get a prestigious
              professional business address today.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>Trusted by 10,000+ businesses</span>
              <span className={styles.chip}>M2 commercial district</span>
              <span className={styles.chip}>No setup fees</span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                View packages
              </Link>
              <Link href="/#process" className="btn btn-outline">
                How it works
              </Link>
            </div>
            <p className={styles.text} style={{ marginTop: "0.85rem" }}>
              ★★★★★ Trusted by 10,000+ businesses
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>What is a virtual office?</h2>
            <p className={styles.text}>
              A virtual office gives your business a professional address at a real location without requiring a
              physical office rental.
            </p>
            <p className={styles.text}>
              With our virtual office service, Bartle House becomes your official business address. Mail is
              received, scanned, and forwarded to you digitally.
            </p>
            <p className={styles.text}>
              Need face-to-face meetings? You can book professional meeting rooms by the hour or day.
            </p>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className="container">
            <h2 className={styles.h2}>Why a professional business address?</h2>
            <div className={styles.grid3}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🏙️ UK&apos;s second city</h3>
                <p className={styles.cardText}>
                  A premium business address adds instant credibility with clients and partners.
                </p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>📍 Prestigious M2 postcode</h3>
                <p className={styles.cardText}>Oxford Court in M2 places your business in a respected commercial district.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🏛️ Real building</h3>
                <p className={styles.cardText}>
                  Bartle House is a genuine staffed commercial building with meeting spaces.
                </p>
              </article>
            </div>
          </div>
        </section>

        <LocationSection />

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h3 className={styles.h2}>Find us</h3>
            <iframe
              style={{ width: "100%", height: "420px", border: 0, borderRadius: "16px", display: "block" }}
              title="Bartle House location map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bartle%20House%20Oxford%20Court&output=embed"
            />
            <p className={styles.text} style={{ marginTop: "0.55rem" }}>
              Bartle House, Oxford Court, M2 3WQ | Tel: 0330 320 1929 | Email: contact@virtualoffice.com
            </p>
          </div>
        </section>

        <InfoSplit />

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Choose your virtual office plan</h2>
            <p className={styles.text}>
              No setup fees. No fixed contracts. Cancel any time. Pay monthly or save with annual billing.
            </p>
          </div>
          <PricingSection />
        </section>

        <ProcessSteps />

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Quick FAQs</h2>
            <div className={styles.faqGrid}>
              {quickFaqs.map(([q, a]) => (
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
            <h2 className={styles.h2}>Get your virtual office today</h2>
            <p className={styles.text}>
              Join thousands of businesses who trust us with their registered address. Plans from £9.99/month + VAT.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Start today
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Got questions?
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
