import { site, telegramLink } from "@/data/site";
import { TelegramIcon, WhatsAppIcon } from "./Icons";

/** Stacked Telegram + WhatsApp buttons, matching the sister sites. */
export default function FloatingContact() {
  const { whatsapp } = site.contact;
  const waText = encodeURIComponent("Hello Fidinda Financial Solutions, I'd like to ask about your services.");
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 print:hidden">
      <a
          href={telegramLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on Telegram"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-transform hover:scale-105"
        >
          <TelegramIcon className="h-6 w-6 -translate-x-px" />
        </a>
      <a
        href={`https://wa.me/${whatsapp}?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/25 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
