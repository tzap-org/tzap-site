# tzap.org Website Plan

Date: 2026-06-14

## Current Status

Updated after initial setup:

- GitHub organization: `https://github.com/tzap-org`
- Website repository: `https://github.com/tzap-org/tzap-site`
- Primary domain: `https://tzap.org`
- Initial deployment target: Cloudflare Pages
- First locales: English at `/`, Simplified Chinese at `/zh-Hans/`
- The `tzap` format repository now lives at `https://github.com/tzap-org/tzap`.

## Goal

Create a simple, modern, multilingual website for `tzap.org` that promotes the
tzap archive format, links to the relevant open-source GitHub repositories, and
gives technical users enough confidence to install, inspect, and adopt the
format.

The site should feel like a modern spiritual successor to `7-zip.org`: plain,
fast, useful, link-rich, and documentation-forward. It should not become a
marketing-heavy SaaS landing page. The first screen should explain what tzap is,
why it exists, and where to get the source or tools.

## Product Positioning

### Primary Product

`tzap` is the public archive format and reference implementation.

Current public repository:

- `https://github.com/tzap-org/tzap`

Core message:

> tzap is an open archive format and Rust reference implementation for fast,
> encrypted, recoverable, random-access archives.

Primary claims to make on the website:

- Fast compression through Rust and Zstandard.
- Encryption for contents, file names, metadata, and indexes.
- Authenticated metadata and payloads.
- Self-healing recovery with Reed-Solomon FEC.
- Split-volume archives for cloud objects, drives, discs, and cold storage.
- Instant targeted restores from large archives.
- Open specification, open reference implementation, tests, and fuzz targets.

### Related Open-Source Tool

`ZManager CLI` is the open-source universal archiver that supports `.tzap`
creation and extraction alongside other archive formats.

Current public repository:

- `https://github.com/frankmanzhu/zmanager`

Position it as:

> A practical command-line archiver for macOS, Linux, and Windows, with broad
> extraction support and first-class tzap workflows.

Do not imply the whole ZManager product is open source. Use clear language:

- "ZManager CLI is open source."
- "The macOS GUI is closed source."
- "The CLI and GUI share the archive engine boundary."

### Closed-Source GUI

The closed-source GUI should be mentioned only if there is a public download,
product page, waitlist, or release channel to point to. Until then, keep it
light:

> A macOS GUI companion is planned/available separately.

Avoid linking to the private `zmanager-gui` repository.

## Audience

### Primary Users

- Developers and power users who need reliable archive tooling.
- People making long-term backups of private datasets, source trees, legal
  records, media libraries, or research data.
- Users who currently reach for 7-Zip, tar/zstd, zip, rar, or cloud object
  storage workflows.

### Secondary Users

- Format implementers evaluating the specification.
- Security-minded users checking encryption, authentication, and extraction
  safety.
- Package maintainers and distribution maintainers.

## Design Direction

The site should borrow the utility of `7-zip.org`, but update the presentation:

- Static pages with almost no runtime JavaScript.
- Fast page loads.
- Dense, scannable content.
- Obvious download/source/documentation links.
- No oversized marketing hero.
- No decorative gradients, animation-heavy sections, or card-heavy sales copy.
- Tables for platform support and download choices.
- Clear status notes for format revisions and supported platforms.

Visual style:

- White or near-white background.
- Dark neutral text.
- One restrained accent color for links and calls to action.
- Compact navigation.
- System fonts or a simple open-source sans font.
- Code blocks that are easy to copy.
- Tables that work well on mobile.

Suggested first-viewport layout:

- Top nav: `tzap`, `Download`, `Docs`, `Spec`, `ZManager`, language switcher.
- Main heading: `tzap archive format`
- Short description: fast, encrypted, recoverable archives for long-term
  storage.
- Primary buttons:
  - `Download tzap`
  - `View GitHub`
  - `Read the spec`
- Small command snippet:
  - `cargo install tzap`
  - or Homebrew install command.

## Recommended Stack

Use a static-site generator with first-class content and localization support.

Recommended: **Astro**

Why:

- Excellent static output for a documentation-style site.
- Easy Markdown/MDX content pages.
- Simple layouts and components without committing to a large app framework.
- Good i18n routing support through filesystem routes and content collections.
- Easy deployment to Cloudflare Pages, GitHub Pages, Netlify, or static hosting.

Alternative: **Vite + plain HTML/CSS/TypeScript**

Use this only if the site is intentionally tiny and translation needs stay
simple. Astro gives more room for docs, specs, release pages, and localized
content without much complexity.

## Repository Plan

This `tzap-site` repository should become the public website source.

Proposed structure:

```text
tzap-site/
  docs/
    tzap-org-website-plan.md
  public/
    favicon.svg
    og/
      tzap-og.png
  src/
    components/
      DownloadTable.astro
      GitHubRepoCard.astro
      LanguageSwitcher.astro
      SiteFooter.astro
      SiteHeader.astro
    content/
      en/
        home.md
        download.md
        docs.md
        spec.md
        zmanager.md
      zh-Hans/
        home.md
        download.md
        docs.md
        spec.md
        zmanager.md
    data/
      links.ts
      releases.ts
      site.ts
    layouts/
      BaseLayout.astro
      DocsLayout.astro
    pages/
      index.astro
      download.astro
      docs/
        index.astro
      spec/
        index.astro
      zmanager.astro
      [locale]/
        index.astro
        download.astro
        docs/
          index.astro
        spec/
          index.astro
        zmanager.astro
    styles/
      global.css
  astro.config.mjs
  package.json
  README.md
```

## Sitemap

### `/`

Purpose: explain tzap and route users quickly.

Sections:

1. What tzap is.
2. Install commands.
3. Why tzap exists.
4. Core capabilities.
5. Quick start.
6. Links to spec, CLI reference, GitHub releases, and ZManager CLI.
7. Language footer.

### `/download`

Purpose: get users to the right install path.

Content:

- Homebrew install for macOS/Linux where supported.
- `cargo install tzap`.
- GitHub release artifacts.
- Build from source.
- Link to checksums if release artifacts provide them.
- Platform table.

Important links:

- `https://github.com/tzap-org/tzap/releases`
- `https://github.com/tzap-org/tzap`

### `/docs`

Purpose: user-facing docs hub.

Content:

- Quick start.
- Common workflows:
  - create archive
  - list archive
  - verify archive
  - extract archive
  - extract a single file
  - split-volume archive
  - recover with missing volumes
- Safety notes.
- Exit codes.
- Link to CLI reference in the repository.

Source material:

- `tzap/public-docs/tzap-cli-reference.md`
- `tzap/README.md`

### `/spec`

Purpose: establish credibility and support implementers.

Content:

- Current format revision.
- Spec download/read links.
- Compatibility notes.
- What is stable vs experimental.
- Link to conformance matrix when public.

Important links:

- `https://github.com/tzap-org/tzap/blob/main/specs/tzap-format-revisedv43.md`
- Current public spec: v0.43.

### `/zmanager`

Purpose: show the broader tool ecosystem.

Content:

- ZManager CLI summary.
- Install links.
- Mention broad extraction support.
- Mention `.tzap` support.
- Clarify open CLI / closed GUI split.
- Link to public CLI repo only.

Important links:

- `https://github.com/frankmanzhu/zmanager`
- `https://github.com/frankmanzhu/zmanager/releases`

### `/security`

Optional but valuable before a serious launch.

Content:

- Password handling guidance.
- No command-line passwords.
- Authentication model summary.
- Safe extraction behavior.
- How to report security issues.

### `/zh-Hans/...`

First translated route set. Add other languages the same way.

## Translation Strategy

Translation should be built into the site from day one, even if only English is
complete at launch.

Recommended behavior:

- Default language: English at `/`.
- Localized pages under `/{locale}/`, for example `/zh-Hans/`.
- Language switcher in the header and footer.
- Same page slug across languages where possible.
- `hreflang` tags for translated pages.
- Canonical URL for each page.
- Missing translations fall back to English with a visible "translation pending"
  note in the page metadata or admin checklist, not necessarily in the public
  page body.

Recommended locale list:

- `en`
- `zh-Hans`
- `zh-Hant`
- `ja`
- `ko`
- `de`
- `fr`
- `es`

Start with:

- `en`
- `zh-Hans`

Content model:

```ts
export const locales = ["en", "zh-Hans"] as const;
export const defaultLocale = "en";

export const localeLabels = {
  en: "English",
  "zh-Hans": "简体中文",
};
```

Translation workflow:

1. Write English copy first.
2. Keep source pages short and structured.
3. Translate page-by-page, not sentence fragments.
4. Track translation status in frontmatter:

```yaml
title: Download tzap
description: Install tzap from Homebrew, crates.io, GitHub Releases, or source.
locale: en
translationStatus: source
```

```yaml
title: 下载 tzap
description: 通过 Homebrew、crates.io、GitHub Releases 或源码安装 tzap。
locale: zh-Hans
translationStatus: translated
sourceLocale: en
sourceUpdatedAt: 2026-06-14
```

## GitHub Link Strategy

Keep public links centralized in `src/data/links.ts`.

Suggested entries:

```ts
export const links = {
  tzapRepo: "https://github.com/tzap-org/tzap",
  tzapReleases: "https://github.com/tzap-org/tzap/releases",
  tzapSpec: "https://github.com/tzap-org/tzap/blob/main/specs/tzap-format-revisedv43.md",
  tzapCliReference: "https://github.com/tzap-org/tzap/blob/main/public-docs/tzap-cli-reference.md",
  zmanagerRepo: "https://github.com/frankmanzhu/zmanager",
  zmanagerReleases: "https://github.com/frankmanzhu/zmanager/releases",
};
```

Do not hardcode links across page content if a component or shared data file can
own them.

## Content Draft

### Homepage Headline

`tzap archive format`

### Homepage Subhead

`Fast, encrypted, recoverable archives for serious long-term storage.`

### Short Description

`tzap combines Zstandard compression, authenticated encryption, split volumes,
and recovery data in one open archive format with a Rust reference
implementation.`

### Capability Bullets

- Fast compression with Zstandard.
- Encrypted contents, names, metadata, and indexes.
- Authenticated archive structures.
- Reed-Solomon recovery for damaged or missing volumes.
- Random-access restores from large archives.
- Split-volume layouts for offline media and cloud object storage.

### Install Snippet

```sh
cargo install tzap
```

```sh
brew tap tzap-org/tzap https://github.com/tzap-org/tzap
brew install tzap-org/tzap/tzap
```

### Quick Start Snippet

```sh
export TZAP_PASSPHRASE='correct horse battery staple'
printf '%s\n' "$TZAP_PASSPHRASE" | \
  tzap create --password-stdin -o backup.tzap ./project

printf '%s\n' "$TZAP_PASSPHRASE" | tzap verify --password-stdin backup.tzap
printf '%s\n' "$TZAP_PASSPHRASE" | tzap extract --password-stdin backup.tzap -C restored
```

## Release Data Strategy

Phase 1 can use static install links and GitHub Releases links.

Phase 2 can fetch release metadata during build:

- Latest tzap release.
- Release asset table.
- ZManager CLI latest release.
- GitHub star/download badges if desired.

Keep this build-time only. The website should not require client-side GitHub API
calls to render useful content.

## SEO And Sharing

Required metadata:

- Site title: `tzap archive format`
- Default description: `An open archive format for fast, encrypted,
  recoverable, random-access archives.`
- Open Graph image.
- `robots.txt`
- `sitemap.xml`
- `canonical` tags.
- `hreflang` tags for each translated page.

Target search phrases:

- `tzap archive format`
- `encrypted archive format`
- `recoverable archive format`
- `zstd encrypted archive`
- `split volume archive recovery`
- `ZManager CLI`

## Accessibility

Requirements:

- Semantic headings.
- Keyboard-accessible navigation.
- Visible focus states.
- Color contrast that passes WCAG AA.
- Tables readable on narrow screens.
- Code snippets do not overflow mobile layouts.
- Language switcher has visible text labels, not flags only.

## Performance

Requirements:

- Static HTML output.
- No required client-side JavaScript for core navigation/content.
- Minimal CSS.
- No third-party analytics on first launch unless deliberately chosen.
- Optimized favicon and Open Graph image.

Target:

- Lighthouse performance above 95 for homepage on desktop and mobile.
- Initial JS below 20 KB, ideally 0 KB for content pages.

## Deployment Plan

Recommended: Cloudflare Pages

Why:

- Good fit for static sites.
- Easy custom domain setup for `tzap.org`.
- Automatic HTTPS.
- Preview deployments for pull requests.
- Good global performance.

Alternative: GitHub Pages

Good enough for a static site, especially if keeping everything close to the
open-source repos is preferred.

DNS checklist:

1. Add `tzap.org` to hosting provider.
2. Configure apex domain.
3. Configure `www.tzap.org` redirect to `tzap.org`.
4. Enable HTTPS.
5. Add cache headers for static assets.
6. Submit sitemap after launch.

## Implementation Phases

### Phase 0: Decisions

- Confirm hosting provider: Cloudflare Pages or GitHub Pages.
- Confirm first translated language: likely `zh-Hans`.
- Confirm whether to mention the macOS GUI on launch.
- Confirm whether v0.43 should remain labeled as a draft implementation target
  on the public site.
- Confirm whether `tzap.org` should also host downloadable GUI builds later.

### Phase 1: Site Skeleton

- Initialize Astro.
- Add global CSS.
- Add shared layout.
- Add header/footer.
- Add centralized link data.
- Add English pages:
  - `/`
  - `/download`
  - `/docs`
  - `/spec`
  - `/zmanager`
- Add language-aware routing.
- Add placeholder `zh-Hans` route structure.

### Phase 2: Content And Design Polish

- Write final English copy.
- Add install tables.
- Add code snippets.
- Add GitHub repository panels.
- Add mobile table behavior.
- Add Open Graph image and favicon.
- Add sitemap, robots, and metadata.

### Phase 3: Translation

- Translate homepage and download page into `zh-Hans`.
- Add language switcher.
- Add `hreflang` metadata.
- Add translation status frontmatter.
- Document translation workflow in `README.md`.

### Phase 4: Launch

- Deploy preview.
- Test desktop and mobile layouts.
- Validate links.
- Run Lighthouse.
- Connect `tzap.org`.
- Verify HTTPS and redirects.
- Submit sitemap.

### Phase 5: Maintenance

- Add release metadata automation.
- Add docs pages copied or adapted from public repo docs.
- Add security page.
- Add more translations.
- Add screenshots or terminal recordings if useful.
- Add GUI page only when there is a public release channel.

## Acceptance Criteria

The first public version is ready when:

- `tzap.org` loads over HTTPS.
- The homepage clearly explains tzap in the first viewport.
- Users can reach the tzap GitHub repo within one click.
- Users can reach the tzap releases within one click.
- Users can install from at least one documented path.
- Users can find the format specification.
- Users can find the ZManager CLI repository.
- The site has a working language switcher.
- Missing translations have a maintainable fallback strategy.
- Pages render well on phone, tablet, and desktop.
- The site has metadata, sitemap, and Open Graph image.

## Open Questions

- Should the homepage mention v0.43 directly, or keep the homepage version-free
  and leave spec versioning to `/spec`?
- Should the website include a public compatibility matrix from day one?
- Should ZManager GUI have a public product page, or should the site only
  mention it once downloads are available?
- Should `tzap.org/download` link directly to binary assets, or only to GitHub
  Releases for the first launch?
- Which translations should be considered official enough to show in the
  language switcher?

## Suggested First Build Task

Build the Phase 1 Astro site skeleton with English content first, keeping the
visual design plain, fast, and documentation-forward. Once the English site is
stable, add `zh-Hans` translation support and translate the homepage/download
pages.
