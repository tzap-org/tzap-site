import type { SiteCopy } from "./en";

export const ja = {
  "siteName": "tzap",
  "titleSuffix": "tzap：高速・暗号化・レジリエントアーカイブ形式",
  "skip": "コンテンツにスキップ",
  "openSourceNote": "オープンフォーマット。 Rust リファレンス実装。 Apache-2.0。",
  "language": "言語",
  "source": "ソース",
  "support": "サポート",
  "primaryNavigation": "プライマリナビゲーション",
  "footer": "tzap.org は、tzap アーカイブ形式および関連するオープン ツールの公開ホームです。",
  "editSite": "ウェブサイトのソース",
  "home": {
    "title": "tzap：高速・暗号化・レジリエントアーカイブ形式",
    "description": "重要な長期保存用の、高速で暗号化された回復可能なアーカイブ。",
    "eyebrow": "オープンアーカイブ形式",
    "subhead": "tzap は、Zstandard 圧縮、認証済み暗号化、分割ボリューム、および回復データを 1 つの実用的な形式で Rust リファレンス実装と組み合わせます。",
    "primary": "tzapをダウンロード",
    "secondary": "GitHub を見る",
    "tertiary": "仕様を読む",
    "installLabel": "インストール",
    "installCommand": "cargo install tzap",
    "whyTitle": "tzap を選ぶ理由",
    "why": "ほとんどのアーカイブ ツールは、小さなファイルの共有や古い形式の解凍に最適化されています。 tzap は、プライベート データセット、ソース レコード、メディア セット、法的資料、コールド バックアップなど、数年後に信頼する必要があるかもしれないアーカイブを対象としています。",
    "featuresTitle": "コア機能",
    "features": [
      "Zstandard による高速圧縮。",
      "暗号化されたコンテンツ、名前、メタデータ、インデックス。",
      "認証されたヘッダー、マニフェスト、インデックス、トレーラー、ペイロード。",
      "破損または紛失したボリュームの Reed-Solomon リカバリ。",
      "非常に大規模なアーカイブからのランダムアクセス復元。",
      "クラウド オブジェクト、ドライブ、ディスク、オフライン メディアの分割ボリューム レイアウト。"
    ],
    "quickStartTitle": "クイックスタート",
    "ecosystemTitle": "関連ツール",
    "ecosystem": "ZManager CLI は、ZIP、TAR.ZST、7z、および広範な抽出形式とともに .tzap ワークフローをサポートするオープンソースのユニバーサル アーカイバです。",
    "ecosystemAction": "ZManager CLIを開く",
    "contactTitle": "連絡先",
    "contactBody": "質問、サポート依頼、プロジェクト調整はメールでご連絡ください。",
    "contactAction": "support@tzap.org にメール",
    "sponsorshipTitle": "スポンサーシップ",
    "sponsorshipBody": "リリース作業、互換性テスト、ドキュメント、長期保守を支援します。",
    "openCollectiveAction": "tzap をスポンサー",
    "koFiAction": "Ko-fi のスポンサー"
  },
  "download": {
    "title": "tzapをダウンロード",
    "description": "crates.io、Homebrew、GitHub Releases、またはソースから tzap をインストールします。",
    "intro": "最も早いパスは Cargo です。 GitHub Releases および Homebrew は、パッケージ化されたバイナリが利用可能な場合に便利です。",
    "methods": [
      {
        "name": "Cargo",
        "command": "cargo install tzap",
        "note": "Rust 1.85 以降が利用可能な場所であればどこでも動作します。"
      },
      {
        "name": "Homebrew",
        "command": "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        "note": "macOS および Linuxbrew ユーザーに適しています。"
      },
      {
        "name": "ソースから",
        "command": "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        "note": "貢献者と実装者にとって最適です。"
      }
    ],
    "releases": "リリース成果物",
    "releasesBody": "公開されたリリース アーティファクトは GitHub Releases でホストされます。サポートされているオペレーティング システム、チェックサム、アーカイブ名については、リリース ノートを確認してください。",
    "releaseButton": "GitHub Releasesを開く"
  },
  "docs": {
    "title": "ドキュメント",
    "description": "アーカイブの作成、検証、リスト、抽出、およびリカバリのための一般的な tzap ワークフロー。",
    "intro": "これらの例では、標準入力経由でパスフレーズ モードを使用しているため、シークレットはシェル履歴やプロセス リストに表示されません。",
    "sections": [
      {
        "title": "アーカイブを作成する",
        "command": "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project"
      },
      {
        "title": "リスト化して検証する",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap"
      },
      {
        "title": "すべてを抽出する",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap"
      },
      {
        "title": "1つのファイルを抽出します",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt"
      },
      {
        "title": "回復可能なボリュームを作成する",
        "command": "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002"
      }
    ],
    "more": "完全な CLI リファレンス"
  },
  "spec": {
    "title": "フォーマット仕様",
    "description": "tzap 形式は、実装者およびレビュー担当者向けに公開文書化されています。",
    "body": "現在の公開仕様は v0.43 です。これはドラフト実装ターゲットであり、以前の tzap 形式のドラフトに置き換わります。",
    "specButton": "現在の仕様を読む",
    "repoButton": "オープンリファレンス実装",
    "notesTitle": "実装メモ",
    "notes": [
      "リファレンス実装は Rust で書かれています。",
      "この形式は、認証されたメタデータとペイロードを対象としています。",
      "ボリュームの分割と回復の動作はフォーマットの一部であり、後付けではありません。",
      "一般読者向けの準備ができたら、適合マトリックスをここにリンクできます。"
    ]
  },
  "zmanager": {
    "title": "ZManager CLI",
    "description": "ファーストクラスの tzap ワークフローを備えた、関連するオープンソース コマンド ライン アーカイバ。",
    "body": "ZManager CLI は、macOS、Linux、および Windows 用の実用的なユニバーサル アーカイバです。最新のアーカイブを作成し、幅広い形式のセットを安全に抽出し、.tzap の作成と抽出をサポートします。",
    "openBoundary": "CLI はオープンソースです。 macOS GUI は独立したクローズドソース製品境界であり、パブリック リリース チャネルがある場合にのみここにリンクする必要があります。",
    "repoButton": "ZManager CLIを開く",
    "releaseButton": "ZManager リリース",
    "featuresTitle": "何をするのか",
    "features": [
      "ZIP、TAR.ZST、TZAP、および 7z アーカイブを作成します。",
      "多くのデスクトップ、開発者、パッケージ、生の圧縮形式を抽出します。",
      "コマンドラインのパスワード引数の代わりに、パスワード プロンプトまたは標準入力を使用します。",
      "デフォルトで安全な抽出チェックを適用します。"
    ]
  },
  "sponsor": {
    "title": "tzapをスポンサーする",
    "description": "tzap のリリース、ドキュメント、互換性テスト、長期メンテナンスへの資金提供にご協力ください。",
    "eyebrow": "オープンソースの資金調達",
    "intro": "tzap はインフラストラクチャ型のソフトウェアです。便利な部分は最初のリリース後も動作し続ける退屈な部分です。スポンサーシップは、有望なアーカイブ形式を、プライベート データ、ソース レコード、メディア ライブラリ、リサーチ セット、およびコールド バックアップに関して人々が信頼できる信頼できるツールチェーンに変えるのに役立ちます。",
    "primary": "Open Collective のスポンサー",
    "secondary": "Ko-fi のスポンサー",
    "tertiary": "ソースを見る",
    "panelTitle": "資金がサポートするもの",
    "panelBody": "最初の目標はシンプルです。空き時間だけに頼らずに、リリース、ドキュメント、パッケージ化、テスト、仕様の作業を継続的に進めることです。",
    "stats": [
      {
        "label": "ライセンス",
        "value": "Apache-2.0"
      },
      {
        "label": "リファレンス実装",
        "value": "Rust"
      },
      {
        "label": "プロジェクトホーム",
        "value": "tzap.org"
      }
    ],
    "usesTitle": "サポートの行き先",
    "uses": [
      {
        "title": "リリースエンジニアリング",
        "body": "クロスプラットフォームのビルド、チェックサム、インストール ドキュメント、洗練されたパッケージング、予測可能なリリース ノート。"
      },
      {
        "title": "互換性と回復のテスト",
        "body": "アーカイブ フィクスチャ、ボリュームが破損したケース、ランダム アクセス リストア チェック、ファズ ターゲット、回帰カバレッジ。"
      },
      {
        "title": "文書化と仕様化作業",
        "body": "明確なユーザー ワークフロー、実装者のメモ、形式の改訂、移行ガイダンス、および公開された例。"
      },
      {
        "title": "メンテナンス時間",
        "body": "問題のトリアージ、依存関係の更新、セキュリティ レビュー、バグ修正、およびツールの信頼性を維持するための地味な作業。"
      }
    ],
    "whyTitle": "なぜそれが重要なのか",
    "why": "アーカイブは、多くの場合、それを作成したマシン、クラウド アカウント、ドライブ、オペレーティング システムよりも存続します。 tzap は、認証されたメタデータ、暗号化されたプライベート アーカイブ、パブリック アーカイブの明示的なプレーンテキスト モード、分割ボリューム、リカバリ データ、および大規模なデータセットからの対象を絞ったリストアといった現実を中心に構築されています。",
    "transparencyTitle": "デフォルトで透明",
    "transparency": "Open Collective は資金提供を可視化し、作業自体はパブリック リポジトリ、仕様、テスト、リリース履歴を通じて検査可能です。",
    "footerTitle": "信頼できるアーカイブの脆弱性を軽減するのに役立ちます",
    "footerBody": "tzap があなた、あなたのチーム、または回復可能なプライベート アーカイブを必要とする将来のプロジェクトにとって役立つ場合は、スポンサーシップが作業を継続するための最も直接的な方法です。"
  }
} satisfies SiteCopy;
