export type Locale = "en" | "zh-Hans";

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-Hans": "简体中文",
};

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

export const routeSlugs = ["", "download", "docs", "spec", "zmanager"] as const;
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
  ],
  "zh-Hans": [
    { label: "下载", slug: "download" },
    { label: "文档", slug: "docs" },
    { label: "规范", slug: "spec" },
    { label: "ZManager", slug: "zmanager" },
  ],
} satisfies Record<Locale, Array<{ label: string; slug: RouteSlug }>>;

export const copy = {
  en: {
    siteName: "tzap",
    titleSuffix: "tzap archive format",
    skip: "Skip to content",
    openSourceNote: "Open format. Rust reference implementation. Apache-2.0.",
    language: "Language",
    source: "Source",
    footer:
      "tzap.org is the public home for the tzap archive format and related open tools.",
    editSite: "Website source",
    home: {
      title: "tzap archive format",
      description:
        "Fast, encrypted, recoverable archives for serious long-term storage.",
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
      contactTitle: "Contact",
      contactBody:
        "Questions, support requests, and project coordination can go through email.",
      contactAction: "Email support@tzap.org",
      sponsorshipTitle: "Sponsorship",
      sponsorshipBody:
        "Support ongoing tzap development through Open Collective or Ko-fi.",
      openCollectiveAction: "Sponsor on Open Collective",
      koFiAction: "Sponsor on Ko-fi",
    },
    download: {
      title: "Download tzap",
      description:
        "Install tzap from crates.io, Homebrew, GitHub Releases, or source.",
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
      title: "Documentation",
      description:
        "Common tzap workflows for creating, verifying, listing, extracting, and recovering archives.",
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
      title: "Format specification",
      description:
        "The tzap format is documented publicly for implementers and reviewers.",
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
      title: "ZManager CLI",
      description:
        "A related open-source command-line archiver with first-class tzap workflows.",
      body:
        "ZManager CLI is a practical universal archiver for macOS, Linux, and Windows. It creates modern archives, extracts a broad set of formats safely, and supports .tzap creation and extraction.",
      openBoundary:
        "The CLI is open source. The macOS GUI is a separate closed-source product boundary and should only be linked here when there is a public release channel.",
      repoButton: "Open ZManager CLI",
      releaseButton: "ZManager releases",
      features: [
        "Create ZIP, TAR.ZST, TZAP, and 7z archives.",
        "Extract many desktop, developer, package, and raw compression formats.",
        "Use password prompts or stdin instead of command-line password arguments.",
        "Apply safe extraction checks by default.",
      ],
    },
  },
  "zh-Hans": {
    siteName: "tzap",
    titleSuffix: "tzap 归档格式",
    skip: "跳到内容",
    openSourceNote: "开放格式。Rust 参考实现。Apache-2.0。",
    language: "语言",
    source: "源码",
    footer: "tzap.org 是 tzap 归档格式和相关开放工具的公共主页。",
    editSite: "网站源码",
    home: {
      title: "tzap 归档格式",
      description: "面向长期存储的快速、加密、可恢复归档。",
      eyebrow: "开放归档格式",
      subhead:
        "tzap 将 Zstandard 压缩、认证加密、分卷和恢复数据组合在一个实用格式中，并提供 Rust 参考实现。",
      primary: "下载 tzap",
      secondary: "查看 GitHub",
      tertiary: "阅读规范",
      installLabel: "安装",
      installCommand: "cargo install tzap",
      whyTitle: "为什么是 tzap",
      why:
        "很多归档工具更偏向小文件分享或解压旧格式。tzap 面向多年后仍然需要可信恢复的归档：私有数据集、源码记录、媒体库、法律材料和冷备份。",
      featuresTitle: "核心能力",
      features: [
        "使用 Zstandard 进行快速压缩。",
        "加密内容、文件名、元数据和索引。",
        "认证头部、清单、索引、尾部和载荷。",
        "通过 Reed-Solomon 恢复损坏或缺失的分卷。",
        "从大型归档中随机访问并恢复目标文件。",
        "适合云对象、硬盘、光盘和离线介质的分卷布局。",
      ],
      quickStartTitle: "快速开始",
      ecosystemTitle: "相关工具",
      ecosystem:
        "ZManager CLI 是开源通用归档命令行工具，支持 .tzap 工作流，也支持 ZIP、TAR.ZST、7z 和广泛的解压格式。",
      contactTitle: "联系",
      contactBody: "问题、支持请求和项目协作可以通过邮件联系。",
      contactAction: "发送邮件到 support@tzap.org",
      sponsorshipTitle: "赞助",
      sponsorshipBody: "通过 Open Collective 或 Ko-fi 支持 tzap 的持续开发。",
      openCollectiveAction: "在 Open Collective 赞助",
      koFiAction: "在 Ko-fi 赞助",
    },
    download: {
      title: "下载 tzap",
      description: "通过 crates.io、Homebrew、GitHub Releases 或源码安装 tzap。",
      intro:
        "最快方式是 Cargo。需要预编译包时，可以使用 GitHub Releases 或 Homebrew。",
      methods: [
        {
          name: "Cargo",
          command: "cargo install tzap",
          note: "适用于已安装 Rust 1.85 或更新版本的环境。",
        },
        {
          name: "Homebrew",
          command:
            "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
          note: "适合 macOS 和 Linuxbrew 用户。",
        },
        {
          name: "从源码构建",
          command:
            "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
          note: "适合贡献者和格式实现者。",
        },
      ],
      releases: "发布文件",
      releasesBody:
        "发布文件托管在 GitHub Releases。请查看发布说明了解支持系统、校验和与文件名。",
      releaseButton: "打开 GitHub Releases",
    },
    docs: {
      title: "文档",
      description: "tzap 创建、验证、列出、解压和恢复归档的常用工作流。",
      intro: "这些示例通过 stdin 输入密码，避免秘密出现在 shell 历史或进程参数中。",
      sections: [
        {
          title: "创建归档",
          command:
            "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project",
        },
        {
          title: "列出并验证",
          command:
            "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap",
        },
        {
          title: "解压全部内容",
          command:
            "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap",
        },
        {
          title: "解压单个文件",
          command:
            "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt",
        },
        {
          title: "创建可恢复分卷",
          command:
            "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002",
        },
      ],
      more: "完整 CLI 参考",
    },
    spec: {
      title: "格式规范",
      description: "tzap 格式公开记录，便于实现者和审阅者检查。",
      body:
        "当前公开格式规范是 v0.43。它是草案实现目标，并取代早期的 tzap 格式草案。",
      specButton: "阅读当前规范",
      repoButton: "打开参考实现",
      notesTitle: "实现说明",
      notes: [
        "参考实现使用 Rust 编写。",
        "格式目标包括认证元数据和认证载荷。",
        "分卷和恢复能力是格式核心，而不是后续附加功能。",
        "公开可用后，可以在此链接一致性矩阵。",
      ],
    },
    zmanager: {
      title: "ZManager CLI",
      description: "支持 tzap 工作流的相关开源命令行归档工具。",
      body:
        "ZManager CLI 是面向 macOS、Linux 和 Windows 的通用归档工具。它可以创建现代归档、安全解压多种格式，并支持 .tzap 创建和解压。",
      openBoundary:
        "CLI 是开源的。macOS GUI 是独立的闭源产品边界，只有在存在公开发布渠道时才应从这里链接。",
      repoButton: "打开 ZManager CLI",
      releaseButton: "ZManager 发布",
      features: [
        "创建 ZIP、TAR.ZST、TZAP 和 7z 归档。",
        "解压多种桌面、开发、软件包和原始压缩格式。",
        "使用密码提示或 stdin，避免命令行密码参数。",
        "默认启用安全解压检查。",
      ],
    },
  },
} satisfies Record<Locale, any>;
