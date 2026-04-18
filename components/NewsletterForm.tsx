"use client";

import styles from "./Footer.module.css";

export function NewsletterForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className={styles.srOnly} htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@company.com"
        className={styles.input}
        autoComplete="email"
      />
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
