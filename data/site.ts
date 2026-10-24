/**
 * ===========================================================
 *  FIDINDA FINANCIAL SOLUTIONS — ALL SITE TEXT LIVES HERE
 *  Edit this file to change any wording, phone number, package,
 *  resource entry, FAQ, etc. No other file needs touching.
 * ===========================================================
 */

export const site = {
  name: "Fidinda Financial Solutions",
  shortName: "Fidinda Financial",
  // Change to your production domain (used for sitemap, OG tags, canonical URLs)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://financial.fidindasolutions.com",
  seo: {
    title: "Fidinda Financial Solutions | Accounting, Tax & Audit Services in Phnom Penh",
    description:
      "Licensed tax agent and KICPAA member in Phnom Penh, Cambodia, offering bookkeeping, financial reporting, tax declarations, tax advisory and auditing services.",
    ogImage: "/og-image.png",
  },
  contact: {
    phoneKhmer: "+855-12877547",
    phoneEnglish: "+855-17457244",
    email: "support@fidindasolutions.com",
    location: "Phnom Penh, Cambodia",
    // Digits only, with country code, for WhatsApp / Telegram links
    whatsapp: "85512877547",
    telegramUsername: "", // e.g. "fidindasolutions" — if empty, Telegram opens a chat with the number below
    telegramPhone: "85512877547",
    // Paste the "src" URL from Google Maps → Share → Embed a map
    mapEmbedUrl:
      "https://www.google.com/maps?q=Phnom+Penh,+Cambodia&output=embed",
  },
  footerTagline: "One Brand. Four Specialised Solutions. A Shared Commitment to Excellence.",
  copyright:
    "© 2026 Fidinda Financial Solutions. All rights reserved. A division of Fidinda Financial and Management Solutions Co., Ltd.",
  footerAbout:
    "Helping businesses and organisations in Cambodia keep accurate books, file taxes on time and pass audits with confidence, with one team handling it all.",
  website: { label: "www.fidindasolutions.com", href: "https://fidindasolutions.com" },
  social: [
    { name: "Facebook", href: "https://www.facebook.com/share/19r5ibhQkV/" },
    { name: "Instagram", href: "https://www.instagram.com/fidinda.solutions?utm_source=qr&dlrf=MWU3N3g3ZmV5ZGcxMA==" },
    { name: "TikTok", href: "https://www.tiktok.com/@fidinda.solutions?_r=1&_t=ZS-9AnXoqbmtSW" },
  ] as const,
};

/**
 * PHOTOS — free to use under the Unsplash License (https://unsplash.com/license).
 * Swap any URL for your own photo: put the file in /public/images and use "/images/name.jpg".
 */
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=75`;
export const photos = {
  skyline: { src: u("photo-1723358049559-4f98d449ab92"), alt: "Phnom Penh city skyline" }, // Deepavali Gaind
  aerial: { src: u("photo-1645948715176-2641d507050f"), alt: "Aerial view of Phnom Penh, Cambodia" }, // SethiZelo Phat
  accounting: { src: u("photo-1772588627327-1eeddcf73c11"), alt: "Accountant reviewing documents with a calculator and laptop" }, // Kelly Sikkema
  tax: { src: u("photo-1772588627527-db42040f3a8b"), alt: "Calculator, pen and tax forms on a desk" }, // Kelly Sikkema
  reports: { src: u("photo-1707157284454-553ef0a4ed0d"), alt: "Financial charts and a smartphone on an office desk" }, // Jakub Zerdzicki
  audit: { src: u("photo-1626148749358-5b3b3f45b41a"), alt: "Magnifying glass on a printed document" }, // Mediamodifier
  team: { src: u("photo-1758873268745-dd2cf0d677b5"), alt: "Colleagues talking and laughing at their desks in an office" }, // Vitaly Gariev
  teamLaptop: { src: u("photo-1758691737124-05c5bffe46f0"), alt: "A team discussing work around a laptop" }, // Vitaly Gariev
  advisor: { src: u("photo-1758691737605-69a0e78bd193"), alt: "A smiling professional with glasses in an office" }, // Vitaly Gariev
  handshake: { src: u("photo-1521791136064-7986c2920216"), alt: "Two people shaking hands across a meeting table" }, // Cytonn Photography
} as const;
export type Photo = { src: string; alt: string };

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Accounting", href: "/services/accounting" },
      { label: "Taxation", href: "/services/taxation" },
      { label: "Auditing", href: "/services/auditing" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const divisions = [
  {
    name: "Fidinda Financial Solutions",
    href: "/",
    description: "Accounting, taxation and auditing.",
    current: true,
  },
  {
    name: "Fidinda Management Solutions",
    href: "https://management.fidindasolutions.com",
    description: "Business & NGO registration and project management.",
    current: false,
  },
  {
    name: "Fidinda Health Solutions",
    href: "https://fidinda-health.vercel.app",
    description: "Healthcare support and services.",
    current: false,
  },
  {
    name: "Fidinda Travel Solutions",
    href: "https://fidinda-travel.vercel.app",
    description: "Travel planning and arrangements.",
    current: false,
  },
];

/** Footer link columns — edit freely */
export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Accounting", href: "/services/accounting" },
      { label: "Bookkeeping", href: "/services/accounting" },
      { label: "Taxation", href: "/services/taxation" },
      { label: "Tax Audit Support", href: "/services/taxation" },
      { label: "Auditing", href: "/services/auditing" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "For Clients",
    links: [
      { label: "Packages", href: "/packages" },
      { label: "Request a Quote", href: "/request-quotation" },
      { label: "Local Legislations", href: "/resources#legislations" },
      { label: "Articles", href: "/resources#articles" },
      { label: "All Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Vision & Mission", href: "/about#mission" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Our Divisions",
    links: [
      { label: "Management Solutions", href: "https://management.fidindasolutions.com" },
      { label: "Health Solutions", href: "https://fidinda-health.vercel.app" },
      { label: "Travel Solutions", href: "https://fidinda-travel.vercel.app" },
      { label: "Fidinda Solutions Group", href: "https://fidindasolutions.com" },
    ],
  },
];

export const groupSite = { name: "Fidinda Solutions group", href: "https://fidindasolutions.com" };
export const managementSite = "https://management.fidindasolutions.com";

export const home = {
  hero: {
    eyebrow: "Accounting, taxation and auditing in Phnom Penh",
    heading: "Delivering Financial Clarity, Compliance, and Confidence",
    subtext:
      "Accounting, taxation and auditing services for businesses and organisations in Cambodia — handled accurately, on time, and with care.",
  },
  trustBadges: [
    { title: "Licensed Tax Agent", detail: "General Department of Taxation (GDT)" },
    { title: "Member", detail: "Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA)" },
  ],
  whyChooseUs: [
    {
      title: "Accuracy & Compliance",
      text: "Every figure is checked and every filing follows current Cambodian regulations, so you stay compliant with confidence.",
    },
    {
      title: "Timely Filing",
      text: "We track your deadlines and submit on time, helping you avoid penalties, interest and last-minute stress.",
    },
    {
      title: "Tailored Solutions",
      text: "From sole proprietors to NGOs and companies, our services are shaped around your size, sector and goals.",
    },
    {
      title: "Exceptional Value",
      text: "Professional, qualified support at fair, transparent prices — with packages that grow alongside your business.",
    },
  ],
  testimonial: {
    quote:
      "Fidinda's expertise in accounting and tax services has transformed our business. Their insights and support have been invaluable in making informed decisions. Highly recommended!",
    author: "CEO",
    company: "King Touch Business Co., Ltd",
    rating: 5,
  },
  crossLink: {
    text: "Need business registration, NGO registration or project management?",
    subtext: "Our sister division, Fidinda Management Solutions, handles company and NGO registration, licences and project management, so your setup and your books stay in one family.",
    linkText: "Visit Fidinda Management Solutions",
  },
  cta: {
    heading: "Become Our Client",
    text: "Tell us about your business and we'll prepare a quotation tailored to your needs.",
  },
};

export type ServiceSlug = "accounting" | "taxation" | "auditing";

export type Service = {
  slug: ServiceSlug;
  image: Photo;
  title: string;
  tagline: string;
  intro: string;
  credential?: string;
  offerings: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  note?: { text: string; linkText: string; href: string };
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "accounting",
    image: photos.accounting,
    title: "Accounting",
    tagline:
      "Empower your business with expert accounting solutions designed to optimise financial performance and ensure seamless compliance.",
    intro:
      "Reliable accounts are the foundation of every good business decision. We keep your books accurate and up to date, prepare your financial statements, and turn the numbers into reports you can actually use.",
    offerings: [
      {
        title: "Bookkeeping",
        text: "Day-to-day recording of sales, purchases, payroll and expenses, with monthly reconciliations of bank and cash accounts.",
      },
      {
        title: "Financial statement preparation",
        text: "Balance sheet, income statement, cash flow statement and notes prepared in line with Cambodian reporting standards.",
      },
      {
        title: "Financial reporting",
        text: "Clear monthly, quarterly or annual management reports that show performance, trends and where to focus next.",
      },
    ],
    benefits: [
      { title: "Up-to-date records", text: "Know exactly where your business stands at any time." },
      { title: "Compliance-ready books", text: "Accounts that support accurate tax filings and smooth audits." },
      { title: "Better decisions", text: "Reports that highlight costs, margins and cash flow clearly." },
      { title: "More time for you", text: "Leave the paperwork to us and focus on running your business." },
    ],
    process: [
      { title: "Consultation", text: "We learn about your business, current records and reporting needs." },
      { title: "Document Collection", text: "You share invoices, receipts, bank statements and other source documents." },
      { title: "Processing", text: "Our team records, categorises and reconciles every transaction." },
      { title: "Reporting", text: "We deliver financial statements and reports, and walk you through them." },
      { title: "Ongoing Support", text: "Regular updates and answers whenever questions come up." },
    ],
    faqs: [
      {
        q: "Do I need an accountant if my business is small?",
        a: "Yes — even small businesses in Cambodia must keep proper records for tax purposes. Outsourcing bookkeeping is often more affordable than hiring in-house staff.",
      },
      {
        q: "What documents do you need from me?",
        a: "Typically sales and purchase invoices, receipts, bank statements, payroll records and any contracts. We'll give you a simple checklist at the start.",
      },
      {
        q: "How often will I receive reports?",
        a: "Monthly by default, but we can provide quarterly or annual reporting depending on your package and needs.",
      },
      {
        q: "Can you take over from my previous accountant?",
        a: "Absolutely. We'll review your existing records, fix any gaps and continue from where they left off.",
      },
    ],
    seoDescription:
      "Bookkeeping, financial statement preparation and financial reporting for businesses and NGOs in Phnom Penh, Cambodia.",
  },
  {
    slug: "taxation",
    image: photos.tax,
    title: "Taxation",
    tagline:
      "Stay ahead of your tax obligations with precise and timely tax filing services that minimise stress.",
    intro:
      "Cambodian tax rules change often and deadlines are strict. As a licensed tax agent registered with the General Department of Taxation (GDT), we handle your registrations, declarations and reviews so you stay compliant and avoid penalties.",
    credential: "Licensed Tax Agent – General Department of Taxation (GDT)",
    offerings: [
      { title: "Monthly tax declarations", text: "Preparation and submission of monthly returns, including VAT, withholding tax, salary tax and prepayment of tax on income." },
      { title: "Annual tax declarations", text: "Annual tax on income returns prepared accurately and filed before the deadline." },
      { title: "Tax registration", text: "Registration with the GDT, VAT registration and updates to your tax information." },
      { title: "Tax advisory", text: "Practical advice on tax obligations, incentives and the tax impact of business decisions." },
      { title: "Tax compliance reviews", text: "A health check of your past filings to identify risks and correct issues early." },
      { title: "Tax audit support", text: "Preparation and representation during GDT tax audits, from document requests to final assessment." },
    ],
    benefits: [
      { title: "No missed deadlines", text: "We track every filing date for you." },
      { title: "Fewer penalties", text: "Accurate returns reduce the risk of fines and interest." },
      { title: "Licensed expertise", text: "Work with a GDT-registered tax agent." },
      { title: "Peace of mind", text: "Support on hand if the tax authority asks questions." },
    ],
    process: [
      { title: "Consultation", text: "We review your tax status, registrations and obligations." },
      { title: "Document Collection", text: "You provide invoices, payroll data and supporting records." },
      { title: "Processing", text: "We calculate your liabilities and prepare the declarations." },
      { title: "Reporting", text: "Returns are filed and you receive copies with a summary of what was paid." },
      { title: "Ongoing Support", text: "Monthly reminders, advisory and help with any GDT correspondence." },
    ],
    faqs: [
      {
        q: "When are monthly tax declarations due?",
        a: "Monthly declarations are generally due by the 20th of the following month (deadlines may be updated by the GDT). We keep track of the dates for you.",
      },
      {
        q: "What is a licensed tax agent?",
        a: "A tax agent licensed by the General Department of Taxation is authorised to prepare filings and represent taxpayers. Fidinda holds this licence.",
      },
      {
        q: "Can you help if I've fallen behind on filings?",
        a: "Yes. We'll review what's outstanding, prepare the missing declarations and help you get back into good standing.",
      },
      {
        q: "Do you support businesses during a tax audit?",
        a: "Yes — our tax audit support covers preparing documents, responding to GDT queries and attending meetings with you.",
      },
    ],
    note: {
      text: "Need business or NGO registration?",
      linkText: "See Fidinda Management Solutions",
      href: "https://management.fidindasolutions.com",
    },
    seoDescription:
      "Licensed GDT tax agent in Phnom Penh — monthly and annual tax declarations, tax registration, advisory, compliance reviews and tax audit support.",
  },
  {
    slug: "auditing",
    image: photos.audit,
    title: "Auditing",
    tagline:
      "Ensure financial transparency and integrity with meticulous auditing services and accurate reports for strategic decisions.",
    intro:
      "An independent audit gives owners, boards, donors and investors confidence in your numbers. As a member of the Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA), we carry out careful, objective audits and give you practical recommendations.",
    credential: "Member – Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA)",
    offerings: [
      { title: "Financial auditing services", text: "Independent examination of your financial statements to confirm they present a true and fair view." },
      { title: "Internal control review", text: "Assessment of your financial processes and controls, with clear recommendations for improvement." },
      { title: "Donor & project audits", text: "Audits for NGOs and funded projects to meet donor reporting requirements." },
    ],
    benefits: [
      { title: "Transparency", text: "Give stakeholders confidence in your financial information." },
      { title: "Stronger financial controls", text: "Identify weaknesses and reduce the risk of errors or fraud." },
      { title: "Accurate reports for decision-making", text: "Base strategy on verified, reliable figures." },
      { title: "Regulatory confidence", text: "Meet statutory and donor audit requirements." },
    ],
    process: [
      { title: "Consultation", text: "We agree the audit scope, timeline and requirements." },
      { title: "Document Collection", text: "You provide ledgers, statements and supporting evidence." },
      { title: "Processing", text: "Our auditors test transactions, balances and controls." },
      { title: "Reporting", text: "You receive the audit report and a management letter with findings." },
      { title: "Ongoing Support", text: "We help you act on recommendations before the next audit." },
    ],
    faqs: [
      {
        q: "Is my business required to have an audit?",
        a: "Certain entities in Cambodia must have their financial statements audited depending on size and type. We can assess whether the requirement applies to you.",
      },
      {
        q: "How long does an audit take?",
        a: "It depends on the size and complexity of your organisation and the quality of records — typically a few weeks from fieldwork to report.",
      },
      {
        q: "Do you audit NGOs and donor-funded projects?",
        a: "Yes. We regularly support NGOs with financial and project audits that meet donor reporting standards.",
      },
    ],
    seoDescription:
      "Financial auditing services by a KICPAA member firm in Phnom Penh — transparency, stronger controls and accurate reports.",
  },
];

export const packages = {
  intro:
    "Choose a starting point below. Every package can be adjusted — request a quote and we'll tailor it to your business.",
  // Placeholder packages — edit names, prices and features freely
  items: [
    {
      name: "Starter",
      price: "Contact us",
      period: "per month",
      description: "For sole proprietors and small businesses getting organised.",
      features: ["Monthly bookkeeping (up to 50 transactions)", "Monthly tax declaration", "Quarterly summary report", "Email support"],
      highlighted: false,
    },
    {
      name: "Business",
      price: "Contact us",
      period: "per month",
      description: "For growing companies that need full monthly support.",
      features: [
        "Monthly bookkeeping (up to 200 transactions)",
        "Monthly tax declarations",
        "Annual tax declaration",
        "Monthly management reports",
        "Tax advisory (2 hrs / month)",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise / NGO",
      price: "Custom",
      period: "quotation",
      description: "For larger organisations, NGOs and donor-funded projects.",
      features: [
        "Full accounting & financial statements",
        "All tax filings & compliance reviews",
        "Tax audit support",
        "Annual financial audit",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ],
};

export const resources = {
  intro: "Useful references on Cambodian tax and accounting rules, plus articles from our team.",
  // Add more entries by copying an object below
  legislations: [
    {
      title: "Law on Taxation (2023)",
      summary: "The main law governing taxes in Cambodia. Placeholder — replace with a summary and link.",
      href: "#",
      date: "2023",
    },
    {
      title: "Law on Accounting and Auditing",
      summary: "Requirements for keeping accounts and statutory audits. Placeholder entry.",
      href: "#",
      date: "2016",
    },
    {
      title: "GDT Prakas & Instructions",
      summary: "Latest notifications and instructions issued by the General Department of Taxation. Placeholder entry.",
      href: "#",
      date: "Updated regularly",
    },
  ],
  articles: [
    {
      title: "Monthly Tax Filing Checklist for Cambodian SMEs",
      summary: "A simple checklist to help you prepare for your monthly declarations. Placeholder article.",
      href: "#",
      date: "Coming soon",
    },
    {
      title: "Do You Need a Statutory Audit?",
      summary: "How to tell whether your organisation must be audited. Placeholder article.",
      href: "#",
      date: "Coming soon",
    },
    {
      title: "Five Bookkeeping Habits That Save You Money",
      summary: "Practical tips to keep your records clean all year. Placeholder article.",
      href: "#",
      date: "Coming soon",
    },
  ],
};

export const about = {
  whoWeAre: [
    "Fidinda Financial Solutions provides comprehensive accounting, taxation, and auditing services to businesses and organisations operating in Cambodia. Our services include bookkeeping, financial statement preparation, financial reporting, monthly and annual tax declarations, tax registration, tax advisory, tax compliance reviews, tax audit support, and financial auditing services.",
    "As a licensed tax agent registered with Cambodia's General Department of Taxation (GDT) and a member of the Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA), Fidinda is committed to supporting clients in maintaining financial transparency, meeting statutory obligations, strengthening financial controls, and making informed financial decisions.",
  ],
  ecosystem: {
    eyebrow: "Our position within Fidinda Solutions",
    title: "Part of a wider service ecosystem",
    text: "Fidinda Financial Solutions operates alongside Fidinda Management Solutions, Fidinda Health Solutions and Fidinda Travel Solutions. This wider service ecosystem allows appropriate coordination across different client needs, while accounting, taxation and auditing remain the specialist focus of our team.",
    groupName: "Fidinda Solutions",
  },
  partOf:
    "Fidinda Solutions is a diversified professional services company based in Phnom Penh, Cambodia. Established in 2023 as Fidinda Financial & Management Solutions Co., Ltd., the company has grown into four specialised divisions under one unified brand: Fidinda Financial Solutions, Fidinda Management Solutions, Fidinda Health Solutions, and Fidinda Travel Solutions.",
  vision: {
    text: "To create long-lasting partnerships with our clients, built on trust, integrity, and mutual growth.",
    // Sebastian Schuster on Unsplash (free licence). Swap for "/images/vision.jpg" to use your own.
    image: "https://images.unsplash.com/photo-1755474896784-8c4729fb1bc0?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "People silhouetted against tall windows, looking out over a city",
  },
  mission: {
    text: "To become a leading provider of innovative integrated solutions for transforming businesses and driving their growth.",
    // Vitaly Gariev on Unsplash (free licence)
    image: "https://images.unsplash.com/photo-1758691736836-0413b066787a?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "A team planning together with sticky notes on a glass wall",
  },
  commitment:
    "At Fidinda Solutions, we believe that professional services should go beyond completing transactions or fulfilling immediate requirements. Our objective is to build lasting relationships, understand the challenges of those we serve, and provide solutions that make a tangible difference. Whether supporting a business with bookkeeping, tax compliance or a financial audit, we bring the same dedication to professionalism, transparency, accountability, and customer satisfaction.",
};

export const contactPage = {
  title: "Contact us",
  intro: "Call, email or send a message. Our team speaks Khmer and English.",
  formEyebrow: "Financial enquiry",
  formTitle: "Tell us how we can help",
  formIntro:
    "Share a little about your business and what you need. We usually reply within one business day.",
  services: [
    "Accounting",
    "Bookkeeping",
    "Financial statements",
    "Monthly tax declaration",
    "Annual tax declaration",
    "Tax registration",
    "Tax advisory",
    "Tax compliance review",
    "Tax audit support",
    "Financial audit",
  ],
  topics: ["General question", "Request a quotation", "Existing client support", "Partnership", "Other"],
  contactMethods: ["Phone", "WhatsApp", "Telegram", "Email"],
  consent:
    "I agree that Fidinda Financial Solutions may contact me about this enquiry and keep the details I share confidential.",
  divisionLine: "A service division of Fidinda Solutions",
  glance: [
    "Bookkeeping and financial statements",
    "Monthly and annual tax declarations",
    "Tax registration and advisory",
    "Tax compliance reviews",
    "Tax audit support",
    "Independent financial audits",
  ],
  noticeTitle: "Important service information",
  notice:
    "Fees depend on transaction volume, scope of work and the records available. Tax filings are prepared in line with current General Department of Taxation (GDT) requirements, and final tax assessments rest with the relevant authorities. Information you share with us is kept confidential.",
};

export const quoteForm = {
  businessTypes: ["Company", "NGO", "Sole Proprietor", "Other"],
  services: [
    "Accounting",
    "Bookkeeping",
    "Monthly Tax Declaration",
    "Annual Tax Declaration",
    "Tax Registration",
    "Tax Advisory",
    "Tax Compliance Review",
    "Tax Audit Support",
    "Financial Audit",
  ],
  languages: ["Khmer", "English"],
};

export function telegramLink() {
  const { telegramUsername, telegramPhone } = site.contact;
  return telegramUsername ? `https://t.me/${telegramUsername}` : `https://t.me/+${telegramPhone}`;
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
