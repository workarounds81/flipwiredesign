import Link from "next/link";
import { Logo } from "./Logo";
import { addressLines, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line/70 bg-bone-deep">
      <div className="mx-auto grid max-w-[1680px] gap-12 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          {/* Secondary logo placement — larger, decorative, not a link. */}
          <Logo width={200} asLink={false} className="h-auto w-[180px]" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">{site.tagline}</p>
        </div>

        <div>
          <h2 className="label text-muted">Studio</h2>
          <ul className="mt-5 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-copper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label text-muted">Contact</h2>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-copper">
                {site.email}
              </a>
            </li>
            {addressLines().map((line) => (
              <li key={line} className="text-ink-soft">
                {line}
              </li>
            ))}
            <li className="flex gap-4 pt-2">
              <a href={site.social.instagram} className="label hover:text-copper">
                Instagram
              </a>
              <a href={site.social.linkedin} className="label hover:text-copper">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-2 px-6 py-6 text-xs text-ink-soft md:flex-row md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {site.legalName}
            {site.uen ? ` · UEN ${site.uen}` : ""}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-copper">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
