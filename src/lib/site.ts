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
  url: "https://www.flipwiredesign.com",
  email: "info@flipwiredesign.com",
  // Widened to string so the "no phone yet" branches stay live under `as const`.
  phone: "" as string, // e.g. "+65 6xxx xxxx" — shown on the contact page once set
  uen: "201613746K",
  address: {
    street: "3026 Ubi Road 1",
    unit: "#03-168",
    city: "Singapore",
    postalCode: "408719",
    country: "SG",
  },
  social: {
    instagram: "https://www.instagram.com/flipwire/",
    // Empty until the studio has a company page. An empty string is skipped
    // everywhere it is used, rather than publishing a link to linkedin.com's
    // own homepage as if it were the studio's profile.
    linkedin: "" as string,
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
/** The postal address as lines, for a footer or contact block. */
export function addressLines() {
  const { street, unit, city, postalCode } = site.address;
  return [[street, unit].filter(Boolean).join(", "), `${city} ${postalCode}`];
}

export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
