import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.legalName}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <h1 className="label text-muted">Contact</h1>
      <p className="mt-10 font-display text-3xl font-light leading-snug md:text-4xl">
        New projects, press and collaboration.
      </p>
      <EnquiryForm />

      <dl className="mt-20 space-y-8 border-t border-line pt-14 text-sm">
        <div>
          <dt className="label text-muted">Email</dt>
          <dd className="mt-2">
            <a href={`mailto:${site.email}`} className="hover:text-clay-ink">
              {site.email}
            </a>
          </dd>
        </div>
        {site.phone && (
          <div>
            <dt className="label text-muted">Telephone / WhatsApp</dt>
            <dd className="mt-2">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-clay-ink">
                {site.phone}
              </a>
            </dd>
          </div>
        )}
        <div>
          <dt className="label text-muted">Studio</dt>
          <dd className="mt-2 text-ink-soft">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="label text-muted">Registration</dt>
          <dd className="mt-2 text-ink-soft">
            {site.legalName} &nbsp;·&nbsp; UEN {site.uen}
          </dd>
        </div>
      </dl>
    </section>
  );
}
