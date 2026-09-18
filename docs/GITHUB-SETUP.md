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

The site builds to static output, so hosting is cheap and the choice is mostly
about image handling.

### Vercel (recommended)

Made by the Next.js team; `next/image` optimisation, previews and caching work with
no configuration.

1. vercel.com → **Add New → Project** → import `workarounds81/flipwiredesign`
2. Framework preset is detected as Next.js; leave build settings alone
3. Add the domain under **Project → Settings → Domains**

Every PR gets a preview URL — worth it when the client is reviewing layout changes.

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

## DNS

Point `flipwiredesign.com` at the host after the first successful deploy:

- `CNAME` on `www` → the host's target (e.g. `cname.vercel-dns.com`)
- `A` or `ALIAS` on the apex → the host's address
- Redirect apex → `www` (or the reverse) at the host, so only one canonical hostname
  is indexed

Once it's live, update `site.url` in `src/lib/site.ts` — canonical URLs, OG images
and `sitemap.xml` all read from it.

## Content

`src/content/projects.ts` is a plain TypeScript array. That's fine while you're
building, and means the studio edits copy through a PR.

When the studio wants to publish without a developer, move it to a CMS —
[Sanity](https://www.sanity.io) or [Payload](https://payloadcms.com) both suit
image-led portfolios. The `Project` type in that file is already the content model;
keep the shape and only `projects.ts` changes.
