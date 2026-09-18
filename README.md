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
| `npm run photos`    | Import and optimise project photos   |

`STATIC_EXPORT=1 npm run build` emits a fully static site to `out/` instead —
that's what the Pages preview uses.

## Where things live

```
public/brand/        Logo files — see "Brand assets" below
public/projects/     Project photography — see public/projects/README.md
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

## Adding a project

```bash
npm run photos -- ~/path/to/photos bto-four-room
```

Optimises the images into `public/projects/<slug>/` and prints the `cover` and
`gallery` block to paste into `src/content/projects.ts`. Details in
[`public/projects/README.md`](public/projects/README.md).

## Before launch

- Replace every `TODO` in `src/content/projects.ts` — the project entries are
  scaffolding, not copy.
- Replace the placeholder images with real photography.
- Fill in `src/lib/site.ts`: UEN, street address, phone, and the production domain
  (`url`, which drives canonical tags, OG images and the sitemap).
- Rewrite the `<h1>` on the home page and the body copy on `/studio`.

## Deployment

Pushing to `main` builds a static export and publishes it to GitHub Pages.

- Preview: <https://workarounds81.github.io/flipwiredesign/>
- Production: <https://www.flipwiredesign.com> (canonical hostname; the apex
  redirects to it)

`public/CNAME` pins the custom domain, so it survives every redeploy. See
[`docs/GITHUB-SETUP.md`](docs/GITHUB-SETUP.md) for the Namecheap DNS records,
repository settings and the Vercel alternative.

---

© Flipwire Design Pte Ltd. All rights reserved.
