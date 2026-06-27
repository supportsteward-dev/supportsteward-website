import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/roles/")({
  head: () => ({
    meta: [
      { title: "Roles We Source — Support Steward" },
      {
        name: "description",
        content: "Browse 100+ remote roles we source across support, sales, operations, and more.",
      },
      { property: "og:title", content: "Roles We Source — Support Steward" },
      { property: "og:description", content: "Browse 100+ remote roles we source." },
    ],
    links: [{ rel: "canonical", href: "/roles" }],
  }),
  component: RolesIndex,
});

type Role = {
  title: string;
  category: string;
  savings: string;
  blurb: string;
  ranges: { region: string; range: string }[];
};

const roleSeed: {
  title: string;
  category: string;
  ph: number;
  latam: number;
  sa: number;
  savings: number;
  blurb: string;
}[] = [
  {
    title: "3D Renderer",
    category: "Creative",
    ph: 1400,
    latam: 2100,
    sa: 1800,
    savings: 68,
    blurb: "Photoreal 3D artists for product, architecture, and marketing visuals.",
  },
  {
    title: "Account Executive",
    category: "Sales",
    ph: 1600,
    latam: 2400,
    sa: 2000,
    savings: 65,
    blurb: "Quota-carrying closers who run discovery to contract.",
  },
  {
    title: "Accountant",
    category: "Finance",
    ph: 1500,
    latam: 2200,
    sa: 1900,
    savings: 70,
    blurb: "GAAP-savvy accountants for month-end close and reporting.",
  },
  {
    title: "Amazon Specialist",
    category: "Marketing",
    ph: 1300,
    latam: 2000,
    sa: 1700,
    savings: 68,
    blurb: "Listing, PPC, and Seller Central operators who move units.",
  },
  {
    title: "AP / AR Specialist",
    category: "Finance",
    ph: 1100,
    latam: 1700,
    sa: 1400,
    savings: 72,
    blurb: "Owns payables and receivables, reconciliations, and aging.",
  },
  {
    title: "Back-End Developer",
    category: "Technology",
    ph: 2600,
    latam: 3300,
    sa: 2900,
    savings: 62,
    blurb: "API, database, and infrastructure engineers.",
  },
  {
    title: "Bookkeeper",
    category: "Finance",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 73,
    blurb: "Day-to-day books in QuickBooks, Xero, or NetSuite.",
  },
  {
    title: "Client Relations Specialist",
    category: "Support",
    ph: 1100,
    latam: 1700,
    sa: 1400,
    savings: 70,
    blurb: "Builds long-term client trust across the lifecycle.",
  },
  {
    title: "Construction Admin",
    category: "Construction",
    ph: 1100,
    latam: 1700,
    sa: 1450,
    savings: 70,
    blurb: "Permits, submittals, RFIs — keeps projects moving.",
  },
  {
    title: "Content Writer",
    category: "Marketing",
    ph: 1000,
    latam: 1500,
    sa: 1450,
    savings: 75,
    blurb: "On-brand writers for blog, web, and lifecycle copy.",
  },
  {
    title: "Customer Support Rep",
    category: "Support",
    ph: 950,
    latam: 1450,
    sa: 1250,
    savings: 73,
    blurb: "Email, chat, and ticket support across time zones.",
  },
  {
    title: "Data Analyst",
    category: "Technology",
    ph: 1800,
    latam: 2600,
    sa: 2200,
    savings: 65,
    blurb: "SQL, dashboards, and crisp insights from messy data.",
  },
  {
    title: "Data Entry Clerk",
    category: "Assistant",
    ph: 800,
    latam: 1200,
    sa: 1050,
    savings: 75,
    blurb: "Accurate, fast, and meticulous data operators.",
  },
  {
    title: "Data Scientist",
    category: "Technology",
    ph: 2800,
    latam: 3600,
    sa: 3100,
    savings: 60,
    blurb: "Modeling, experimentation, and production ML.",
  },
  {
    title: "Digital Marketing Specialist",
    category: "Marketing",
    ph: 1400,
    latam: 2100,
    sa: 1800,
    savings: 67,
    blurb: "End-to-end channel ownership across digital.",
  },
  {
    title: "Email Marketer",
    category: "Marketing",
    ph: 1300,
    latam: 1950,
    sa: 1700,
    savings: 68,
    blurb: "Lifecycle, automations, and revenue from the inbox.",
  },
  {
    title: "Executive Assistant",
    category: "Assistant",
    ph: 1200,
    latam: 1800,
    sa: 1500,
    savings: 70,
    blurb: "Calendar, travel, and inbox triage for executives.",
  },
  {
    title: "Financial Analyst",
    category: "Finance",
    ph: 1700,
    latam: 2500,
    sa: 2100,
    savings: 66,
    blurb: "Forecasts, models, and board-ready analysis.",
  },
  {
    title: "Front-End Developer",
    category: "Technology",
    ph: 2400,
    latam: 3100,
    sa: 2700,
    savings: 63,
    blurb: "React, TypeScript, and modern UI engineers.",
  },
  {
    title: "Full-Stack Developer",
    category: "Technology",
    ph: 2800,
    latam: 3500,
    sa: 3000,
    savings: 60,
    blurb: "End-to-end engineers comfortable across the stack.",
  },
  {
    title: "Graphic Designer",
    category: "Creative",
    ph: 1200,
    latam: 1800,
    sa: 1500,
    savings: 70,
    blurb: "Brand-fluent designers for digital and print.",
  },
  {
    title: "Head of Finance",
    category: "Finance",
    ph: 3500,
    latam: 4500,
    sa: 4000,
    savings: 58,
    blurb: "Senior finance leadership without the in-house cost.",
  },
  {
    title: "Inventory Planner",
    category: "Operations",
    ph: 1300,
    latam: 1900,
    sa: 1600,
    savings: 68,
    blurb: "Forecast, replenish, and keep stock healthy.",
  },
  {
    title: "IT Systems Administrator",
    category: "Technology",
    ph: 1800,
    latam: 2600,
    sa: 2200,
    savings: 64,
    blurb: "Identity, devices, and SaaS administered properly.",
  },
  {
    title: "Lead Qualifier",
    category: "Sales",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 73,
    blurb: "Cleans, scores, and routes inbound and outbound leads.",
  },
  {
    title: "Leasing Consultant",
    category: "Operations",
    ph: 1100,
    latam: 1700,
    sa: 1400,
    savings: 70,
    blurb: "Tours, applications, and resident onboarding.",
  },
  {
    title: "Legal Assistant",
    category: "Operations",
    ph: 1200,
    latam: 1800,
    sa: 1500,
    savings: 70,
    blurb: "Calendaring, intake, and case prep support.",
  },
  {
    title: "Live Chat Agent",
    category: "Support",
    ph: 900,
    latam: 1400,
    sa: 1200,
    savings: 74,
    blurb: "Real-time chat coverage that converts and retains.",
  },
  {
    title: "Marketing Assistant",
    category: "Marketing",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 72,
    blurb: "Executes campaigns, content, and reporting.",
  },
  {
    title: "Marketing Designer",
    category: "Creative",
    ph: 1400,
    latam: 2100,
    sa: 1800,
    savings: 67,
    blurb: "Designs ads, landing pages, and lifecycle assets.",
  },
  {
    title: "Marketing Manager",
    category: "Marketing",
    ph: 2200,
    latam: 2900,
    sa: 2500,
    savings: 63,
    blurb: "Owns the plan, the team, and the number.",
  },
  {
    title: "Media Planner",
    category: "Marketing",
    ph: 1600,
    latam: 2300,
    sa: 2000,
    savings: 66,
    blurb: "Plans and buys across paid channels.",
  },
  {
    title: "Network Engineer",
    category: "Technology",
    ph: 2200,
    latam: 2900,
    sa: 2500,
    savings: 63,
    blurb: "LAN, WAN, and cloud networking professionals.",
  },
  {
    title: "Operations Assistant",
    category: "Operations",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 72,
    blurb: "Coordinates the work behind the work.",
  },
  {
    title: "Operations Manager",
    category: "Operations",
    ph: 1800,
    latam: 2500,
    sa: 2200,
    savings: 65,
    blurb: "Keeps the trains running with process and rigor.",
  },
  {
    title: "Paid Ads Manager",
    category: "Marketing",
    ph: 1700,
    latam: 2400,
    sa: 2100,
    savings: 65,
    blurb: "Google, Meta, and LinkedIn at performance scale.",
  },
  {
    title: "Paralegal",
    category: "Operations",
    ph: 1400,
    latam: 2000,
    sa: 1700,
    savings: 68,
    blurb: "Drafting, research, and case management.",
  },
  {
    title: "Phone Support Agent",
    category: "Support",
    ph: 950,
    latam: 1500,
    sa: 1250,
    savings: 73,
    blurb: "Friendly, clear voice support at scale.",
  },
  {
    title: "Photo Editor",
    category: "Creative",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 72,
    blurb: "Retouching and batch production for e-commerce and editorial.",
  },
  {
    title: "Procurement Specialist",
    category: "Operations",
    ph: 1300,
    latam: 1900,
    sa: 1600,
    savings: 68,
    blurb: "Sourcing, vendor terms, and PO management.",
  },
  {
    title: "Product Managers",
    category: "Technology",
    ph: 2600,
    latam: 3400,
    sa: 2900,
    savings: 62,
    blurb: "Discovery to delivery with engineering and design.",
  },
  {
    title: "Project Manager",
    category: "Operations",
    ph: 1800,
    latam: 2500,
    sa: 2200,
    savings: 64,
    blurb: "Scope, schedule, and stakeholders kept aligned.",
  },
  {
    title: "Property Improvement Specialists",
    category: "Construction",
    ph: 1200,
    latam: 1800,
    sa: 1500,
    savings: 70,
    blurb: "Coordinates renovations and capex work.",
  },
  {
    title: "Property Manager",
    category: "Operations",
    ph: 1500,
    latam: 2200,
    sa: 1900,
    savings: 67,
    blurb: "Owner-grade property operations and reporting.",
  },
  {
    title: "Quote Coordinator",
    category: "Operations",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 72,
    blurb: "Builds, tracks, and follows up on quotes.",
  },
  {
    title: "Real Estate Virtual Assistant",
    category: "Assistant",
    ph: 1000,
    latam: 1500,
    sa: 1300,
    savings: 72,
    blurb: "Listings, CRM, and transaction support.",
  },
  {
    title: "Sales Development Rep (SDR)",
    category: "Sales",
    ph: 1200,
    latam: 1800,
    sa: 1500,
    savings: 68,
    blurb: "Books qualified meetings, every week.",
  },
  {
    title: "Sales Manager",
    category: "Sales",
    ph: 2400,
    latam: 3200,
    sa: 2800,
    savings: 62,
    blurb: "Coaches reps and hits the team number.",
  },
  {
    title: "Sales Reps",
    category: "Sales",
    ph: 1400,
    latam: 2100,
    sa: 1800,
    savings: 67,
    blurb: "Full-cycle reps for SMB and mid-market motions.",
  },
  {
    title: "SEO Specialist",
    category: "Marketing",
    ph: 1400,
    latam: 2000,
    sa: 1700,
    savings: 67,
    blurb: "Technical, on-page, and content SEO that ranks.",
  },
  {
    title: "Shopify Admin",
    category: "Technology",
    ph: 1300,
    latam: 1900,
    sa: 1600,
    savings: 68,
    blurb: "Theme, apps, and catalog operators.",
  },
  {
    title: "Social Media Manager",
    category: "Marketing",
    ph: 1400,
    latam: 2100,
    sa: 1800,
    savings: 67,
    blurb: "Owns calendar, creative briefs, and community.",
  },
  {
    title: "Social Media Specialist",
    category: "Marketing",
    ph: 1100,
    latam: 1700,
    sa: 1400,
    savings: 70,
    blurb: "Posts, engages, and reports across platforms.",
  },
  {
    title: "Software Engineer",
    category: "Technology",
    ph: 2800,
    latam: 3600,
    sa: 3100,
    savings: 60,
    blurb: "Senior engineers across web, backend, and data.",
  },
  {
    title: "Underwriter",
    category: "Finance",
    ph: 1800,
    latam: 2500,
    sa: 2200,
    savings: 64,
    blurb: "Risk assessment for insurance and lending.",
  },
  {
    title: "Vendor Management Specialist",
    category: "Operations",
    ph: 1300,
    latam: 1900,
    sa: 1600,
    savings: 68,
    blurb: "Vendor performance, contracts, and renewals.",
  },
  {
    title: "Video Editor",
    category: "Creative",
    ph: 1300,
    latam: 1900,
    sa: 1600,
    savings: 68,
    blurb: "Short-form and long-form editors across platforms.",
  },
  {
    title: "Virtual Assistants",
    category: "Assistant",
    ph: 900,
    latam: 1400,
    sa: 1200,
    savings: 74,
    blurb: "Versatile VAs trained on your tools and SOPs.",
  },
  {
    title: "Website Developer",
    category: "Technology",
    ph: 2000,
    latam: 2700,
    sa: 2300,
    savings: 64,
    blurb: "Marketing sites, CMS, and landing page builds.",
  },
];

const roles: Role[] = roleSeed.map((r) => ({
  title: r.title,
  category: r.category,
  savings: `${r.savings}%`,
  blurb: r.blurb,
  ranges: [
    { region: "Philippines Average Salary", range: `$${r.ph.toLocaleString()}/month` },
    { region: "LatAm Average Salary", range: `$${r.latam.toLocaleString()}/month` },
    { region: "South Africa Average Salary", range: `$${r.sa.toLocaleString()}/month` },
  ],
}));

const categories = [
  "Assistant",
  "Support",
  "Sales",
  "Finance",
  "Construction",
  "Technology",
  "Creative",
  "Marketing",
  "Operations",
];

function RolesIndex() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      roles.filter(
        (r) =>
          (active.length === 0 || active.includes(r.category)) &&
          (q === "" || r.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, active],
  );
  const toggle = (c: string) =>
    setActive((a) => (a.includes(c) ? a.filter((x) => x !== c) : [...a, c]));

  return (
    <>
      <section className="bg-[var(--brand-navy)] py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            Support Steward has helped over 4,000 businesses hire more than 7,000 remote employees
            over the last few years.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/75">
            We source 100+ core roles across assistants, customer service, sales, finance,
            marketing, operations, HR, technology, construction, creative, and more.
          </p>
          <p className="mt-4 font-semibold">If you have another role in mind, just let us know.</p>
          <button
            className="mt-8 rounded-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-7 py-3 text-sm font-semibold"
            onClick={() =>
              document.getElementById("role-list")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Search
          </button>
        </div>
      </section>

      <section id="role-list" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold">Search</h3>
                <button className="text-xs text-[#14b8a6]" onClick={() => setQ("")}>
                  Clear
                </button>
              </div>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search"
                className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-[#14b8a6]"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold">Category</h3>
                <button className="text-xs text-[#14b8a6]" onClick={() => setActive([])}>
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggle(c)}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors cursor-pointer ${active.includes(c) ? "border-[#14b8a6] bg-[#14b8a6] text-white" : "border-border text-foreground/70 hover:border-[#14b8a6]"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-muted-foreground">
              <span>Sort by</span>
              <span>
                Showing 1 to {filtered.length} of {roles.length}
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((r, i) => (
                <Link
                  key={r.title}
                  to="/roles/$roleId"
                  params={{ roleId: r.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") }}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-lg hover:border-emerald-600/50 duration-300 block group cursor-pointer"
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={
                        [
                          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop",
                          "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
                          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=450&fit=crop",
                          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop",
                          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop",
                          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop",
                        ][i % 6]
                      }
                      alt={r.title}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute left-3 bottom-3 rounded-full bg-emerald-600/95 px-3 py-1 text-[11px] font-semibold text-white shadow">
                      {r.savings} average savings
                    </span>
                  </div>
                  <div className="p-5 text-left">
                    <div className="mb-2 flex gap-2 text-[11px] font-semibold">
                      <span className="rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 uppercase tracking-wider">
                        {r.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{r.blurb}</p>
                    <dl className="mt-4 space-y-1.5 text-sm">
                      {r.ranges.map((x) => (
                        <div
                          key={x.region}
                          className="flex justify-between border-t border-slate-200 pt-1.5"
                        >
                          <dt className="text-slate-500">{x.region}</dt>
                          <dd className="font-semibold text-slate-900">{x.range}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-navy)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#14b8a6]">
            Start Hiring
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Start Your Search Today</h2>
          <p className="mt-3 text-white/70">
            Let's talk and get you the best worldwide talent today.
          </p>
          <form className="mt-6 flex flex-col gap-3 rounded-full bg-white p-1.5 sm:flex-row">
            <input
              className="flex-1 rounded-full px-5 py-3 text-sm text-foreground outline-none"
              placeholder="What role are you looking for?"
            />
            <Link
              to="/start-hiring"
              className="rounded-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-6 py-3 text-sm font-semibold text-center"
            >
              Get Started
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
