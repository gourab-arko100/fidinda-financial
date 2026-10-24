import Image from "next/image";
import Link from "next/link";
import { about, home, photos } from "@/data/site";
import { CTAStrip, CrossLinkBanner, PhotoFrame, SectionIntro, ServiceCards } from "@/components/Sections";
import { ArrowRight, BadgeIcon, ShieldIcon, StarIcon } from "@/components/Icons";

export default function HomePage() {
  const { hero, trustBadges, whyChooseUs, testimonial } = home;
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        <Image src={photos.aerial.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/92 to-brand-900/70" />

        <div className="container grid items-center gap-14 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pb-24 lg:pt-24">
          <div className="animate-rise">
            <p className="font-display text-[15px] font-medium text-brand-200">{hero.eyebrow}</p>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.04] text-white sm:text-6xl lg:text-[4.1rem]">{hero.heading}</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">{hero.subtext}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/request-quotation" className="btn-red px-6 py-3.5 text-base">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-line-light px-6 py-3.5 text-base">Our Services</Link>
            </div>
          </div>

          {/* Photo composition */}
          <div className="relative mx-auto w-full max-w-[540px] animate-rise [animation-delay:150ms]">
            <span aria-hidden="true" className="absolute -left-4 -top-4 h-24 w-24 border-l-[6px] border-t-[6px] border-accent-600" />
            <span aria-hidden="true" className="absolute -bottom-4 -right-4 h-24 w-24 border-b-[6px] border-r-[6px] border-white/80" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image src={photos.teamLaptop.src} alt={photos.teamLaptop.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 left-6 flex items-center gap-3 rounded-lg bg-surface px-5 py-4 text-heading shadow-[0_20px_40px_-16px_rgba(28,9,90,0.5)] sm:left-8">
              <ShieldIcon className="h-8 w-8 shrink-0 text-accent-600" />
              <p className="leading-tight">
                <span className="block font-display text-[15px] font-semibold">Licensed Tax Agent</span>
                <span className="text-[13px] text-muted">General Department of Taxation</span>
              </p>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="relative border-t border-white/10 bg-brand-950/40 backdrop-blur-sm">
          <ul className="container grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            {trustBadges.map((b, i) => {
              const Icon = i === 0 ? ShieldIcon : BadgeIcon;
              return (
                <li key={b.detail} className={`flex items-center gap-4 py-6 ${i === 1 ? "md:pl-10" : "md:pr-10"}`}>
                  <Icon className="h-8 w-8 shrink-0 text-accent-500" />
                  <p className="leading-snug">
                    <span className="block font-display font-semibold text-white">{b.title}</span>
                    <span className="text-[15px] text-brand-200">{b.detail}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="band">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative pb-16 pr-10 sm:pr-24">
            <PhotoFrame photo={photos.advisor} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 35vw, 80vw" />
            <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-xl border-[6px] border-surface shadow-[0_24px_50px_-24px_rgba(28,9,90,0.55)]">
              <div className="relative aspect-[4/3]">
                <Image src={photos.accounting.src} alt={photos.accounting.alt} fill sizes="25vw" className="object-cover" />
              </div>
            </div>
            <span aria-hidden="true" className="absolute left-6 top-0 h-[6px] w-20 -translate-y-1/2 bg-accent-600" />
          </div>
          <div>
            <SectionIntro title="Accounting, tax and audit support for organisations in Cambodia" />
            <div className="mt-7 space-y-5 text-lg leading-[1.75] text-muted">
              {about.whoWeAre.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <Link href="/about" className="text-link mt-7 inline-block">More about Fidinda</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="band bg-paper">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro title="Our services" intro="Three services, each handled by qualified people who know Cambodian regulations." />
            <Link href="/services" className="btn-line self-start md:self-auto">All services</Link>
          </div>
          <div className="mt-14"><ServiceCards /></div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="band">
        <div className="container grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <PhotoFrame photo={photos.handshake} ratio="aspect-[4/5] lg:aspect-[5/6]" />
            <div className="absolute -right-3 top-10 rounded-lg bg-brand-900 px-6 py-5 text-white shadow-xl sm:-right-6">
              <p className="text-[13px] text-brand-200">Established in</p>
              <p className="mt-1 font-display text-3xl font-semibold">2023</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionIntro title="Why choose us" />
            <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {whyChooseUs.map((w) => (
                <li key={w.title} className="border-t-2 border-heading pt-6">
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial over the city */}
      <section className="relative isolate overflow-hidden bg-brand-900 py-24 text-white sm:py-32">
        <Image src={photos.skyline.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-900/85" />
        <figure className="container max-w-4xl">
          <div className="flex gap-1 text-accent-500" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: testimonial.rating }).map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
          </div>
          <blockquote className="mt-8 font-display text-2xl font-medium leading-[1.4] tracking-[-0.01em] text-white sm:text-[2.1rem]">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="stroke-mark" />
            <span><span className="font-semibold text-white">{testimonial.author}</span>, <span className="text-brand-200">{testimonial.company}</span></span>
          </figcaption>
        </figure>
      </section>

      <section className="band">
        <div className="container"><CrossLinkBanner /></div>
      </section>

      <CTAStrip />
    </>
  );
}
