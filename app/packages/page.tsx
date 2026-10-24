import type { Metadata } from "next";
import Link from "next/link";
import { packages, photos } from "@/data/site";
import { CTAStrip, PageHero } from "@/components/Sections";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Packages",
  description: "Accounting, tax and audit packages for sole proprietors, companies and NGOs in Cambodia.",
  alternates: { canonical: "/packages" },
  openGraph: { title: "Packages | Fidinda Financial Solutions", url: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero title="Packages" intro={packages.intro} crumbs={[{ label: "Packages" }]} image={photos.reports} />
      <section className="band bg-paper">
        <div className="container grid items-stretch gap-6 lg:grid-cols-3">
          {packages.items.map((p) => {
            const hi = p.highlighted;
            return (
              <article key={p.name} className={`relative flex flex-col rounded-lg p-8 sm:p-10 ${hi ? "bg-brand-900 text-white shadow-[0_30px_60px_-30px_rgba(28,9,90,0.7)] lg:-my-4 lg:py-14" : "border border-line bg-surface"}`}>
                <span className="absolute left-8 top-0 h-[3px] w-10 bg-accent-600 sm:left-10" />
                <div className="flex items-center justify-between gap-4">
                  <h2 className={`text-2xl font-semibold ${hi ? "text-white" : ""}`}>{p.name}</h2>
                  {hi && <span className="rounded-full bg-accent-600 px-3 py-1 text-[13px] font-semibold text-white">Most popular</span>}
                </div>
                <p className={`mt-3 ${hi ? "text-brand-100" : "text-muted"}`}>{p.description}</p>
                <p className="mt-8 flex items-baseline gap-2">
                  <span className={`font-display text-4xl font-semibold tracking-tight ${hi ? "text-white" : "text-heading"}`}>{p.price}</span>
                  <span className={`text-[15px] ${hi ? "text-brand-200" : "text-muted"}`}>{p.period}</span>
                </p>
                <ul className={`mt-8 flex-1 space-y-3.5 border-t pt-8 ${hi ? "border-white/15" : "border-line"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon className={`mt-1 h-4 w-4 shrink-0 ${hi ? "text-accent-500" : "text-accent-600"}`} />
                      <span className={hi ? "text-white" : "text-heading"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/request-quotation" className={`mt-10 w-full ${hi ? "btn-red" : "btn-line"}`}>Request a Quote</Link>
              </article>
            );
          })}
        </div>
        <p className="container mt-12 text-center text-[15px] text-muted">Prices are indicative. Final fees depend on transaction volume and scope of work.</p>
      </section>
      <CTAStrip />
    </>
  );
}
