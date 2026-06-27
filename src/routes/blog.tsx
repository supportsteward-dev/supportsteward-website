import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Support Steward" },
      {
        name: "description",
        content: "Insights on global hiring, remote work, and building support teams.",
      },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  {
    t: "Why offshore CX teams outperform in 2026",
    d: "Mar 14, 2026",
    c: "Hiring",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    e: "Five data points that explain why distributed customer experience teams are pulling ahead of in-house ones.",
  },
  {
    t: "The hidden cost of US-only payroll",
    d: "Feb 28, 2026",
    c: "Operations",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    e: "What you actually pay when you load taxes, benefits, and overhead onto a $65k support hire.",
  },
  {
    t: "Hiring SDRs from LATAM: a playbook",
    d: "Feb 4, 2026",
    c: "Sales",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    e: "A step-by-step guide to sourcing, vetting, and ramping bilingual sales development reps.",
  },
  {
    t: "Remote onboarding that actually sticks",
    d: "Jan 19, 2026",
    c: "People",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    e: "The 30/60/90 framework we use to get new hires to full productivity in under three months.",
  },
  {
    t: "AI agents vs. human support: where the line is",
    d: "Jan 6, 2026",
    c: "Trends",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    e: "A pragmatic look at which tickets to automate and which to keep human, with real numbers.",
  },
  {
    t: "Building a 24/7 support rotation across 3 time zones",
    d: "Dec 12, 2025",
    c: "Operations",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    e: "How we structure follow-the-sun shifts without burning out the team.",
  },
];

function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">The Support Steward blog</h1>
        <p className="mt-3 text-muted-foreground">
          Field notes on global hiring, customer experience, and scaling remote teams.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.t}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
          >
            <img src={p.img} alt={p.t} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary/10 px-2 py-0.5 font-medium text-secondary">
                  {p.c}
                </span>
                <span>{p.d}</span>
              </div>
              <h2 className="mt-2 text-lg font-semibold leading-snug">{p.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-secondary">
                Read article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
