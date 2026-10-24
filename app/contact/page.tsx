import type { Metadata } from "next";
import Image from "next/image";
import { contactPage, photos, site, telegramLink } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/Sections";
import {
  CheckIcon, ExternalIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, TelegramIcon, TikTokIcon, WhatsAppIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Fidinda Financial Solutions in Phnom Penh. Call +855-12877547 (Khmer) or +855-17457244 (English), or email support@fidindasolutions.com.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Fidinda Financial Solutions", url: "/contact" },
};

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;
const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon, TikTok: TikTokIcon } as const;

export default function ContactPage() {
  const { phoneKhmer, phoneEnglish, email, location, whatsapp } = site.contact;
  const waText = encodeURIComponent("Hello Fidinda Financial Solutions, I'd like to ask about your services.");

  return (
    <>
      <PageHero title={contactPage.title} intro={contactPage.intro} crumbs={[{ label: "Contact Us" }]} overlap decor={false} image={photos.skyline} />

      <section className="bg-paper pb-20 sm:pb-28">
        <div className="container relative -mt-24 grid items-start gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
          {/* Form card */}
          <div className="rounded-2xl bg-surface p-6 shadow-[0_30px_70px_-30px_rgba(28,9,90,0.35)] sm:p-10">
            <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-600">
              <span aria-hidden="true" className="h-[2px] w-6 bg-accent-600" /> {contactPage.formEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-[2.2rem]">{contactPage.formTitle}</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{contactPage.formIntro}</p>
            <div className="mt-9"><ContactForm /></div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-40 lg:mt-32">
            <div className="rounded-2xl bg-brand-900 p-7 text-white">
              <Image src="/logo-white.png" alt={site.name} width={620} height={126} className="h-10 w-auto" />
              <p className="mt-3 text-[13px] font-medium text-brand-200">{contactPage.divisionLine}</p>

              <ul className="mt-7 space-y-4 text-[15px]">
                <li className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span className="space-y-1">
                    <span className="block">
                      <a href={tel(phoneKhmer)} className="font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">{phoneKhmer}</a>{" "}
                      <span className="text-[13px] text-brand-200">(Khmer)</span>
                    </span>
                    <span className="block">
                      <a href={tel(phoneEnglish)} className="font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">{phoneEnglish}</a>{" "}
                      <span className="text-[13px] text-brand-200">(English)</span>
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <a href={`mailto:${email}`} className="font-semibold underline decoration-white/30 underline-offset-4 [overflow-wrap:anywhere] hover:decoration-white">{email}</a>
                </li>
                <li className="flex gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span className="font-semibold">{location}</span>
                </li>
                <li className="flex gap-3">
                  <ExternalIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <a href={site.website.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">{site.website.label}</a>
                </li>
              </ul>

              <div className="mt-7 border-t border-white/15 pt-6">
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${whatsapp}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[14px] font-semibold text-white hover:brightness-95"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                      href={telegramLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#229ED9] px-4 py-2.5 text-[14px] font-semibold text-white hover:brightness-95"
                    >
                      <TelegramIcon className="h-4 w-4" /> Telegram
                    </a>
                </div>
                <ul className="mt-5 flex gap-2.5">
                  {site.social.map((s) => {
                    const Icon = socialIcons[s.name];
                    return (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Fidinda on ${s.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-accent-600 hover:bg-accent-600"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-7">
              <h2 className="text-lg font-semibold">Services at a glance</h2>
              <ul className="mt-5 space-y-3">
                {contactPage.glance.map((g) => (
                  <li key={g} className="flex items-center gap-3 text-[15px] text-ink">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                      <CheckIcon className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-tint p-7">
              <h2 className="text-lg font-semibold">{contactPage.noticeTitle}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{contactPage.notice}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
