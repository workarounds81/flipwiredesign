# Flipwire Design

Website for **Flipwire Design Pte Ltd** — an interior architecture and design studio.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS v4.
Every route is statically prerendered.

## Getting started

```bash
nvm use            # Node 22 (see .nvmrc)
npm install
npm run dev        # http://localhost:3000
```

| Script              | Purpose                              |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Local dev server with fast refresh   |
| `npm run build`     | Production build                     |
| `npm run start`     | Serve the production build           |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TS)|
| `npm run typecheck` | `tsc --noEmit`                       |

## Where things live

```
public/brand/        Logo files — see "Brand assets" below
public/projects/     Project photography (placeholders committed for now)
src/app/             Routes. Also holds icon/apple-icon/opengraph-image
src/components/      Logo, header, footer, project grid
src/content/         projects.ts — the project list and copy
src/lib/site.ts      Company name, address, email, social links
```

## Brand assets

| File                                  | Used for                                             |
| ------------------------------------- | ---------------------------------------------------- |
| `public/brand/flipwire-logo-source.jpg` | The original supplied artwork. Archive, not shipped. |
| `public/brand/flipwire-wordmark.png`  | The header and footer logo (transparent background)  |
| `public/brand/flipwire-mark.png`      | Square knot mark, for avatars and small placements   |
| `src/app/icon.png`                    | Favicon — Next.js picks this up automatically        |
| `src/app/apple-icon.png`              | iOS home-screen icon                                 |
| `src/app/opengraph-image.png`         | Link preview card for social and chat apps           |

The wordmark is keyed out of the supplied JPG, so its edges are raster. **Ask the
designer for the original vector** and drop in `flipwire-wordmark.svg`; then change
the one import at the top of `src/components/Logo.tsx` and every placement updates.

The square mark is *derived* from the knot in the wordmark — it is a stand-in so the
favicon isn't blank. Replace it when the designer supplies a proper monogram.

## Before launch

Fill in `src/lib/site.ts`: UEN, street address, phone, real social URLs, and the
production domain (`url`, which drives canonical tags, OG images and the sitemap).

## Deployment

See [`docs/GITHUB-SETUP.md`](docs/GITHUB-SETUP.md) for repository settings and
hosting options.

---

© Flipwire Design Pte Ltd. All rights reserved.
