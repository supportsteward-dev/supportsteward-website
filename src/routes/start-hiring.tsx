import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/start-hiring")({
  head: () => ({
    meta: [
      { title: "Start Hiring — Support Steward" },
      {
        name: "description",
        content:
          "Tell us about the role you're looking to fill and we'll match you with vetted global talent.",
      },
      { property: "og:title", content: "Start Hiring — Support Steward" },
      { property: "og:description", content: "Tell us about the role you're looking to fill." },
    ],
    links: [{ rel: "canonical", href: "/start-hiring" }],
  }),
  component: StartHiring,
});

const faqs = [
  {
    q: "Payment and Pricing",
    a: "Once the candidate signs the offer letter, we send an invoice for our recruiting fee — 25–35% of first-year salary depending on volume. Larger teams unlock custom pricing. Each hire is backed by a 6-month guarantee.",
  },
  {
    q: "Book a Call & Tell Us About Your Business",
    a: "Schedule a call to discuss the roles you want to hire for. We'll cover ideal countries, salary expectations, required skills, and more. A $500 refundable deposit kicks off your search and is applied to your final invoice.",
  },
  {
    q: "Meet Our Team & Review Profiles",
    a: "Within days you'll receive a curated shortlist of pre-vetted candidates with intro videos, scorecards, and salary expectations.",
  },
  {
    q: "Interview Candidates & Make an Offer",
    a: "Run your own interviews on your timeline. We coordinate logistics, references, and offer paperwork end-to-end.",
  },
  {
    q: "Ongoing Support",
    a: "Every placement gets a dedicated success partner plus a 6-month replacement guarantee.",
  },
  {
    q: "Countries and Locations",
    a: "We currently source full-time and fractional talent across Latin America, South Africa, and the Philippines.",
  },
];

function StartHiring() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="px-4 pb-12 pt-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary">
            Start Hiring
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Let's get started</h1>
          <p className="mt-3 text-muted-foreground">
            Tell us about the role you're looking to fill.
          </p>
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="mt-2 text-muted-foreground">Review our process below.</p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span className="text-secondary">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
