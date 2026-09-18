import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <h1 className="label text-muted">Privacy</h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
        <p>
          Placeholder. Replace with a policy covering what {site.legalName} collects through the
          contact form and analytics, how it is stored, and how long it is kept — Singapore&apos;s
          PDPA applies to enquiries from local clients.
        </p>
      </div>
    </section>
  );
}
