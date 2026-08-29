import { en, type SiteCopy } from "./en";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { ja } from "./ja";
import { ko } from "./ko";
import { ptBR } from "./pt-BR";
import { zhHans } from "./zh-Hans";
import { zhHant } from "./zh-Hant";

export const locales = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "de", "fr", "es", "pt-BR"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels = {
  en: "English",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  "pt-BR": "Português (Brasil)",
} satisfies Record<Locale, string>;

export const copy = {
  en,
  "zh-Hans": { ...zhHans, zmanagerDesktop: en.zmanagerDesktop },
  "zh-Hant": { ...zhHant, zmanagerDesktop: en.zmanagerDesktop },
  ja: { ...ja, zmanagerDesktop: en.zmanagerDesktop },
  ko: { ...ko, zmanagerDesktop: en.zmanagerDesktop },
  de: { ...de, zmanagerDesktop: en.zmanagerDesktop },
  fr: { ...fr, zmanagerDesktop: en.zmanagerDesktop },
  es: { ...es, zmanagerDesktop: en.zmanagerDesktop },
  "pt-BR": { ...ptBR, zmanagerDesktop: en.zmanagerDesktop },
} satisfies Record<Locale, SiteCopy>;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
