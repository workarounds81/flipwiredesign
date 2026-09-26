# Photo inbox

**Currently holding the images that have not been assigned to a project yet.**
They are here because their unit could not be identified from the photograph
alone — mostly single shots of similar white-and-oak flats that could belong to
any of several jobs. Say which job a batch belongs to and they get filed.

Drop new compressed project photos here too. Claude reads them from the repo, groups
them into projects, writes the entries, moves the files into
`public/projects/<slug>/`, and empties this folder.

**Compress before uploading.** Raw camera files are 5–8 MB each; 350 of them
would be ~2 GB, past what GitHub Pages will serve and far past what belongs in
a git repo. Compressed to 2400px they are ~300–400 KB, so the whole archive
lands around 100 MB.

## Compressing, free, no command line

[XnConvert](https://www.xnview.com/en/xnconvert/) — free, Windows, batch.

1. **Input** — drag in the whole folder
2. **Actions** → Add action → Image → **Resize**
   - Mode: *Longest side*, **2400** px
   - Tick *Keep ratio* and *Enlarge/Reduce: Reduce only*
3. **Output**
   - Format **JPG**, Options → Quality **78**
   - Untick *Keep original metadata* — phone photos carry the GPS position of
     a client's home, which should not ship in a public image
   - Write to a new folder
4. **Convert**

## Uploading

[GitHub Desktop](https://desktop.github.com/) — free, no command line. Clone
the repo, copy the compressed files into this folder, Commit, Push.

Or github.com → this folder → *Add file* → *Upload files*. 100 files per
upload, so a few passes.

## Naming

Names do not matter. Claude reads the images themselves. If a folder is already
one job, say so in chat and it will be kept together; otherwise grouping is
worked out from the photography.
