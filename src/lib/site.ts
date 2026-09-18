/**
 * Single source of truth for company details. Legal name, address and UEN go
 * here so they stay consistent across the footer, contact page and JSON-LD.
 */
export const site = {
  name: "Flipwire Design",
  legalName: "Flipwire Design Pte Ltd",
  tagline: "Interior design and renovation, Singapore",
  // Drives the meta description and the home page intro. ~155 characters.
  description:
    "Flipwire Design Pte Ltd is a Singapore interior design practice. Renovation, built-in carpentry and fit-out for HDB and condominium homes and commercial spaces.",
  // Update once the domain is pointed at the deployment.
  url: "https://www.flipwiredesign.com",
  email: "studio@flipwiredesign.com",
  phone: "+65 0000 0000",
  uen: "", // Singapore UEN — fill in for the footer/legal pages
  address: {
    street: "",
    city: "Singapore",
    postalCode: "",
    country: "SG",
  },
  social: {
    instagram: "https://www.instagram.com/flipwire/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Prefix a path under /public with the deployment's base path.
 *
 * Needed because the static export runs with `images.unoptimized`, and an
 * unoptimised <Image> passes `src` through untouched — Next only rewrites the
 * paths it generates itself. On a root domain BASE_PATH is empty and this is a
 * no-op; on a GitHub Pages project site it prepends `/flipwiredesign`.
 */
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
