import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const sourcePath = join(repoRoot, "src/i18n/en.ts");
const i18nDir = join(repoRoot, "src/i18n");

const targetLocales = process.argv.slice(2);
const targets = targetLocales.length ? targetLocales : ["ja", "ko", "de", "fr", "es", "pt-BR"];
const concurrency = 8;
let activeRequests = 0;
const requestQueue = [];
const translationCache = new Map();

const names = {
  ja: "ja",
  ko: "ko",
  de: "de",
  fr: "fr",
  es: "es",
  "pt-BR": "ptBR",
};

const protectedTerms = [
  "GitHub Releases",
  "Open Collective",
  "ZManager CLI",
  "Reed-Solomon",
  "TAR.ZST",
  "Apache-2.0",
  "support@tzap.org",
  "crates.io",
  "Linuxbrew",
  "Homebrew",
  "Zstandard",
  "ZManager",
  "GitHub",
  "Cargo",
  "Ko-fi",
  "Rust",
  "TZAP",
  "ZIP",
  "7z",
  ".tzap",
  "tzap",
].sort((a, b) => b.length - a.length);

function extractEnglishObject(source) {
  const start = source.indexOf("export const en =");
  if (start === -1) {
    throw new Error("Could not find English locale object.");
  }

  const objectStart = source.indexOf("{", start);
  const objectEnd = source.indexOf("\n} as const;", objectStart);
  if (objectStart === -1 || objectEnd === -1) {
    throw new Error("Could not parse English locale object.");
  }

  const literal = source.slice(objectStart, objectEnd + 2);
  return Function(`"use strict"; return (${literal});`)();
}

function shouldSkip(path, value) {
  const key = path.at(-1);
  return (
    key === "command" ||
    key === "installCommand" ||
    key === "value" ||
    value.includes("\n") ||
    value.includes("$") ||
    value.includes("--") ||
    value.includes("https://") ||
    value.includes("@")
  );
}

function protect(value) {
  let text = value;
  const replacements = [];

  for (const [index, term] of protectedTerms.entries()) {
    const token = `XTERM${index}X`;
    if (text.includes(term)) {
      text = text.split(term).join(token);
      replacements.push([token, term]);
    }
  }

  return { text, replacements };
}

function restore(value, replacements) {
  let text = value;
  for (const [token, term] of replacements) {
    text = text.split(token).join(term);
    text = text.split(token.toLowerCase()).join(term);
  }
  return text;
}

async function withLimit(task) {
  if (activeRequests >= concurrency) {
    await new Promise((resolve) => requestQueue.push(resolve));
  }

  activeRequests += 1;
  try {
    return await task();
  } finally {
    activeRequests -= 1;
    requestQueue.shift()?.();
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function translateText(value, locale) {
  const cacheKey = `${locale}\n${value}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  const { text, replacements } = protect(value);
  const promise = withLimit(async () => {
    const url = new URL("https://translate.googleapis.com/translate_a/single");
    url.searchParams.set("client", "gtx");
    url.searchParams.set("sl", "en");
    url.searchParams.set("tl", locale);
    url.searchParams.set("dt", "t");
    url.searchParams.set("q", text);

    let lastError;
    for (let attempt = 1; attempt <= 4; attempt += 1) {
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        const translated = json[0].map((part) => part[0]).join("");
        return restore(translated, replacements);
      }

      lastError = new Error(
        `Translation failed for ${locale}: ${response.status} ${response.statusText}`,
      );
      await wait(attempt * 500);
    }

    throw lastError;
  });

  translationCache.set(cacheKey, promise);
  return promise;
}

async function translateValue(value, locale, path = []) {
  if (typeof value === "string") {
    return shouldSkip(path, value) ? value : translateText(value, locale);
  }

  if (Array.isArray(value)) {
    return Promise.all(
      value.map((item, index) => translateValue(item, locale, [...path, String(index)])),
    );
  }

  if (value && typeof value === "object") {
    const entries = await Promise.all(
      Object.entries(value).map(async ([key, item]) => [
        key,
        await translateValue(item, locale, [...path, key]),
      ]),
    );
    const object = {};
    for (const [key, item] of entries) {
      object[key] = item;
    }
    return object;
  }

  return value;
}

function renderLocaleFile(locale, variableName, copy) {
  return `import type { SiteCopy } from "./en";

export const ${variableName} = ${JSON.stringify(copy, null, 2)} satisfies SiteCopy;
`;
}

await mkdir(i18nDir, { recursive: true });

const source = await readFile(sourcePath, "utf8");
const english = extractEnglishObject(source);

for (const locale of targets) {
  const variableName = names[locale];
  if (!variableName) {
    throw new Error(`No variable name configured for locale ${locale}.`);
  }

  console.log(`Generating ${locale}...`);
  const translated = await translateValue(english, locale);
  await writeFile(
    join(i18nDir, `${locale}.ts`),
    renderLocaleFile(locale, variableName, translated),
    "utf8",
  );
}
