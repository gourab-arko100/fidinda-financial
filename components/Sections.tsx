import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { divisions, home, managementSite, photos, services, type Photo } from "@/data/site";
import Mark from "./Mark";
import RegistrationArt from "./RegistrationArt";
import { ArrowRight, ExternalIcon } from "./Icons";

/* ---------- Inner page header ---------- */
export function PageHero({
  title,
  intro,
  crumbs,
  children,
  overlap = false,
  decor = true,
  image = photos.skyline,
}: {
  title: string;
  intro?: string;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  /** Extra bottom space so the next block can overlap the hero */
  overlap?: boolean;
  /** Show the faint logo-mark drawing on the right */
  decor?: boolean;
  /** Background photo, tinted indigo. Pass null for a flat background. */
  image?: Photo | null;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      {image && (
        <>
          <Image src={image.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/55" />
        </>
      )}
      {decor && !image && <Mark animate={false} className="pointer-events-none absolute -right-16 top-1/2 hidden h-[130%] -translate-y-1/2 opacity-[0.14] md:block" />}
      <div className={`container relative pt-16 sm:pt-20 ${overlap ? "pb-36 sm:pb-40" : "pb-16 sm:pb-20"}`}>
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-brand-300">/</span>
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl animate-rise">
          <span className="stroke-mark" />
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
export function SectionIntro({ title, intro, center = false, light = false }: { title: string; intro?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`stroke-mark ${center ? "mx-auto" : ""}`} />
      <h2 className={`h-section mt-5 ${light ? "text-white" : ""}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-brand-100" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

/* ---------- Services as photo cards ---------- */
export function ServiceCards() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {services.map((s) => (
        <li key={s.slug}>
          <Link href={`/services/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-[0_20px_50px_-30px_rgba(28,9,90,0.45)] ring-1 ring-line transition-shadow hover:shadow-[0_30px_60px_-28px_rgba(28,9,90,0.55)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
              <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/0 to-transparent" />
              <h3 className="absolute bottom-5 left-6 text-2xl font-semibold text-white">{s.title}</h3>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="leading-relaxed text-muted">{s.tagline}</p>
              <ul className="mt-5 flex-1 space-y-1.5 text-[15px] text-heading">
                {s.offerings.slice(0, 3).map((o) => (
                  <li key={o.title} className="flex items-baseline gap-2.5">
                    <span aria-hidden="true" className="h-[2px] w-3 shrink-0 translate-y-[-3px] bg-accent-600" />
                    {o.title}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-heading group-hover:text-accent-ink">
                Explore {s.title.toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Rounded photo with the red logo stroke tucked on one corner */
export function PhotoFrame({ photo, className = "", ratio = "aspect-[4/5]", sizes = "(min-width: 1024px) 40vw, 100vw", priority = false }: { photo: Photo; className?: string; ratio?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={`relative ${className}`}>
      <div className={`relative overflow-hidden rounded-xl bg-brand-100 ${ratio}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </div>
  );
}

/* ---------- Cross-link to Management Solutions ---------- */
export function CrossLinkBanner({
  text = home.crossLink.text,
  subtext = home.crossLink.subtext,
  linkText = home.crossLink.linkText,
  href = managementSite,
}: {
  text?: string;
  subtext?: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <div className="grid overflow-hidden rounded-2xl bg-paper ring-1 ring-line md:grid-cols-[1.25fr_1fr]">
      <div className="flex flex-col justify-center p-8 sm:p-12">
        <p className="text-[13px] font-semibold text-accent-ink">Fidinda Management Solutions</p>
        <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-[1.9rem]">{text}</h2>
        {subtext && <p className="mt-4 max-w-lg leading-relaxed text-muted">{subtext}</p>}
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn-indigo mt-8 self-start">
          {linkText} <ExternalIcon className="h-4 w-4" />
        </a>
      </div>
      <div className="relative flex items-center justify-center bg-brand-900 px-4 py-8 sm:px-6">
        <RegistrationArt className="w-full max-w-[500px]" />
      </div>
    </div>
  );
}

/* ---------- Red call-to-action band ---------- */
export function CTAStrip({ heading = home.cta.heading, text = home.cta.text }: { heading?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-accent-600 text-white">
      <Mark animate={false} tone="dark" className="pointer-events-none absolute -right-10 top-1/2 h-[220%] -translate-y-1/2 opacity-[0.12] [&_path]:!stroke-white" />
      <div className="container relative flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-xl text-lg text-white/85">{text}</p>
        </div>
        <Link href="/request-quotation" className="btn shrink-0 bg-white px-6 py-3.5 text-brand-900 hover:bg-brand-50">
          Request a Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- Four divisions ---------- */
export function DivisionCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {divisions.map((d) =>
        d.current ? (
          <li key={d.name} aria-current="page" className="relative rounded-lg bg-brand-900 p-6 text-white">
            <span className="absolute left-6 top-0 h-[3px] w-10 bg-accent-600" />
            <p className="text-[13px] font-semibold text-accent-100">You are here</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{d.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-brand-100">{d.description}</p>
          </li>
        ) : (
          <li key={d.name}>
            <a href={d.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-heading">
              <p className="text-[13px] font-semibold text-muted">Sister division</p>
              <h3 className="mt-2 text-lg font-semibold">{d.name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{d.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-heading group-hover:text-accent-ink">
                Visit site <ExternalIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          </li>
        )
      )}
    </ul>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line py-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-semibold text-heading">
            {f.q}
            <span aria-hidden="true" className="relative mt-1.5 h-4 w-4 shrink-0">
              <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-accent-600" />
              <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-accent-600 transition-transform duration-300 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
