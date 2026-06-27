import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Support Steward" },
      {
        name: "description",
        content: "How Support Steward collects, uses, and protects your data.",
      },
    ],
    links: [{ rel: "canonical", href: "/legal/privacy" }],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 1, 2026</p>
      <div className="prose prose-slate mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          This Privacy Policy describes how Support Steward ("we", "us") collects, uses, and shares
          information when you use our website and services.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
        <p>
          We collect information you provide directly, such as your name, work email, company, and
          role details when you contact us, apply for a job, or hire through our platform.
        </p>
        <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
        <p>
          We use your information to provide our services, match candidates with hiring companies,
          communicate with you, and improve our platform over time.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Sharing</h2>
        <p>
          We do not sell your personal information. We share data only with vetted service providers
          under contract and where required by law.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
        <p>
          You can request access, correction, or deletion of your information at any time by
          emailing privacy@supportsteward.com.
        </p>
      </div>
    </section>
  ),
});
