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
  zmanagerRepo: "https://github.com/tzap-org/zmanager",
  zmanagerReleases: "https://github.com/tzap-org/zmanager/releases",
  zmanagerDesktopRepo: "https://github.com/tzap-org/zmanager-desktop",
  zmanagerDesktopReleases: "https://github.com/tzap-org/zmanager-desktop/releases/latest",
  zmanagerDesktopApi:
    "https://api.github.com/repos/tzap-org/zmanager-desktop/releases/latest",
  supportEmail: "support@tzap.org",
  openCollective: "https://opencollective.com/tzap-org",
  koFi: "https://ko-fi.com/tzaporg",
};

export const routeSlugs = [
  "",
  "download",
  "docs",
  "spec",
  "zmanager-desktop",
  "zmanager",
  "sponsor",
] as const;
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
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "Sponsor", slug: "sponsor" },
  ],
  "zh-Hans": [
    { label: "下载", slug: "download" },
    { label: "文档", slug: "docs" },
    { label: "规范", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "赞助", slug: "sponsor" },
  ],
  "zh-Hant": [
    { label: "下載", slug: "download" },
    { label: "文件", slug: "docs" },
    { label: "規範", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "贊助", slug: "sponsor" },
  ],
  ja: [
    { label: "ダウンロード", slug: "download" },
    { label: "ドキュメント", slug: "docs" },
    { label: "仕様", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "スポンサー", slug: "sponsor" },
  ],
  ko: [
    { label: "다운로드", slug: "download" },
    { label: "문서", slug: "docs" },
    { label: "사양", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "후원", slug: "sponsor" },
  ],
  de: [
    { label: "Download", slug: "download" },
    { label: "Doku", slug: "docs" },
    { label: "Spezifikation", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "Sponsor", slug: "sponsor" },
  ],
  fr: [
    { label: "Télécharger", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Spécification", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "Parrainer", slug: "sponsor" },
  ],
  es: [
    { label: "Descargar", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Especificación", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "Patrocinar", slug: "sponsor" },
  ],
  "pt-BR": [
    { label: "Baixar", slug: "download" },
    { label: "Docs", slug: "docs" },
    { label: "Especificação", slug: "spec" },
    { label: "ZManager Desktop", slug: "zmanager-desktop" },
    { label: "ZManager CLI", slug: "zmanager" },
    { label: "Patrocinar", slug: "sponsor" },
  ],
} satisfies Record<Locale, Array<{ label: string; slug: RouteSlug }>>;

export const seoContent = {
  "": {
    title: "Fast, encrypted, resilient archives for long-term storage",
    body:
      "tzap is built for archives that need to be fast to create, private to store, and resilient enough to restore years later. The format combines Zstandard compression, authenticated encryption, manifest integrity checks, split-volume layouts, random-access restores, and recovery data so backups, source records, media sets, and research datasets can be stored with fewer fragile assumptions.",
    items: [
      {
        title: "Fast compression and restores",
        body:
          "Zstandard compression, archive indexes, and random-access extraction keep large archive creation, verification, and targeted restore workflows practical.",
      },
      {
        title: "Encrypted archive metadata",
        body:
          "Archive contents, file names, metadata, indexes, and payloads can be protected instead of leaving sensitive structure exposed.",
      },
      {
        title: "Resilient split volumes",
        body:
          "Archives can be divided for cloud objects, removable drives, discs, and offline media while retaining recovery options for damaged or missing pieces.",
      },
    ],
  },
  download: {
    title: "Install tzap on developer machines and backup hosts",
    body:
      "The tzap CLI can be installed with Cargo, packaged binaries, Homebrew, or a source build. These installation paths support local testing, automated backup jobs, reproducible archive workflows, and cross-platform validation for teams evaluating a fast, encrypted, resilient archive format.",
    items: [
      {
        title: "Cargo install",
        body:
          "Use the Rust package ecosystem for a quick install path on systems that already have a recent Rust toolchain.",
      },
      {
        title: "Packaged releases",
        body:
          "Use GitHub Releases or Homebrew when you want prebuilt artifacts, checksums, and release notes for operational installs.",
      },
      {
        title: "Source builds",
        body:
          "Build from source when contributing, auditing behavior, testing format compatibility, or validating a specific revision.",
      },
    ],
  },
  docs: {
    title: "Command workflows for fast, encrypted, resilient archives",
    body:
      "The documentation focuses on practical command-line flows: creating compressed archives quickly, keeping passphrases out of shell history, listing and verifying archive integrity, extracting complete archives, restoring one file, and testing split-volume recovery behavior.",
    items: [
      {
        title: "Create and verify backups",
        body:
          "Use Zstandard compression, stdin-based passphrase handling, authenticated manifests, and verification commands to make backup runs faster and easier to audit.",
      },
      {
        title: "Inspect and restore selectively",
        body:
          "List encrypted archives and restore individual paths when you need targeted recovery from large datasets.",
      },
      {
        title: "Test damaged-volume recovery",
        body:
          "Create multi-volume archives with loss tolerance so backup media and object-storage layouts can be tested before they are needed.",
      },
    ],
  },
  spec: {
    title: "Public archive format for implementers and reviewers",
    body:
      "The tzap specification documents the archive layout for independent review and compatible implementations. It describes the format contract behind fast compression, encrypted metadata, authenticated payloads, indexes, trailers, split volumes, and recovery behavior.",
    items: [
      {
        title: "Format transparency",
        body:
          "The public specification gives implementers a stable place to inspect decisions and compare behavior against the Rust reference implementation.",
      },
      {
        title: "Integrity model",
        body:
          "Authenticated headers, manifests, indexes, trailers, and payloads are part of the format design rather than a separate wrapper.",
      },
      {
        title: "Recovery model",
        body:
          "Split-volume and Reed-Solomon recovery behavior are documented so damaged media cases can be reasoned about and tested.",
      },
    ],
  },
  zmanager: {
    title: "Universal archiver with first-class tzap workflows",
    body:
      "ZManager CLI is a related open-source archiver for teams and developers who need modern archive creation, broad extraction support, safe extraction defaults, and tzap creation and extraction from one command-line tool.",
    items: [
      {
        title: "Create modern archives",
        body:
          "Create ZIP, TAR.ZST, TZAP, and 7z archives from one CLI while keeping secure password handling available.",
      },
      {
        title: "Extract broad formats",
        body:
          "Use one extraction surface for desktop archives, developer packages, raw compression formats, and tzap archives.",
      },
      {
        title: "Use safe defaults",
        body:
          "Prefer prompts and stdin for secrets and apply extraction checks that reduce common path and overwrite risks.",
      },
    ],
  },
  "zmanager-desktop": {
    title: "One engine, many archive formats",
    body:
      "ZManager Desktop makes two jobs simple: open and extract broadly, then create deliberately. One shared Rust engine lets you open everything from ZIPs and RARs to disk images and raw compression files, then create the formats your workflow needs in one fast native app.",
    formatGroups: [
      {
        label: "Create archives",
        formats: [
          ".zip (Deflate/store, AES-256)",
          ".tzst (.tar.zst)",
          ".tgz (.tar.gz)",
          ".tzap",
          ".7z (LZMA2, AES-256)",
          ".aar/.aea (Apple Archive)",
        ],
      },
      {
        label: "ZIP family",
        formats: [
          ".zip",
          ".zipx",
          ".jar",
          ".war",
          ".ipa",
          ".apk",
          ".appx",
          ".xpi",
          ".cbz",
          ".epub",
          "split .z01… volumes",
          "ZIP-content .exe",
        ],
      },
      {
        label: "7z family",
        formats: [
          ".7z",
          ".cb7",
          ".sevenz",
          "encrypted 7z",
          "numbered .7z.001 volumes",
        ],
      },
      {
        label: "RAR family",
        formats: [
          ".rar",
          ".cbr",
          "split .partN.rar volumes",
          "RAR4/RAR5",
          "passworded RAR",
          "encrypted RAR5",
        ],
      },
      {
        label: "TAR and variants",
        formats: [
          ".tar",
          ".cbt",
          ".ustar",
          ".pax",
          ".tar.gz",
          ".tgz",
          ".tar.bz2",
          ".tbz2",
          ".tbz",
          ".tar.xz",
          ".txz",
          ".tar.lzma",
          ".tlzma",
          ".tzst",
          ".tar.zst",
          ".tar.lz",
          ".tar.lzo",
          ".tar.Z",
          ".taz",
          ".tar.lz4",
          ".tar.uu",
          ".tar.b64",
        ],
      },
      {
        label: "TZAP and raw compression",
        formats: [
          ".tzap",
          ".zst",
          ".gz",
          ".bz2",
          ".xz",
          ".lzma",
          ".lz",
          ".br",
          ".lz4",
          ".lzo",
          ".Z",
          ".uu",
          ".b64",
        ],
      },
      {
        label: "Packages and containers",
        formats: [
          ".deb",
          ".rpm",
          ".a",
          ".ar",
          ".lib",
          ".cpio",
          ".cpio.gz",
          ".cpio.bz2",
          ".cpio.xz",
          ".cpio.lzma",
          ".cpio.zst",
          ".cpgz",
          ".spk",
          ".iso",
          ".xar",
          ".cab",
          ".msi",
          ".pkg",
          ".lha",
          ".lzh",
          ".warc",
          ".mtree",
        ],
      },
      {
        label: "Disk images and Apple Archive",
        formats: [
          ".dmg (Apple Disk Image)",
          ".vhd (Virtual PC/Hyper-V)",
          ".vmdk (VMware)",
          ".udf (optical)",
          ".aar",
          ".aea (encrypted Apple Archive)",
        ],
      },
    ],
    items: [
      {
        title: "Extract broadly",
        body:
          "Open desktop, developer, package, mobile, disk-image, and raw compression formats without first hunting for a specialized utility.",
      },
      {
        title: "Create deliberately",
        body:
          "Choose ZIP for sharing, TZST for fast compression, TGZ for compatibility, TZAP for encrypted recoverable archives, 7z for high-compression encryption, or Apple Archive for Apple platforms.",
      },
      {
        title: "Safety built into the engine",
        body:
          "Password prompts, safe path handling, overwrite protection, and hostile-archive checks keep broad extraction practical without sacrificing control.",
      },
    ],
  },
  sponsor: {
    title: "Support open archive infrastructure",
    body:
      "Sponsorship helps turn tzap from a promising archive format into dependable infrastructure: releases, documentation, packaging, compatibility testing, recovery fixtures, specification work, and maintenance for people storing private data and long-lived backups.",
    items: [
      {
        title: "Release engineering",
        body:
          "Fund predictable binaries, checksums, install notes, versioned artifacts, and clearer release communication.",
      },
      {
        title: "Compatibility testing",
        body:
          "Support fixtures for damaged volumes, random-access restore paths, large archive behavior, and regression coverage.",
      },
      {
        title: "Specification work",
        body:
          "Keep the public format description, implementer notes, examples, and review surface moving with the code.",
      },
    ],
  },
} satisfies Record<
  RouteSlug,
  {
    title: string;
    body: string;
    items: Array<{ title: string; body: string }>;
    formatGroups?: Array<{ label: string; formats: string[] }>;
  }
>;
