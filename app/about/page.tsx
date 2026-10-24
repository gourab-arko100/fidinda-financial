import type { Metadata } from "next";
import Image from "next/image";
import { about, divisions, groupSite, home, photos } from "@/data/site";
import { CTAStrip, PageHero, PhotoFrame, SectionIntro } from "@/components/Sections";
import { BadgeIcon, ExternalIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fidinda Financial Solutions is a licensed GDT tax agent and KICPAA member providing accounting, taxation and auditing services in Phnom Penh, Cambodia.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Fidinda Financial Solutions", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Fidinda Financial Solutions"
        intro="Accounting, taxation and auditing for businesses and organisations operating in Cambodia."
        crumbs={[{ label: "About Us" }]}
        image={photos.team}
      />

      {/* Who we are */}
      <section className="band">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionIntro title="Who we are" />
            <PhotoFrame photo={photos.teamLaptop} ratio="aspect-[4/3]" className="mt-10" sizes="(min-width: 1024px) 35vw, 100vw" />
            <ul className="mt-6 space-y-4">
              {home.trustBadges.map((b, i) => {
                const Icon = i === 0 ? ShieldIcon : BadgeIcon;
                return (
                  <li key={b.detail} className="flex gap-4 rounded-lg bg-paper p-5">
                    <Icon className="h-7 w-7 shrink-0 text-accent-600" />
                    <p className="leading-snug">
                      <span className="block font-display font-semibold text-heading">{b.title}</span>
                      <span className="text-[15px] text-muted">{b.detail}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-6 text-lg leading-[1.8] text-muted">
            <p className="font-display text-2xl font-medium leading-[1.45] tracking-[-0.01em] text-heading">{about.whoWeAre[0]}</p>
            {about.whoWeAre.slice(1).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section id="mission" className="band scroll-mt-32">
        <div className="container space-y-20 sm:space-y-28">
          {[
            { title: "Our Vision", ...about.vision },
            { title: "Our Mission", ...about.mission },
          ].map((m, i) => (
            <div key={m.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={m.image}
                  alt={m.imageAlt}
                  width={760}
                  height={460}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[5/3] w-full rounded-xl object-cover shadow-[0_30px_60px_-30px_rgba(28,9,90,0.45)]"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="stroke-mark" />
                <h2 className="h-section mt-5">{m.title}</h2>
                <p className="mt-6 max-w-md font-display text-xl font-medium leading-[1.55] tracking-[-0.01em] text-heading sm:text-2xl">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Position within Fidinda Solutions */}
      <section className="band bg-paper">
        <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-accent-600">
              <span aria-hidden="true" className="h-[2px] w-8 bg-accent-600" /> {about.ecosystem.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[14ch] text-4xl font-semibold leading-[1.08] sm:text-5xl">{about.ecosystem.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{about.ecosystem.text}</p>
          </div>

          <div className="rounded-2xl bg-surface p-6 shadow-[0_30px_70px_-30px_rgba(28,9,90,0.35)] sm:p-8">
            <a
              href={groupSite.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-gradient-to-r from-brand-900 to-brand-700 px-6 py-5 text-center font-display text-lg font-semibold text-white transition-opacity hover:opacity-95"
            >
              {about.ecosystem.groupName}
            </a>
            <ul className="relative ml-3 mt-0 border-l border-line-strong pl-4 pt-7 sm:ml-4">
              {divisions.map((d) => (
                <li key={d.name} className="relative mb-3 last:mb-0">
                  <span aria-hidden="true" className="absolute -left-4 top-1/2 h-px w-4 bg-brand-200" />
                  {d.current ? (
                    <div aria-current="page" className="flex items-center justify-between gap-4 rounded-lg border border-accent-600 bg-accent-soft px-5 py-4">
                      <span className="font-display font-semibold text-heading">{d.name}</span>
                      <span className="shrink-0 rounded-full bg-accent-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">You are here</span>
                    </div>
                  ) : (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-surface px-5 py-4 transition-colors hover:border-heading"
                    >
                      <span className="font-display font-semibold text-heading">{d.name}</span>
                      <ExternalIcon className="h-4 w-4 shrink-0 text-brand-300 transition-colors group-hover:text-accent-600" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative isolate overflow-hidden bg-brand-900 py-24 text-white sm:py-32">
        <Image src={photos.skyline.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/60" />
        <div className="container max-w-4xl">
          <SectionIntro title="Our commitment" light />
          <p className="mt-8 font-display text-xl font-medium leading-[1.6] tracking-[-0.01em] text-white sm:text-2xl">{about.commitment}</p>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
