"use client";

import { useState, type FormEvent } from "react";
import { quoteForm } from "@/data/site";
import { Field, FormStatus, Honeypot, Input, Select, Spinner, Textarea } from "./FormFields";

type Data = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  businessType: string;
  services: string[];
  language: string;
  message: string;
  website: string;
};

const empty: Data = { fullName: "", company: "", email: "", phone: "", businessType: "", services: [], language: "", message: "", website: "" };

function validate(d: Data) {
  const e: Partial<Record<keyof Data, string>> = {};
  if (!d.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Please enter a valid email address.";
  if (!/^[+\d][\d\s\-()]{6,}$/.test(d.phone.trim())) e.phone = "Please enter a valid phone or WhatsApp number.";
  if (!d.businessType) e.businessType = "Please select your business type.";
  if (d.services.length === 0) e.services = "Please select at least one service.";
  if (!d.language) e.language = "Please choose a preferred language.";
  return e;
}

export default function QuoteForm() {
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleService = (s: string) =>
    set("services", data.services.includes(s) ? data.services.filter((x) => x !== s) : [...data.services, s]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length) {
      const first = document.getElementById(Object.keys(v)[0]);
      first?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setData(empty);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-6">
      <Honeypot value={data.website} onChange={(v) => set("website", v)} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required error={errors.fullName}>
          <Input id="fullName" name="fullName" autoComplete="name" value={data.fullName} onChange={(e) => set("fullName", e.target.value)} error={errors.fullName} />
        </Field>
        <Field id="company" label="Company / organisation name">
          <Input id="company" name="company" autoComplete="organization" value={data.company} onChange={(e) => set("company", e.target.value)} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <Input id="email" name="email" type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} error={errors.email} />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" required error={errors.phone}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+855 ..." value={data.phone} onChange={(e) => set("phone", e.target.value)} error={errors.phone} />
        </Field>
        <Field id="businessType" label="Business type" required error={errors.businessType}>
          <Select id="businessType" name="businessType" value={data.businessType} onChange={(e) => set("businessType", e.target.value)} error={errors.businessType}>
            <option value="">Select…</option>
            {quoteForm.businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </Field>
        <fieldset>
          <legend className="mb-1.5 block text-[15px] font-semibold text-heading">Preferred language <span className="text-accent-ink" aria-hidden="true">*</span></legend>
          <div className="flex gap-3">
            {quoteForm.languages.map((l, i) => (
              <label key={l} className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border px-3 py-3 text-[15px] font-medium transition-colors ${data.language === l ? "border-heading bg-brand-900 text-white" : "border-line-strong text-heading hover:border-brand-300"}`}>
                <input type="radio" id={i === 0 ? "language" : undefined} name="language" value={l} checked={data.language === l} onChange={() => set("language", l)} className="accent-brand-900" />
                {l}
              </label>
            ))}
          </div>
          {errors.language && <p className="mt-1 text-sm text-accent-ink">{errors.language}</p>}
        </fieldset>
      </div>

      <fieldset>
        <legend className="mb-2 block text-[15px] font-semibold text-heading">Services needed <span className="text-accent-ink" aria-hidden="true">*</span></legend>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {quoteForm.services.map((s, i) => {
            const checked = data.services.includes(s);
            return (
              <label key={s} className={`flex cursor-pointer items-center gap-2.5 rounded-md border px-3.5 py-3 text-[15px] transition-colors ${checked ? "border-heading bg-tint font-semibold text-heading" : "border-line-strong text-ink hover:border-brand-300"}`}>
                <input type="checkbox" id={i === 0 ? "services" : undefined} checked={checked} onChange={() => toggleService(s)} className="h-4 w-4 accent-brand-900" />
                {s}
              </label>
            );
          })}
        </div>
        {errors.services && <p className="mt-1 text-sm text-accent-ink">{errors.services}</p>}
      </fieldset>

      <Field id="message" label="Message" hint="Tell us about your business, number of transactions, deadlines, etc.">
        <Textarea id="message" name="message" rows={5} maxLength={3000} value={data.message} onChange={(e) => set("message", e.target.value)} />
      </Field>

      <FormStatus status={status} error={serverError} successText="Thank you! Your quotation request has been received. Our team will contact you within one business day." />

      <button type="submit" disabled={status === "loading"} className="btn-red w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? (<><Spinner /> Sending…</>) : "Submit Request"}
      </button>
    </form>
  );
}
