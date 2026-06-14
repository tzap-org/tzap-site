import { defaultLocale, type Locale } from "@/i18n";

export { copy, defaultLocale, isLocale, localeLabels, locales, type Locale } from "@/i18n";

export const links = {
  site: "https://tzap.org",
  githubOrg: "https://github.com/tzap-org",
  siteRepo: "https://github.com/tzap-org/tzap-site",
  tzapRepo: "https://github.com/tzap-org/tzap",
  tzapReleases: "https://github.com/tzap-org/tzap/releases",
  tzapSpec:
    "https://github.com/tzap-org/tzap/blob/main/specs/tzap-format-revisedv43.md",
  tzapCliReference:
    "https://github.com/tzap-org/tzap/blob/main/public-docs/tzap-cli-reference.md",
  zmanagerRepo: "https://github.com/frankmanzhu/zmanager",
  zmanagerReleases: "https://github.com/frankmanzhu/zmanager/releases",
  supportEmail: "support@tzap.org",
  openCollective: "https://opencollective.com/tzap-org",
  koFi: "https://ko-fi.com/tzaporg",
};

export const routeSlugs = ["", "download", "docs", "spec", "zmanager", "sponsor"] as const;
export type RouteSlug = (typeof routeSlugs)[number];

export function localizedPath(locale: Locale, slug: RouteSlug): string {
  const suffix = slug ? `/${slug}/` : "/";
  return locale === defaultLocale ? suffix : `/${locale}${suffix}`;
}

export const nav = {
  en: [
    { label: "Download", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Spec", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "Sponsor", slug: "sponsor" },
  ],
  "zh-Hans": [
    { label: "下载", slug: "download" },
    { label: "文档", slug: "docs" },
    { label: "规范", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "赞助", slug: "sponsor" },
  ],
  "zh-Hant": [
    { label: "下載", slug: "download" },
    { label: "文件", slug: "docs" },
    { label: "規範", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "贊助", slug: "sponsor" },
  ],
  ja: [
    { label: "ダウンロード", slug: "download" },
    { label: "ドキュメント", slug: "docs" },
    { label: "仕様", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "スポンサー", slug: "sponsor" },
  ],
  ko: [
    { label: "다운로드", slug: "download" },
    { label: "문서", slug: "docs" },
    { label: "사양", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "후원", slug: "sponsor" },
  ],
  de: [
    { label: "Download", slug: "download" },
    { label: "Doku", slug: "docs" },
    { label: "Spezifikation", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "Sponsor", slug: "sponsor" },
  ],
  fr: [
    { label: "Télécharger", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Spécification", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "Parrainer", slug: "sponsor" },
  ],
  es: [
    { label: "Descargar", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Especificación", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "Patrocinar", slug: "sponsor" },
  ],
  "pt-BR": [
    { label: "Baixar", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Especificação", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
    { label: "Patrocinar", slug: "sponsor" },
  ],
} satisfies Record<Locale, Array<{ label: string; slug: RouteSlug }>>;
