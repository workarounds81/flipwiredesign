#!/usr/bin/env node
/**
 * Writes smaller copies of every project photo for the static export.
 *
 * GitHub Pages only serves files, so next/image cannot resize on request and a
 * phone would otherwise download the full 2400px original for a 390px screen.
 * Instead each photo is pre-sized here to the widths in `WIDTHS`, and
 * `src/lib/image-loader.ts` points each srcset entry at the matching copy.
 *
 * Output goes to public/sized/<width>/projects/... (gitignored) and is
 * regenerated only when the original is newer, so repeat builds are quick.
 * Runs automatically before `npm run build`.
 */

import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Keep in step with WIDTHS in src/lib/image-loader.ts.
const WIDTHS = [640, 1200];
const QUALITY = 75;

const root = path.resolve(import.meta.dirname, "..", "public");
const srcRoot = path.join(root, "projects");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.jpe?g$/i.test(entry.name)) yield full;
  }
}

async function isFresh(out, srcMtime) {
  try {
    return (await stat(out)).mtimeMs >= srcMtime;
  } catch {
    return false;
  }
}

let written = 0;
let total = 0;
for await (const file of walk(srcRoot)) {
  const rel = path.relative(root, file);
  const srcMtime = (await stat(file)).mtimeMs;
  for (const width of WIDTHS) {
    total++;
    const out = path.join(root, "sized", String(width), rel);
    if (await isFresh(out, srcMtime)) continue;
    await mkdir(path.dirname(out), { recursive: true });
    // Every width is written even when the original is narrower, so the loader
    // never points at a file that does not exist.
    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(out);
    written++;
  }
}

console.log(`size-images: ${written} written, ${total - written} up to date`);
