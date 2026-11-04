/**
 * next/image loader for the static export.
 *
 * Points each srcset entry at a pre-sized copy written by
 * scripts/size-images.mjs, so phones fetch a 640px or 1200px photo instead of
 * the 2400px original. Anything that is not a project photo (the logo, Next's
 * own static media) is returned untouched, as is any request wider than the
 * largest copy.
 */

// Keep in step with WIDTHS in scripts/size-images.mjs.
const WIDTHS = [640, 1200];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = src.match(/^(.*?)(\/projects\/.+\.jpe?g)(\?.*)?$/i);
  if (!match) return src;

  const [, base, file, query = ""] = match;
  const size = WIDTHS.find((w) => w >= width);
  if (!size) return src;
  return `${base}/sized/${size}${file}${query}`;
}
