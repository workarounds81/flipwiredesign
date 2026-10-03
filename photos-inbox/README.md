# Photo inbox

**Currently holding the images that have not been assigned to a project yet.**
They are here because their unit could not be identified from the photograph
alone — mostly single shots of similar white-and-oak flats that could belong to
any of several jobs. Say which job a batch belongs to and they get filed.

## One folder per project

Drop new compressed photos here in a folder named the way the headline should
read — `UE Residence - Penthouse`, `Toa Payoh - 5rm HDB`. That name becomes the
project title. Claude picks and orders the photos, writes the copy, and copies
the chosen ones into `public/projects/<slug>/` as `01.jpg`, `02.jpg` and so on.

**The source folder stays here until you have seen the published page and said
it is right.** Only then is it cleared. Deleting it at publish time means a
change of mind — a different cover, a frame dropped — has to be recovered out
of git history before anything can be re-picked, which is a round trip for no
reason. Nothing is ever lost either way, since every upload is a commit, but
the folder is cheaper to reach for than the history is.

A folder still sitting here therefore means one of two things: not filed yet,
or filed and waiting on your sign-off.

### Which branch

Upload to whatever branch GitHub offers by default — but note the site only
deploys from `main`. If the repository default is set to anything else, an
upload will sit unpublished until it is moved across. Keeping the default at
`main` avoids that entirely.

**Compress before uploading.** Raw camera files are 5–8 MB each; 350 of them
would be ~2 GB, past what GitHub Pages will serve and far past what belongs in
a git repo. Compressed to 2400px they are ~300–400 KB, so the whole archive
lands around 100 MB.

## Compressing — XnConvert checklist

[XnConvert](https://www.xnview.com/en/xnconvert/) — free, Windows, batch.

It does **not** reliably remember these between sessions, so check all four
tabs every time. If `Actions` reads `[0/0]`, nothing will be resized and you
will upload full-size files.

**Settings tab**

- ✅ **Rotate images according to EXIF orientation tag**

  Not optional. Phone photos are often stored sideways with a "rotate me" flag
  in the metadata. Strip the metadata without applying the rotation first and
  every portrait shot lands on the website on its side.

**Actions tab** → Add action → Image → **Resize**

| Field | Value |
| ----- | ----- |
| Mode | Fit |
| Width | 2400 |
| Height | 2400 |
| Keep ratio | ✅ |
| Enlarge/Reduce | Reduce only |

Both dimensions must be 2400. *Fit* fits the image inside a Width × Height
box, so leaving Height at its default caps every photo at that height instead
of scaling by the longest side. *Reduce only* stops small images being
upscaled, which adds file size without adding detail.

**Output tab**

- **Folder**, pointed at a new empty folder — *not* "Source folder", which
  writes over the originals
- Format **JPG** → Settings:
  - Quality **78**
  - Subsampling **4:2:0** (4:4:4 inflates size 20–30% with no visible gain on
    photographs)
  - Optimize Huffman table ✅
  - **Untick** *Keep original metadata* — EXIF carries the GPS position of a
    client's home, which should not ship in a public image

Then **Convert**. Sanity check: the output folder should be roughly 300–400 KB
per image. If it is near the input size, the resize did not apply.

## Uploading

[GitHub Desktop](https://desktop.github.com/) — free, no command line. Clone
the repo, copy the compressed files into this folder, Commit, Push.

Or github.com → this folder → *Add file* → *Upload files*. 100 files per
upload, so a few passes.

## Naming

Names do not matter. Claude reads the images themselves. If a folder is already
one job, say so in chat and it will be kept together; otherwise grouping is
worked out from the photography.
