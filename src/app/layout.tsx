import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  // icon.png / apple-icon.png / opengraph-image.png in this directory are
  // picked up automatically by Next.js — no <link> tags needed.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignBusiness",
    name: site.legalName,
    url: site.url,
    email: site.email,
    logo: `${site.url}/brand/flipwire-wordmark.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: [site.address.street, site.address.unit].filter(Boolean).join(", "),
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.phone ? { telephone: site.phone } : {}),
    sameAs: [site.social.instagram, site.social.linkedin].filter(Boolean),
  };

  return (
    <html lang="en-SG" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:bg-bone focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
