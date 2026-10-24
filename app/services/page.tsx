import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photos, services } from "@/data/site";
import { CTAStrip, CrossLinkBanner, PageHero } from "@/components/Sections";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Accounting, taxation and auditing services for businesses and NGOs in Phnom Penh, Cambodia.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | Fidinda Financial Solutions", url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Accounting, taxation and auditing"
        intro="Everything you need to keep your finances accurate, compliant and ready for decision-making."
        crumbs={[{ label: "Services" }]}
        image={photos.reports}
      />
      <section className="band">
        <div className="container space-y-20 sm:space-y-28">
          {services.map((s, i) => (
            <article key={s.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
              <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-brand-100 shadow-[0_30px_60px_-30px_rgba(28,9,90,0.45)]">
                  <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <span aria-hidden="true" className={`absolute -bottom-3 h-[6px] w-24 bg-accent-600 ${i % 2 ? "right-8" : "left-8"}`} />
              </div>
              <div className={i % 2 ? "md:order-1" : ""}>
                <span className="stroke-mark" />
                <h2 className="h-section mt-5">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{s.tagline}</p>
                {s.credential && <p className="mt-5 inline-block rounded-md bg-paper px-3 py-1.5 text-[14px] font-semibold text-heading">{s.credential}</p>}
                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {s.offerings.map((o) => (
                    <li key={o.title} className="flex items-baseline gap-2.5 text-heading">
                      <span aria-hidden="true" className="h-[2px] w-3 shrink-0 translate-y-[-3px] bg-accent-600" />
                      {o.title}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn-indigo mt-9">Explore {s.title.toLowerCase()} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
          <CrossLinkBanner />
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
