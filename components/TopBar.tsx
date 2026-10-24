import { site } from "@/data/site";
import { MailIcon, PhoneIcon } from "./Icons";

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;

export default function TopBar() {
  const { phoneKhmer, phoneEnglish, email } = site.contact;
  return (
    <div className="bg-brand-950 text-[13px] text-brand-200">
      <div className="container flex items-center justify-center gap-6 py-2 sm:justify-between">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
          <PhoneIcon className="h-3.5 w-3.5 text-accent-500" />
          <span>Call us</span>
          <a href={tel(phoneKhmer)} className="font-semibold text-white hover:underline">{phoneKhmer}</a>
          <span>(Khmer)</span>
          <span aria-hidden="true" className="text-brand-600">|</span>
          <a href={tel(phoneEnglish)} className="font-semibold text-white hover:underline">{phoneEnglish}</a>
          <span>(English)</span>
        </p>
        <a href={`mailto:${email}`} className="hidden items-center gap-2 hover:text-white md:flex">
          <MailIcon className="h-3.5 w-3.5" /> {email}
        </a>
      </div>
    </div>
  );
}
