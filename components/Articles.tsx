import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate, type Article, type Block } from "@/data/articles";
import { ArrowRight, CheckIcon } from "./Icons";

/* ---------- Card grid (Resources page, "More articles") ---------- */
export function ArticleCards({ items }: { items: Article[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
      {items.map((a) => (
        <li key={a.slug}>
          <Link href={`/articles/${a.slug}`} className="group flex h-full flex-col">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-tint">
              <Image src={a.image.src} alt={a.image.alt} fill sizes="(min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-snug transition-colors group-hover:text-accent-ink">{a.title}</h3>
            <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted">{a.summary}</p>
            <p className="mt-4 flex items-center gap-2 text-[14px] text-muted">
              <time dateTime={a.date}>{formatDate(a.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{a.readTime}</span>
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-heading group-hover:text-accent-ink">
              Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Article body ---------- */

/** "Label: rest" → bold label (only when the label is short) */
function labelled(text: string, sep: string): ReactNode {
  const i = text.indexOf(sep);
  if (i > 0 && i < 60) {
    return (
      <>
        <strong className="font-semibold text-heading">{text.slice(0, i)}</strong>
        {sep === ":" ? ":" : " – "}
        {text.slice(i + sep.length)}
      </>
    );
  }
  return text;
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="text-[17px] leading-[1.8] text-ink/90 sm:text-[18px] sm:leading-[1.85]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-14 text-2xl font-semibold leading-snug first:mt-0 sm:text-[1.75rem]">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-9 text-xl font-semibold leading-snug">
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-6 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3.5">
                    <span aria-hidden="true" className="mt-[0.85em] h-[2px] w-3.5 shrink-0 bg-accent-600" />
                    <span>{labelled(it, ":")}</span>
                  </li>
                ))}
              </ul>
            );
          case "checks":
            return (
              <ul key={i} className="mt-6 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3.5 rounded-lg border border-line bg-paper p-4 text-[17px] leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{labelled(it, " – ")}</span>
                  </li>
                ))}
              </ul>
            );
          default:
            return (
              <p key={i} className="mt-6 first:mt-0">
                {b.text}
              </p>
            );
        }
      })}
    </div>
  );
}
