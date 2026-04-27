import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import aboutHeaderImage from "@/media/About_header.png";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Virtual Office",
};

const reasons = [
  { icon: "📬", title: "Real address", body: "Bartle House, Oxford Court, M2 3WQ is a genuine occupied commercial building." },
  { icon: "💰", title: "No hidden fees", body: "No setup charges, no surprise invoices, and transparent package pricing." },
  { icon: "📧", title: "Same-day mail scanning", body: "Mail received at Bartle House is scanned and sent to you the same business day." },
  { icon: "📜", title: "Companies House compliant", body: "Fully accepted by Companies House and HMRC for company registrations." },
  { icon: "🔒", title: "Your privacy protected", body: "Keep your home details off public records by using a service address." },
  { icon: "❌", title: "No fixed contracts", body: "Cancel with 30 days' notice, no lock-in, and no penalty clauses." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>About us</p>
              <h1 className={styles.h1}>
                We help businesses look <span className={styles.accent}>credible</span> from day one
              </h1>
              <p className={styles.lead}>
                We&apos;re a virtual office provider with one mission: to give small businesses and
                startups the professional address they deserve — without the overhead of renting real office space.
              </p>
              <div className={styles.pillRow}>
                <span className={styles.pill}>10,000+ businesses served</span>
                <span className={styles.pill}>Est. 2015</span>
                <span className={styles.pill}>Professional business district</span>
                <span className={styles.pill}>Same-day mail scanning</span>
              </div>
            </div>
            <div className={styles.heroVisual} aria-hidden>
              <Image
                src={aboutHeaderImage}
                alt=""
                className={styles.heroImage}
                sizes="(max-width: 980px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTop}`}>
          <div className={`container ${styles.stats}`}>
            <article className={styles.stat}>
              <h3 className={styles.statValue}>10k+</h3>
              <p className={styles.statLabel}>Businesses served</p>
            </article>
            <article className={styles.stat}>
              <h3 className={styles.statValue}>Est. &apos;15</h3>
              <p className={styles.statLabel}>Trading for a decade</p>
            </article>
            <article className={styles.stat}>
              <h3 className={styles.statValue}>Same-day</h3>
              <p className={styles.statLabel}>Mail scanning guarantee</p>
            </article>
            <article className={styles.stat}>
              <h3 className={styles.statValue}>99%</h3>
              <p className={styles.statLabel}>Client satisfaction</p>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionSoft}`}>
          <div className={`container ${styles.storyGrid}`}>
            <article className={styles.panel}>
              <p className={styles.kicker}>Our story</p>
              <h2 className={styles.h2}>Why we started</h2>
              <p className={styles.text}>
                Virtual Office started because we saw too many great businesses held back by one avoidable issue:
                using a home address publicly. In modern business, you can work from anywhere, but trust still starts
                with how your company appears.
              </p>
              <p className={styles.text}>
                We built a clean, transparent service around Bartle House: fast onboarding, simple
                pricing, and practical support that scales with your business.
              </p>
              <p className={styles.text}>
                Today we serve sole traders, remote teams, startups, and international founders building a UK presence.
              </p>
            </article>
            <article className={styles.panel}>
              <p className={styles.kicker}>Our journey</p>
              <h2 className={styles.h2}>Built for modern businesses</h2>
              <ul className={styles.timeline}>
                <li className={styles.timelineItem}>
                  <strong>Started with one clear mission</strong>
                  <br />
                  with a single address at Bartle House and a clear mission.
                </li>
                <li className={styles.timelineItem}>
                  <strong>10,000+ businesses onboarded</strong>
                  <br />
                  from first-time founders to growing UK teams.
                </li>
                <li className={styles.timelineItem}>
                  <strong>Same-day scanning launched</strong>
                  <br />
                  to keep legal and operational mail responsive.
                </li>
                <li className={styles.timelineItem}>
                  <strong>Always improving</strong>
                  <br />
                  with meeting rooms, add-ons, and dedicated support.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionGapLarge}`}>
          <div className="container">
            <p className={styles.kicker}>Why choose us</p>
            <h2 className={styles.h2}>Built for businesses that mean business</h2>
            <div className={styles.whyGrid}>
              {reasons.map((item) => (
                <article key={item.title} className={styles.whyCard}>
                  <h3 className={styles.whyTitle}>
                    <span className={styles.iconBadge} aria-hidden>
                      {item.icon}
                    </span>
                    {item.title}
                  </h3>
                  <p className={styles.text}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.cta}`}>
            <div className={styles.ctaText}>
              <h2>Ready to get your professional address?</h2>
              <p>
                Join thousands of businesses who trust us with their registered address. Plans from £9.99/month + VAT.
                No contracts, no setup fees.
              </p>
            </div>
            <div>
              <Link href="/#packages" className="btn btn-primary">
                View plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
