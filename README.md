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
served from `/zh-Hans/`.

When adding a page, add the matching localized route and update shared copy in
`src/data/site.ts`.
