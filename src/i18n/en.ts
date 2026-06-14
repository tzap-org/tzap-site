export const en = {
  siteName: "tzap",
  titleSuffix: "tzap encrypted archive format",
  skip: "Skip to content",
  openSourceNote: "Open format. Rust reference implementation. Apache-2.0.",
  language: "Language",
  source: "Source",
  support: "Support",
  primaryNavigation: "Primary navigation",
  footer:
    "tzap.org is the public home for the tzap archive format and related open tools.",
  editSite: "Website source",
  home: {
    title: "tzap encrypted archive format",
    description:
      "Open-source archive format and Rust CLI for encrypted, recoverable, split-volume long-term storage.",
    eyebrow: "Open archive format",
    subhead:
      "tzap combines Zstandard compression, authenticated encryption, split volumes, and recovery data in one practical format with a Rust reference implementation.",
    primary: "Download tzap",
    secondary: "View GitHub",
    tertiary: "Read the spec",
    installLabel: "Install",
    installCommand: "cargo install tzap",
    whyTitle: "Why tzap",
    why:
      "Most archive tools optimize for sharing small files or unpacking old formats. tzap is aimed at archives you may need to trust years from now: private datasets, source records, media sets, legal material, and cold backups.",
    featuresTitle: "Core capabilities",
    features: [
      "Fast compression with Zstandard.",
      "Encrypted contents, names, metadata, and indexes.",
      "Authenticated headers, manifests, indexes, trailers, and payloads.",
      "Reed-Solomon recovery for damaged or missing volumes.",
      "Random-access restores from very large archives.",
      "Split-volume layouts for cloud objects, drives, discs, and offline media.",
    ],
    quickStartTitle: "Quick start",
    ecosystemTitle: "Related tools",
    ecosystem:
      "ZManager CLI is an open-source universal archiver that supports .tzap workflows alongside ZIP, TAR.ZST, 7z, and broad extraction formats.",
    ecosystemAction: "Open ZManager CLI",
    contactTitle: "Contact",
    contactBody:
      "Questions, support requests, and project coordination can go through email.",
    contactAction: "Email support@tzap.org",
    sponsorshipTitle: "Sponsorship",
    sponsorshipBody:
      "Fund release work, compatibility testing, documentation, and long-term maintenance.",
    openCollectiveAction: "Sponsor tzap",
    koFiAction: "Sponsor on Ko-fi",
  },
  download: {
    title: "Download tzap CLI",
    description:
      "Install the tzap command-line archive tool from crates.io, Homebrew, GitHub Releases, or source.",
    intro:
      "The quickest path is Cargo. GitHub Releases and Homebrew are useful for packaged binaries when available.",
    methods: [
      {
        name: "Cargo",
        command: "cargo install tzap",
        note: "Works anywhere Rust 1.85 or newer is available.",
      },
      {
        name: "Homebrew",
        command:
          "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        note: "Good for macOS and Linuxbrew users.",
      },
      {
        name: "From source",
        command:
          "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        note: "Best for contributors and implementers.",
      },
    ],
    releases: "Release artifacts",
    releasesBody:
      "Published release artifacts are hosted on GitHub Releases. Check the release notes for supported operating systems, checksums, and archive names.",
    releaseButton: "Open GitHub Releases",
  },
  docs: {
    title: "tzap CLI documentation",
    description:
      "Command examples for creating encrypted archives, verifying backups, listing contents, extracting files, and building recoverable volumes with tzap.",
    intro:
      "These examples use passphrase mode through stdin so secrets do not appear in shell history or process listings.",
    sections: [
      {
        title: "Create an archive",
        command:
          "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project",
      },
      {
        title: "List and verify",
        command:
          "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap",
      },
      {
        title: "Extract everything",
        command:
          "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap",
      },
      {
        title: "Extract one file",
        command:
          "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt",
      },
      {
        title: "Create recoverable volumes",
        command:
          "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002",
      },
    ],
    more: "Full CLI reference",
  },
  spec: {
    title: "tzap archive format specification",
    description:
      "Public specification for the tzap encrypted archive format, including authenticated metadata, payloads, split volumes, and recovery behavior.",
    body:
      "The current public specification is v0.43. It is the draft implementation target and supersedes the earlier tzap format drafts.",
    specButton: "Read the current spec",
    repoButton: "Open reference implementation",
    notesTitle: "Implementation notes",
    notes: [
      "The reference implementation is written in Rust.",
      "The format targets authenticated metadata and payloads.",
      "Split-volume and recovery behavior are part of the format story, not an afterthought.",
      "Conformance matrices can be linked here once they are ready for public readers.",
    ],
  },
  zmanager: {
    title: "ZManager CLI archiver",
    description:
      "Open-source universal command-line archiver for ZIP, TAR.ZST, 7z, broad extraction workflows, and first-class tzap archive support.",
    body:
      "ZManager CLI is a practical universal archiver for macOS, Linux, and Windows. It creates modern archives, extracts a broad set of formats safely, and supports .tzap creation and extraction.",
    openBoundary:
      "The CLI is open source. The macOS GUI is a separate closed-source product boundary and should only be linked here when there is a public release channel.",
    repoButton: "Open ZManager CLI",
    releaseButton: "ZManager releases",
    featuresTitle: "What it does",
    features: [
      "Create ZIP, TAR.ZST, TZAP, and 7z archives.",
      "Extract many desktop, developer, package, and raw compression formats.",
      "Use password prompts or stdin instead of command-line password arguments.",
      "Apply safe extraction checks by default.",
    ],
  },
  sponsor: {
    title: "Sponsor tzap",
    description:
      "Help fund tzap releases, documentation, compatibility testing, and long-term maintenance.",
    eyebrow: "Open-source funding",
    intro:
      "tzap is infrastructure-shaped software: the useful parts are the boring parts that keep working after the first release. Sponsorship helps turn a promising archive format into a dependable toolchain people can trust for private data, source records, media libraries, research sets, and cold backups.",
    primary: "Sponsor on Open Collective",
    secondary: "Sponsor on Ko-fi",
    tertiary: "View source",
    panelTitle: "What funding supports",
    panelBody:
      "The first goal is simple: keep releases, docs, packaging, testing, and specification work moving without relying on spare time alone.",
    stats: [
      { label: "License", value: "Apache-2.0" },
      { label: "Reference implementation", value: "Rust" },
      { label: "Project home", value: "tzap.org" },
    ],
    usesTitle: "Where support goes",
    uses: [
      {
        title: "Release engineering",
        body:
          "Cross-platform builds, checksums, install docs, packaging polish, and predictable release notes.",
      },
      {
        title: "Compatibility and recovery testing",
        body:
          "Archive fixtures, damaged-volume cases, random-access restore checks, fuzz targets, and regression coverage.",
      },
      {
        title: "Documentation and specification work",
        body:
          "Clear user workflows, implementer notes, format revisions, migration guidance, and public examples.",
      },
      {
        title: "Maintenance time",
        body:
          "Issue triage, dependency updates, security reviews, bug fixes, and the unglamorous work that keeps tools trustworthy.",
      },
    ],
    whyTitle: "Why it matters",
    why:
      "Archives often outlive the machines, cloud accounts, drives, and operating systems that created them. tzap is built around that reality: authenticated metadata, encrypted private archives, explicit plaintext mode for public archives, split volumes, recovery data, and targeted restores from large datasets.",
    transparencyTitle: "Transparent by default",
    transparency:
      "Open Collective keeps funding visible, and the work itself stays inspectable through the public repositories, specification, tests, and release history.",
    footerTitle: "Help make reliable archives less fragile",
    footerBody:
      "If tzap is useful to you, your team, or future projects that need recoverable private archives, sponsorship is the most direct way to keep the work moving.",
  },
} as const;

type DeepStringShape<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? Array<DeepStringShape<Item>>
    : T extends object
      ? { [Key in keyof T]: DeepStringShape<T[Key]> }
      : T;

export type SiteCopy = DeepStringShape<typeof en>;
