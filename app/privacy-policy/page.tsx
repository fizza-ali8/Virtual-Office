import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "@/app/legal-pages.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Virtual Office",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.h1}>Privacy Policy</h1>
            <p className={styles.updated}>
              <strong>Last updated:</strong> 27 April 2026
            </p>
            <p className={styles.summary}>
              At Virtual Office, we take your privacy seriously. This policy explains what personal information we
              collect, how we use it, and what rights you have over it. Please read it carefully before using our
              services.
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.layout}`}>
            <aside className={styles.toc}>
              <p className={styles.tocTitle}>On this page</p>
              <ul>
                <li><a href="#who-we-are">Who we are</a></li>
                <li><a href="#what-we-collect">What information we collect</a></li>
                <li><a href="#how-we-use">How we use your information</a></li>
                <li><a href="#who-we-share">Who we share with</a></li>
                <li><a href="#retention">Data retention</a></li>
                <li><a href="#rights">Your rights</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#changes">Changes to this policy</a></li>
              </ul>
            </aside>

            <article className={styles.article}>
              <section id="who-we-are" className={styles.section}>
                <h2 className={styles.h2}>Who we are</h2>
                <p className={styles.paragraph}>
                  Virtual Office is operated from Bartle House, Oxford Court, M2 3WQ. When this policy
                  refers to &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, it means Virtual Office. You can reach us at{" "}
                  <a href="mailto:contact@virtualoffice.com">contact@virtualoffice.com</a> or by calling{" "}
                  <a href="tel:03303201929">0330 320 1929</a>.
                </p>
              </section>

              <section id="what-we-collect" className={styles.section}>
                <h2 className={styles.h2}>What information we collect</h2>
                <p className={styles.paragraph}>
                  When you sign up for a virtual office package or enquire about our services, we collect information
                  you give us directly. This includes your name, email address, phone number, business name, and
                  billing details. If you register a company address through us, we may also hold your director
                  details and any correspondence you receive at your virtual address.
                </p>
                <p className={styles.paragraph}>
                  When you visit our website, we also collect certain information automatically. This includes your IP
                  address, browser type, the pages you visit, and how long you spend on each page. We collect this
                  through cookies and similar technologies, which are explained in our Cookie Policy.
                </p>
                <p className={styles.paragraph}>
                  If you contact us by email or phone, we may keep a record of that conversation for training, quality,
                  and compliance purposes.
                </p>
              </section>

              <section id="how-we-use" className={styles.section}>
                <h2 className={styles.h2}>How we use your information</h2>
                <p className={styles.paragraph}>
                  We use your personal data to set up and manage your virtual office subscription, process payments,
                  scan and forward your mail, and send you service updates and renewal reminders. We also use it to
                  comply with our legal obligations, including anti-money laundering checks required for businesses
                  providing registered address services.
                </p>
                <p className={styles.paragraph}>
                  From time to time, if you have opted in, we may send you relevant updates about new products or
                  services we think might be useful to you. You can unsubscribe from marketing emails at any time
                  using the link in the email or by contacting us directly.
                </p>
                <p className={styles.paragraph}>We do not sell your personal data to third parties.</p>
              </section>

              <section id="who-we-share" className={styles.section}>
                <h2 className={styles.h2}>Who we share your information with</h2>
                <p className={styles.paragraph}>
                  We share your data only where necessary to run our service. This includes our payment processor, who
                  handles billing securely, and our mail handling team, who operate from our business address. We
                  may also share information with regulatory bodies if we are legally required to do so, for example
                  in response to a request from HMRC or Companies House.
                </p>
                <p className={styles.paragraph}>
                  All third parties we work with are required to handle your data in line with UK data protection law.
                </p>
              </section>

              <section id="retention" className={styles.section}>
                <h2 className={styles.h2}>How long we keep your data</h2>
                <p className={styles.paragraph}>
                  We keep your account information for as long as you remain a customer and for a period of six years
                  after your account closes, in line with our legal and financial record-keeping obligations. Mail
                  records are kept for two years. If you never completed a purchase and only made an enquiry, we
                  retain your details for up to 12 months before deleting them.
                </p>
              </section>

              <section id="rights" className={styles.section}>
                <h2 className={styles.h2}>Your rights</h2>
                <p className={styles.paragraph}>
                  Under UK GDPR, you have the right to access the personal data we hold about you, to correct any
                  inaccuracies, and to request that we delete your data in certain circumstances. You also have the
                  right to restrict how we process your data, to object to us using it for marketing, and in some
                  cases to receive a copy of it in a portable format.
                </p>
                <p className={styles.paragraph}>
                  To exercise any of these rights, please email us at{" "}
                  <a href="mailto:contact@virtualoffice.com">contact@virtualoffice.com</a>. We will respond within 30
                  days. If you are unhappy with how we handle your request, you have the right to complain to the
                  Information Commissioner&apos;s Office at{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
                    ico.org.uk
                  </a>.
                </p>
              </section>

              <section id="security" className={styles.section}>
                <h2 className={styles.h2}>Security</h2>
                <p className={styles.paragraph}>
                  We use industry-standard security measures to protect your data, including encrypted connections and
                  restricted access controls. No system is completely immune to risk, but we take reasonable steps to
                  keep your information safe.
                </p>
              </section>

              <section id="changes" className={styles.section}>
                <h2 className={styles.h2}>Changes to this policy</h2>
                <p className={styles.paragraph}>
                  We may update this policy from time to time. If we make significant changes, we will let you know by
                  email or by posting a clear notice on our website. The date at the top of this page always reflects
                  when it was last updated.
                </p>
                <p className={styles.note}>
                  You may also want to review our{" "}
                  <Link href="/terms">Terms and Conditions</Link> and <Link href="/cookie-policy">Cookie Policy</Link>.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
