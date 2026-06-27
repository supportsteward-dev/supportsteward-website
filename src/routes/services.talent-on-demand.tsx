import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/talent-on-demand")({
  head: () => ({
    meta: [
      { title: "Talent On-Demand — Support Steward" },
      {
        name: "description",
        content:
          "Flexible monthly support staffing with onboarding, equipment, and compliance handled.",
      },
    ],
    links: [{ rel: "canonical", href: "/services/talent-on-demand" }],
  }),
  component: Tod,
});

const tiers = [
  {
    t: "Part-time",
    h: "20 hrs/week",
    p: "$1,495 / mo",
    b: ["Dedicated agent", "Shared success manager", "Monthly reporting"],
  },
  {
    t: "Full-time",
    h: "40 hrs/week",
    p: "$2,495 / mo",
    b: ["Dedicated agent", "Dedicated success manager", "Quality scoring", "Equipment included"],
    featured: true,
  },
  {
    t: "Team pod",
    h: "3+ agents",
    p: "Custom",
    b: ["Dedicated pod lead", "24/5 coverage", "Custom workflows", "QA + reporting"],
  },
];

function Tod() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-teal-soft)]">
            Talent On-Demand
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Flexible coverage, fast ramp.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Monthly pricing with compliance, equipment, and ongoing replacements all included.
          </p>
          <Link
            to="/start-hiring"
            className="mt-8 inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Get started
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.t}
              className={`rounded-2xl border p-6 shadow-sm ${t.featured ? "border-secondary bg-card ring-2 ring-secondary" : "border-border bg-card"}`}
            >
              <h3 className="font-semibold">{t.t}</h3>
              <p className="text-sm text-muted-foreground">{t.h}</p>
              <p className="mt-4 text-3xl font-bold">{t.p}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.b.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
