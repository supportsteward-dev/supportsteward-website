import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/support-steward-logo.png";

const nav = [
  { to: "/services/direct-hire", label: "Products & Services" },
  { to: "/roles", label: "Roles we source" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="Support Steward" className="h-20 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/find-a-job"
            className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
          >
            Find a Job
          </Link>
          <Link
            to="/start-hiring"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Start Hiring
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i">☰</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                to="/find-a-job"
                className="flex-1 rounded-full bg-secondary px-4 py-2 text-center text-sm font-semibold text-secondary-foreground"
              >
                Find a Job
              </Link>
              <Link
                to="/start-hiring"
                className="flex-1 rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground"
              >
                Start Hiring
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const cols: { title: string; links: { label: string; to: string }[] }[] = [
    {
      title: "Pages",
      links: [
        { label: "Home", to: "/" },
        { label: "About us", to: "/about" },
        { label: "Roles we source", to: "/roles" },
        { label: "Contact", to: "/contact" },
        { label: "Pricing", to: "/pricing" },
      ],
    },
    {
      title: "Content",
      links: [
        { label: "Blog", to: "/blog" },
        { label: "Webinars", to: "/resources" },
        { label: "Workshops", to: "/resources" },
        { label: "Salary Calculator", to: "/resources" },
        { label: "Success Stories", to: "/resources" },
        { label: "Global Hiring Guide", to: "/resources" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Direct Hire", to: "/services/direct-hire" },
        { label: "Talent On-Demand", to: "/services/talent-on-demand" },
        { label: "Support Steward EOR", to: "/services/eor" },
      ],
    },
    {
      title: "Hire In",
      links: [
        { label: "Latin America", to: "/roles" },
        { label: "South Africa", to: "/roles" },
        { label: "Philippines", to: "/roles" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", to: "/legal/privacy" },
        { label: "Terms of Use", to: "/legal/terms" },
        { label: "Promotional Terms", to: "/legal/terms" },
        { label: "Consent Preferences", to: "/legal/privacy" },
      ],
    },
    {
      title: "Referrals",
      links: [
        { label: "Join Program", to: "/referrals" },
        { label: "Refer a Client", to: "/referrals" },
        { label: "Recover Code", to: "/referrals" },
        { label: "Track Referrals", to: "/referrals" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Facebook", to: "/" },
        { label: "Instagram", to: "/" },
        { label: "X", to: "/" },
        { label: "LinkedIn", to: "/" },
      ],
    },
  ];
  return (
    <footer className="mt-24 bg-[var(--brand-navy-deep)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-12 flex items-center gap-3">
          <img src={logo} alt="Support Steward" className="h-20 w-auto" />
          <span className="text-2xl font-semibold tracking-tight">Support Steward</span>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-7">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/60">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/85 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <span>© Copyright 2026 · Support Steward, LLC</span>
          <span>Developed by the Support Steward Team</span>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
