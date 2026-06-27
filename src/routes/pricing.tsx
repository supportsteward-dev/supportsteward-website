import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Support Steward" },
      { name: "description", content: "Transparent pricing for Direct Hire and Talent On-Demand." },
      { property: "og:title", content: "Pricing — Support Steward" },
      {
        property: "og:description",
        content: "Transparent pricing for Direct Hire and Talent On-Demand.",
      },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const directSteps = [
  {
    title: "Refundable Deposit & Search",
    body: "A $500 refundable deposit kicks off the search and is applied to your final invoice.",
  },
  {
    title: "Offer Signed",
    body: "When the candidate signs, we invoice a one-time recruiting fee of 25–35% of first-year salary.",
  },
  {
    title: "6-Month Guarantee",
    body: "If it doesn't work out within 6 months, we re-run the search at no additional cost.",
  },
  {
    title: "Custom Plans",
    body: "Hiring 20+ roles? We tailor pricing, compliance, and onboarding to your scale.",
  },
];

const todSteps = [
  {
    title: "Refundable Deposit & Search",
    body: "A $500 refundable deposit unlocks your search, applied to your first month of service.",
  },
  {
    title: "Statement of Work Confirmed",
    body: "We align on scope, hours, and outcomes for your on-demand Steward.",
  },
  {
    title: "Performance Guarantee",
    body: "Replace any team member during the first month — no questions asked.",
  },
  { title: "Custom Plans", body: "Need a fractional pod or 24/7 coverage? We'll architect it." },
];

function StepRow({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-4">
      {steps.map((s, i) => (
        <div key={s.title} className="text-center">
          <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground shadow">
            {i + 1}
          </div>
          <h3 className="mt-4 font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function Pricing() {
  return (
    <>
      <section className="bg-[var(--brand-navy)] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Last month we helped over 275 companies save 80% on hiring costs.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=600&fit=crop"
          alt="Team celebrating a new hire"
          className="aspect-[21/9] w-full rounded-3xl object-cover shadow-md"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">How Direct Hire Pricing Works</h2>
          <p className="mt-3 text-muted-foreground">
            A simple, transparent path from search to signed offer.
          </p>
        </div>
        <StepRow steps={directSteps} />
        <div className="mt-10 text-center">
          <Link
            to="/start-hiring"
            className="inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Get Started
          </Link>
          <p className="mt-2 text-xs text-muted-foreground">First call is always free.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            How Talent-On-Demand Pricing Works
          </h2>
          <p className="mt-3 text-muted-foreground">Simple monthly pricing. No hidden costs.</p>
        </div>
        <StepRow steps={todSteps} />
        <div className="mt-10 text-center">
          <Link
            to="/start-hiring"
            className="inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Talent on Demand
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Which Hiring Model Fits Your Team Best?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Compare Direct Hire and Talent-On-Demand side by side.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted text-left">
                <th className="px-5 py-4 font-semibold">Product Comparison</th>
                <th className="px-5 py-4 text-center font-bold text-secondary">Direct Hire</th>
                <th className="bg-[var(--brand-navy)] px-5 py-4 text-center font-bold text-white">
                  Talent On-Demand
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {[
                ["Hiring Model", "One-time fee", "Monthly + flat platform fee"],
                ["Fee Structure", "25–35% of first-year salary", "Transparent monthly rate"],
                ["Admin & Compliance", "Handled by your team", "We handle compliance & payroll"],
                ["IT & Equipment", "Sourced and shipped by you", "All provided and managed"],
                ["Best for", "Permanent in-house team", "Flexible coverage, fast ramp"],
                ["Support", "Six-month guarantee", "Ongoing support & replacements"],
                ["Time to Hire", "21–35 days", "10–15 days"],
                ["Guarantee", "6 month / one free replacement", "Unlimited within contract"],
                ["Buyout Option", "Not applicable", "Yes, 20% of yearly salary"],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <td className="px-5 py-3 font-medium">{a}</td>
                  <td className="px-5 py-3 text-center text-muted-foreground">{b}</td>
                  <td className="bg-[var(--brand-navy)]/95 px-5 py-3 text-center text-white">
                    {c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/start-hiring"
            className="inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl bg-[var(--brand-navy)] px-6 py-12 text-center text-white sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Start Hiring
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Start Your Search Today</h2>
          <p className="mt-3 text-white/70">
            Tell us the role and we'll surface a shortlist within days.
          </p>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-foreground outline-none"
              placeholder="Search for a role…"
            />
            <button
              type="button"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Start Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
