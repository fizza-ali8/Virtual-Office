import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Director's Service Address from £9.99 + VAT",
};

const faqs = [
  [
    "What appears publicly on Companies House for directors?",
    "Your service address appears publicly for correspondence, so using a home address is a privacy risk.",
  ],
  [
    "Can I use a different service address from the registered office?",
    "Yes. They can be different addresses, although many companies use one provider for both.",
  ],
  [
    "I am a director of multiple companies. Can I use one service address?",
    "Yes, the same service address can be used across multiple appointments, subject to setup details.",
  ],
  [
    "My home address is already listed publicly. Can I change it?",
    "Yes. We guide you through filing updates so future correspondence uses your service address.",
  ],
  [
    "Does this remove my address from credit agencies too?",
    "It protects your Companies House service address listing, but other datasets may have separate update rules.",
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
            <h1 className={styles.h1}>As a UK director, your correspondence address is public. Do not let it be your home.</h1>
            <p className={styles.lead}>
              Replace your public director listing with a compliant service address and protect your personal privacy
              from day one.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>Public record protection</span>
              <span className={styles.chip}>Companies House compliant</span>
              <span className={styles.chip}>Fast switch support</span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Protect my home address
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Speak to a specialist
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>What is a director&apos;s service address?</h2>
            <p className={styles.text}>
              A director&apos;s service address is the official correspondence address shown for you personally on the
              Companies House public record. It is separate from your company&apos;s registered office.
            </p>
            <p className={styles.text}>
              If you use your home address here, anyone searching your director profile can view it. A service address
              replaces that with a professional location.
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>Why this matters for privacy</h2>
            <div className={styles.grid3}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🔎 Publicly searchable</h3>
                <p className={styles.cardText}>Director details can be found quickly through standard public lookups.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🏠 Home exposure risk</h3>
                <p className={styles.cardText}>Using your home can lead to unwanted mail and avoidable privacy issues.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>✅ Easy to fix</h3>
                <p className={styles.cardText}>Switching to a compliant service address is straightforward and fast.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className="container">
            <h2 className={styles.h2}>Registered office vs director&apos;s service address</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Requirement</th>
                    <th>Registered office address</th>
                    <th className={styles.highlightCol}>Director&apos;s service address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Whose address is it?</td>
                    <td>The company&apos;s official address</td>
                    <td className={styles.highlightCol}>The director&apos;s personal correspondence listing</td>
                  </tr>
                  <tr>
                    <td>Where does it appear?</td>
                    <td>Company profile on Companies House</td>
                    <td className={styles.highlightCol}>Director profile on public filings</td>
                  </tr>
                  <tr>
                    <td>Can they be the same location?</td>
                    <td>Yes</td>
                    <td className={styles.highlightCol}>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Who is this for?</h2>
            <div className={styles.grid4}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>New directors</h3>
                <p className={styles.cardText}>Set it correctly from day one and avoid exposing your home details.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Existing directors</h3>
                <p className={styles.cardText}>Switch from a home listing to a service address as soon as possible.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Multi-company directors</h3>
                <p className={styles.cardText}>Use one consistent correspondence address across appointments.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Home-based founders</h3>
                <p className={styles.cardText}>Keep personal and business identity cleanly separated.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.focusCard}`}>
            <h2 className={styles.h2}>Director&apos;s Service Address</h2>
            <p className={styles.focusPrice}>From £9.99/month + VAT</p>
            <p className={styles.text}>
              All core plans include registered office and director&apos;s service address coverage. Mail volume limits
              vary by plan.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Protect my home address
              </Link>
              <Link href="/services" className="btn btn-outline">
                Compare all plan differences
              </Link>
            </div>
          </div>
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
              Already protecting your director listing? Make sure your company registered office is fully compliant too.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Protect my home address
              </Link>
              <Link href="/registered-office-address" className="btn btn-outline">
                Set registered office
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
