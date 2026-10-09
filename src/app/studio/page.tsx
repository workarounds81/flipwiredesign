import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  // Drawn from the studio narrative below rather than describing it, so the
  // search result reads as a sentence about the practice. ~155 characters.
  description:
    `${site.legalName} is an interior architecture and design practice in ${site.address.city}. ` +
    "Structural overhauls, penthouse builds, HDB, landed and commercial work.",
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
          Founded with a commitment to uncompromised craftsmanship and spatial clarity, Flipwire
          Design approaches interior environments with an engineering mindset and a refined design
          sensibility. From complex structural overhauls and bespoke penthouse builds to tailored
          HDB, landed, and commercial transformations across {site.address.city}, our work balances
          architectural precision with quiet luxury.
        </p>
        <p>
          We partner closely with residential homeowners and commercial clients from conceptual
          space planning through to heavy site execution, wet works, custom joinery, and final
          handover. By managing design and build under one unified practice, we preserve the
          integrity of every line, material choice, and custom detail.
        </p>
        <p>
          Our practice covers full-scope interior architecture, spatial re-engineering, structural
          modification, and high-end bespoke carpentry across {site.address.city}&rsquo;s
          residential and commercial landscape.
        </p>
      </div>
    </section>
  );
}
