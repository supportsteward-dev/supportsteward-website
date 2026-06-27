import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  Check,
  DollarSign,
  MapPin,
  Briefcase,
  Info,
  ShieldCheck,
  ChevronRight,
  Star,
  Users,
} from "lucide-react";

// Register route with TanStack Router
export const Route = createFileRoute("/roles/$roleId")({
  component: RoleDetails,
});

// Rich custom data for the first 8 roles
interface RoleDetailsData {
  title: string;
  category: string;
  savings: string;
  savingsUSD: string;
  heroText: string;
  heroImg: string;
  recommendRegion: string;
  recommendText: string;
  salaries: {
    junior: { us: string; latam: string; sa: string; ph: string };
    mid: { us: string; latam: string; sa: string; ph: string };
    senior: { us: string; latam: string; sa: string; ph: string };
  };
  countries: {
    ph: string;
    latam: string;
    sa: string;
  };
  challenges: string[];
  facts: string[];
  candidates: {
    name: string;
    region: string;
    years: number;
    skills: string[];
    img: string;
  }[];
}

const rolesData: Record<string, RoleDetailsData> = {
  "3d-renderer": {
    title: "3D Renderer",
    category: "Creative",
    savings: "68%",
    savingsUSD: "$63K",
    heroText:
      "Hire photorealistic 3D artists for product, architecture, and marketing visuals. High-fidelity rendering at a fraction of local agency costs.",
    heroImg: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=700&fit=crop",
    recommendRegion: "Latin America",
    recommendText:
      "Latin America produces world-class digital artists trained in modern design pipelines. We recommend LatAm for 3D Renderers due to near-perfect time-zone alignment, enabling real-time feedback loops on complex asset reviews and tight sprint deadlines.",
    salaries: {
      junior: { us: "$70K", latam: "$25.2K", sa: "$21.6K", ph: "$16.8K" },
      mid: { us: "$85K", latam: "$32K", sa: "$28K", ph: "$22K" },
      senior: { us: "$110K", latam: "$45K", sa: "$38K", ph: "$30K" },
    },
    countries: {
      ph: "Filipino 3D artists are highly proficient in asset modeling, texturing, and catalog rendering, offering excellent speed and low cost for e-commerce products.",
      latam:
        "Latin American rendering specialists excel in real-time time-zone collaboration, ideal for rapid feedback on architectural plans and creative visual sprints.",
      sa: "South African artists bring high design sophistication and European market familiarity, rendering premium property visuals and high-end marketing campaigns.",
    },
    challenges: [
      "Avoid High Studio Markups: Bypass traditional design agencies and hire dedicated artists directly.",
      "Accelerate Design Timelines: Set up follow-the-sun workflows with renders delivered overnight.",
      "Gain Creative Versatility: Access specialists in Blender, Maya, Unreal Engine, and V-Ray.",
      "Support Marketing Sprints: Ship ad creatives, CGI, and packaging designs faster and on-demand.",
      "Maintain Visual Quality: We source talent from elite design institutes with vetted portfolios.",
    ],
    facts: [
      "A dedicated remote renderer saves up to $63,000 annually compared to US in-house hires.",
      "Vetting focuses heavily on lighting, texture realism, and mesh hygiene.",
      "Top countries sourced include Brazil, Colombia, the Philippines, and South Africa.",
      "SLA targets guarantee draft turnarounds within 24 to 48 hours.",
      "Over 92% of client placements stay for more than 12 months.",
      "Nearshore LatAm talent provides 6-8 hours of working overlap for US clients.",
      "Artists are fully equipped with high-performance GPU rendering setups.",
      "We test candidates on a paid benchmark rendering challenge before sourcing.",
      "Contracts include clear intellectual property protection and NDA clauses.",
      "Support Stewards manage hardware provisioning and secure file transfers.",
    ],
    candidates: [
      {
        name: "Gabriel M.",
        region: "Brazil (LatAm)",
        years: 6,
        skills: ["Blender", "Unreal Engine", "V-Ray", "ArchViz"],
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      },
      {
        name: "Kristine G.",
        region: "Philippines",
        years: 4,
        skills: ["Maya", "Substance Painter", "Product CGI", "ZBrush"],
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
      },
    ],
  },
  "account-executive": {
    title: "Account Executive",
    category: "Sales",
    savings: "65%",
    savingsUSD: "$71K",
    heroText:
      "Hire quota-carrying closers who run discovery to contract. Build a high-performance outbound sales machine with bilingual and accent-fluent professionals.",
    heroImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=700&fit=crop",
    recommendRegion: "South Africa",
    recommendText:
      "South Africa produces highly articulate, accent-fluent, and culturally aligned sales professionals. We recommend South African Account Executives for their exceptional negotiation skills and experience in high-ticket B2B sales cycles.",
    salaries: {
      junior: { us: "$80K", latam: "$28.8K", sa: "$24K", ph: "$19.2K" },
      mid: { us: "$95K", latam: "$35K", sa: "$30K", ph: "$24K" },
      senior: { us: "$130K", latam: "$55K", sa: "$48K", ph: "$38K" },
    },
    countries: {
      ph: "Filipino AEs are well-suited for high-volume inside sales, SMB sales cycles, and account renewals, maintaining excellent customer rapport.",
      latam:
        "Bilingual LatAm AEs offer native Spanish and fluent English, ideal for targeting both US domestic and emerging Latin American markets.",
      sa: "South African sales reps bring high B2B sales sophistication, executive communication skills, and natural cultural alignment for North American prospects.",
    },
    challenges: [
      "Lower Customer Acquisition Costs: Scale your sales outbound team at a fraction of US base salaries.",
      "Boost Outbound Sales Pipeline: Dedicated closers focused entirely on pipeline progression and calls.",
      "Enforce CRM Discipline: Riggerous documentation of lead logs, deal states, and follow-ups in Salesforce.",
      "Achieve Quota Consistency: Motivated offshore reps striving to exceed sales benchmarks.",
      "Accent and Cultural Fluency: Vetted professionals who blend seamlessly into client-facing cycles.",
    ],
    facts: [
      "Hiring a remote Account Executive saves an average of $71,000 in base salary alone.",
      "Every candidate goes through a live mock discovery call test before profiling.",
      "Reps are trained on modern sales tools: Outreach, Salesforce, HubSpot, and ZoomInfo.",
      "Average ramp time is just 3 weeks due to pre-vetted sales training.",
      "South Africa offers a natural accent match for US, UK, and Australian audiences.",
      "Latin American reps provide full time-zone coverage for US East and West coasts.",
      "Commission structures are aligned with your existing US sales goals.",
      "Contracts enforce strict proprietary client list security and non-solicitation.",
      "94% of our placed AEs hit their monthly quota within the first 60 days.",
      "Dedicated account managers support onboarding and pipeline metrics review.",
    ],
    candidates: [
      {
        name: "Sipho N.",
        region: "South Africa",
        years: 5,
        skills: ["Salesforce", "Outreach.io", "B2B SaaS", "Cold Calling"],
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Camila R.",
        region: "Colombia (LatAm)",
        years: 4,
        skills: ["HubSpot", "Enterprise Sales", "Bilingual", "Lead Discovery"],
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      },
    ],
  },
  accountant: {
    title: "Accountant",
    category: "Finance",
    savings: "70%",
    savingsUSD: "$56K",
    heroText:
      "Hire GAAP-savvy offshore accountants for bookkeeping, month-end close, tax preparation, and financial auditing. Same accuracy, up to 78% payroll savings.",
    heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=700&fit=crop",
    recommendRegion: "Philippines",
    recommendText:
      "The Philippines boasts a massive pool of CPA-certified, US GAAP-trained accountants. We recommend the Philippines for Accountants due to their high precision, excellent audit compliance, and familiarity with QuickBooks, Xero, and NetSuite.",
    salaries: {
      junior: { us: "$66K", latam: "$33K", sa: "$27K", ph: "$20.4K" },
      mid: { us: "$77K", latam: "$42K", sa: "$36K", ph: "$24K" },
      senior: { us: "$110K", latam: "$60K", sa: "$54K", ph: "$30K" },
    },
    countries: {
      ph: "Filipino Accountants are ideal for bookkeeping, payroll, tax prep, and GAAP compliance — CPA-certified and highly affordable.",
      latam:
        "Latin American Accountants offer real-time U.S. time-zone alignment, perfect for managing collections, active billing, and day-to-day accounts.",
      sa: "South African Accountants deliver high English fluency with IFRS and international reporting standards, ideal for corporate audits.",
    },
    challenges: [
      "Reduce Payroll Costs Without Sacrificing Quality: Hire CPA-trained, highly skilled accountants offshore for up to 78% less.",
      "Free Leadership from the Numbers: Delegate reconciliations, ledger maintenance, and day-to-day books so you can focus on growth.",
      "Compliance and Payroll Made Simple: Avoid local payroll tax overhead and benefit from fully managed global invoicing.",
      "Accuracy That Protects Your Business: Secure ledger entries, zero double-entries, and clean trial balances prepared on schedule.",
      "Finance Teams That Scale With You: Build a multi-person support desk or scale from one accountant as transaction volume grows.",
    ],
    facts: [
      "Saves up to $56,000 annually per role compared to local US hires.",
      "All candidates complete a comprehensive bookkeeping and US GAAP test.",
      "Familiar with major platforms like NetSuite, QuickBooks, Xero, and Bill.com.",
      "We source CPAs with experience at Big 4 accounting firms (EY, PwC, Deloitte).",
      "Robust data security: remote desktops, encrypted systems, and SOC 2 audits.",
      "Daily working hours can be aligned to match US financial close schedules.",
      "Bilingual capabilities are standard for client-facing account reconciliation.",
      "Sourcing timelines average just 21 days from search kickoff to hire.",
      "Contracts are backed by a 6-month perfect-match replacement guarantee.",
      "We handle local employment compliance, benefit administration, and contracts.",
    ],
    candidates: [
      {
        name: "Maria Clara S.",
        region: "Philippines",
        years: 7,
        skills: ["CPA", "NetSuite", "US GAAP", "Month-end Close"],
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      },
      {
        name: "Johnathan D.",
        region: "South Africa",
        years: 5,
        skills: ["IFRS", "QuickBooks", "Tax Prep", "Financial Auditing"],
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
      },
    ],
  },
  "amazon-specialist": {
    title: "Amazon Specialist",
    category: "Marketing",
    savings: "68%",
    savingsUSD: "$52K",
    heroText:
      "Hire Seller Central, inventory, and Amazon PPC specialists. Grow your e-commerce brand, protect margins, and optimize listings for maximum visibility.",
    heroImg: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=900&h=700&fit=crop",
    recommendRegion: "Philippines",
    recommendText:
      "The Philippines is the global hub for Amazon virtual assistants and marketplace experts. We recommend the Philippines due to the sheer volume of talent experienced in managing high-volume Amazon FBA and FBM accounts, listing creation, and Seller Central metrics.",
    salaries: {
      junior: { us: "$60K", latam: "$24K", sa: "$20.4K", ph: "$15.6K" },
      mid: { us: "$72K", latam: "$32K", sa: "$28K", ph: "$22K" },
      senior: { us: "$95K", latam: "$45K", sa: "$40K", ph: "$32K" },
    },
    countries: {
      ph: "Filipino Amazon specialists own Seller Central operations, inventory forecasting, listing optimization, and customer service seamlessly.",
      latam:
        "LatAm specialists are excellent for real-time management of active PPC campaigns, influencer outreach, and brand registry troubleshooting.",
      sa: "South African marketers bring high analytical skills, managing complex listing strategies and writing high-converting SEO copy.",
    },
    challenges: [
      "Optimize PPC Spend: Maximize your Amazon ad budgets, lower ACoS, and raise organic ranking.",
      "Maintain Perfect Account Health: Monitor listing feedback, resolve buy-box suppression, and handle customer queries.",
      "Prevent Out-of-Stock Disasters: Rigorous inventory forecasting and coordinating shipments with FBA warehouses.",
      "Create SEO-Optimized Listings: Keyword-rich titles, product bullet points, and A+ content designs that convert.",
      "Handle Vendor/Seller Cases: Fast dispute management with Amazon support to keep listings active.",
    ],
    facts: [
      "Offshore specialists reduce overhead by up to 68%, saving around $52,000 yearly.",
      "Candidates are tested on PPC keyword bidding, FBA calculations, and listing audits.",
      "Familiar with Helium 10, Jungle Scout, Sellerboard, and Amazon Ads Console.",
      "Most specialists have managed stores with over $100K in monthly revenues.",
      "Placements include a comprehensive 6-month quality guarantee.",
      "Staff work on secure, client-managed remote environments to protect listing tokens.",
      "Bilingual English communication is standard for brand-level customer support.",
      "Talent shortlists are presented within 7 days of starting the search.",
      "We manage payroll, hardware shipping, and country-specific compliance.",
      "Ongoing partner reviews ensure your remote specialist scales with store catalog.",
    ],
    candidates: [
      {
        name: "Reynaldo B.",
        region: "Philippines",
        years: 5,
        skills: ["Seller Central", "Helium 10", "Amazon PPC", "FBA Logistics"],
        img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=300&h=300&fit=crop",
      },
      {
        name: "Lucia M.",
        region: "Mexico (LatAm)",
        years: 4,
        skills: ["A+ Content", "Listing SEO", "Jungle Scout", "Brand Registry"],
        img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&h=300&fit=crop",
      },
    ],
  },
  "ap-ar-specialist": {
    title: "AP / AR Specialist",
    category: "Finance",
    savings: "72%",
    savingsUSD: "$51K",
    heroText:
      "Streamline payables and receivables. Hire remote specialists to handle invoice verification, vendor payments, collections, aging reports, and cash reconciliation.",
    heroImg: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&h=700&fit=crop",
    recommendRegion: "South Africa",
    recommendText:
      "South African professionals excel in client-facing communication and billing management. We recommend South Africa for AP/AR Specialists due to their high English command and direct, polite approach to collections and outstanding invoice recovery.",
    salaries: {
      junior: { us: "$55K", latam: "$20.4K", sa: "$16.8K", ph: "$13.2K" },
      mid: { us: "$68K", latam: "$28K", sa: "$24K", ph: "$18K" },
      senior: { us: "$85K", latam: "$38K", sa: "$32K", ph: "$26K" },
    },
    countries: {
      ph: "Filipino AP/AR specialists provide accurate invoice matching, database log entries, and automated ledger updates at scale.",
      latam:
        "Latin American reps operate in real-time to coordinate client billing, handle credit lines, and process nearshore invoice cycles.",
      sa: "South African finance specialists bring professional English communication for debt collection and vendor terms negotiation.",
    },
    challenges: [
      "Eliminate Billing Backlogs: Process invoices, approvals, and expense logs on daily schedules.",
      "Recover Outstanding Receivables: Meticulous follow-ups on aging reports to improve cash flow.",
      "Reduce Vendor Friction: Accurate accounts payable matching (purchase order to receipt to invoice).",
      "Strengthen Ledger Accuracy: Routine ledger auditing, bank reconciliations, and expense logs.",
      "Banish Late Payment Fees: Ensure payables are cleared on schedule while protecting capital.",
    ],
    facts: [
      "Saves up to $51,000 annually per hire, reducing payroll costs by 72%.",
      "AP/AR candidates are tested on triple-matching, ledger entries, and communication.",
      "Systems experience includes Sage, QuickBooks, Xero, NetSuite, and Bill.com.",
      "South African reps offer excellent English fluency for billing collections.",
      "Nearshore LatAm reps manage payment gateways and wire transfer audits in real-time.",
      "Contracts enforce strict database security, remote VM access, and SOC 2 audits.",
      "Timelines to hire average just 14 to 21 days from intake call.",
      "Every candidate is backed by our standard 6-month replacement guarantee.",
      "We handle localized benefits, contract management, and hardware setup.",
      "Dedicated account managers check key performance KPIs regularly.",
    ],
    candidates: [
      {
        name: "Naledi M.",
        region: "South Africa",
        years: 5,
        skills: ["Sage", "Collections", "Aging Reports", "Invoicing"],
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop",
      },
      {
        name: "Jerome P.",
        region: "Philippines",
        years: 6,
        skills: ["QuickBooks", "Accounts Payable", "3-Way Matching", "Xero"],
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
      },
    ],
  },
  "back-end-developer": {
    title: "Back-End Developer",
    category: "Technology",
    savings: "62%",
    savingsUSD: "$85K",
    heroText:
      "Hire scalable database, API, and cloud infrastructure developers. Build robust backend systems with Node.js, Python, Java, or Go for up to 62% less payroll cost.",
    heroImg: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&h=700&fit=crop",
    recommendRegion: "Latin America",
    recommendText:
      "Latin America boasts a massive pool of senior software engineers. We recommend LatAm for Back-End Developers because of complete working-hours overlap with US engineering teams, making scrum standups, code reviews, and live collaboration effortless.",
    salaries: {
      junior: { us: "$95K", latam: "$39.6K", sa: "$34.8K", ph: "$31.2K" },
      mid: { us: "$120K", latam: "$55K", sa: "$48K", ph: "$42K" },
      senior: { us: "$165K", latam: "$85K", sa: "$75K", ph: "$65K" },
    },
    countries: {
      ph: "Filipino back-end developers are highly efficient for API maintenance, integrations, and server migrations in cost-effective teams.",
      latam:
        "Latin American developers offer perfect working hour overlap, ideal for agile dev teams, live debugging, and senior database setups.",
      sa: "South African developers bring strong technical schooling, building clean database models and microservices for international platforms.",
    },
    challenges: [
      "Access Hard-to-Find Tech Talent: Sift through vetted software engineers ready to build immediately.",
      "Reduce Development Payroll: Trim engineering budgets without compromising code quality.",
      "Integrate Seamlessly: Hire developers who match your current tech stack (Node, Go, Python, AWS).",
      "Accelerate Product Roadmaps: Keep feature shipping on track with dedicated remote coders.",
      "Maintain High Code Integrity: Sourced talent passes comprehensive code reviews and logic tests.",
    ],
    facts: [
      "Saves up to $85,000 per developer annually compared to in-house hires.",
      "Candidates complete a rigorous coding test (HackerRank/Coderbyte) before profiling.",
      "We source developers proficient in Node, Python, Django, Go, Java, AWS, SQL.",
      "LatAm nearshore timezone provides 8 hours of daily overlap with US teams.",
      "Every technical placement includes a 6-month performance guarantee.",
      "Developers work on secure environments using GitHub/GitLab enterprise guidelines.",
      "Shortlists are ready in just 10 days from technical intake kickoff.",
      "Staff are fluent in English and experienced with Jira, Agile, and Slack.",
      "We handle remote hardware provisioning (MacBooks/Laptops) and compliance.",
      "Account managers review developer commits and sprint KPIs monthly.",
    ],
    candidates: [
      {
        name: "Mateo S.",
        region: "Argentina (LatAm)",
        years: 6,
        skills: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop",
      },
      {
        name: "Devon L.",
        region: "South Africa",
        years: 5,
        skills: ["Python", "Django", "FastAPI", "MongoDB", "Kubernetes"],
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
      },
    ],
  },
  bookkeeper: {
    title: "Bookkeeper",
    category: "Finance",
    savings: "73%",
    savingsUSD: "$47K",
    heroText:
      "Maintain meticulous day-to-day accounts. Hire dedicated remote bookkeepers to process bank feeds, log receipts, run accounts, and ensure balance sheet accuracy.",
    heroImg: "https://images.unsplash.com/photo-1554224155-6f966b6705f5?w=900&h=700&fit=crop",
    recommendRegion: "Philippines",
    recommendText:
      "The Philippines is the premier location for outsourced financial bookkeeping. Filipino bookkeepers are highly detail-oriented, familiar with QuickBooks and Xero, and offer clean financial ledger management at low rates.",
    salaries: {
      junior: { us: "$48K", latam: "$18K", sa: "$15.6K", ph: "$12K" },
      mid: { us: "$62K", latam: "$24K", sa: "$21K", ph: "$15.6K" },
      senior: { us: "$78K", latam: "$35K", sa: "$30K", ph: "$24K" },
    },
    countries: {
      ph: "Filipino bookkeepers own bank reconciliations, receipt logging, QuickBooks updates, and ledger audits meticulously.",
      latam:
        "LatAm bookkeepers offer real-time expense matching and close alignment for managing daily transaction queries.",
      sa: "South African bookkeepers deliver clear financial records, structured bank feeds, and month-end preparation reports.",
    },
    challenges: [
      "Get Tax-Ready Books: Maintain daily, clean financial ledgers that make tax filing effortless.",
      "Automate Daily Bank Feeds: Reconcile deposits, credit card feeds, and wire transfers daily.",
      "Audit Travel and Business Expenses: Meticulous categorization of expense receipts and vendor logs.",
      "Speed Up Month-End Closing: Prepare accurate balance sheets and income reports on time.",
      "Minimize Bookkeeping Overhead: Hire experienced financial assistants at up to 73% savings.",
    ],
    facts: [
      "Saves up to $47,000 annually per bookkeeper hired, reducing payroll by 73%.",
      "All candidates pass QuickBooks/Xero testing and accounting basics audits.",
      "Specialists are trained on receipt management apps: Dext, Hubdoc, and Expensify.",
      "Most bookkeepers have experience managing multiple small-business accounts.",
      "Placements are backed by a 6-month perfect-match replacement guarantee.",
      "Client data is secured via VPNs, secure cloud folders, and encrypted databases.",
      "Shortlists of qualified candidates are delivered within 7 to 10 days.",
      "English communication is fluent and clear for transaction verification.",
      "We manage hardware setup, benefits, and local employment compliance.",
      "Account managers run bi-weekly reviews to check closing speeds and accuracy.",
    ],
    candidates: [
      {
        name: "Jonalyn C.",
        region: "Philippines",
        years: 6,
        skills: ["QuickBooks", "Xero", "Bank Reconciliation", "Dext"],
        img: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=300&h=300&fit=crop",
      },
      {
        name: "Renier V.",
        region: "South Africa",
        years: 4,
        skills: ["Excel", "Expensify", "Cash Flow Logs", "Balance Sheets"],
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
      },
    ],
  },
  "client-relations-specialist": {
    title: "Client Relations Specialist",
    category: "Support",
    savings: "70%",
    savingsUSD: "$53K",
    heroText:
      "Build long-term customer success and account trust. Settle account issues, handle onboarding, increase retention, and grow client lifecycle value.",
    heroImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&h=700&fit=crop",
    recommendRegion: "South Africa",
    recommendText:
      "South Africa has a strong culture of high-empathy customer success and account management. We recommend South African Client Relations Specialists due to their outstanding verbal communication and experience in corporate support.",
    salaries: {
      junior: { us: "$55K", latam: "$20.4K", sa: "$16.8K", ph: "$13.2K" },
      mid: { us: "$70K", latam: "$28K", sa: "$24K", ph: "$18K" },
      senior: { us: "$90K", latam: "$38K", sa: "$32K", ph: "$26K" },
    },
    countries: {
      ph: "Filipino client specialists handle high-volume accounts, manage ticketing queues, and run proactive email check-ins.",
      latam:
        "LatAm bilingual reps coordinate accounts in real-time, providing immediate phone and video customer support overlap.",
      sa: "South African reps excel in high-empathy customer management, executive phone success, and churn prevention.",
    },
    challenges: [
      "Prevent Customer Churn: Build direct rapport with key accounts to identify risk and save renewals.",
      "Speed Up Client Onboarding: Walk clients through setup guides, decreasing time-to-first-value.",
      "Maintain Excellent SLAs: Fast, detailed responses to client email, chat, and phone escalations.",
      "Increase Client Lifetime Value: Identify up-sell and cross-sell opportunities during health checks.",
      "Earn Client Testimonials: Build positive experiences that turn clients into active brand advocates.",
    ],
    facts: [
      "Saves up to $53,000 annually per hire, cutting support costs by 70%.",
      "Candidates are tested on mock escalations, customer empathy, and verbal skills.",
      "Familiar with Zendesk, Intercom, Salesforce, Slack, and Gainsight.",
      "Reps are highly fluent with neutral, warm English communication skills.",
      "South African reps offer excellent alignment for premium US and European accounts.",
      "All client lists and database logs are kept secure through SOC 2 structures.",
      "Vetted candidate shortlists are ready in just 7 days from setup call.",
      "Placements are backed by our standard 6-month matching guarantee.",
      "We manage hardware logistics, local benefits, and compliant employment contracts.",
      "Dedicated client partner managers review account retention health monthly.",
    ],
    candidates: [
      {
        name: "Thabo M.",
        region: "South Africa",
        years: 5,
        skills: ["Intercom", "Customer Success", "Account Retention", "Zendesk"],
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Luciana G.",
        region: "Mexico (LatAm)",
        years: 4,
        skills: ["Salesforce", "Client Onboarding", "Bilingual", "B2B Support"],
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
    ],
  },
};

function RoleDetails() {
  const { roleId } = Route.useParams();
  const [tab, setTab] = useState<"desc" | "facts">("desc");

  // Load target role details, fallback to generating dynamic content if not in the first 8
  const data = useMemo<RoleDetailsData>(() => {
    const key = roleId.toLowerCase();
    if (rolesData[key]) return rolesData[key];

    // Fallback generation for all other roles to ensure the page never breaks
    const title = roleId
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      title,
      category: "Operations",
      savings: "70%",
      savingsUSD: "$55K",
      heroText: `Hire a dedicated remote ${title} to streamline your business workflows. Source top global talent and save up to 70% on payroll overhead.`,
      heroImg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop",
      recommendRegion: "Philippines",
      recommendText: `We recommend the Philippines for sourcing a remote ${title} due to their rich pool of university-educated, English-fluent professionals and alignment with US standard workflows.`,
      salaries: {
        junior: { us: "$55K", latam: "$20K", sa: "$16K", ph: "$12K" },
        mid: { us: "$70K", latam: "$28K", sa: "$24K", ph: "$18K" },
        senior: { us: "$95K", latam: "$38K", sa: "$32K", ph: "$26K" },
      },
      countries: {
        ph: `Filipino ${title}s own day-to-day operations, task tracking, and email communications with high detail.`,
        latam: `Bilingual Latin American ${title}s provide real-time U.S. time-zone alignment for active daily workflows.`,
        sa: `South African ${title}s deliver high-level English fluency and executive task coordination for global teams.`,
      },
      challenges: [
        "Reduce Overhead Costs: Cut payroll expenses while adding top-quality operations support.",
        "Delegate Daily Workflows: Let a dedicated remote specialist handle execution logs and schedules.",
        "Improve Process Hygiene: Ensure logs, tickets, and spreadsheets are kept up to date daily.",
        "Scale Operations Fast: Build responsive teams without long hiring delays.",
        "Experience High Engagement: Sourced talent passes riggerous screening and tests.",
      ],
      facts: [
        "A dedicated remote specialist saves up to $55,000 per year compared to local US hires.",
        "All candidates complete thorough skills and verbal assessment tests.",
        "Reps are fully trained on remote team tools: Slack, Asana, Notion, and Google Suite.",
        "Timeline from search kickoff to candidate matches is averages 7 to 10 days.",
        "Every placement is backed by a 6-month perfect-match replacement guarantee.",
        "Robust security controls: remote desktops, encrypted environments, and contract NDAs.",
        "English speaking skills are vetted to guarantee professional executive standards.",
        "We handle localized payroll compliance, tax reporting, benefits, and contracts.",
        "Onboarding logistics and hardware shipping are completely managed by our team.",
        "Regular feedback calls ensure the placed specialist meets performance KPIs.",
      ],
      candidates: [
        {
          name: "John Doe",
          region: "Philippines",
          years: 5,
          skills: ["Task Management", "Slack", "G-Suite", "Data Entry"],
          img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
        },
        {
          name: "Jane Smith",
          region: "South Africa",
          years: 4,
          skills: ["Reporting", "SOP Writing", "Email Triage", "CRM Logs"],
          img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
        },
      ],
    };
  }, [roleId]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      {/* HEADER NAV / BACK TO ROLES */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <Link
          to="/roles"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Roles we source
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#14b8a6] bg-[#14b8a6]/10 px-3 py-1 rounded-full border border-[#14b8a6]/20">
              Role Target Sourcing
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
              Hire a Top{" "}
              <span className="underline decoration-[#ff6b35] decoration-3 underline-offset-4">
                {data.title}
              </span>
              . Same Quality. Up to {data.savings} Less.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">{data.heroText}</p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/start-hiring"
                className="rounded-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-7 py-3 text-base font-semibold shadow-lg shadow-[#ff6b35]/20 transition-all hover:scale-105 active:scale-95 duration-200"
              >
                Start Hiring
              </Link>
              <div className="flex -space-x-2">
                <img
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                  alt=""
                />
                <img
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt=""
                />
                <img
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                  alt=""
                />
              </div>
              <span className="text-sm font-medium text-slate-500">
                Trusted by 4,000+ businesses
              </span>
            </div>
            {/* Logo bar */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
                Supported clients include:
              </p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                <span className="font-bold text-slate-400 tracking-wider">JASPER</span>
                <span className="font-bold text-slate-400 tracking-wider">CLEARSTORY</span>
                <span className="font-bold text-slate-400 tracking-wider">R.E. COST SEG</span>
                <span className="font-bold text-slate-400 tracking-wider">CENTURY 21</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#14b8a6]/10 rounded-3xl -rotate-2 opacity-50 z-0"></div>
            <img
              src={data.heroImg}
              alt={`Remote ${data.title}`}
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl z-10 border border-white"
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR / STATS SECTION */}
      <section className="bg-[#00473e] py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#006054]/50 rounded-full blur-3xl -z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#14b8a6] bg-white px-3 py-1 rounded-full border border-[#14b8a6]/20 inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] animate-pulse"></span>{" "}
                Calculator
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                How much can you save hiring a {data.title}?
              </h2>
              <p className="text-[#14b8a6]/10 leading-relaxed text-base text-white/90">
                Somewhere has helped small business owners and companies hire skilled offshore
                Virtual Assistants for up to 65% less. Offshore Virtual Assistants manage
                administration & other adhoc tasks, so your leadership can focus on growth.
              </p>
              <p className="text-[10px] text-white/50 italic pt-6">
                *Salary figures are estimates based on industry data and may vary. This tool is for
                informational purposes only and not a binding salary guide.
              </p>
            </div>

            <div className="bg-[#003d35] rounded-3xl p-8 border border-white/5 shadow-2xl space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-4">
                  Save up to
                </h3>
                <div className="flex items-center gap-4">
                  <div className="bg-[#14b8a6] text-white text-4xl font-bold px-6 py-4 rounded-2xl flex items-center justify-center">
                    {data.savingsUSD}
                  </div>
                  <div>
                    <p className="text-lg font-bold">Average Savings</p>
                    <p className="text-sm text-white/60">per year compared to US rates</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 border-t border-white/10 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Junior</span>
                  <span className="font-semibold text-[#14b8a6]">59%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="bg-[#14b8a6] h-full rounded-full" style={{ width: "59%" }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Mid-level</span>
                  <span className="font-semibold text-[#14b8a6]">53%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="bg-[#14b8a6] h-full rounded-full" style={{ width: "53%" }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Senior</span>
                  <span className="font-semibold text-[#14b8a6]">51%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="bg-[#14b8a6] h-full rounded-full" style={{ width: "51%" }}></div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3">
                <h4 className="font-bold text-base flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#14b8a6]" />
                  We recommend {data.recommendRegion} for this role
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">{data.recommendText}</p>
              </div>

              {/* SALARY GRID */}
              <div className="border-t border-white/10 pt-6">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">
                      <th className="pb-2">Level</th>
                      <th className="pb-2">US</th>
                      <th className="pb-2">LatAm</th>
                      <th className="pb-2">South Africa</th>
                      <th className="pb-2">Philippines</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-bold">Junior</td>
                      <td className="py-2.5 text-white/60">{data.salaries.junior.us}</td>
                      <td className="py-2.5 text-white/60">{data.salaries.junior.latam}</td>
                      <td className="py-2.5 text-white/60">{data.salaries.junior.sa}</td>
                      <td className="py-2.5 text-[#14b8a6] font-bold">{data.salaries.junior.ph}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-bold">Mid-level</td>
                      <td className="py-2.5 text-white/60">{data.salaries.mid.us}</td>
                      <td className="py-2.5 text-white/60">{data.salaries.mid.latam}</td>
                      <td className="py-2.5 text-white/60">{data.salaries.mid.sa}</td>
                      <td className="py-2.5 text-[#14b8a6] font-bold">{data.salaries.mid.ph}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold">Senior</td>
                      <td className="py-2.5 text-white/60">{data.salaries.senior.us}</td>
                      <td className="py-2.5 text-white/60">{data.salaries.senior.latam}</td>
                      <td className="py-2.5 text-white/60">{data.salaries.senior.sa}</td>
                      <td className="py-2.5 text-[#14b8a6] font-bold">{data.salaries.senior.ph}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP COUNTRIES FOR HIRIING */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
            Top Countries for Sourcing a {data.title}
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Fast, supported, and flexible. We help you hire top global talent without the usual
            complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="bg-[#14b8a6]/10 h-10 w-10 rounded-full flex items-center justify-center font-bold text-[#14b8a6] text-sm">
              PH
            </div>
            <h3 className="text-lg font-bold text-slate-900">Philippines</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{data.countries.ph}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="bg-[#14b8a6]/10 h-10 w-10 rounded-full flex items-center justify-center font-bold text-[#14b8a6] text-sm">
              LA
            </div>
            <h3 className="text-lg font-bold text-slate-900">Latin America</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{data.countries.latam}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="bg-[#14b8a6]/10 h-10 w-10 rounded-full flex items-center justify-center font-bold text-[#14b8a6] text-sm">
              ZA
            </div>
            <h3 className="text-lg font-bold text-slate-900">South Africa</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{data.countries.sa}</p>
          </div>
        </div>
      </section>

      {/* EXPLORE THE ROLE SECTION */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Explore the Role, the Region, and the Process
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Hiring starts with the right information. Review details below.
            </p>

            <div className="mt-6 inline-flex p-1 bg-white border border-slate-200 rounded-full">
              <button
                onClick={() => setTab("desc")}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${tab === "desc" ? "bg-[#ff6b35] text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                Job Description
              </button>
              <button
                onClick={() => setTab("facts")}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${tab === "facts" ? "bg-[#ff6b35] text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                10 Facts
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg max-w-5xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=700&fit=crop"
                  alt="Remote Steward specialist"
                  className="w-full aspect-[4/3] rounded-2xl object-cover border border-slate-100 shadow-md"
                />
              </div>

              <div className="space-y-6">
                {tab === "desc" ? (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900">
                      How Sourcing Offshore {data.title}s Solves These Challenges
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      An offshore {data.title} isn't just about saving money. They give you back
                      time, reduce stress, and strengthen financial/operational confidence. Here is
                      what they solve:
                    </p>
                    <ul className="space-y-4">
                      {data.challenges.map((c, idx) => {
                        const parts = c.split(":");
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#14b8a6]/10 text-[#14b8a6] border border-[#14b8a6]/20">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-sm text-slate-600">
                              <strong className="text-slate-900">{parts[0]}:</strong>
                              {parts[1]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900">
                      10 Key Facts Sourcing a {data.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Important metrics, guidelines, and safeguards we establish when hiring for
                      this position:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {data.facts.map((f, idx) => (
                        <div
                          key={idx}
                          className="flex gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200"
                        >
                          <span className="font-bold text-[#14b8a6] text-sm">{idx + 1}.</span>
                          <span className="text-xs text-slate-600 leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANDIDATE SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Hire a Top 1% {data.title} in 21 Days.
          </h2>
          <p className="mt-4 text-sm text-slate-500">
            Our specialized recruitment team screens thousands of candidates. Meet a few
            representatives from our vetted network:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {data.candidates.map((c, idx) => (
            <div
              key={c.name}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex gap-5 items-start">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-[#14b8a6]"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-slate-900">{c.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#14b8a6]">
                    {c.region}
                  </p>
                  <p className="text-xs text-slate-500">{c.years} Years Relevant Experience</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                  Key Vetted Skills:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/start-hiring"
                  className="flex-1 rounded-full border border-slate-200 hover:border-[#14b8a6] text-slate-700 hover:text-[#14b8a6] text-xs font-semibold py-2.5 text-center transition-colors"
                >
                  Request Interview Video
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#ff6b35] py-16 text-center text-white relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ffffff] opacity-80">
            Start Sourcing
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-white">
            Hire Your Steward Today
          </h2>
          <p className="mt-3 text-white/90 leading-relaxed">
            Ready to add a dedicated, vetted {data.title} to your team? Sourcing is completely free
            for the first 30 days. Let's talk today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/start-hiring"
              className="rounded-full bg-white hover:bg-slate-50 text-[#ff6b35] px-8 py-3.5 text-sm font-semibold shadow-lg transition"
            >
              Start Intake Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
