"use client";

import { usePathname } from "next/navigation";
import { getProject } from "@/content/projects";
import { site, whatsappLink } from "@/lib/site";

/**
 * Persistent WhatsApp button, bottom right.
 *
 * Most enquiries start from a photograph rather than the contact page —
 * someone sees a kitchen they like and wants to ask about it there and then.
 * On a project page the pre-filled message names that project, so the studio
 * knows what the enquiry is about before replying.
 *
 * Hidden on /contact, where the same button is already the page's main action.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();

  if (pathname.startsWith("/contact")) return null;

  const slug = pathname.match(/^\/projects\/([^/]+)/)?.[1];
  const project = slug ? getProject(slug) : undefined;

  const message = project
    ? `Hi ${site.name}, I saw ${project.title} on your site and would like to enquire.`
    : `Hi ${site.name}, I'd like to enquire about a renovation.`;

  const href = whatsappLink(message);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${site.name} on WhatsApp at ${site.whatsapp}`}
      /*
       * pb-safe via env() keeps it clear of the iOS home indicator, which
       * otherwise sits right on top of a bottom-anchored control.
       */
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      className="label fixed right-5 z-40 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-4 text-bone shadow-lg shadow-ink/20 transition-colors hover:bg-clay-ink md:px-7 md:py-3.5"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 fill-current md:h-[1.15em] md:w-[1.15em]">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
      {/* Label on desktop; a circle on phones, where screen width is scarce. */}
      <span className="hidden md:inline">WhatsApp us</span>
    </a>
  );
}
