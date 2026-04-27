import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "@/app/legal-pages.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy | Virtual Office",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.h1}>Cookie Policy</h1>
            <p className={styles.updated}>
              <strong>Last updated:</strong> 27 April 2026
            </p>
            <p className={styles.summary}>
              This policy explains what cookies are, which ones we use on the Virtual Office website, and how you can
              manage your preferences.
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.layout}`}>
            <aside className={styles.toc}>
              <p className={styles.tocTitle}>On this page</p>
              <ul>
                <li><a href="#what-are-cookies">What cookies are</a></li>
                <li><a href="#cookies-we-use">The cookies we use</a></li>
                <li><a href="#third-party">Third-party cookies</a></li>
                <li><a href="#manage-cookies">How to manage cookies</a></li>
                <li><a href="#changes">Changes to this policy</a></li>
              </ul>
            </aside>

            <article className={styles.article}>
              <section id="what-are-cookies" className={styles.section}>
                <h2 className={styles.h2}>What cookies are</h2>
                <p className={styles.paragraph}>
                  Cookies are small text files that are placed on your device when you visit a website. They are
                  widely used to make websites work properly, to remember your preferences, and to give website owners
                  useful information about how their site is being used. Cookies are not harmful and do not contain
                  personal information like your name or payment details on their own.
                </p>
              </section>

              <section id="cookies-we-use" className={styles.section}>
                <h2 className={styles.h2}>The cookies we use</h2>
                <p className={styles.paragraph}>We use a small number of cookies, each serving a specific purpose.</p>
                <p className={styles.paragraph}>
                  Strictly necessary cookies are essential for the website to function. They include the cookies that
                  remember your session as you move between pages, keep your basket intact during checkout, and ensure
                  our security features work properly. You cannot opt out of these cookies because the website simply
                  would not work without them.
                </p>
                <p className={styles.paragraph}>
                  Performance and analytics cookies help us understand how visitors use our site. For example, we use
                  analytics tools to see which pages are most popular, where visitors come from, and where people tend
                  to leave the site. This information is collected anonymously and used only to improve the experience
                  for future visitors. These cookies are only placed if you give us permission.
                </p>
                <p className={styles.paragraph}>
                  Preference cookies remember choices you have made, such as whether you prefer to view monthly or
                  annual pricing. These make your experience smoother by not asking you to re-select the same options
                  every time you return.
                </p>
                <p className={styles.paragraph}>
                  Marketing cookies, if enabled, help us show you relevant content if you visit other websites after
                  browsing ours. We keep this use to a minimum and only activate marketing cookies with your explicit
                  consent.
                </p>
              </section>

              <section id="third-party" className={styles.section}>
                <h2 className={styles.h2}>Third-party cookies</h2>
                <p className={styles.paragraph}>
                  Some cookies on our site are placed by third-party services we use, such as our analytics provider
                  and payment processor. These third parties have their own privacy policies and we recommend you
                  review them if you have specific concerns. We do not allow third parties to use cookies collected
                  through our website for their own advertising purposes without your consent.
                </p>
              </section>

              <section id="manage-cookies" className={styles.section}>
                <h2 className={styles.h2}>How to manage your cookies</h2>
                <p className={styles.paragraph}>
                  When you first visit our website, you will be shown a cookie banner asking for your preferences. You
                  can accept all cookies, reject non-essential cookies, or customise your choices. You can change your
                  preferences at any time by clicking the cookie settings link in the footer of our website.
                </p>
                <p className={styles.paragraph}>
                  You can also manage cookies directly through your browser settings. Most browsers allow you to see
                  which cookies have been set, to delete individual cookies, or to block cookies from certain or all
                  websites. Please note that disabling certain cookies may affect how the website works for you.
                </p>
                <p className={styles.paragraph}>
                  For more information about managing cookies, visit{" "}
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">
                    allaboutcookies.org
                  </a>.
                </p>
              </section>

              <section id="changes" className={styles.section}>
                <h2 className={styles.h2}>Changes to this policy</h2>
                <p className={styles.paragraph}>
                  We may update this policy as our use of cookies changes or as regulations require. The date at the
                  top of this page will always show when it was last reviewed. For significant changes, we will notify
                  you through the website or by email where appropriate.
                </p>
                <p className={styles.note}>
                  You can also review our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                  <Link href="/terms">Terms and Conditions</Link>.
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
