import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Support Steward" },
      {
        name: "description",
        content: "Terms governing your use of the Support Steward site and services.",
      },
    ],
    links: [{ rel: "canonical", href: "/legal/terms" }],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 1, 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          By accessing or using Support Steward you agree to these Terms of Use. If you do not
          agree, please do not use the service.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Use of the service</h2>
        <p>
          You agree to use the service only for lawful purposes and in compliance with all
          applicable employment and data-protection laws in your jurisdiction.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Accounts</h2>
        <p>
          You are responsible for the activity that happens under your account and for keeping
          credentials secure.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Fees</h2>
        <p>
          Recruiting fees, monthly staffing fees, and refundable deposits are described on your
          statement of work. All fees are invoiced in USD.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Support Steward is not liable for indirect or
          consequential damages arising from your use of the service.
        </p>
      </div>
    </section>
  ),
});
