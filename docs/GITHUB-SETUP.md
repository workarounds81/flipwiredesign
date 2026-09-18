# GitHub setup

Settings to apply to `workarounds81/flipwiredesign`. Everything here is done in the
GitHub web UI under **Settings** unless noted.

---

## 1. Repository basics

| Setting                     | Value                                                                 | Why |
| --------------------------- | --------------------------------------------------------------------- | --- |
| **Visibility**              | **Private**                                                           | Client photography and pre-launch copy shouldn't be public. Make it public only if you want the code to be a portfolio piece — and move the images out first. |
| **Description**             | `Website for Flipwire Design Pte Ltd — interior architecture and design` | Shows in search and on the org page. |
| **Website**                 | `https://www.flipwiredesign.com`                                      | Once the domain is live. |
| **Default branch**          | `main`                                                                | Already the convention here. |
| **Features → Wikis**        | Off                                                                   | Docs live in `docs/`. |
| **Features → Projects**     | On                                                                    | Useful for tracking the page-by-page build. |
| **Features → Issues**       | On                                                                    | Where design feedback goes. |
| **Pull Requests → Allow squash merging** | On, and **only** this one                                | One commit per PR keeps `main` readable. |
| **Pull Requests → Allow merge commits / rebase merging** | Off                                       | — |
| **Automatically delete head branches** | On                                                      | Keeps the branch list clean. |
| **Always suggest updating pull request branches** | On                                           | — |

## 2. Branch protection

**Settings → Rules → Rulesets → New branch ruleset**. Target `main`, enforcement
**Active**, and enable:

- **Restrict deletions**
- **Block force pushes**
- **Require a pull request before merging**
  - Required approvals: **1**
  - Dismiss stale approvals when new commits are pushed
  - Require review from Code Owners (uses `.github/CODEOWNERS`)
- **Require status checks to pass**
  - Add `Lint, typecheck, build` — the job in `.github/workflows/ci.yml`
  - Require branches to be up to date before merging
- **Require conversation resolution before merging**

If you're the only committer right now, drop required approvals to 0 but keep the
status check — it's the part that stops a broken build reaching `main`.

## 3. Actions

**Settings → Actions → General**

- Actions permissions: **Allow enterprise/owner actions, and select non-owner actions** → allow `actions/*`
- Workflow permissions: **Read repository contents** (the CI job only needs to read)
- Uncheck *Allow GitHub Actions to create and approve pull requests*

CI is already defined in `.github/workflows/ci.yml` and runs lint, typecheck and
build on every PR and every push to `main`.

## 4. Security

**Settings → Code security**

- **Dependabot alerts** — on
- **Dependabot security updates** — on
- **Dependabot version updates** — on (config is in `.github/dependabot.yml`)
- **Secret scanning** + **push protection** — on. Free on public repos; on private
  repos it needs GitHub Advanced Security, so if it's unavailable just be strict
  about `.env` (already gitignored).

## 5. Collaborators

**Settings → Collaborators and teams.** Give the designer **Write**, external
contractors **Write** on a short leash, and anyone who only needs to review
**Triage**. Keep **Admin** to yourself.

---

## Deployment

Two builds ship from the same codebase:

- **Default** — server build, `next/image` optimisation on. Use for production.
- **`STATIC_EXPORT=1`** — static files in `out/`, image optimisation off. Used by
  the Pages preview and any file-only host.

### Preview on GitHub Pages (no external account)

`.github/workflows/preview.yml` builds and deploys on every push to `main`. Turn
it on once:

**Settings -> Pages -> Build and deployment -> Source -> GitHub Actions**

The preview then lives at `https://workarounds81.github.io/flipwiredesign/`.
`BASE_PATH` is wired to that subdirectory automatically.

Two caveats:

- Pages on a **private** repo needs GitHub Pro / Team. On the free plan, either
  make the repo public or use Vercel below.
- The preview is publicly reachable by anyone with the link. `robots.txt` on the
  Pages URL still reads from `site.url`, so add a password-protected host instead
  if the work must stay unlisted before launch.

### Vercel (recommended for production)

Made by the Next.js team; `next/image` optimisation, per-PR previews and caching
work with no configuration.

1. vercel.com -> **Add New -> Project** -> import `workarounds81/flipwiredesign`
2. Framework preset is detected as Next.js; leave the build settings alone. Do
   **not** set `STATIC_EXPORT` or `BASE_PATH` — production runs the default build
3. **Project -> Settings -> Domains** -> add `flipwiredesign.com` and
   `www.flipwiredesign.com`; Vercel prints the exact DNS records to create

Every pull request gets its own preview URL, which is what you want once the
client starts reviewing layout changes.

### Cloudflare Pages

Similar, and a good option if the domain is already on Cloudflare. Build command
`npm run build`, output `.next`, and use the `@cloudflare/next-on-pages` adapter.

### GitHub Pages

Free, but it serves static files only, so `next/image` optimisation is off. If you
go this route, add to `next.config.ts`:

```ts
output: "export",
images: { unoptimized: true },
```

then add a workflow using `actions/upload-pages-artifact` and
`actions/deploy-pages`, and set **Settings → Pages → Source** to **GitHub Actions**.
Compress project photography by hand first — unoptimised interiors shots are heavy.

---

## Putting the site on flipwiredesign.com

The domain is registered at Namecheap. The site is served by GitHub Pages. Two
things have to line up: DNS at Namecheap, and the custom domain setting on
GitHub. Do them in that order.

`www.flipwiredesign.com` is the canonical hostname — it matches `site.url` in
`src/lib/site.ts` and the committed `public/CNAME`. The apex
(`flipwiredesign.com`) redirects to it, which GitHub does automatically once the
records below exist.

### Step 1 — DNS at Namecheap

Namecheap dashboard -> **Domain List** -> **Manage** next to flipwiredesign.com
-> **Advanced DNS**.

Delete the two records Namecheap adds to every new domain first, or they will
fight the ones below:

- the `CNAME` on `www` pointing at `parkingpage.namecheap.com`
- the `URL Redirect` / `A` record on `@` pointing at Namecheap parking

Then **Add New Record** for each row:

| Type  | Host | Value                         | TTL       |
| ----- | ---- | ----------------------------- | --------- |
| CNAME | www  | `workarounds81.github.io.`    | Automatic |
| A     | @    | `185.199.108.153`             | Automatic |
| A     | @    | `185.199.109.153`             | Automatic |
| A     | @    | `185.199.110.153`             | Automatic |
| A     | @    | `185.199.111.153`             | Automatic |
| AAAA  | @    | `2606:50c0:8000::153`         | Automatic |
| AAAA  | @    | `2606:50c0:8001::153`         | Automatic |
| AAAA  | @    | `2606:50c0:8002::153`         | Automatic |
| AAAA  | @    | `2606:50c0:8003::153`         | Automatic |

Notes:

- The CNAME value is `workarounds81.github.io` — the **account** host, with no
  `/flipwiredesign` on the end. Namecheap accepts it with or without the
  trailing dot.
- The IP addresses above are GitHub's published Pages addresses. They change
  rarely but they do change: confirm them against GitHub's
  "Managing a custom domain for your GitHub Pages site" documentation before
  typing them in.
- The AAAA rows are optional. Skip them if Namecheap gives you trouble; the site
  still works over IPv4.
- Leave **Nameservers** on *Namecheap BasicDNS*. Do not change them.

### Step 2 — Tell GitHub about the domain

Repository **Settings -> Pages -> Custom domain**, enter
`www.flipwiredesign.com` and **Save**.

GitHub runs a DNS check. If it fails, the records have not propagated yet —
wait and press save again rather than changing anything.

Once the check passes, tick **Enforce HTTPS**. The checkbox stays greyed out
until GitHub has issued the certificate, which usually takes a few minutes and
occasionally up to an hour.

### Step 3 — Confirm the build switched to the root

Serving from a custom domain moves the site from `/flipwiredesign` to the domain
root, so the base path has to disappear from every link and asset. The Preview
workflow reads that from `actions/configure-pages`, so it happens on its own —
but only on the next build.

Push any commit to `main` (or **Actions -> Preview -> Run workflow**) after
saving the custom domain, then load `https://www.flipwiredesign.com` and check
that a project page and its images load, not just the home page.

### How long it takes

- Namecheap DNS: usually minutes, up to 48 hours worst case
- GitHub certificate: minutes, occasionally an hour
- Total, typically: under an hour

### If it does not come up

| Symptom                                | Cause                                                        |
| -------------------------------------- | ------------------------------------------------------------ |
| Namecheap parking page                 | The parking records were not deleted                          |
| 404 on every page                      | Custom domain not saved in Settings -> Pages                   |
| Home page works, everything else 404s  | The site was built before the domain was saved — re-run Preview |
| Certificate error                      | HTTPS not enforced yet, or DNS still propagating               |
| `www` works, apex does not             | The A/AAAA records on `@` are missing or wrong                 |

Check propagation with `dig www.flipwiredesign.com +short` — it should return
`workarounds81.github.io` followed by GitHub's addresses.

### A caveat worth knowing

GitHub Pages serves static files only, so `next/image` optimisation is off: every
visitor gets the full-size JPEG. `npm run photos` caps images at 2400px and
compresses them, so this is workable, but a phone still downloads a desktop-sized
photo.

If the site turns out to be image-heavy and slow, move it to Vercel. The domain
moves with it — you would swap the Namecheap records for the ones Vercel prints,
and drop `STATIC_EXPORT` so the default build with image optimisation runs. The
code needs no changes.

## Content

`src/content/projects.ts` is a plain TypeScript array. That's fine while you're
building, and means the studio edits copy through a PR.

When the studio wants to publish without a developer, move it to a CMS —
[Sanity](https://www.sanity.io) or [Payload](https://payloadcms.com) both suit
image-led portfolios. The `Project` type in that file is already the content model;
keep the shape and only `projects.ts` changes.
