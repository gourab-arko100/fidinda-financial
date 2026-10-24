import Image from "next/image";
import Link from "next/link";
import { footerColumns, site } from "@/data/site";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./Icons";

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;
const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon, TikTok: TikTokIcon } as const;

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "text-brand-100/85 transition-colors hover:text-white";
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

export default function Footer() {
  const { phoneKhmer, phoneEnglish, email, location } = site.contact;

  return (
    <footer className="relative bg-brand-900 text-white">
      {/* Red/indigo rule echoing the logo */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1">
        <span className="w-1/4 bg-accent-600" />
        <span className="flex-1 bg-brand-600" />
      </div>

      <div className="container grid gap-12 pb-14 pt-16 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))] lg:gap-10">
        {/* Brand + contact */}
        <div className="sm:max-w-sm">
          <Link href="/" aria-label={`${site.name} home`} className="inline-flex rounded-lg bg-white px-4 py-3 shadow-sm">
            <Image src="/logo.png" alt={site.name} width={620} height={126} className="h-9 w-auto" />
          </Link>
          <p className="mt-6 text-[15px] leading-relaxed text-brand-100">{site.footerAbout}</p>

          <ul className="mt-6 space-y-2.5 text-[15px] font-semibold">
            <li><a href={tel(phoneKhmer)} className="hover:text-accent-100">Call (Khmer)&nbsp; {phoneKhmer}</a></li>
            <li><a href={tel(phoneEnglish)} className="hover:text-accent-100">Call (English)&nbsp; {phoneEnglish}</a></li>
            <li>
              <span className="block">Email</span>
              <a href={`mailto:${email}`} className="[overflow-wrap:anywhere] hover:text-accent-100">{email}</a>
            </li>
            <li><a href={site.website.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-100">{site.website.label}</a></li>
          </ul>
          <p className="mt-3 text-[15px] text-brand-200">{location}</p>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">Follow us</p>
          <ul className="mt-4 flex gap-3">
            {site.social.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Fidinda on ${s.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-accent-600 hover:bg-accent-600"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-4 lg:gap-x-10">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-lg font-semibold text-white">{col.title}</h2>
              <ul className="mt-5 space-y-3.5 text-[15px]">
                {col.links.map((l) => (
                  <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="border-t border-white/10 py-7 text-[14px] font-medium text-brand-100">
          <p>{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
