# Flipwire Design — working notes

Marketing site for Flipwire Design Pte Ltd, a Singapore interior design and
renovation practice. Next.js App Router, TypeScript, Tailwind v4.

The ongoing work is **publishing real projects from the studio's photo archive**.
Everything below is convention learned the hard way; follow it rather than
re-deriving it.

## Build and deploy

| | |
| --- | --- |
| Live site | www.flipwiredesign.com, GitHub Pages, Actions source |
| Deploys from | `main` only (`.github/workflows/preview.yml`) |
| Default branch | `main` — keep it that way, or web uploads land somewhere that never deploys |
| Checks | `npm run lint`, `npm run typecheck`, `npm run build`, and `STATIC_EXPORT=1 npm run build` |

Both builds matter and they fail differently. `STATIC_EXPORT=1` sets
`images.unoptimized`, which skips checks the default build enforces — a query
string on a local image passed the export and broke CI once. Run both.

The font comes from `next/font/google` at build time, so a bad minute at
Google fails the deploy. If Preview fails on `cormorant_garamond` and nothing
font-related changed, it is transient: re-run the job. If it recurs, self-host
the font instead.

## Publishing a project

Source photos arrive in `photos-inbox/<Folder Name>/`, uploaded through the
GitHub web UI. **The folder name is the project title.**

1. Build a contact sheet first (PIL montage into the scratchpad) and look at
   every frame. Do not pick from filenames.
2. Choose one frame per subject. These shoots repeat heavily — one archive had
   25 near-identical passes down the same corridor. If the camera barely moved,
   it is one photo.
3. **Every frame must show work the studio did.** No bare glazing, no empty
   rooms, no views. The developer's windows are not the project. This rule came
   directly from the studio and overrides a supplied selection.
4. No construction or snagging shots: no debris, no fittings being installed,
   no defect stickers on cabinet fronts.
5. Copy the chosen frames to `public/projects/<slug>/01.jpg`, `02.jpg`… in
   walk-through order, `chmod 644`, and measure each with PIL for the gallery
   block.
6. **Find what this supersedes.** Most remaining entries in `projects.ts` were
   invented from unlabelled archive photos and several are the same home split
   across two or three entries. Compare the new shoot against the existing
   covers before publishing and delete what it replaces, image folders and all.
   Floor finish is the most reliable tell: screed vs vinyl plank vs herringbone
   separates homes that otherwise look alike.
7. Leave the source folder in `photos-inbox/` until the studio signs it off.
   Deleting at publish time means a change of mind has to be recovered from git
   history first.

## Writing the copy

Mass-market Singaporean, not architectural criticism. Local terms: **partition
board**, not drywall. Also: hacking, wet works, false ceiling, L-box, service
yard, solid surface, 4-room/5-room, BTO, jumbo, HDB vs condominium.

Say why a decision was made, in money or maintenance terms a homeowner
recognises — why stainless behind a hob, why screed is harder than tile, why
concealed lighting has to be settled before the electrician starts chasing
walls. `excerpt` is the hook under the title; `body` is three or four
paragraphs after the gallery.

`location`, `year` and `areaSqft` are optional and **must not be guessed**. The
estate usually comes from the folder name. Everything else stays absent until
the studio says.

## Never

- Commit client documents, floorplans, quotations, or anything with a client's
  name, unit number or contact details. The repository is public.
- Publish an identifiable person without checking the studio has their consent
  (PDPA). One project already carries an owner's face at their desk.
- Commit the Web3Forms key. It reaches the build through the `WEB3FORMS_KEY`
  repository secret.
- Replace a photo at the same filename. The static export strips Next's content
  hash, so caches serve the old bytes forever. Bump `assetRevisions` in
  `src/lib/site.ts` instead.

## Outstanding

- `photos-inbox/` root holds unassigned loose files, including a Turkish Tea
  House and some DSC frames from the McNair shoot. Seven Yishun frames are
  duplicated there too and can go.
- `timber-feature-wall` is a mixed grouping: some frames may belong to
  Queensway — Anchorage. Verify before trusting it. (Its bedroom frame 04 was
  Bukit Panjang and has been removed.)
- `walnut-and-white-island` and `dark-kitchen-white-counter` each lost frames
  to Bukit Panjang; their remaining frames are still unverified groupings.
- `photos-inbox/IMG_5205_result.jpg` (root) shares a filename with a Bukit
  Panjang frame but is a different image — do not assume it belongs there.
- Studio copy mentions landed work; no landed project is published yet.
- The two `dont upload*.jpg` files remain in git history on a public repo.
