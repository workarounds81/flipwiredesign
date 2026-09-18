#!/usr/bin/env node
/**
 * Import project photography.
 *
 *   node scripts/import-photos.mjs <source-dir> <project-slug>
 *   npm run photos -- ~/Desktop/bto-punggol bto-four-room
 *
 * Reads every image in <source-dir>, corrects orientation from EXIF, strips
 * metadata (EXIF can carry GPS coordinates of a client's home), resizes to a
 * sensible ceiling and writes optimised files to:
 *
 *   public/projects/<project-slug>/01.jpg, 02.jpg, ...
 *
 * Then paste the printed paths into src/content/projects.ts.
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MAX_WIDTH = 2400;
const QUALITY = 78;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".tif", ".tiff"]);

const [sourceDir, slug] = process.argv.slice(2);

if (!sourceDir || !slug) {
  console.error("Usage: node scripts/import-photos.mjs <source-dir> <project-slug>");
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error(`Slug must be lowercase letters, numbers and hyphens. Got: ${slug}`);
  process.exit(1);
}

const outDir = path.join("public", "projects", slug);
await mkdir(outDir, { recursive: true });

const files = (await readdir(sourceDir))
  .filter((f) => EXTS.has(path.extname(f).toLowerCase()))
  .sort();

if (files.length === 0) {
  console.error(`No images found in ${sourceDir}`);
  process.exit(1);
}

const written = [];

for (const [i, file] of files.entries()) {
  const name = `${String(i + 1).padStart(2, "0")}.jpg`;
  const dest = path.join(outDir, name);

  const info = await sharp(path.join(sourceDir, file))
    .rotate() // apply EXIF orientation, then drop the metadata below
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(dest);

  const kb = Math.round(info.size / 1024);
  console.log(`  ${file}  ->  ${dest}  (${info.width}x${info.height}, ${kb} KB)`);
  written.push(`/projects/${slug}/${name}`);
}

const snippet = `  cover: ${JSON.stringify(written[0])},
  gallery: [
${written.map((p) => `    ${JSON.stringify(p)},`).join("\n")}
  ],`;

await writeFile(path.join(outDir, "_paths.txt"), snippet);

console.log(`\n${written.length} images written to ${outDir}`);
console.log(`\nPaste into the "${slug}" entry in src/content/projects.ts:\n`);
console.log(snippet);
