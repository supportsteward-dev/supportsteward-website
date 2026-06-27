import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Support Steward" },
      {
        name: "description",
        content:
          "Support Steward connects growing companies with the top 1% of global support and operations talent.",
      },
      { property: "og:title", content: "About — Support Steward" },
      { property: "og:description", content: "Our mission and team." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const stats = [
    { k: "2,400+", v: "Placements made" },
    { k: "32", v: "Countries covered" },
    { k: "97%", v: "Retention at 12 months" },
    { k: "12 days", v: "Average time to hire" },
  ];
  const team = [
    {
      n: "Amara Okafor",
      r: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    },
    {
      n: "Daniel Reyes",
      r: "Head of Talent",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      n: "Priya Shah",
      r: "VP Operations",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      n: "Marcus Lee",
      r: "Head of Partnerships",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-teal-soft)]">
            About Support Steward
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Building global teams that feel local.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We help growing companies hire vetted support, operations, and back-office talent
            worldwide — with the speed of a startup and the rigor of a Fortune 500 recruiter.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-secondary">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="text-3xl font-bold">Meet the team</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.n} className="text-center">
              <img src={m.img} alt={m.n} className="mx-auto h-40 w-40 rounded-full object-cover" />
              <h3 className="mt-4 font-semibold">{m.n}</h3>
              <p className="text-sm text-muted-foreground">{m.r}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
