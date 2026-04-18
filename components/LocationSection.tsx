import { RevealSection } from "@/components/motion/RevealSection";
import Image from "next/image";
import styles from "./LocationSection.module.css";

const thumbs = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
];

export function LocationSection() {
  return (
    <RevealSection className="section" id="location">
      <div className="container">
        <div className={styles.intro}>
          <h2 className={styles.h2}>A look inside our Manchester address</h2>
          <p className={`muted ${styles.lead}`}>
            Your virtual office sits in the heart of Manchester — one of the UK&apos;s most vibrant cities.
            At Bartle House, you benefit from a striking Georgian-style building, manned reception, meeting
            rooms, and professional neighbours.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.heroImg}>
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85"
              alt="Bartle House style commercial building with brick facade"
              width={900}
              height={560}
              className={styles.cover}
              priority
            />
          </div>
          <div className={styles.thumbs}>
            {thumbs.map((src, i) => (
              <div key={src} className={styles.thumb}>
                <Image
                  src={src}
                  alt={`Office interior or exterior view ${i + 1}`}
                  width={220}
                  height={140}
                  className={styles.cover}
                />
              </div>
            ))}
          </div>
          <aside className={styles.card} id="contact">
            <h3 className={styles.cardTitle}>Office details</h3>
            <dl className={styles.dl}>
              <div>
                <dt>Address</dt>
                <dd>
                  Bartle House,
                  <br />
                  Oxford Court, Manchester
                  <br />
                  M2 3WQ
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:03303201929">0330 320 1929</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:contact@virtualoffice.com">contact@virtualoffice.com</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </RevealSection>
  );
}
