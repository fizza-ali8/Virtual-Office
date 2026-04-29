import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Registered Office Address from £9.99 + VAT",
};

const serviceFaqs = [
  [
    "Can I use the same address for registered office and director service address?",
    "Yes. You can use Bartle House for both, and this is how many clients set up their filings.",
  ],
  [
    "What happens if I miss a Companies House letter?",
    "Missing statutory mail can create penalties and strike-off risk, so we scan and notify quickly.",
  ],
  [
    "Can I have a registered office in this location if I operate elsewhere in the UK?",
    "Yes. Your trading location can differ, provided your registered office jurisdiction rules are met.",
  ],
  [
    "Can non-UK residents use this as a registered office?",
    "Yes, if you operate a UK company and meet required identity and compliance checks.",
  ],
  [
    "Do sole traders legally need a registered office address?",
    "No. It is a legal requirement for limited companies and LLPs, not sole traders.",
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
            <h1 className={styles.h1}>Every UK limited company needs a registered office. Make sure it is not your home.</h1>
            <p className={styles.lead}>
              Stay compliant with Companies House and keep your residential details off the public register with a
              professional registered office address.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>Companies House accepted</span>
              <span className={styles.chip}>HMRC mail support</span>
              <span className={styles.chip}>Home address privacy</span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Set your registered office
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Talk to compliance team
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>How it works for Companies House</h2>
            <p className={styles.text}>
              A registered office must be a physical UK address in the correct jurisdiction for your company. It appears
              on the public record and is used for statutory correspondence.
            </p>
            <div className={styles.grid2} style={{ marginTop: "0.8rem" }}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Legal checklist</h3>
                <ul className={styles.list}>
                  <li>Physical UK address (not a PO box only)</li>
                  <li>Correct jurisdiction for your company registration</li>
                  <li>Publicly visible on Companies House record</li>
                </ul>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>What gets sent here</h3>
                <ul className={styles.list}>
                  <li>Companies House notices</li>
                  <li>HMRC correspondence</li>
                  <li>Legal service documents</li>
                </ul>
              </article>
            </div>
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
            <h2 className={styles.h2}>Do I need a registered office address?</h2>
            <div className={styles.grid2}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Yes, if you are a limited company or LLP</h3>
                <p className={styles.cardText}>
                  UK limited companies and LLPs are legally required to keep a registered office on public record.
                </p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Optional for sole traders</h3>
                <p className={styles.cardText}>
                  Sole traders are not legally required, but many still choose a service address for privacy and brand
                  credibility.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.focusCard}`}>
            <h2 className={styles.h2}>Registered Office Address</h2>
            <p className={styles.focusPrice}>From £9.99/month + VAT</p>
            <ul className={styles.list}>
              <li>Companies House-compliant registered office address</li>
              <li>Statutory mail forwarding support</li>
              <li>Fast digital notifications for important correspondence</li>
            </ul>
            <p className={styles.text} style={{ marginTop: "0.7rem" }}>
              Need broader mail handling and brand-facing address use? Upgrade to our full virtual office package.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Set your registered office
              </Link>
              <Link href="/virtual-office" className="btn btn-outline">
                Compare with virtual office
              </Link>
            </div>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className="container">
            <h2 className={styles.h2}>What clients say about compliance setup</h2>
            <div className={styles.quoteGrid}>
              <article className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  &quot;Setup was straightforward and we had our registered office sorted before filing our first annual
                  confirmation.&quot;
                </p>
                <p className={styles.quoteMeta}>Operations Manager, eCommerce startup</p>
              </article>
              <article className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  &quot;We switched from a home address quickly and now all statutory mail is handled far more
                  professionally.&quot;
                </p>
                <p className={styles.quoteMeta}>Director, UK consulting firm</p>
              </article>
            </div>
          </div>
        </section>

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
            <p className={styles.text}>
              If you are a company director, pair this with a director&apos;s service address to protect your personal
              listing as well.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Set your registered office
              </Link>
              <Link href="/directors-service-address" className="btn btn-outline">
                I also need director privacy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
