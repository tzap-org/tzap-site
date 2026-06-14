import type { SiteCopy } from "./en";

export const zhHans = {
  siteName: "tzap",
  titleSuffix: "tzap 归档格式",
  skip: "跳到内容",
  openSourceNote: "开放格式。Rust 参考实现。Apache-2.0。",
  language: "语言",
  source: "源码",
  support: "支持",
  primaryNavigation: "主导航",
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
    ecosystemAction: "打开 ZManager CLI",
    contactTitle: "联系",
    contactBody: "问题、支持请求和项目协作可以通过邮件联系。",
    contactAction: "发送邮件到 support@tzap.org",
    sponsorshipTitle: "赞助",
    sponsorshipBody: "支持发布、兼容性测试、文档和长期维护。",
    openCollectiveAction: "赞助 tzap",
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
    featuresTitle: "功能概览",
    features: [
      "创建 ZIP、TAR.ZST、TZAP 和 7z 归档。",
      "解压多种桌面、开发、软件包和原始压缩格式。",
      "使用密码提示或 stdin，避免命令行密码参数。",
      "默认启用安全解压检查。",
    ],
  },
  sponsor: {
    title: "赞助 tzap",
    description: "支持 tzap 发布、文档、兼容性测试和长期维护。",
    eyebrow: "开源资助",
    intro:
      "tzap 属于基础设施型软件：真正有价值的是首次发布后仍然可靠的部分。赞助可以帮助它从一个有前景的归档格式，成长为人们可以信任的工具链，用于私有数据、源码记录、媒体库、研究数据和冷备份。",
    primary: "在 Open Collective 赞助",
    secondary: "在 Ko-fi 赞助",
    tertiary: "查看源码",
    panelTitle: "资金支持什么",
    panelBody:
      "第一阶段目标很直接：让发布、文档、打包、测试和规范工作持续推进，而不是完全依赖业余时间。",
    stats: [
      { label: "许可证", value: "Apache-2.0" },
      { label: "参考实现", value: "Rust" },
      { label: "项目主页", value: "tzap.org" },
    ],
    usesTitle: "支持会用在哪里",
    uses: [
      {
        title: "发布工程",
        body: "跨平台构建、校验和、安装文档、打包完善和清晰的发布说明。",
      },
      {
        title: "兼容性和恢复测试",
        body:
          "归档测试样本、损坏分卷场景、随机访问恢复检查、fuzz 目标和回归覆盖。",
      },
      {
        title: "文档和规范",
        body: "清晰的用户工作流、实现者说明、格式修订、迁移指南和公开示例。",
      },
      {
        title: "维护时间",
        body: "问题分诊、依赖更新、安全审查、错误修复，以及让工具保持可信的日常维护。",
      },
    ],
    whyTitle: "为什么重要",
    why:
      "归档经常比创建它们的电脑、云账户、硬盘和操作系统存在得更久。tzap 正是围绕这种现实设计：认证元数据、加密私有归档、用于公共归档的显式明文模式、分卷、恢复数据，以及从大型数据集中定向恢复文件。",
    transparencyTitle: "默认透明",
    transparency:
      "Open Collective 让资金情况可见，项目工作也通过公开仓库、格式规范、测试和发布历史保持可检查。",
    footerTitle: "让可靠归档少一点脆弱",
    footerBody:
      "如果 tzap 对你、你的团队，或需要可恢复私有归档的未来项目有用，赞助是让这项工作继续推进的最直接方式。",
  },
} satisfies SiteCopy;
