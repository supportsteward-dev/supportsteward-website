import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/direct-hire")({
  head: () => ({
    meta: [
      { title: "Direct Hire — Support Steward" },
      {
        name: "description",
        content: "Scale smarter with permanent global hires placed by Support Steward.",
      },
      { property: "og:title", content: "Direct Hire — Support Steward" },
      { property: "og:description", content: "Scale smarter with permanent global hires." },
    ],
    links: [{ rel: "canonical", href: "/services/direct-hire" }],
  }),
  component: DirectHire,
});

function DirectHire() {
  return (
    <>
      <section className="bg-[var(--brand-navy)] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              Scale Smarter with Direct Hire from Support Steward
            </h1>
            <p className="mt-4 text-white/80">
              Add permanent team members in weeks, not months — at a fraction of US payroll.
            </p>
            <Link
              to="/start-hiring"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Start Hiring
            </Link>
            <p className="mt-2 text-xs text-white/60">No fees for the first 30 days.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=700&fit=crop"
            alt="Hiring manager meeting candidate"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            What Support Steward Direct Hire Can Do For You
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(
            [
              {
                t: "Access the Best Global Talent",
                b: "Hire from our network of 250,000+ pre-vetted candidates worldwide.",
              },
              {
                t: "Real-Time Hire",
                b: "Curated shortlists in days — not weeks. Move with confidence.",
              },
              {
                t: "Fair Pricing",
                b: "Pay only when you hire. One-time fee, no surprise add-ons.",
              },
            ] as const
          ).map((c, i) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <img
                src={
                  [
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
                  ][i]
                }
                alt={c.t}
                className="mb-4 h-32 w-full rounded-xl object-cover"
              />
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-navy)] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How Direct Hire works</h2>
            <p className="mt-3 text-white/70">Hire a great Steward in less than 30 days.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Tell us about the role",
                b: "Share requirements and target countries on a quick intro call.",
              },
              {
                n: "2",
                t: "Get matched within days",
                b: "Vetted shortlist with intro videos and scorecards.",
              },
              {
                n: "3",
                t: "Interview & Make the Hire",
                b: "Run interviews on your timeline. We handle paperwork.",
              },
              {
                n: "4",
                t: "Support & Fees",
                b: "Six-month guarantee and a dedicated success partner.",
              },
              {
                n: "5",
                t: "Hire Globally, Strategically",
                b: "Tap into LATAM, the Philippines, and South Africa.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  {s.n}
                </div>
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/75">{s.b}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-white p-6 text-foreground shadow-lg">
              <h3 className="font-semibold">Start Hiring Right Now</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our partners are ready to help you today.
              </p>
              <Link
                to="/start-hiring"
                className="mt-4 inline-block rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground"
              >
                Start Hiring Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
