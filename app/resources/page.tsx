import type { Metadata } from "next";
import { photos, resources } from "@/data/site";
import { articles } from "@/data/articles";
import { ArticleCards } from "@/components/Articles";
import { CTAStrip, PageHero, SectionIntro } from "@/components/Sections";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resources",
  description: "Cambodian tax and accounting legislation references and articles from Fidinda Financial Solutions.",
  alternates: { canonical: "/resources" },
  openGraph: { title: "Resources | Fidinda Financial Solutions", url: "/resources" },
};

type Entry = { title: string; summary: string; href: string; date: string };

function EntryList({ items }: { items: Entry[] }) {
  return (
    <ul className="mt-10 border-t border-line">
      {items.map((r) => {
        const external = r.href.startsWith("http");
        return (
          <li key={r.title} className="border-b border-line">
            <a
              href={r.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group grid gap-2 py-7 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-baseline md:gap-10"
            >
              <span className="text-[15px] font-medium text-muted">{r.date}</span>
              <span>
                <span className="block font-display text-xl font-semibold text-heading group-hover:text-accent-ink">{r.title}</span>
                <span className="mt-1.5 block max-w-2xl leading-relaxed text-muted">{r.summary}</span>
              </span>
              <ArrowRight className="hidden h-5 w-5 text-heading transition-transform group-hover:translate-x-1 md:block" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resources" intro={resources.intro} crumbs={[{ label: "Resources" }]} image={photos.tax}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#publications" className="btn-line-light">Publications</a>
          <a href="#articles" className="btn-line-light">Articles</a>
          <a href="#legislations" className="btn-line-light">Local legislations</a>
        </div>
      </PageHero>
      <section id="publications" className="band scroll-mt-32">
        <div className="container">
          <SectionIntro title="Publications" intro="Guides, calendars and reports prepared by our team." />
          <EntryList items={resources.publications} />
        </div>
      </section>
      <section id="articles" className="band scroll-mt-32 bg-paper">
        <div className="container">
          <SectionIntro title="Articles" intro="Practical guidance on tax, accounting, registration and management in Cambodia." />
          <div className="mt-12"><ArticleCards items={articles} /></div>
        </div>
      </section>
      <section id="legislations" className="band scroll-mt-32">
        <div className="container">
          <SectionIntro title="Local legislations" intro="Key Cambodian laws and regulations on tax, accounting and audit." />
          <EntryList items={resources.legislations} />
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
