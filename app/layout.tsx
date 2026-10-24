import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/data/site";

const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${site.name}` },
  description: site.seo.description,
  applicationName: site.name,
  keywords: ["accounting Phnom Penh", "tax agent Cambodia", "bookkeeping Cambodia", "audit Cambodia", "GDT tax declaration", "KICPAA"],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
    locale: "en_US",
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, images: [site.seo.ogImage] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0722" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  email: site.contact.email,
  telephone: site.contact.phoneKhmer,
  address: { "@type": "PostalAddress", addressLocality: "Phnom Penh", addressCountry: "KH" },
  areaServed: "Cambodia",
  parentOrganization: { "@type": "Organization", name: "Fidinda Solutions", url: "https://fidindasolutions.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply saved or device theme before paint, so there is no flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:font-semibold focus:text-heading focus:px-4 focus:py-2 focus:shadow">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
