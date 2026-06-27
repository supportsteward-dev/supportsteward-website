import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Referrals — Support Steward" },
      { name: "description", content: "Refer a client and earn rewards." },
    ],
    links: [{ rel: "canonical", href: "/referrals" }],
  }),
  component: Referrals,
});

function Referrals() {
  const steps = [
    {
      n: "01",
      t: "Introduce a company",
      d: "Send a warm intro email or share your referral link with a hiring manager.",
    },
    {
      n: "02",
      t: "They hire through us",
      d: "We match them with vetted talent and they make a placement within 90 days.",
    },
    {
      n: "03",
      t: "You get paid",
      d: "$1,500 cash for every direct-hire placement, plus 10% recurring for managed services.",
    },
  ];
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-teal-soft)]">
            Referral Program
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Refer a client. Earn rewards.</h1>
          <p className="mt-3 text-white/80">
            Join the Support Steward referral program and earn for every introduction that becomes a
            customer.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Get your referral link
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={
                  [
                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=350&fit=crop",
                    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=350&fit=crop",
                    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&h=350&fit=crop",
                  ][i]
                }
                alt={s.t}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-bold text-secondary">{s.n}</p>
                <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
