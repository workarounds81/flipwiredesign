/**
 * Single source of truth for company details. Legal name, address and UEN go
 * here so they stay consistent across the footer, contact page and JSON-LD.
 */
export const site = {
  name: "Flipwire Design",
  legalName: "Flipwire Design Pte Ltd",
  tagline: "Interior architecture and design",
  description:
    "Flipwire Design Pte Ltd is an interior architecture and design studio creating considered residential, hospitality and commercial spaces.",
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
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;
