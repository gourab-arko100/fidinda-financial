import type { Metadata } from "next";
import { photos, site } from "@/data/site";
import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/Sections";
import { MailIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Request for Quotation",
  description: "Request a quotation for accounting, tax or audit services from Fidinda Financial Solutions in Phnom Penh.",
  alternates: { canonical: "/request-quotation" },
  openGraph: { title: "Request a Quote | Fidinda Financial Solutions", url: "/request-quotation" },
};

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;
const steps = ["We review your request", "We may call to clarify your needs", "You receive a clear, itemised quotation", "We start once you approve"];

export default function RequestQuotationPage() {
  const { phoneKhmer, phoneEnglish, email } = site.contact;
  return (
    <>
      <PageHero
        title="Request a quotation"
        intro="Tell us about your business and the services you need. We usually reply within one business day."
        crumbs={[{ label: "Request for Quotation" }]}
        image={photos.handshake}
      />
      <section className="band bg-paper">
        <div className="container grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-10">
            <QuoteForm />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-40 lg:self-start">
            <div className="rounded-lg bg-brand-900 p-8 text-white">
              <h2 className="text-xl font-semibold text-white">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {steps.map((t, i) => (
                  <li key={t} className="flex gap-4">
                    <span className="font-display text-lg font-semibold text-accent-500">{i + 1}</span>
                    <span className="text-brand-100">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg border border-line bg-surface p-8">
              <h2 className="text-xl font-semibold">Prefer to talk?</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3"><PhoneIcon className="h-5 w-5 text-accent-600" /><a href={tel(phoneKhmer)} className="font-semibold text-heading hover:text-accent-ink">{phoneKhmer}</a><span className="text-[15px] text-muted">Khmer</span></li>
                <li className="flex items-center gap-3"><PhoneIcon className="h-5 w-5 text-accent-600" /><a href={tel(phoneEnglish)} className="font-semibold text-heading hover:text-accent-ink">{phoneEnglish}</a><span className="text-[15px] text-muted">English</span></li>
                <li className="flex items-center gap-3"><MailIcon className="h-5 w-5 shrink-0 text-accent-600" /><a href={`mailto:${email}`} className="font-semibold text-heading [overflow-wrap:anywhere] hover:text-accent-ink">{email}</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
