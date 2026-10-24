import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Field({ id, label, required, error, children, hint }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] font-semibold text-heading">
        {label} {required && <span className="text-accent-ink" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-accent-ink">{error}</p>}
    </div>
  );
}

const inputCls = (error?: string) =>
  `w-full rounded-md border bg-surface px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-4 focus:ring-heading/15 ${error ? "border-accent-600" : "border-line-strong hover:border-brand-300 focus:border-heading"}`;

export function Input({ error, ...props }: InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return <input {...props} aria-invalid={!!error} aria-describedby={error ? `${props.id}-error` : undefined} className={inputCls(error)} />;
}

export function Select({ error, children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) {
  return (
    <select {...props} aria-invalid={!!error} aria-describedby={error ? `${props.id}-error` : undefined} className={inputCls(error)}>
      {children}
    </select>
  );
}

export function Textarea({ error, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) {
  return <textarea {...props} aria-invalid={!!error} aria-describedby={error ? `${props.id}-error` : undefined} className={inputCls(error)} />;
}

/** Hidden honeypot field to catch spam bots. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function FormStatus({ status, error, successText }: { status: "idle" | "loading" | "success" | "error"; error?: string; successText: string }) {
  if (status === "success")
    return <div role="status" className="rounded-md border border-line-strong bg-tint p-4 font-medium text-heading">{successText}</div>;
  if (status === "error")
    return <div role="alert" className="rounded-md border border-accent-100 bg-accent-soft p-4 font-medium text-accent-ink">{error}</div>;
  return null;
}

export function Spinner() {
  return <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />;
}
