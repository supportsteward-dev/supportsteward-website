import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Support Steward" },
      {
        name: "description",
        content: "Webinars, workshops, success stories, and our global hiring guide.",
      },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const resources = [
  {
    t: "Global Hiring Guide 2026",
    k: "Guide",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    d: "Salary benchmarks, compliance notes, and time-zone playbooks across 32 countries.",
  },
  {
    t: "Salary Calculator",
    k: "Tool",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    d: "Estimate fully-loaded cost for any role in any country in under 30 seconds.",
  },
  {
    t: "Scaling Support to 24/7",
    k: "Webinar",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    d: "Live session with operators from Notion, Linear, and Ramp on building round-the-clock teams.",
  },
  {
    t: "From 0 to 12 SDRs in LATAM",
    k: "Case study",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    d: "How a Series A FinTech built a Spanish-English sales team in under four months.",
  },
  {
    t: "Remote Onboarding Workshop",
    k: "Workshop",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    d: "A 90-minute working session with templates you can reuse the next day.",
  },
  {
    t: "Compliance Cheat Sheet",
    k: "Guide",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    d: "Contractor vs. EOR vs. entity — when to use which, by jurisdiction.",
  },
];

function Resources() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">Resources</h1>
        <p className="mt-3 text-muted-foreground">
          Tools, guides, and live sessions to help you hire smarter across borders.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <article
            key={r.t}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
          >
            <img src={r.img} alt={r.t} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                {r.k}
              </span>
              <h2 className="mt-2 text-lg font-semibold">{r.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-secondary">
                Open →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
