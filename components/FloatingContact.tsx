import { site, telegramLink } from "@/data/site";
import { TelegramIcon, WhatsAppIcon } from "./Icons";

/** Stacked Telegram + WhatsApp buttons, matching the sister sites. */
export default function FloatingContact() {
  const { whatsapp } = site.contact;
  const waText = encodeURIComponent("Hello Fidinda Financial Solutions, I'd like to ask about your services.");
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-50 flex flex-col items-center gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3 print:hidden">
      <a
          href={telegramLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on Telegram"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#229ED9] sm:h-[52px] sm:w-[52px] text-white shadow-lg transition-transform hover:scale-105"
        >
          <TelegramIcon className="h-5 w-5 -translate-x-px sm:h-6 sm:w-6" />
        </a>
      <a
        href={`https://wa.me/${whatsapp}?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/25 sm:h-14 sm:w-14 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
