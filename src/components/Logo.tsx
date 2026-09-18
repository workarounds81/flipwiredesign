import Image from "next/image";
import Link from "next/link";
import wordmark from "@/../public/brand/flipwire-wordmark.png";
import { site } from "@/lib/site";

type LogoProps = {
  /** Rendered width in px. The header uses ~168, the footer ~200. */
  width?: number;
  className?: string;
  /** Render as a link to home. Off for the footer, where it is decorative. */
  asLink?: boolean;
  priority?: boolean;
};

/**
 * The Flipwire wordmark.
 *
 * Source of truth is `public/brand/flipwire-wordmark.png` (transparent, keyed
 * off the supplied JPG). Replace it with the designer's SVG when available —
 * swap the import for `flipwire-wordmark.svg` and nothing else changes.
 */
export function Logo({ width = 168, className, asLink = true, priority = false }: LogoProps) {
  const height = Math.round((width * wordmark.height) / wordmark.width);

  const img = (
    <Image
      src={wordmark}
      alt={`${site.legalName} logo`}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={className}
    />
  );

  if (!asLink) return img;

  return (
    <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
      {img}
    </Link>
  );
}
