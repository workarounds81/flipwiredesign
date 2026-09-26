# Project photography

## Adding a project

```bash
npm run photos -- ~/path/to/the/photos bto-four-room
```

That resizes to 2400px wide, compresses, applies EXIF rotation and **strips all
metadata** — phone photos carry GPS coordinates, and a client's home address
should not ship in a public image. Files land in `public/projects/<slug>/` as
`01.jpg`, `02.jpg`, … and the command prints the `cover`/`gallery` block to paste
into `src/content/projects.ts`.

## Choosing shots

Only the **cover** is cropped — to 4:3 for the grid thumbnail, so centre the
subject in whichever image you pick as the cover. Gallery images are shown at
their natural aspect and are never cropped, so portrait and landscape can be
mixed freely.

Six to ten images per project is the right range. One establishing shot, then
the details that justify the job: the carpentry run, the joinery junctions, the
lighting.

## A note on source material

Instagram re-compresses and crops what you upload, so **import from the original
camera files, not from the Instagram post**. If the originals are gone, the
re-download is still better than a screenshot of the grid.

Handover and progress shots — bare screed, unstyled rooms, site lighting — are
useful for a case-study section but tend to undercut a portfolio grid. Keep the
grid to finished, styled, well-lit rooms and put the progress work inside the
project page if you want to show the transformation.

## Placeholders

`placeholder-01..03.jpg` are flat colour fields committed so the layout renders
before real photography lands. Delete them once every project has its own images.
