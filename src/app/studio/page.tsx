import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description: `About ${site.legalName}.`,
};

export default function StudioPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <h1 className="label text-muted">Studio</h1>
      <p className="mt-10 font-display text-3xl font-light leading-snug md:text-4xl">
        {site.legalName} is an interior architecture and design practice based in{" "}
        {site.address.city}.
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
        <p>
          Replace this with the studio narrative — how the practice started, how you work with
          clients, and the disciplines you cover.
        </p>
        <p>
          Keep it to three or four paragraphs. The work should carry the page; this is context,
          not a brochure.
        </p>
      </div>
    </section>
  );
}
