# Fidinda Financial Solutions — Website

Accounting, taxation and auditing division of Fidinda Solutions (Phnom Penh, Cambodia).
Built with Next.js 15 (App Router), TypeScript and Tailwind CSS.

## Project structure

```
app/                     Pages (App Router)
  page.tsx               Home
  about/                 About Us
  services/              Services overview
  services/[slug]/       /services/accounting, /taxation, /auditing
  packages/              Packages
  resources/             Local Legislations + Articles
  request-quotation/     Request for Quotation form
  contact/               Contact page + form + map
  api/quote/route.ts     Sends quotation requests to Telegram
  api/contact/route.ts   Sends contact messages to Telegram
  sitemap.ts, robots.ts  SEO
  not-found.tsx          404 page
components/              Header, Footer, forms, shared sections
data/site.ts             ← ALL TEXT CONTENT. Edit this file.
lib/telegram.ts          Telegram helper
public/                  logo.png, logo-white.png, icon.png, og-image.png
tailwind.config.ts       ← Brand colours (brand = logo indigo, accent = logo red)
next.config.mjs          Redirects for old URLs (commented examples)
```

## Things to customise

| What | Where |
|---|---|
| Logo | `public/logo.png` (header), `public/logo-white.png` (footer), `public/icon.png` (browser tab) — all made from your logo |
| Photos | `data/site.ts` → `photos` (Unsplash links; swap for your own files in `public/images/`) |
| Social share image | Replace `public/og-image.png` (1200×630) |
| Light / dark theme | Sun/moon button in the header. Theme colours are the `--surface`, `--paper`, `--ink`, `--heading`… values at the top of `app/globals.css` (`:root` = light, `.dark` = dark) |
| Brand colours | `tailwind.config.ts` → `brand` (logo indigo #1C095A) and `accent` (logo red #E1041C) |
| Vision / Mission | `data/site.ts` → `about.vision`, `about.mission` (text + photo link) |
| Packages | `data/site.ts` → `packages.items` |
| Legislations / Articles | `data/site.ts` → `resources` (copy an entry to add more) |
| WhatsApp / Telegram button | `data/site.ts` → `contact.whatsapp`, `contact.telegramUsername` |
| Old URL redirects | Uncomment lines in `next.config.mjs` |

## Run locally

Requires Node.js 18.18+ (Node 20 or 22 recommended).

```bash
npm install
cp .env.example .env.local      # Windows: copy .env.example .env.local
# edit .env.local with your Telegram values
npm run dev
```

Open http://localhost:3000

### Getting Telegram values

1. In Telegram, message **@BotFather** → `/newbot` → copy the token into `TELEGRAM_BOT_TOKEN`.
2. Send any message to your new bot (or add it to a group and send a message there).
3. Open `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` in a browser.
4. Copy the `chat.id` value into `TELEGRAM_CHAT_ID` (group IDs start with `-100`).
5. Restart `npm run dev` and submit a test form.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. On https://vercel.com → **Add New → Project** → import the repo (framework auto-detects as Next.js).
3. Under **Environment Variables** add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` and `NEXT_PUBLIC_SITE_URL`.
4. Click **Deploy**.
5. To use a subdomain such as `financial.fidindasolutions.com`: Project → Settings → Domains → add it,
   then create the CNAME record Vercel shows at your DNS provider.

Production check: `npm run build && npm start`.
