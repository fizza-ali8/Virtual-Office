import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Services | Virtual Office",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Services overview</p>
            <h1 className={styles.h1}>Everything your business needs to look professional</h1>
            <p className={styles.lead}>
              From a registered office address to mail handling, meeting rooms, and more — we give your business the
              professional presence it deserves from a single business address.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>No setup fees</span>
              <span className={styles.chip}>Same-day scanning</span>
              <span className={styles.chip}>30-day cancellation</span>
            </div>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className={`container ${styles.grid2}`}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>🏢 Virtual Office Address</h3>
              <p className={styles.cardText}>
                Get a real business address in a central commercial location. Use it on your website, email signatures,
                and marketing materials with digital mail forwarding built in.
              </p>
              <ul className={styles.list}>
                <li>City-centre address for daily credibility</li>
                <li>Digital mail handling included</li>
                <li>Flexible monthly or annual billing</li>
              </ul>
              <Link className={styles.cardLink} href="/virtual-office">
                Learn more →
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>📋 Registered Office Address</h3>
              <p className={styles.cardText}>
                Protect your home address and stay compliant with Companies House using a real address at Bartle
                House.
              </p>
              <ul className={styles.list}>
                <li>Accepted by Companies House and HMRC</li>
                <li>Keeps residential address private</li>
                <li>Ideal for new and growing companies</li>
              </ul>
              <Link className={styles.cardLink} href="/registered-office-address">
                Learn more →
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>👔 Director&apos;s Service Address</h3>
              <p className={styles.cardText}>
                Keep your personal residential address off the public register while staying compliant with UK company
                law.
              </p>
              <ul className={styles.list}>
                <li>Director privacy on public filings</li>
                <li>Fast switch support and onboarding</li>
                <li>Works with registered office setup</li>
              </ul>
              <Link className={styles.cardLink} href="/directors-service-address">
                Learn more →
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>📮 Mail Handling</h3>
              <p className={styles.cardText}>
                We receive, scan, and forward business mail with same-day notifications and optional physical
                forwarding for higher-tier plans.
              </p>
              <ul className={styles.list}>
                <li>Scan notifications within one business day</li>
                <li>Optional physical forwarding options</li>
                <li>Simple dashboard-friendly workflow</li>
              </ul>
              <Link className={styles.cardLink} href="/#packages">
                View plans →
              </Link>
            </article>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.panel}`}>
            <h2 className={styles.h2}>Book a meeting room at Bartle House</h2>
            <p className={styles.text}>
              When you need to meet clients face-to-face, our Bartle House meeting rooms are available by the hour or
              full day. No coworking memberships needed.
            </p>
            <ul className={styles.list}>
              <li>High-speed Wi-Fi included</li>
              <li>Presentation screens available</li>
              <li>Manned reception greets your guests</li>
              <li>Bookable by the hour or full day</li>
            </ul>
            <p className={styles.text}>Rooms from £15/hour — contact us for availability and full-day rates.</p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className="btn btn-primary">
                Contact us to book
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3 className={styles.h2}>Optional add-ons</h3>
            <div className={styles.grid3}>
              <div className={styles.card}>
                <h4>📞 Call Answering</h4>
                <p className={styles.cardText}>A UK number answered in your company name.</p>
                <Link className={styles.cardLink} href="/contact">
                  Contact us for pricing →
                </Link>
              </div>
              <div className={styles.card}>
                <h4>📱 Local Phone Number</h4>
                <p className={styles.cardText}>0161 or 0330 number options.</p>
                <Link className={styles.cardLink} href="/contact">
                  Contact us for pricing →
                </Link>
              </div>
              <div className={styles.card}>
                <h4>📦 Physical Mail Forwarding</h4>
                <p className={styles.cardText}>Available with higher plans and optional extra forwarding.</p>
                <Link className={styles.cardLink} href="/#packages">
                  Included on premium tiers →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Plan comparison</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Basic £9.99/mo</th>
                    <th className={styles.highlightCol}>Professional £12.99/mo</th>
                    <th>Premium £39.99/mo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Registered + Director&apos;s address</td>
                    <td>✅</td>
                    <td className={styles.highlightCol}>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Unlimited statutory mail forwarding</td>
                    <td>✅</td>
                    <td className={styles.highlightCol}>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Business mail items/month (digital)</td>
                    <td>Up to 2</td>
                    <td className={styles.highlightCol}>Up to 5</td>
                    <td>Up to 100</td>
                  </tr>
                  <tr>
                    <td>Physical mail forwarding</td>
                    <td>❌</td>
                    <td className={styles.highlightCol}>✅ (up to 5)</td>
                    <td>✅ (up to 100)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                View and order plans
              </Link>
            </div>
            <p className={styles.text}>All prices + VAT. No setup fees. Cancel anytime.</p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.footerCta}`}>
            <h2 className={styles.h2}>Not sure which service fits your business?</h2>
            <p className={styles.text}>Tell us your setup and we&apos;ll recommend the right package in one reply.</p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className="btn btn-dark">
                Talk to us
              </Link>
              <Link href="/#packages" className="btn btn-primary">
                View packages
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
