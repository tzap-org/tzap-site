import type { SiteCopy } from "./en";

export const zhHant = {
  siteName: "tzap",
  titleSuffix: "tzap 封存格式",
  skip: "跳到內容",
  openSourceNote: "開放格式。Rust 參考實作。Apache-2.0。",
  language: "語言",
  source: "原始碼",
  support: "支持",
  primaryNavigation: "主導覽",
  footer: "tzap.org 是 tzap 封存格式和相關開放工具的公共首頁。",
  editSite: "網站原始碼",
  home: {
    title: "tzap 封存格式",
    description: "面向長期儲存的快速、加密、可復原封存。",
    eyebrow: "開放封存格式",
    subhead:
      "tzap 將 Zstandard 壓縮、認證加密、分卷和復原資料組合在一個實用格式中，並提供 Rust 參考實作。",
    primary: "下載 tzap",
    secondary: "查看 GitHub",
    tertiary: "閱讀規範",
    installLabel: "安裝",
    installCommand: "cargo install tzap",
    whyTitle: "為什麼是 tzap",
    why:
      "很多封存工具更偏向小檔案分享或解壓舊格式。tzap 面向多年後仍然需要可信復原的封存：私有資料集、原始碼記錄、媒體庫、法律材料和冷備份。",
    featuresTitle: "核心能力",
    features: [
      "使用 Zstandard 進行快速壓縮。",
      "加密內容、檔案名稱、元資料和索引。",
      "認證標頭、清單、索引、尾端和承載資料。",
      "透過 Reed-Solomon 復原損壞或缺失的分卷。",
      "從大型封存中隨機存取並復原目標檔案。",
      "適合雲端物件、硬碟、光碟和離線媒體的分卷配置。",
    ],
    quickStartTitle: "快速開始",
    ecosystemTitle: "相關工具",
    ecosystem:
      "ZManager CLI 是開源通用封存命令列工具，支援 .tzap 工作流程，也支援 ZIP、TAR.ZST、7z 和廣泛的解壓格式。",
    ecosystemAction: "開啟 ZManager CLI",
    contactTitle: "聯絡",
    contactBody: "問題、支持請求和專案協作可以透過電子郵件聯絡。",
    contactAction: "寄信到 support@tzap.org",
    sponsorshipTitle: "贊助",
    sponsorshipBody: "支持發行、相容性測試、文件和長期維護。",
    openCollectiveAction: "贊助 tzap",
    koFiAction: "在 Ko-fi 贊助",
  },
  download: {
    title: "下載 tzap",
    description: "透過 crates.io、Homebrew、GitHub Releases 或原始碼安裝 tzap。",
    intro:
      "最快方式是 Cargo。需要預先編譯套件時，可以使用 GitHub Releases 或 Homebrew。",
    methods: [
      {
        name: "Cargo",
        command: "cargo install tzap",
        note: "適用於已安裝 Rust 1.85 或更新版本的環境。",
      },
      {
        name: "Homebrew",
        command:
          "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        note: "適合 macOS 和 Linuxbrew 使用者。",
      },
      {
        name: "從原始碼建置",
        command:
          "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        note: "適合貢獻者和格式實作者。",
      },
    ],
    releases: "發行檔案",
    releasesBody:
      "發行檔案託管在 GitHub Releases。請查看發行說明以了解支援系統、校驗和與檔案名稱。",
    releaseButton: "開啟 GitHub Releases",
  },
  docs: {
    title: "文件",
    description: "tzap 建立、驗證、列出、解壓和復原封存的常用工作流程。",
    intro: "這些範例透過 stdin 輸入密碼，避免秘密出現在 shell 歷史或程序參數中。",
    sections: [
      {
        title: "建立封存",
        command:
          "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project",
      },
      {
        title: "列出並驗證",
        command:
          "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap",
      },
      {
        title: "解壓全部內容",
        command:
          "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap",
      },
      {
        title: "解壓單一檔案",
        command:
          "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt",
      },
      {
        title: "建立可復原分卷",
        command:
          "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002",
      },
    ],
    more: "完整 CLI 參考",
  },
  spec: {
    title: "格式規範",
    description: "tzap 格式公開記錄，便於實作者和審閱者檢查。",
    body:
      "目前公開格式規範是 v0.43。它是草案實作目標，並取代早期的 tzap 格式草案。",
    specButton: "閱讀目前規範",
    repoButton: "開啟參考實作",
    notesTitle: "實作說明",
    notes: [
      "參考實作使用 Rust 編寫。",
      "格式目標包括認證元資料和認證承載資料。",
      "分卷和復原能力是格式核心，而不是後續附加功能。",
      "公開可用後，可以在此連結一致性矩陣。",
    ],
  },
  zmanager: {
    title: "ZManager CLI",
    description: "支援 tzap 工作流程的相關開源命令列封存工具。",
    body:
      "ZManager CLI 是面向 macOS、Linux 和 Windows 的通用封存工具。它可以建立現代封存、安全解壓多種格式，並支援 .tzap 建立和解壓。",
    openBoundary:
      "CLI 是開源的。macOS GUI 是獨立的閉源產品邊界，只有在存在公開發行管道時才應從這裡連結。",
    repoButton: "開啟 ZManager CLI",
    releaseButton: "ZManager 發行",
    featuresTitle: "功能概覽",
    features: [
      "建立 ZIP、TAR.ZST、TZAP 和 7z 封存。",
      "解壓多種桌面、開發、軟體套件和原始壓縮格式。",
      "使用密碼提示或 stdin，避免命令列密碼參數。",
      "預設啟用安全解壓檢查。",
    ],
  },
  sponsor: {
    title: "贊助 tzap",
    description: "支持 tzap 發行、文件、相容性測試和長期維護。",
    eyebrow: "開源資助",
    intro:
      "tzap 屬於基礎設施型軟體：真正有價值的是首次發行後仍然可靠的部分。贊助可以幫助它從一個有前景的封存格式，成長為人們可以信任的工具鏈，用於私有資料、原始碼記錄、媒體庫、研究資料和冷備份。",
    primary: "在 Open Collective 贊助",
    secondary: "在 Ko-fi 贊助",
    tertiary: "查看原始碼",
    panelTitle: "資金支持什麼",
    panelBody:
      "第一階段目標很直接：讓發行、文件、打包、測試和規範工作持續推進，而不是完全依賴業餘時間。",
    stats: [
      { label: "授權", value: "Apache-2.0" },
      { label: "參考實作", value: "Rust" },
      { label: "專案首頁", value: "tzap.org" },
    ],
    usesTitle: "支持會用在哪裡",
    uses: [
      {
        title: "發行工程",
        body: "跨平台建置、校驗和、安裝文件、打包完善和清晰的發行說明。",
      },
      {
        title: "相容性和復原測試",
        body:
          "封存測試樣本、損壞分卷場景、隨機存取復原檢查、fuzz 目標和迴歸覆蓋。",
      },
      {
        title: "文件和規範",
        body: "清晰的使用者工作流程、實作者說明、格式修訂、遷移指南和公開範例。",
      },
      {
        title: "維護時間",
        body: "問題分診、相依性更新、安全審查、錯誤修復，以及讓工具保持可信的日常維護。",
      },
    ],
    whyTitle: "為什麼重要",
    why:
      "封存經常比建立它們的電腦、雲端帳戶、硬碟和作業系統存在得更久。tzap 正是圍繞這種現實設計：認證元資料、加密私有封存、用於公共封存的明確明文模式、分卷、復原資料，以及從大型資料集中定向復原檔案。",
    transparencyTitle: "預設透明",
    transparency:
      "Open Collective 讓資金情況可見，專案工作也透過公開倉庫、格式規範、測試和發行歷史保持可檢查。",
    footerTitle: "讓可靠封存少一點脆弱",
    footerBody:
      "如果 tzap 對你、你的團隊，或需要可復原私有封存的未來專案有用，贊助是讓這項工作繼續推進的最直接方式。",
  },
} satisfies SiteCopy;
