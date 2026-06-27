import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Support Steward" },
      { name: "description", content: "Get in touch with the Support Steward team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const offices = [
    { city: "Austin, TX", addr: "600 Congress Ave, Suite 1400", tz: "CT" },
    { city: "Mexico City", addr: "Av. Paseo de la Reforma 250", tz: "CT" },
    { city: "Cape Town", addr: "32 Bree Street, Foreshore", tz: "SAST" },
    { city: "Manila", addr: "BGC, Taguig Metro Manila", tz: "PHT" },
  ];
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Let's talk hiring.</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Tell us about the role and we'll send back vetted candidates within a week.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-md border border-border px-4 py-2.5 text-sm outline-none focus:border-secondary"
              placeholder="First name"
            />
            <input
              className="rounded-md border border-border px-4 py-2.5 text-sm outline-none focus:border-secondary"
              placeholder="Last name"
            />
          </div>
          <input
            className="w-full rounded-md border border-border px-4 py-2.5 text-sm outline-none focus:border-secondary"
            placeholder="Work email"
          />
          <input
            className="w-full rounded-md border border-border px-4 py-2.5 text-sm outline-none focus:border-secondary"
            placeholder="Company"
          />
          <select className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-secondary">
            <option>I'm hiring for…</option>
            <option>Customer support</option>
            <option>Sales / SDR</option>
            <option>Operations / VA</option>
            <option>Engineering</option>
          </select>
          <textarea
            rows={5}
            className="w-full rounded-md border border-border px-4 py-2.5 text-sm outline-none focus:border-secondary"
            placeholder="How can we help?"
          />
          <button
            type="button"
            className="w-full rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Send message
          </button>
        </form>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Reach us directly</h2>
            <p className="mt-2 text-muted-foreground">
              hello@supportsteward.com
              <br />
              +1 (512) 555-0142
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Offices</h3>
            <ul className="mt-3 space-y-3">
              {offices.map((o) => (
                <li key={o.city} className="rounded-xl border border-border bg-card p-4 text-sm">
                  <p className="font-semibold">
                    {o.city} <span className="ml-1 text-xs text-muted-foreground">({o.tz})</span>
                  </p>
                  <p className="text-muted-foreground">{o.addr}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
