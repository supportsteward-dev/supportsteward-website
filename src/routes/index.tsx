import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Support Steward — Hire Top Global Customer Support Talent" },
      {
        name: "description",
        content:
          "Support Steward helps you hire the top 1% of global customer support and operations talent. Save up to 80% on payroll.",
      },
      { property: "og:title", content: "Support Steward — Hire Top Global Talent" },
      {
        property: "og:description",
        content: "Hire vetted remote support, operations, and back-office talent worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const testimonials = [
  {
    quote:
      "Their team uncovered candidates we couldn't find anywhere else. Truly outstanding service.",
    author: "Maya R.",
    date: "May 2026",
  },
  {
    quote:
      "It helped us scale our support team without ballooning costs. The vetting process is rigorous.",
    author: "Daniel K.",
    date: "Apr 2026",
  },
  {
    quote: "The Stewards we hired have been absolute rock stars. Couldn't recommend more.",
    author: "Priya S.",
    date: "Mar 2026",
  },
];

const steps = [
  {
    n: "1",
    title: "Book a Call & Start Hiring",
    body: "Tell us about the roles you're looking to fill. We'll discuss target countries, salary expectations and required skills.",
  },
  {
    n: "2",
    title: "Meet Our Team & Get Matched Fast",
    body: "Within days we surface a shortlist of pre-vetted candidates ready to interview, complete with intro videos and scorecards.",
  },
  {
    n: "3",
    title: "Interview Candidates & Make the Hire",
    body: "Choose the talent you love, send an offer, and we handle onboarding logistics so your new Steward can hit the ground running.",
  },
  {
    n: "4",
    title: "Ongoing Support to Help You Scale",
    body: "Every placement is backed by a 6-month guarantee and a dedicated account partner for the life of the engagement.",
  },
  {
    n: "5",
    title: "Hire Globally, Strategically",
    body: "Tap into rich talent pools across LATAM, South Africa, and the Philippines — at a fraction of US payroll cost.",
  },
];

const roles = [
  {
    title: "Customer Support Lead",
    tag: "Support",
    body: "Lead a distributed CX team with empathy and SLA discipline.",
  },
  {
    title: "Sales Development Rep",
    tag: "Sales",
    body: "Pipeline-building specialists trained on modern outbound.",
  },
  {
    title: "Operations Manager",
    tag: "Operations",
    body: "Process-minded operators who keep the trains running.",
  },
  {
    title: "Social Media Manager",
    tag: "Marketing",
    body: "Brand-voice fluent creators who ship content daily.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hire the Top 1% of Global Talent and Save 80% on Payroll
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            We've helped 4,000+ companies save over $283 million in payroll and grow stronger,
            faster teams.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/start-hiring"
              className="rounded-full bg-accent px-7 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition hover:translate-y-[-1px]"
            >
              Start Hiring
            </Link>
          </div>
          <p className="mt-3 text-xs text-white/60">No fees for the first 30 days</p>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-xl bg-white p-5 text-left text-foreground shadow-md"
              >
                <div className="mb-2 text-secondary">★★★★★</div>
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  — {t.author}, {t.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET TALENT */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Meet Our Global Talent</h2>
        <div className="relative mx-auto mt-8 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=800&fit=crop"
            alt="Global remote team collaborating"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-navy)]/60 to-[var(--brand-teal)]/40" />
          <button
            aria-label="Play video"
            className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white/95 text-primary shadow-xl transition hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--brand-navy)] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Process</h2>
            <p className="mt-3 text-white/70">
              Five simple steps to build the support team behind your growth.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-secondary font-bold text-secondary-foreground">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.body}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-white p-6 text-foreground shadow-xl">
              <h3 className="text-lg font-semibold">Start Hiring Right Now</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready to build your global team? Our talent partners are on standby to kick off your
                search today.
              </p>
              <Link
                to="/start-hiring"
                className="mt-5 inline-block rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground"
              >
                Start Hiring Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECURE BY DESIGN */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Support Steward is Secure by Design</h2>
        <p className="mt-4 text-muted-foreground">
          Trust and compliance are baked into every engagement: SOC 2 controls, contractual NDAs,
          and country-specific privacy review.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-wider">
            SOC 2
          </span>
          <span className="rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-wider">
            GDPR
          </span>
          <span className="rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-wider">
            ISO 27001
          </span>
        </div>
        <Link
          to="/start-hiring"
          className="mt-8 inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
        >
          Start Hiring
        </Link>
      </section>

      {/* DID YOU KNOW */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold">Did you know?</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li>Up to 75% of hiring spend goes to US-only payroll overhead.</li>
            <li>The average time to fill a senior support role is 9 weeks.</li>
            <li>Global hires stay 2.1× longer when matched and supported correctly.</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=700&fit=crop"
          alt="Team reviewing hiring analytics"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-md"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop"
          alt="Recruiter onboarding a new hire"
          className="order-2 aspect-[4/3] w-full rounded-3xl object-cover shadow-md lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold">That's where we come in.</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li>
              <strong className="text-foreground">Avoid the overspend.</strong> Trim payroll without
              trimming talent — we benchmark every role globally.
            </li>
            <li>
              <strong className="text-foreground">Accelerate placement timelines.</strong>{" "}
              Shortlists in 7 days, hires in 21.
            </li>
            <li>
              <strong className="text-foreground">Tap into talent you can trust.</strong> A 6-month
              guarantee on every placement.
            </li>
          </ul>
        </div>
      </section>

      {/* ROLES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Popular roles
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Lower your costs by up to 80%</h2>
          <p className="mt-2 text-muted-foreground">
            A glimpse at the roles our partners hire most often.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <Link
              key={r.title}
              to="/roles/$roleId"
              params={{ roleId: r.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-lg hover:border-emerald-600/50 duration-300 block group cursor-pointer"
            >
              <img
                src={
                  [
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=450&fit=crop",
                    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=450&fit=crop",
                    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=450&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop",
                  ][i % 4]
                }
                alt={r.title}
                className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  {r.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{r.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/roles"
            className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            View All Roles
          </Link>
        </div>
      </section>

      {/* SALARY GUIDE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 rounded-3xl bg-[var(--brand-navy)] p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">Download our Global Salary Guide</h2>
            <p className="mt-3 text-white/70">
              Get the latest hiring benchmarks across the regions we source from.
            </p>
            <form className="mt-6 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="rounded-md bg-white/10 px-4 py-2.5 text-sm placeholder:text-white/60 outline-none ring-secondary focus:ring-2"
                  placeholder="First name"
                />
                <input
                  className="rounded-md bg-white/10 px-4 py-2.5 text-sm placeholder:text-white/60 outline-none ring-secondary focus:ring-2"
                  placeholder="Last name"
                />
              </div>
              <input
                type="email"
                className="w-full rounded-md bg-white/10 px-4 py-2.5 text-sm placeholder:text-white/60 outline-none ring-secondary focus:ring-2"
                placeholder="Work email"
              />
              <input
                className="w-full rounded-md bg-white/10 px-4 py-2.5 text-sm placeholder:text-white/60 outline-none ring-secondary focus:ring-2"
                placeholder="Company name"
              />
              <button
                type="button"
                className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground"
              >
                Download Guide
              </button>
            </form>
          </div>
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=800&fit=crop"
            alt="Global salary guide preview"
            className="mx-auto aspect-[3/4] w-full max-w-xs rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to work together?</h2>
        <Link
          to="/start-hiring"
          className="mt-6 inline-block rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground"
        >
          Start Hiring
        </Link>
      </section>
    </>
  );
}
