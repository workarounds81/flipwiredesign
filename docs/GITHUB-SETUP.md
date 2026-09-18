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

## DNS for flipwiredesign.com

Point the domain at the host after the first successful deploy. Take the exact
values from the host's dashboard rather than copying them from here — they change.

- `CNAME` on `www` -> the host's target (Vercel: `cname.vercel-dns.com`)
- `A` or `ALIAS` on the apex -> the host's address
- Pick one canonical hostname and redirect the other to it at the host, so
  `flipwiredesign.com` and `www.flipwiredesign.com` are not both indexed

DNS changes at the registrar can take a few hours to propagate. The host issues
the TLS certificate automatically once the records resolve.

Once it's live, update `site.url` in `src/lib/site.ts` — canonical URLs, OG images
and `sitemap.xml` all read from it.

## Content

`src/content/projects.ts` is a plain TypeScript array. That's fine while you're
building, and means the studio edits copy through a PR.

When the studio wants to publish without a developer, move it to a CMS —
[Sanity](https://www.sanity.io) or [Payload](https://payloadcms.com) both suit
image-led portfolios. The `Project` type in that file is already the content model;
keep the shape and only `projects.ts` changes.
