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
            <h1 className={styles.h1}>Not sure which service your business needs? Start here.</h1>
            <p className={styles.lead}>
              Virtual office, registered office, and director&apos;s service address can sound similar. This page helps
              you pick the right option in under a minute.
            </p>
            <div className={styles.trustBar}>
              <p className={styles.trustItem}>10,000+ businesses served</p>
              <p className={styles.trustItem}>Companies House compliant setup</p>
              <p className={styles.trustItem}>No setup fees or fixed contracts</p>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Compare all plans
              </Link>
            </div>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className="container" style={{ marginBottom: "1rem" }}>
            <h2 className={styles.h2}>Which service is right for me?</h2>
          </div>
          <div className={`container ${styles.grid2}`}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>🏢 I want a professional address for my brand presence</h3>
              <p className={styles.cardText}>
                Use one commercial address across your website, email signatures, and client communication, with digital
                mail handling included.
              </p>
              <ul className={styles.list}>
                <li>Best for freelancers, startups, and remote teams</li>
                <li>Professional address plus business mail handling</li>
                <li>Meeting room access when needed</li>
              </ul>
              <Link className={styles.cardLink} href="/virtual-office">
                Start your virtual office →
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>📋 I need a Companies House registered office</h3>
              <p className={styles.cardText}>
                Meet your legal company requirement with a compliant registered office address and keep your home
                details private.
              </p>
              <ul className={styles.list}>
                <li>Official HMRC and Companies House correspondence cover</li>
                <li>Best for limited companies and LLPs</li>
                <li>Fast setup with clear filing guidance</li>
              </ul>
              <Link className={styles.cardLink} href="/registered-office-address">
                Set your registered office →
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>👔 My home address is public on Companies House</h3>
              <p className={styles.cardText}>
                Replace your personal home details on public filings with a director service address that keeps your
                privacy protected.
              </p>
              <ul className={styles.list}>
                <li>Director-level privacy on the public register</li>
                <li>Ideal for home-based directors</li>
                <li>Works alongside your registered office setup</li>
              </ul>
              <Link className={styles.cardLink} href="/directors-service-address">
                Protect my home address →
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
                Compare mail limits →
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
                    <td>Best for</td>
                    <td>Core compliance and light mail</td>
                    <td className={styles.highlightCol}>Growing businesses</td>
                    <td>High-mail operations</td>
                  </tr>
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
                Compare all plans
              </Link>
            </div>
            <p className={styles.text}>All prices + VAT. No setup fees. Cancel anytime.</p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.footerCta}`}>
            <h2 className={styles.h2}>Not sure which service fits your business?</h2>
            <p className={styles.text}>
              Tell us your setup and we&apos;ll recommend the right package in one reply. You can also check our full
              FAQ library for quick answers before ordering.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className="btn btn-dark">
                Talk to us
              </Link>
              <Link href="/faqs" className="btn btn-outline">
                Visit FAQs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
