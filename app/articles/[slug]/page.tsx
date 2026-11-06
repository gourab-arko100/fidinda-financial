import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatDate, getArticle } from "@/data/articles";
import { site } from "@/data/site";
import { ArticleBody, ArticleCards } from "@/components/Articles";
import { CTAStrip } from "@/components/Sections";
import { ArrowRight, MailIcon, PhoneIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const description = a.summary.length > 160 ? `${a.summary.slice(0, 157).trimEnd()}…` : a.summary;
  return {
    title: a.title,
    description,
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description,
      url: `/articles/${a.slug}`,
      publishedTime: a.date,
      images: [{ url: a.image.src, alt: a.image.alt }],
    },
  };
}

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const { phoneKhmer, phoneEnglish, email } = site.contact;

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.date,
    image: a.image.src,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/logo.png` } },
  };

  return (
    <>
      {/* Header */}
      <section className="bg-brand-900 text-white">
        <div className="container pb-32 pt-14 sm:pt-16">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-brand-300">/</li>
              <li><Link href="/resources#articles" className="hover:text-white">Articles</Link></li>
            </ol>
          </nav>
          <div className="mt-8 max-w-4xl animate-rise">
            <span className="stroke-mark" />
            <h1 className="mt-6 text-3xl font-semibold leading-[1.15] text-white sm:text-5xl">{a.title}</h1>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-brand-200">
              <span>{site.name}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={a.date}>{formatDate(a.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{a.readTime}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cover image overlapping the header */}
      <div className="container -mt-24">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl bg-tint shadow-[0_40px_80px_-40px_rgba(28,9,90,0.55)] sm:aspect-[21/9]">
          <Image src={a.image.src} alt={a.image.alt} fill priority sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
        </div>
      </div>

      {/* Body + sidebar */}
      <section className="pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 xl:px-24">
          <article className="max-w-[44rem]">
            <ArticleBody blocks={a.body} />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-40 lg:self-start">
            <div className="rounded-2xl bg-brand-900 p-7 text-white">
              <h2 className="text-lg font-semibold text-white">Talk to our team</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-100">Questions about accounting, tax or audit? We reply within one business day.</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li className="flex items-center gap-2.5"><PhoneIcon className="h-4 w-4 text-accent-500" /><a href={tel(phoneKhmer)} className="font-semibold hover:underline">{phoneKhmer}</a><span className="text-[13px] text-brand-200">Khmer</span></li>
                <li className="flex items-center gap-2.5"><PhoneIcon className="h-4 w-4 text-accent-500" /><a href={tel(phoneEnglish)} className="font-semibold hover:underline">{phoneEnglish}</a><span className="text-[13px] text-brand-200">English</span></li>
                <li className="flex items-center gap-2.5"><MailIcon className="h-4 w-4 shrink-0 text-accent-500" /><a href={`mailto:${email}`} className="text-[14px] font-semibold [overflow-wrap:anywhere] hover:underline">{email}</a></li>
              </ul>
              <Link href="/request-quotation" className="btn-red mt-6 w-full">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <Link href="/resources#articles" className="flex items-center justify-between rounded-2xl border border-line bg-paper p-6 font-semibold text-heading transition-colors hover:border-heading">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      {/* More articles */}
      <section className="band bg-paper">
        <div className="container">
          <span className="stroke-mark" />
          <h2 className="h-section mt-5">More articles</h2>
          <div className="mt-12"><ArticleCards items={more} /></div>
        </div>
      </section>

      <CTAStrip />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
