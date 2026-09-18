import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.legalName}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <h1 className="label text-muted">Contact</h1>
      <p className="mt-10 font-display text-3xl font-light leading-snug md:text-4xl">
        New projects, press and collaboration.
      </p>
      <dl className="mt-12 space-y-8 text-sm">
        <div>
          <dt className="label text-muted">Email</dt>
          <dd className="mt-2">
            <a href={`mailto:${site.email}`} className="hover:text-copper">
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="label text-muted">Studio</dt>
          <dd className="mt-2 text-ink-soft">{site.address.city}</dd>
        </div>
      </dl>
    </section>
  );
}
