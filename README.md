# tzap.org

Static website for the tzap archive format.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

## Translation

English is the source locale and is served from `/`. Simplified Chinese is
served from `/zh-Hans/`. Traditional Chinese is served from `/zh-Hant/`.
Japanese, Korean, German, French, Spanish, and Brazilian Portuguese are
machine-generated draft locales.

Localized routes are generated from `src/pages/[...path].astro`. Shared site
metadata and route helpers live in `src/data/site.ts`. Locale wording lives in
`src/i18n/`.

When adding a page:

- Add the slug to `routeSlugs` in `src/data/site.ts`.
- Add the page template branch in `src/pages/[...path].astro`.
- Add matching copy keys to `src/i18n/en.ts`, then update each other locale.

When adding a language:

- Create `src/i18n/<locale>.ts` from `src/i18n/en.ts`.
- Add the locale, label, and copy import in `src/i18n/index.ts`.
- Add translated nav labels in `src/data/site.ts`.
- Run `npm run build` and review the generated pages.

Draft translations can be generated with:

```sh
npm run translate:draft -- ja ko de fr es pt-BR
```

Machine translation is fine for a first draft, but commands, product names,
URLs, file extensions, cryptography terms, and archive/recovery wording need
human review before publishing.
