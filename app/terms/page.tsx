import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "@/app/legal-pages.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | Virtual Office",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.h1}>Terms and Conditions</h1>
            <p className={styles.updated}>
              <strong>Last updated:</strong> 27 April 2026
            </p>
            <p className={styles.summary}>
              These terms govern your use of Virtual Office&apos;s services. By placing an order or using our service,
              you agree to be bound by them. If you do not agree, please do not proceed with a purchase.
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.layout}`}>
            <aside className={styles.toc}>
              <p className={styles.tocTitle}>On this page</p>
              <ul>
                <li><a href="#about-us">About us</a></li>
                <li><a href="#services">Our services</a></li>
                <li><a href="#packages">Packages and pricing</a></li>
                <li><a href="#payment">Payment</a></li>
                <li><a href="#cancellation">Cancellation and refunds</a></li>
                <li><a href="#responsibilities">Your responsibilities</a></li>
                <li><a href="#mail-handling">Mail handling</a></li>
                <li><a href="#liability">Liability</a></li>
                <li><a href="#changes">Changes</a></li>
                <li><a href="#law">Governing law</a></li>
              </ul>
            </aside>

            <article className={styles.article}>
              <section id="about-us" className={styles.section}>
                <h2 className={styles.h2}>About us</h2>
                <p className={styles.paragraph}>
                  Virtual Office provides virtual office solutions from Bartle House, Oxford Court, M2
                  3WQ. Our contact email is <a href="mailto:contact@virtualoffice.com">contact@virtualoffice.com</a>{" "}
                  and our phone number is <a href="tel:03303201929">0330 320 1929</a>.
                </p>
              </section>

              <section id="services" className={styles.section}>
                <h2 className={styles.h2}>Our services</h2>
                <p className={styles.paragraph}>
                  We provide a professional registered and director service address, along with mail
                  scanning, digital forwarding, and optional physical forwarding of letters and parcels. Specific
                  features depend on the package you select at checkout.
                </p>
                <p className={styles.paragraph}>
                  Your virtual address may be used for Companies House registrations, your website, correspondence, and
                  general business use. It may not be used for any unlawful purpose, for misleading or fraudulent
                  activity, or in a way that could damage the reputation of Bartle House or Virtual Office.
                </p>
              </section>

              <section id="packages" className={styles.section}>
                <h2 className={styles.h2}>Packages and pricing</h2>
                <p className={styles.paragraph}>
                  Our Basic package starts from £9.99 per month plus VAT, our Professional package from £12.99 per
                  month plus VAT, and our Premium package from £39.99 per month plus VAT. All prices are subject to
                  change with reasonable notice. Annual billing options are available and may offer a discount compared
                  to paying monthly.
                </p>
                <p className={styles.paragraph}>
                  There are no fixed-term contracts and no hidden setup fees. You may cancel at any time, subject to
                  the cancellation terms below.
                </p>
              </section>

              <section id="payment" className={styles.section}>
                <h2 className={styles.h2}>Payment</h2>
                <p className={styles.paragraph}>
                  Payment is taken at the point of purchase and renewed automatically each billing cycle, whether
                  monthly or annually, depending on the plan you chose. It is your responsibility to ensure your
                  payment details remain up to date. If a payment fails, we will notify you and allow a short grace
                  period before suspending your service.
                </p>
                <p className={styles.paragraph}>
                  We accept major credit and debit cards. All transactions are processed securely through our payment
                  provider.
                </p>
              </section>

              <section id="cancellation" className={styles.section}>
                <h2 className={styles.h2}>Cancellation and refunds</h2>
                <p className={styles.paragraph}>
                  You may cancel your subscription at any time by contacting us at{" "}
                  <a href="mailto:contact@virtualoffice.com">contact@virtualoffice.com</a>. Your service will continue
                  until the end of the billing period you have already paid for. We do not offer refunds for partial
                  months or unused annual periods unless required by consumer law.
                </p>
                <p className={styles.paragraph}>
                  If you are a consumer based in the UK, you have a 14-day cooling-off period from the date of
                  purchase during which you can cancel and receive a full refund, provided the service has not yet
                  begun. If you have requested that the service start immediately, this right may be reduced.
                </p>
              </section>

              <section id="responsibilities" className={styles.section}>
                <h2 className={styles.h2}>Your responsibilities</h2>
                <p className={styles.paragraph}>
                  You are responsible for ensuring that the information you provide when signing up is accurate and kept
                  up to date. This includes your company name, director details, and contact information. You are also
                  responsible for collecting or arranging forwarding of your mail in a timely manner. Uncollected mail
                  may be held for a reasonable period before being returned to sender.
                </p>
                <p className={styles.paragraph}>
                  You must not use the address for any purpose that violates UK law, including using it to defraud
                  creditors, evade taxes, or operate a business that is not legitimate.
                </p>
              </section>

              <section id="mail-handling" className={styles.section}>
                <h2 className={styles.h2}>Mail handling</h2>
                <p className={styles.paragraph}>
                  We will make reasonable efforts to scan and forward your mail within the timeframes described in your
                  package. We are not liable for delays caused by Royal Mail or other couriers, and we are not
                  responsible for the contents of mail received on your behalf.
                </p>
                <p className={styles.paragraph}>
                  Physical forwarding beyond your package allowance is available at an additional cost, which will be
                  communicated to you before any additional charges are applied.
                </p>
              </section>

              <section id="liability" className={styles.section}>
                <h2 className={styles.h2}>Liability</h2>
                <p className={styles.paragraph}>
                  We provide our services with reasonable care and skill. However, we are not liable for any loss of
                  business, loss of profit, or indirect losses arising from your use of our services. Our total
                  liability to you in any 12-month period will not exceed the amount you have paid to us during that
                  same period.
                </p>
                <p className={styles.paragraph}>
                  Nothing in these terms limits our liability for death or personal injury caused by our negligence,
                  fraud, or any other liability that cannot be excluded by law.
                </p>
              </section>

              <section id="changes" className={styles.section}>
                <h2 className={styles.h2}>Changes to these terms</h2>
                <p className={styles.paragraph}>
                  We may update these terms from time to time. We will give you reasonable notice of any material
                  changes. Continuing to use the service after changes take effect means you accept the updated terms.
                </p>
              </section>

              <section id="law" className={styles.section}>
                <h2 className={styles.h2}>Governing law</h2>
                <p className={styles.paragraph}>
                  These terms are governed by the laws of England and Wales. Any disputes will be subject to the
                  exclusive jurisdiction of the courts of England and Wales.
                </p>
                <p className={styles.note}>
                  For data handling information, please review our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                  <Link href="/cookie-policy">Cookie Policy</Link>.
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
