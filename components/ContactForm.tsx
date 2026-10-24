"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { contactPage, quoteForm } from "@/data/site";
import { FormStatus, Honeypot, Spinner } from "./FormFields";
import { ArrowRight } from "./Icons";

type Data = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  businessType: string;
  topic: string;
  language: string;
  contactMethod: string;
  message: string;
  consent: boolean;
  website: string;
};
type Errors = Partial<Record<keyof Data, string>>;

const empty: Data = {
  name: "", email: "", phone: "", company: "", services: [], businessType: "", topic: "",
  language: "", contactMethod: "", message: "", consent: false, website: "",
};

const field =
  "w-full rounded-lg border border-transparent bg-field px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-heading focus:bg-surface focus:outline-none focus:ring-4 focus:ring-heading/15";
const errField = "!border-accent-600 !bg-accent-soft";

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-4 flex items-center gap-2.5 font-display text-[15px] font-semibold text-heading">
        <span aria-hidden="true" className="h-3 w-3 border-2 border-accent-600" />
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

function L({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-heading">
      {children} {required && <span aria-hidden="true" className="text-accent-600">*</span>}
    </label>
  );
}

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? <p id={id} className="mt-1.5 text-[13px] font-medium text-accent-ink">{msg}</p> : null;
}

export default function ContactForm() {
  const [d, setD] = useState<Data>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setD((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const toggle = (s: string) => set("services", d.services.includes(s) ? d.services.filter((x) => x !== s) : [...d.services, s]);
  const aria = (k: keyof Data) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v: Errors = {};
    if (!d.name.trim()) v.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) v.email = "Enter a valid email address.";
    if (d.phone && !/^[+\d][\d\s\-()]{6,}$/.test(d.phone.trim())) v.phone = "Enter a valid phone number, or leave it blank.";
    if (!d.message.trim()) v.message = "Tell us briefly what you need.";
    if (!d.consent) v.consent = "Please tick the box to continue.";
    setErrors(v);
    if (Object.keys(v).length) {
      document.getElementById(`c-${Object.keys(v)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Your message couldn't be sent. Try again, or call us.");
      setStatus("success");
      setD(empty);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Your message couldn't be sent. Try again, or call us.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-9">
      <Honeypot value={d.website} onChange={(v) => set("website", v)} />

      <Group title="About you">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <L htmlFor="c-name" required>Full name</L>
            <input id="c-name" autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} className={`${field} ${errors.name ? errField : ""}`} {...aria("name")} />
            <Err id="e-name" msg={errors.name} />
          </div>
          <div>
            <L htmlFor="c-email" required>Email</L>
            <input id="c-email" type="email" autoComplete="email" value={d.email} onChange={(e) => set("email", e.target.value)} className={`${field} ${errors.email ? errField : ""}`} {...aria("email")} />
            <Err id="e-email" msg={errors.email} />
          </div>
          <div>
            <L htmlFor="c-phone">Phone / WhatsApp</L>
            <input id="c-phone" type="tel" autoComplete="tel" placeholder="+855 ..." value={d.phone} onChange={(e) => set("phone", e.target.value)} className={`${field} ${errors.phone ? errField : ""}`} {...aria("phone")} />
            <Err id="e-phone" msg={errors.phone} />
          </div>
          <div>
            <L htmlFor="c-company">Company / organisation</L>
            <input id="c-company" autoComplete="organization" value={d.company} onChange={(e) => set("company", e.target.value)} className={field} />
          </div>
        </div>
      </Group>

      <Group title="Services you need">
        <div className="flex flex-wrap gap-2">
          {contactPage.services.map((s) => {
            const on = d.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s)}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${on ? "border-heading bg-brand-900 text-white" : "border-line bg-surface text-heading hover:border-brand-300"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </Group>

      <Group title="Your enquiry">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <L htmlFor="c-businessType">Business type</L>
            <select id="c-businessType" value={d.businessType} onChange={(e) => set("businessType", e.target.value)} className={field}>
              <option value="">Select…</option>
              {quoteForm.businessTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <L htmlFor="c-topic">What is this about?</L>
            <select id="c-topic" value={d.topic} onChange={(e) => set("topic", e.target.value)} className={field}>
              <option value="">Select…</option>
              {contactPage.topics.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <L htmlFor="c-language">Preferred language</L>
            <select id="c-language" value={d.language} onChange={(e) => set("language", e.target.value)} className={field}>
              <option value="">Select…</option>
              {quoteForm.languages.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <L htmlFor="c-contactMethod">Best way to reach you</L>
            <select id="c-contactMethod" value={d.contactMethod} onChange={(e) => set("contactMethod", e.target.value)} className={field}>
              <option value="">Select…</option>
              {contactPage.contactMethods.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div>
          <L htmlFor="c-message" required>Message</L>
          <textarea
            id="c-message"
            rows={5}
            maxLength={3000}
            placeholder="Tell us about your business, the period or filings involved, any deadlines, or anything else we should know."
            value={d.message}
            onChange={(e) => set("message", e.target.value)}
            className={`${field} ${errors.message ? errField : ""}`}
            {...aria("message")}
          />
          <Err id="e-message" msg={errors.message} />
        </div>
      </Group>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-muted">
          <input id="c-consent" type="checkbox" checked={d.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-brand-900" {...aria("consent")} />
          {contactPage.consent}
        </label>
        <Err id="e-consent" msg={errors.consent} />
      </div>

      <FormStatus status={status} error={serverError} successText="Message sent. We'll get back to you within one business day." />

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-4 text-[15px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(225,4,28,0.6)] transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (<><Spinner /> Sending…</>) : (<>Send message <ArrowRight className="h-4 w-4" /></>)}
      </button>
    </form>
  );
}
