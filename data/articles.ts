/**
 * ARTICLES — shown on /resources (Articles section) and each at /articles/<slug>.
 *
 * To add an article, copy one object below and change it.
 * Body blocks:
 *   { type: "p",  text: "..." }               paragraph
 *   { type: "h2", text: "..." }               section heading
 *   { type: "h3", text: "..." }               smaller heading
 *   { type: "ul", items: ["...", "..."] }     bullet list ("Label: text" makes the label bold)
 *   { type: "checks", items: ["Label – text"] } ticked list (text before " – " is bold)
 */
import { photos, type Photo } from "./site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "checks"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  image: Photo;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "maximizing-your-tax-service-experience",
    title: "Maximizing Your Tax Service Experience: A Guide for Medium and Large Companies in Cambodia",
    summary:
      "Learn how medium and large companies in Cambodia can optimize tax compliance, reduce risks, and maximize returns by partnering with a licensed tax service like Fidinda.",
    date: "2025-07-13",
    readTime: "3 min read",
    image: photos.skyline,
    body: [
      { type: "p", text: "In Cambodia’s rapidly growing economy, businesses—especially medium and large enterprises—face increasing complexity when it comes to tax compliance. From monthly declarations to annual income tax returns, staying on top of your obligations is essential not only to avoid penalties but also to maintain a trustworthy reputation with regulatory bodies and investors." },
      { type: "p", text: "In this context, engaging a professional and licensed tax agent isn’t a luxury—it’s a strategic necessity. This article will guide you through the best practices to get the most out of your tax service partnership and highlight how Fidinda Financial and Management Solutions Co., Ltd. can help optimize your compliance and reduce your tax burden." },

      { type: "h2", text: "Why Professional Tax Services Matter" },
      { type: "p", text: "Cambodian tax laws are continually evolving, and compliance requires consistent attention to detail. Whether it’s monthly VAT, salary tax, withholding tax declarations, or preparing your annual tax on income return, inaccuracies can lead to severe financial and legal consequences." },
      { type: "p", text: "Hiring a licensed tax agent ensures your filings are timely, accurate, and aligned with current General Department of Taxation (GDT) regulations. For medium and large companies with complex operations, professional services also offer:" },
      { type: "ul", items: ["Risk reduction in tax audits", "Strategic tax planning and advisory", "Accurate recordkeeping and digital submissions (e-filing)", "Representation and support during GDT inspections"] },

      { type: "h2", text: "Choosing the Right Tax Service Agency" },
      { type: "p", text: "Not all tax service providers are created equal. Choosing the right partner is key to a successful and stress-free tax process. Here’s what to consider:" },
      { type: "ul", items: [
        "Licensing and Registration: Always verify the agent is officially recognized by the GDT.",
        "Experience in Your Sector: Choose a firm with proven experience in your industry and understanding of sector-specific tax nuances.",
        "Comprehensive Service Offering: Look for agencies that offer more than just filing—like audit support, advisory, and compliance updates.",
        "Reputation and Reviews: Check client testimonials or request references from similar businesses.",
      ] },
      { type: "p", text: "At Fidinda, we are a licensed tax agent in Cambodia, known for our customized service model and extensive experience in handling medium to large companies with diverse portfolios." },

      { type: "h2", text: "Preparing for Your Tax Service Appointment" },
      { type: "p", text: "Being well-prepared ensures that your tax consultant can serve you efficiently. Before your engagement:" },
      { type: "ul", items: [
        "Organize All Financial Documents: Include income statements, balance sheets, invoices, contracts, payroll summaries, and bank statements.",
        "Update Business Information: Provide any changes in company address, shareholding, business activities, or capital updates to avoid registration mismatches.",
        "Review Previous Filings: Have prior tax returns or audit findings ready to identify trends or potential risks.",
      ] },

      { type: "h2", text: "Working with Your Tax Service Provider" },
      { type: "p", text: "Collaboration leads to compliance. Here’s how to get the most out of your tax service engagement:" },
      { type: "ul", items: [
        "Maintain Open Communication: Share all required documents promptly and inform the consultant of any business changes throughout the year.",
        "Ask Questions: Never hesitate to ask your provider for clarification about tax implications, documentation needs, or potential risks.",
        "Use Advisory Services: Go beyond filing. Engage with your provider to plan tax strategies that align with your company’s long-term goals.",
      ] },
      { type: "p", text: "At Fidinda, we pride ourselves on responsive communication, proactive advisory, and client education to ensure you’re always informed and in control." },

      { type: "h2", text: "Maximizing Your Tax Return" },
      { type: "p", text: "For medium and large companies, optimizing your tax position goes beyond just compliance. A good tax service will:" },
      { type: "ul", items: [
        "Identify Applicable Deductions and Credits: Especially around depreciation, fringe benefits, or business development expenses.",
        "Help You Structure Transactions Smartly: For example, planning capital investments or leasing arrangements for tax efficiency.",
        "Prepare for Future Filings: Through quarterly reviews, budgeting support, and audit preparedness.",
      ] },
      { type: "p", text: "At Fidinda, we support tax planning that improves your financial efficiency and reduces your exposure to unnecessary tax liability." },

      { type: "h2", text: "Conclusion: Fidinda is Your Partner in Tax Success" },
      { type: "p", text: "Tax compliance doesn’t need to be a burden. With the right approach and a trusted partner, it becomes a strategic advantage. From accurate monthly filings to strategic tax planning, Fidinda Financial and Management Solutions offers expert guidance tailored to your business’s size, sector, and compliance needs." },
      { type: "p", text: "Let us help you maximize your tax experience—with confidence, clarity, and compliance." },
    ],
  },
  {
    slug: "company-registration-in-cambodia",
    title: "Company Registration in Cambodia: Challenges and How to Overcome Them",
    summary:
      "Registering a Company in Cambodia? Avoid These Costly Mistakes! Starting a business in Cambodia is easy—but errors in legal structure, tax classification, or shareholding can lead to penalties & delays. Many local agencies miss key details due to language gaps & template-based approaches. At Fidinda, we help foreign investors (especially from India, Pakistan, Bangladesh, Sri Lanka, Nepal) register correctly—the first time! Expert guidance | Tailored solutions | No hidden costs",
    date: "2025-06-14",
    readTime: "2 min read",
    image: photos.handshake,
    body: [
      { type: "p", text: "Starting a business in Cambodia is relatively straightforward, but foreign investors often face unexpected hurdles due to miscommunication, legal misunderstandings, and lack of local expertise. While the process itself is not overly complex, choosing the wrong service provider or making errors in registration can lead to costly penalties, tax complications, and operational delays." },
      { type: "p", text: "At Fidinda Financial and Management Solutions Co., Ltd., we specialize in helping foreign entrepreneurs—particularly those from South and Southeast Asia—navigate Cambodia’s business landscape efficiently. Here’s what you need to know before registering your business in Cambodia." },

      { type: "h2", text: "Common Challenges in Business Registration" },
      { type: "h3", text: "1. Misunderstanding Your Business Nature" },
      { type: "p", text: "Many local registration agents follow a standard process but may not fully grasp the specifics of your business model. If your company’s objectives or activities are incorrectly classified, you could face legal issues, penalties, or even forced closure by relevant ministries." },
      { type: "h3", text: "2. Language Barriers" },
      { type: "p", text: "Cambodia is a Khmer-speaking country, and while some agents speak English, nuances in legal and financial terminology can get lost in translation. Miscommunication may lead to errors in documents like the Article of Association (AoA), which defines your company’s structure and operations." },
      { type: "h3", text: "3. Generic Article of Association (AoA) Drafting" },
      { type: "p", text: "Most local agencies use a template-based approach when drafting the AoA, which may not include critical clauses tailored to your business. Missing key provisions can create problems in governance, shareholder rights, and compliance." },
      { type: "h3", text: "4. Shareholding Structure Issues" },
      { type: "p", text: "Foreign investors often face confusion regarding share distribution, paid-up capital, and nominee requirements. Some service providers lack expertise in structuring equity properly, leading to future disputes or regulatory non-compliance." },
      { type: "h3", text: "5. Incorrect Patent Tax Registration" },
      { type: "p", text: "Choosing the wrong business activity code during tax registration can result in incorrect monthly tax filings. This may trigger audits, fines, or even suspension of business operations." },
      { type: "h3", text: "6. High Cost of Corrections" },
      { type: "p", text: "Fixing registration errors is expensive—sometimes as costly as starting a new business. Unfortunately, some agencies overlook this because they profit from repeated submissions." },

      { type: "h2", text: "Why Choose Fidinda as Your Business Registration Partner?" },
      { type: "p", text: "At Fidinda, we understand the complexities foreign investors face when setting up a business in Cambodia. Our founding director has extensive experience in South Asian business practices, and our team is well-versed in the legal and financial frameworks of Malaysia, Indonesia, and Singapore, making us the ideal partner for investors from these regions." },
      { type: "h3", text: "How We Help" },
      { type: "checks", items: [
        "Accurate Business Classification – We ensure your company’s objectives align with Cambodian regulations.",
        "Customized Article of Association – We draft AoAs tailored to your business needs, not just generic templates.",
        "Proper Share Structuring – We advise on optimal shareholding distribution and capital requirements.",
        "Correct Tax Registration – We register your business under the right tax category to avoid future penalties.",
        "Multilingual Support – Our team bridges the language gap between Khmer and English for seamless communication.",
      ] },

      { type: "h2", text: "Final Thoughts" },
      { type: "p", text: "Registering a business in Cambodia can be smooth—if done right the first time. Choosing an inexperienced or template-driven service provider can lead to unnecessary risks and expenses." },
      { type: "p", text: "At Fidinda, we prioritize accuracy, transparency, and long-term compliance so that your business starts on a strong legal foundation." },
    ],
  },
  {
    slug: "expert-financial-solutions-for-business-success",
    title: "Expert Financial Solutions for Your Business Success in Cambodia",
    summary:
      "Looking for expert financial services in Cambodia? Fidinda delivers trusted solutions in accounting, tax, compliance, and advisory—designed to boost your business success.",
    date: "2024-05-08",
    readTime: "3 min read",
    image: photos.tax,
    body: [
      { type: "p", text: "In Cambodia’s fast-evolving economic landscape, businesses of all sizes face increasing pressure to remain compliant, efficient, and competitive. Whether you're a start-up, NGO, or a growing enterprise, navigating financial regulations, managing operational complexities, and maintaining transparency can be daunting. That’s where Fidinda Financial and Management Solutions Co., Ltd. steps in—as your trusted partner for sustainable business success." },

      { type: "h2", text: "A One-Stop Hub for Professional Financial Services" },
      { type: "p", text: "At Fidinda, we don’t just offer accounting or tax filing—we offer peace of mind. Our comprehensive suite of services covers everything from financial advisory and compliance support to strategic business planning. We specialize in preparing financial statements, managing year-end closings, developing internal control systems, and implementing tailored accounting policies that reflect the unique context of each client." },
      { type: "p", text: "Our bookkeeping and reporting services ensure that your financial records are always accurate and audit-ready. Whether you’re a private firm or a non-profit, our expert team helps you align your financial operations with Cambodia’s regulatory environment and global best practices." },

      { type: "h2", text: "Taxation Made Simple and Strategic" },
      { type: "p", text: "Staying compliant with Cambodia’s complex tax system is crucial—but it doesn’t have to be stressful. Fidinda offers expert tax services, including monthly declarations (VAT, Salary Tax, Withholding Tax), annual returns, company status updates, tax registration, and refund applications. Our strategic tax planning helps you minimize liabilities while maximizing compliance. We also assist businesses with tax audits, providing advisory support every step of the way." },

      { type: "h2", text: "From Registration to Growth: We’re With You" },
      { type: "p", text: "Starting a new business or NGO? Our registration and licensing services make it simple. We handle everything from company formation and tax registration to compliance with the Ministry of Labour and the NSSF. Whether you're launching a local enterprise or an international NGO, our experienced consultants ensure a smooth, error-free process—so you can focus on your mission." },

      { type: "h2", text: "Enabling Transparency Through Auditing" },
      { type: "p", text: "In Cambodia, where donor confidence and investor trust hinge on transparency, proper auditing is non-negotiable. Fidinda prepares annual financial reports for unaudited companies and supports clients with e-filing and statutory compliance. Our audit-ready approach ensures your organization meets both legal and ethical standards." },

      { type: "h2", text: "Smart Technology, Smarter Decisions" },
      { type: "p", text: "Our software, applications, and cloud solutions are transforming the way Cambodian businesses operate. From finance and HR software customization to cloud-based reporting tools, we enable secure, scalable, and user-friendly solutions that boost operational efficiency. Our tech-driven services empower organizations to access real-time data for faster, better decision-making." },

      { type: "h2", text: "Specialized Contract and Project Management" },
      { type: "p", text: "Managing donor-funded projects or large contracts? Our robust contract and project management services are built to support compliance with donor regulations, procurement policies, and environmental-social safeguards. We provide efficient tracking systems, risk management tools, financial accountability frameworks, and inclusive monitoring systems—ensuring that every project is delivered successfully and ethically." },

      { type: "h2", text: "Evidence-Based Advisory for Strategic Growth" },
      { type: "p", text: "Our consultancy unit is equipped to deliver high-quality research, baseline studies, market analysis, and strategic advisory services. Whether it’s assessing climate risk, conducting evaluations based on OECD criteria, or planning policy advocacy, our insights help organizations navigate complexity and drive impact. In times of emergencies, we also offer need assessments to support responsive programming." },

      { type: "h2", text: "Building Capacity for a Competitive Future" },
      { type: "p", text: "At Fidinda, we believe that strong people build strong institutions. That’s why we offer cutting-edge training and capacity-building programs across areas like AI for development, proposal writing, HR analytics, governance, project management, and digital marketing. From local businesses to international organizations, we help teams acquire the skills needed for long-term success." },

      { type: "h2", text: "Why Choose Fidinda?" },
      { type: "p", text: "Fidinda Financial and Management Solutions is not just another consulting firm. We are a homegrown Cambodian company, grounded in local realities and backed by international expertise. Our mission is to support the financial health, governance, and growth of every client we serve. With a client-centric approach, competitive pricing, and a team of highly experienced professionals, we are committed to your success." },
      { type: "p", text: "If you’re ready to unlock your business’s full potential with expert support—Fidinda is here to help." },
    ],
  },
  {
    slug: "unlocking-business-success-with-management-solutions",
    title: "Unlocking Business Success with Fidinda’s Management Solutions",
    summary:
      "Explore how Fidinda empowers businesses and NGOs in Cambodia with expert contract management, governance systems, strategic advisory, and capacity-building solutions—designed to optimize operations and unlock long-term success.",
    date: "2024-05-08",
    readTime: "2 min read",
    image: photos.teamLaptop,
    body: [
      { type: "p", text: "In the dynamic and often unpredictable business environment of Cambodia, effective management can be the deciding factor between stagnation and sustainable growth. At Fidinda Financial and Management Solutions Co., Ltd., we understand that success goes beyond good products or services—it’s about how well your operations are structured, how efficiently your teams function, and how strategically your resources are managed. That’s why we offer a broad range of customized management solutions tailored to help organizations achieve clarity, compliance, and competitiveness." },

      { type: "h2", text: "Strategic Contract and Project Management That Delivers" },
      { type: "p", text: "Whether you’re managing donor-funded programs, public-private partnerships, or private contracts, execution is everything. At Fidinda, we offer comprehensive contract and project management services designed to align your operations with your strategic goals. We help clients monitor deliverables, milestones, budgets, and risks through systematic tracking and robust reporting tools." },
      { type: "p", text: "Our approach ensures:" },
      { type: "ul", items: ["Full compliance with Cambodian laws and donor requirements", "Transparent procurement and cost control", "Strong risk mitigation strategies", "Inclusive stakeholder participation", "Capacity building for project teams"] },
      { type: "p", text: "This holistic approach helps our clients deliver quality outcomes while staying on time and within budget—essentials in today’s highly accountable development and business sectors." },

      { type: "h2", text: "Organizational Governance & Compliance" },
      { type: "p", text: "Strong governance builds credibility. Our Governance and Compliance solutions help organizations set up transparent systems that promote ethical conduct, internal controls, and regulatory compliance. We support clients in aligning their practices with international standards such as ISO, GDPR, and donor-specific requirements. Whether you’re an NGO managing foreign grants or a business scaling operations, our governance advisory ensures your structures are sound, secure, and sustainable." },

      { type: "h2", text: "Research, Analysis, and Strategic Advisory" },
      { type: "p", text: "Good management is rooted in good data. Fidinda’s research and strategic advisory services provide businesses and NGOs with the insights needed to make confident decisions. From market studies and competitor analyses to climate risk assessments and policy reviews, we empower clients with evidence-based recommendations." },
      { type: "p", text: "We also conduct baseline, mid-line, and end-line surveys; develop impact evaluation frameworks aligned with OECD-DAC standards; and support clients in designing strategies that are both actionable and impactful." },

      { type: "h2", text: "Capacity Building for High-Performance Teams" },
      { type: "p", text: "People are your greatest asset. That’s why we offer training and capacity-building programs that focus on leadership, team dynamics, human resource management, and digital transformation. We help companies and NGOs build strong internal systems by developing the managerial capabilities of their staff." },
      { type: "p", text: "From proposal writing for major donors (EU, USAID, ECHO) to AI-powered productivity tools, our capacity-building services are rooted in practical skills development and strategic learning—helping your teams deliver results more effectively." },

      { type: "h2", text: "Integrated Software and Cloud Management Tools" },
      { type: "p", text: "Efficiency begins with the right systems. Fidinda implements and customizes finance and HR software, cloud-based platforms, and data analytics tools that support smarter business management. We help you move from spreadsheets to integrated dashboards—making your operations faster, more secure, and data-driven." },
      { type: "p", text: "Our digital management solutions ensure:" },
      { type: "ul", items: ["Centralized control over project and HR activities", "Enhanced financial transparency", "Scalable infrastructure for growing businesses", "Real-time access and data backup security"] },

      { type: "h2", text: "Why Fidinda?" },
      { type: "p", text: "As a Cambodian-grown company with deep roots in the local context and a forward-looking mindset, Fidinda Financial and Management Solutions blends regulatory expertise, sectoral insight, and cutting-edge tools to unlock your full management potential. Whether you're managing complex contracts, building a high-performance team, or designing your next growth strategy—we’re here to guide you every step of the way." },
      { type: "p", text: "Success isn’t just about doing things right—it’s about managing them wisely. Let Fidinda help you turn management into momentum." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
