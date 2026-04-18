"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "#top", label: "Home" },
  { href: "#virtual-office", label: "Virtual Office" },
  { href: "#services", label: "Business Services" },
  { href: "#contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [active, setActive] = useState("#top");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setElevated(y > 12);
  });

  useEffect(() => {
    const sectionSelectors = links
      .map((l) => l.href)
      .filter((href) => href.startsWith("#") && href.length > 1);

    const sections = sectionSelectors
      .map((href) => {
        try {
          return document.querySelector(href);
        } catch {
          return null;
        }
      })
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.35, 0.55], rootMargin: "-38% 0px -42% 0px" }
    );

    const onScroll = () => {
      if (typeof window !== "undefined" && window.scrollY < 72) {
        setActive("#top");
      }
    };

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${elevated ? styles.elevated : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label="Virtual Office home">
          <span className={styles.logoMark}>V</span>
          <span className={styles.logoText}>Virtual Office</span>
        </a>

        <nav
          id="site-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          <div className={styles.mobileTop}>
            <span className={styles.mobileTitle}>Menu</span>
            <button type="button" className={styles.mobileClose} onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
                  aria-current={active === l.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#packages" className={`btn btn-primary ${styles.buyBtn}`}>
            Buy now
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.srOnly}>Menu</span>
            <span className={styles.burger} data-open={open} />
          </button>
        </div>
      </div>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
    </header>
  );
}
