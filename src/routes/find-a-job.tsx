import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/find-a-job")({
  head: () => ({
    meta: [
      { title: "Find a Job — Support Steward" },
      { name: "description", content: "Looking for remote work? Join our global talent network." },
    ],
    links: [{ rel: "canonical", href: "/find-a-job" }],
  }),
  component: FindAJob,
});

const jobs = [
  {
    t: "Senior Customer Support Lead",
    c: "B2B SaaS",
    l: "Remote — LATAM",
    s: "$2,800 – $3,400 / mo",
    tag: "Full-time",
  },
  {
    t: "Outbound SDR (English / Spanish)",
    c: "FinTech",
    l: "Remote — Colombia",
    s: "$2,200 + commission",
    tag: "Full-time",
  },
  {
    t: "Virtual Executive Assistant",
    c: "Series B startup",
    l: "Remote — Philippines",
    s: "$1,400 – $1,900 / mo",
    tag: "Full-time",
  },
  {
    t: "Technical Support Engineer",
    c: "Dev tooling",
    l: "Remote — South Africa",
    s: "$3,200 – $4,000 / mo",
    tag: "Full-time",
  },
  {
    t: "Bookkeeper (QuickBooks)",
    c: "E-commerce",
    l: "Remote — LATAM",
    s: "$1,800 – $2,400 / mo",
    tag: "Part-time",
  },
  {
    t: "Bilingual Account Manager",
    c: "HealthTech",
    l: "Remote — Mexico",
    s: "$2,600 – $3,200 / mo",
    tag: "Full-time",
  },
];

function FindAJob() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Find a remote job you'll love.</h1>
          <p className="mt-3 text-white/80">
            Join Support Steward's global talent network and get matched to vetted roles at growing
            companies.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl gap-2 rounded-full bg-white p-1.5 shadow-lg">
            <input
              className="flex-1 rounded-full px-4 py-2 text-sm text-foreground outline-none"
              placeholder="Search roles, e.g. Customer Support"
            />
            <button className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground">
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Open roles</h2>
        <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
          {jobs.map((j) => (
            <li
              key={j.t}
              className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{j.t}</h3>
                  <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                    {j.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {j.c} · {j.l} · {j.s}
                </p>
              </div>
              <a
                href="#"
                className="rounded-full border border-secondary px-4 py-2 text-sm font-semibold text-secondary"
              >
                Apply
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
