"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/virtual-office", label: "Virtual Office Address" },
  { href: "/registered-office-address", label: "Registered Office Address" },
  { href: "/directors-service-address", label: "Director's Service Address" },
  { href: "/services", label: "All Services" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    setElevated(y > 12);
  });

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
        <Link href="/" className={styles.logo} aria-label="Virtual Office home">
          <span className={styles.logoMark}>V</span>
          <span className={styles.logoText}>Virtual Office</span>
        </Link>

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
            <li>
              <Link
                href="/"
                className={`${styles.link} ${pathname === "/" ? styles.linkActive : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className={styles.dropdown}>
              <Link
                href="/services"
                className={`${styles.link} ${styles.dropdownToggle} ${pathname === "/services" ? styles.linkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                Services
                <span aria-hidden>▾</span>
              </Link>
              <ul className={styles.dropdownMenu}>
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`${styles.dropdownLink} ${pathname === l.href ? styles.linkActive : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`${styles.link} ${pathname === l.href ? styles.linkActive : ""}`}
                  aria-current={pathname === l.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/#packages" className={`btn btn-primary ${styles.buyBtn}`}>
            Buy now
          </Link>
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
