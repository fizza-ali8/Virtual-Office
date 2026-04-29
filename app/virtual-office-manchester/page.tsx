import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoSplit } from "@/components/InfoSplit";
import { LocationSection } from "@/components/LocationSection";
import styles from "@/app/service-pages.module.css";

export const metadata: Metadata = {
  title: "Virtual Office Address from £9.99 + VAT",
};

const quickFaqs = [
  ["Can I use this as my main business address?", "Yes. You can use it on your website, invoices, and client-facing materials."],
  ["What happens if mail arrives in my personal name?", "We process both company-name and named-director mail linked to your account."],
  ["Can I upgrade my plan if my mail volume grows?", "Yes. You can move between plans as your business needs change."],
  ["Can I book meeting rooms without a long-term contract?", "Yes. Rooms are available by the hour or day, subject to availability."],
  ["Is this suitable if I work internationally?", "Yes. Many clients operate remotely and manage everything digitally."],
];

export default function VirtualOfficeManchesterPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Virtual office address</p>
            <h1 className={styles.h1}>A professional business address, digital mail handling, and real meeting rooms</h1>
            <p className={styles.lead}>
              Work from anywhere while your business looks established from day one. Use one premium address, never miss
              an important letter, and meet clients in a real office setting when needed.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>Trusted by 10,000+ businesses</span>
              <span className={styles.chip}>M2 commercial district</span>
              <span className={styles.chip}>No setup fees</span>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Start your virtual office
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
              A virtual office gives you the three things most growing businesses need: a credible business address, a
              reliable mail workflow, and flexible meeting space without paying for full-time office rent.
            </p>
            <div className={styles.grid3} style={{ marginTop: "0.85rem" }}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>📍 Address</h3>
                <p className={styles.cardText}>Use a commercial address across your brand touchpoints.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>📮 Mail</h3>
                <p className={styles.cardText}>Mail is received, logged, scanned, and forwarded digitally.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🗓️ Space</h3>
                <p className={styles.cardText}>Book meeting rooms when you need in-person client meetings.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={`section ${styles.sectionSoft}`}>
          <div className="container">
            <h2 className={styles.h2}>Why a professional business address?</h2>
            <div className={styles.grid3}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🏙️ Stronger first impression</h3>
                <p className={styles.cardText}>
                  A premium business address adds instant credibility with clients and partners.
                </p>
                <p className={styles.proof}>Proof: used on your proposals, invoices, and onboarding documents.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>📍 Better mail control</h3>
                <p className={styles.cardText}>Oxford Court in M2 places your business in a respected commercial district.</p>
                <p className={styles.proof}>Proof: scan alerts are sent within one business day.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>🏛️ Real building support</h3>
                <p className={styles.cardText}>
                  Bartle House is a genuine staffed commercial building with meeting spaces.
                </p>
                <p className={styles.proof}>Proof: you can host meetings in bookable rooms on site.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className={styles.h2}>Who uses a virtual office?</h2>
            <div className={styles.grid4}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Freelancers</h3>
                <p className={styles.cardText}>Look established without renting a private office.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Startups</h3>
                <p className={styles.cardText}>Use a business-ready address while controlling burn rate.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Remote teams</h3>
                <p className={styles.cardText}>Operate distributed while keeping one central business identity.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Overseas founders</h3>
                <p className={styles.cardText}>Build a UK presence with compliant address support.</p>
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

        <section id="process" className="section">
          <div className="container">
            <h2 className={styles.h2}>How it works</h2>
            <div className={styles.stepGrid}>
              <article className={styles.stepCard}>
                <span className={styles.stepNumber}>1</span>
                <h3 className={styles.cardTitle}>Pick your package</h3>
                <p className={styles.cardText}>Choose the plan that matches your current mail needs.</p>
              </article>
              <article className={styles.stepCard}>
                <span className={styles.stepNumber}>2</span>
                <h3 className={styles.cardTitle}>Complete verification</h3>
                <p className={styles.cardText}>Submit quick checks so your service can be activated compliantly.</p>
              </article>
              <article className={styles.stepCard}>
                <span className={styles.stepNumber}>3</span>
                <h3 className={styles.cardTitle}>Go live with your address</h3>
                <p className={styles.cardText}>Start using your business address across your public channels.</p>
              </article>
              <article className={styles.stepCard}>
                <span className={styles.stepNumber}>4</span>
                <h3 className={styles.cardTitle}>Manage mail digitally</h3>
                <p className={styles.cardText}>Receive scans, forward items, and upgrade when your volume grows.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.focusCard}`}>
            <h2 className={styles.h2}>Virtual Office package</h2>
            <p className={styles.focusPrice}>From £9.99/month + VAT</p>
            <p className={styles.text}>
              Includes a business address plus compliance-ready address support. Mail handling limits scale with your
              selected plan.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Compare plans and start
              </Link>
              <Link href="/services" className="btn btn-outline">
                See full service comparison
              </Link>
            </div>
          </div>
        </section>

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
              Plans start from £9.99/month + VAT with no setup fees. Need only compliance cover? See our standalone
              registered office service.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/#packages" className="btn btn-primary">
                Start your virtual office
              </Link>
              <Link href="/registered-office-address" className="btn btn-outline">
                Need only registered office?
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
