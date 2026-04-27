"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

type ContactState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
};

const initialState: ContactState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        <span>Full Name *</span>
        <input
          required
          type="text"
          placeholder="e.g. John Smith"
          value={form.fullName}
          onChange={(e) => setForm((v) => ({ ...v, fullName: e.target.value }))}
        />
      </label>

      <label className={styles.field}>
        <span>Email Address *</span>
        <input
          required
          type="email"
          placeholder="e.g. john@company.com"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
        />
      </label>

      <label className={styles.field}>
        <span>Phone Number</span>
        <input
          type="tel"
          placeholder="e.g. 07700 900000"
          value={form.phone}
          onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
        />
      </label>

      <label className={styles.field}>
        <span>Subject *</span>
        <select
          required
          value={form.subject}
          onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
        >
          <option value="">Select a topic...</option>
          <option>General enquiry</option>
          <option>I&apos;d like to sign up</option>
          <option>Question about mail handling</option>
          <option>Question about my existing account</option>
          <option>Billing or payment</option>
          <option>Something else</option>
        </select>
      </label>

      <label className={styles.field}>
        <span>Company Name</span>
        <input
          type="text"
          placeholder="e.g. Acme Ltd"
          value={form.company}
          onChange={(e) => setForm((v) => ({ ...v, company: e.target.value }))}
        />
      </label>

      <label className={styles.field}>
        <span>Message *</span>
        <textarea
          required
          rows={6}
          placeholder="Tell us how we can help..."
          value={form.message}
          onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
        />
      </label>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      <p className={styles.note}>
        We aim to reply within 1 business day. Your information is never shared with third parties.
      </p>
      {status === "success" ? (
        <p className={styles.success}>
          Thanks for getting in touch! We&apos;ve received your message and will reply within one business day.
        </p>
      ) : null}
      {status === "error" ? (
        <p className={styles.error}>Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
