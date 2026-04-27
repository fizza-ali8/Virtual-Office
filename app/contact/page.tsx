import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Virtual Office",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>Contact us</p>
            <h1 className={styles.h1}>Get in touch with us</h1>
            <p className={styles.lead}>
              Have a question about our virtual office plans? We&apos;d love to hear from you. Our team typically
              responds within one business day.
            </p>
            <div className={styles.strip}>
              <span className={styles.stripText}>We reply to all enquiries within 1 business day — guaranteed.</span>
            </div>
            <div className={styles.split}>
              <div className={styles.panel}>
                <h2 className={styles.panelTitle}>Contact form</h2>
                <ContactForm />
              </div>
              <aside className={styles.panel}>
                <h2 className={styles.panelTitle}>Contact details</h2>
                <div className={styles.details}>
                  <p className={styles.detailItem}>
                    <span className={styles.detailIcon} aria-hidden>
                      📍
                    </span>
                    <span>
                      <strong>Address:</strong> Bartle House, Oxford Court, M2 3WQ
                    </span>
                  </p>
                  <p className={styles.detailItem}>
                    <span className={styles.detailIcon} aria-hidden>
                      ☎
                    </span>
                    <span>
                      <strong>Phone:</strong> <a href="tel:03303201929">0330 320 1929</a>
                    </span>
                  </p>
                  <p className={styles.detailItem}>
                    <span className={styles.detailIcon} aria-hidden>
                      ✉
                    </span>
                    <span>
                      <strong>Email:</strong> <a href="mailto:contact@virtualoffice.com">contact@virtualoffice.com</a>
                    </span>
                  </p>
                  <p className={styles.detailItem}>
                    <span className={styles.detailIcon} aria-hidden>
                      🕘
                    </span>
                    <span>
                      <strong>Hours:</strong> Monday to Friday, 9:00am – 5:00pm
                    </span>
                  </p>
                  <p className={styles.detailItem}>
                    <span className={styles.detailIcon} aria-hidden>
                      ⚡
                    </span>
                    <span>
                      <strong>Response time:</strong> We aim to reply to all enquiries within 1 business day
                    </span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.mapPanel}`}>
            <h2 className={styles.mapTitle}>Find us on the map</h2>
            <iframe
              className={styles.map}
              title="Bartle House location map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bartle%20House%20Oxford%20Court&output=embed"
            />
            <p className={styles.caption}>
              Our business address — Bartle House, Oxford Court, M2 3WQ
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
