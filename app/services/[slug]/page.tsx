import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, photos, services } from "@/data/site";
import { CTAStrip, CrossLinkBanner, Faq, PageHero, PhotoFrame, SectionIntro } from "@/components/Sections";
import { ArrowRight, ShieldIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} Services in Phnom Penh`,
    description: s.seoDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | Fidinda Financial Solutions`, description: s.seoDescription, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <PageHero title={s.title} intro={s.tagline} crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]} image={s.image}>
        {s.credential && (
          <p className="mt-8 inline-flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-[15px] text-white">
            <ShieldIcon className="h-5 w-5 text-accent-500" /> {s.credential}
          </p>
        )}
      </PageHero>

      {/* What's included */}
      <section className="band">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionIntro title="What we do for you" intro={s.intro} />
            <Link href="/request-quotation" className="btn-red mt-8">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            <PhotoFrame photo={s.slug === "auditing" ? photos.reports : s.slug === "taxation" ? photos.advisor : photos.team} ratio="aspect-[4/3]" className="mt-10 hidden lg:block" sizes="35vw" />
          </div>
          <ul className="border-t border-line">
            {s.offerings.map((o) => (
              <li key={o.title} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-8">
                <h3 className="text-xl font-semibold">{o.title}</h3>
                <p className="leading-relaxed text-muted">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
        {s.note && (
          <div className="container mt-16">
            <CrossLinkBanner text={s.note.text} linkText={s.note.linkText} href={s.note.href} />
          </div>
        )}
      </section>

      {/* Benefits */}
      <section className="band bg-paper">
        <div className="container">
          <SectionIntro title="The benefits" />
          <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {s.benefits.map((b) => (
              <li key={b.title} className="border-t-2 border-heading pt-6">
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process — a real sequence, so it is numbered */}
      <section className="band bg-brand-900 text-white">
        <div className="container">
          <SectionIntro title="How it works" intro="Five steps from first conversation to ongoing support." light />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {s.process.map((p, i) => (
              <li key={p.title} className="bg-brand-900 p-7">
                <span className="font-display text-4xl font-semibold text-accent-500">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-100">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="band">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionIntro title="Frequently asked questions" />
            <p className="mt-6 text-muted">Can&apos;t find your answer? <Link href="/contact" className="text-link">Contact us</Link></p>
          </div>
          <Faq items={s.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-line">
        <div className="container grid sm:grid-cols-2">
          {others.map((o, i) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className={`group flex items-center justify-between gap-6 py-10 ${i === 0 ? "sm:border-r sm:border-line sm:pr-10" : "border-t border-line sm:border-t-0 sm:pl-10"}`}>
              <span>
                <span className="block text-[15px] text-muted">Also from Fidinda</span>
                <span className="mt-1 block font-display text-2xl font-semibold text-heading group-hover:text-accent-ink">{o.title}</span>
              </span>
              <ArrowRight className="h-6 w-6 text-heading transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <CTAStrip heading={`Get a quote for ${s.title.toLowerCase()}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
