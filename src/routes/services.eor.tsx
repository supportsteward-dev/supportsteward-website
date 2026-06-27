import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/eor")({
  head: () => ({
    meta: [
      { title: "Support Steward EOR" },
      {
        name: "description",
        content: "Employer-of-Record services to hire compliantly anywhere in the world.",
      },
    ],
    links: [{ rel: "canonical", href: "/services/eor" }],
  }),
  component: EOR,
});

const features = [
  { t: "150+ countries", d: "We act as the legal employer wherever your talent lives." },
  {
    t: "Compliant contracts",
    d: "Locally-drafted agreements, statutory benefits, and tax withholding handled.",
  },
  {
    t: "One global invoice",
    d: "Pay every team member in one monthly USD invoice — we handle FX and payroll.",
  },
  { t: "Fast onboarding", d: "New hires fully onboarded and paid within 5 business days." },
];

function EOR() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-teal-soft)]">
            Employer of Record
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Hire compliantly, anywhere.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We act as the legal employer so you can onboard talent in 150+ countries — without
            setting up an entity.
          </p>
          <Link
            to="/start-hiring"
            className="mt-8 inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Talk to us
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.t}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={
                  [
                    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=500&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop",
                  ][i % 4]
                }
                alt={f.t}
                className="h-32 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-secondary">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=700&fit=crop"
            alt="World map of remote workforce"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold">One partner. Every country.</h2>
            <p className="mt-3 text-muted-foreground">
              From contracts to payroll to local benefits, we operate as your in-country HR team so
              you can focus on building.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
