# Deployment

Date: 2026-06-14

This site is designed for Cloudflare Pages.

## Cloudflare Pages

Use these settings:

- Repository: `tzap-org/tzap-site`
- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

## Custom Domains

After the first Pages deployment succeeds, add:

- `tzap.org`
- `www.tzap.org`

Cloudflare Pages will tell you which DNS records it needs. Once Pages owns the
custom domains, remove the temporary Spaceship parking A records:

- `tzap.org A 34.216.117.25`
- `tzap.org A 54.149.79.189`

Keep Email Routing records in place.

## GitHub Organization

The public website repository is:

- `https://github.com/tzap-org/tzap-site`

The tzap format/reference implementation still currently lives at:

- `https://github.com/frankmanzhu/tzap`

Transfer `tzap` to `tzap-org/tzap` only after updating install snippets,
Homebrew tap commands, badges, release URLs, and crate metadata.
