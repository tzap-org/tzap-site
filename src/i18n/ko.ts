import type { SiteCopy } from "./en";

export const ko = {
  "siteName": "tzap",
  "titleSuffix": "tzap: 빠르고 암호화된 복원력 있는 아카이브 형식",
  "skip": "콘텐츠로 건너뛰기",
  "openSourceNote": "개방형 형식. Rust 참조 구현. Apache-2.0.",
  "language": "언어",
  "source": "소스",
  "support": "지원",
  "primaryNavigation": "기본 탐색",
  "footer": "tzap.org는 tzap 아카이브 형식 및 관련 공개 도구에 대한 공개 홈입니다.",
  "editSite": "웹사이트 소스",
  "home": {
    "title": "tzap: 빠르고 암호화된 복원력 있는 아카이브 형식",
    "description": "장기간 보관을 위한 빠르고 암호화되었으며 복구 가능한 아카이브입니다.",
    "eyebrow": "오픈 아카이브 형식",
    "subhead": "tzap는 Rust 참조 구현을 통해 Zstandard 압축, 인증된 암호화, 분할 볼륨 및 복구 데이터를 하나의 실용적인 형식으로 결합합니다.",
    "primary": "tzap 다운로드",
    "secondary": "GitHub 보기",
    "tertiary": "사양 읽기",
    "installLabel": "설치",
    "installCommand": "cargo install tzap",
    "whyTitle": "왜 tzap인가?",
    "why": "대부분의 아카이브 도구는 작은 파일을 공유하거나 오래된 형식의 압축을 푸는 데 최적화되어 있습니다. tzap는 개인 데이터 세트, 소스 레코드, 미디어 세트, 법적 자료 및 콜드 백업과 같이 지금부터 몇 년 동안 신뢰해야 할 아카이브를 목표로 합니다.",
    "featuresTitle": "핵심 역량",
    "features": [
      "Zstandard를 통한 빠른 압축.",
      "암호화된 콘텐츠, 이름, 메타데이터 및 색인.",
      "인증된 헤더, 매니페스트, 인덱스, 트레일러, 페이로드.",
      "손상되거나 누락된 볼륨에 대한 Reed-Solomon 복구.",
      "매우 큰 아카이브에서 무작위 액세스 복원.",
      "클라우드 개체, 드라이브, 디스크 및 오프라인 미디어에 대한 분할 볼륨 레이아웃입니다."
    ],
    "quickStartTitle": "빠른 시작",
    "ecosystemTitle": "관련 도구",
    "ecosystem": "ZManager CLI는 ZIP, TAR.ZST, 7z 및 광범위한 추출 형식과 함께 .tzap 워크플로를 지원하는 오픈 소스 범용 아카이버입니다.",
    "ecosystemAction": "ZManager CLI 열기",
    "contactTitle": "연락처",
    "contactBody": "질문, 지원 요청, 프로젝트 조정은 이메일을 통해 이루어질 수 있습니다.",
    "contactAction": "support@tzap.org로 이메일 보내기",
    "sponsorshipTitle": "후원",
    "sponsorshipBody": "릴리스 작업, 호환성 테스트, 문서화 및 장기 유지 관리를 지원합니다.",
    "openCollectiveAction": "tzap 후원",
    "koFiAction": "Ko-fi의 후원자"
  },
  "download": {
    "title": "tzap 다운로드",
    "description": "crates.io, Homebrew, GitHub Releases 또는 소스에서 tzap을 설치합니다.",
    "intro": "가장 빠른 경로는 Cargo입니다. GitHub Releases 및 Homebrew는 사용 가능한 경우 패키지 바이너리에 유용합니다.",
    "methods": [
      {
        "name": "Cargo",
        "command": "cargo install tzap",
        "note": "Rust 1.85 이상이 사용 가능한 모든 곳에서 작동합니다."
      },
      {
        "name": "Homebrew",
        "command": "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        "note": "macOS 및 Linuxbrew 사용자에게 적합합니다."
      },
      {
        "name": "소스에서",
        "command": "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        "note": "기여자와 구현자에게 가장 적합합니다."
      }
    ],
    "releases": "릴리스 아티팩트",
    "releasesBody": "게시된 릴리스 아티팩트는 GitHub Releases에서 호스팅됩니다. 지원되는 운영 체제, 체크섬 및 아카이브 이름은 릴리스 노트를 확인하세요.",
    "releaseButton": "GitHub Releases 열기"
  },
  "docs": {
    "title": "문서",
    "description": "아카이브 생성, 확인, 나열, 추출 및 복구를 위한 일반적인 tzap 워크플로입니다.",
    "intro": "이 예에서는 stdin을 통해 암호 모드를 사용하므로 비밀이 셸 기록이나 프로세스 목록에 표시되지 않습니다.",
    "sections": [
      {
        "title": "아카이브 만들기",
        "command": "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project"
      },
      {
        "title": "나열 및 확인",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap"
      },
      {
        "title": "모든 것을 추출",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap"
      },
      {
        "title": "하나의 파일을 추출",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt"
      },
      {
        "title": "복구 가능한 볼륨 생성",
        "command": "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002"
      }
    ],
    "more": "전체 CLI 참조"
  },
  "spec": {
    "title": "형식 사양",
    "description": "tzap 형식은 구현자와 검토자를 위해 공개적으로 문서화되었습니다.",
    "body": "현재 공개 사양은 v0.43입니다. 이는 초안 구현 대상이며 이전 tzap 형식 초안을 대체합니다.",
    "specButton": "현재 사양 읽기",
    "repoButton": "공개 참조 구현",
    "notesTitle": "구현 참고사항",
    "notes": [
      "참조 구현은 Rust로 작성되었습니다.",
      "형식은 인증된 메타데이터 및 페이로드를 대상으로 합니다.",
      "볼륨 분할 및 복구 동작은 나중에 고려하는 것이 아니라 포맷 이야기의 일부입니다.",
      "적합성 매트릭스는 대중에게 공개될 준비가 되면 여기에 연결될 수 있습니다."
    ]
  },
  "zmanager": {
    "title": "ZManager CLI",
    "description": "최고 수준의 tzap 워크플로우를 갖춘 관련 오픈 소스 명령줄 아카이버입니다.",
    "body": "ZManager CLI는 macOS, Linux 및 Windows를 위한 실용적인 범용 아카이버입니다. 최신 아카이브를 생성하고, 다양한 형식을 안전하게 추출하며, .tzap 생성 및 추출을 지원합니다.",
    "openBoundary": "CLI는 오픈 소스입니다. macOS GUI는 별도의 비공개 소스 제품 경계이므로 공개 릴리스 채널이 있는 경우에만 여기에 연결해야 합니다.",
    "repoButton": "ZManager CLI 열기",
    "releaseButton": "ZManager 출시",
    "featuresTitle": "기능",
    "features": [
      "ZIP, TAR.ZST, TZAP 및 7z 아카이브를 생성합니다.",
      "다양한 데스크탑, 개발자, 패키지 및 원시 압축 형식을 추출합니다.",
      "명령줄 암호 인수 대신 암호 프롬프트나 stdin을 사용하십시오.",
      "기본적으로 안전한 추출 검사를 적용합니다."
    ]
  },
  "sponsor": {
    "title": "tzap 후원",
    "description": "tzap 릴리스, 문서, 호환성 테스트 및 장기 유지 관리에 자금을 지원하세요.",
    "eyebrow": "오픈소스 펀딩",
    "intro": "tzap는 인프라 형태의 소프트웨어입니다. 유용한 부분은 첫 번째 릴리스 이후에도 계속 작동하는 지루한 부분입니다. 후원은 유망한 아카이브 형식을 사람들이 개인 데이터, 소스 기록, 미디어 라이브러리, 연구 세트 및 콜드 백업에 대해 신뢰할 수 있는 신뢰할 수 있는 도구 체인으로 바꾸는 데 도움이 됩니다.",
    "primary": "Open Collective의 후원자",
    "secondary": "Ko-fi의 후원자",
    "tertiary": "소스 보기",
    "panelTitle": "어떤 자금을 지원하는지",
    "panelBody": "첫 번째 목표는 간단합니다. 여가 시간에만 의존하지 않고 릴리스, 문서, 패키징, 테스트 및 사양 작업을 계속 진행하는 것입니다.",
    "stats": [
      {
        "label": "라이선스",
        "value": "Apache-2.0"
      },
      {
        "label": "참조 구현",
        "value": "Rust"
      },
      {
        "label": "프로젝트 홈",
        "value": "tzap.org"
      }
    ],
    "usesTitle": "지원이 가는 곳",
    "uses": [
      {
        "title": "릴리스 엔지니어링",
        "body": "크로스 플랫폼 빌드, 체크섬, 설치 문서, 패키징 광택 및 예측 가능한 릴리스 노트."
      },
      {
        "title": "호환성 및 복구 테스트",
        "body": "아카이브 고정 장치, 손상된 볼륨 케이스, 무작위 액세스 복원 검사, 퍼즈 대상 및 회귀 적용 범위."
      },
      {
        "title": "문서화 및 사양 작업",
        "body": "명확한 사용자 워크플로, 구현자 메모, 형식 개정, 마이그레이션 지침 및 공개 예제."
      },
      {
        "title": "유지보수 시간",
        "body": "문제 분류, 종속성 업데이트, 보안 검토, 버그 수정 및 도구의 신뢰성을 유지하는 눈에 띄지 않는 작업입니다."
      }
    ],
    "whyTitle": "왜 중요한가요?",
    "why": "아카이브는 아카이브를 생성한 시스템, 클라우드 계정, 드라이브 및 운영 체제보다 오래 지속되는 경우가 많습니다. tzap는 인증된 메타데이터, 암호화된 개인 아카이브, 공개 아카이브를 위한 명시적 일반 텍스트 모드, 분할 볼륨, 복구 데이터 및 대규모 데이터 세트의 대상 복원 등 이러한 현실을 기반으로 구축되었습니다.",
    "transparencyTitle": "기본적으로 투명함",
    "transparency": "Open Collective는 자금 조달을 계속 가시화하고 작업 자체는 공개 저장소, 사양, 테스트 및 릴리스 내역을 통해 검사 가능한 상태를 유지합니다.",
    "footerTitle": "신뢰할 수 있는 아카이브를 덜 취약하게 만드는 데 도움",
    "footerBody": "tzap가 귀하, 귀하의 팀 또는 복구 가능한 개인 아카이브가 필요한 향후 프로젝트에 유용하다면 후원은 작업을 계속 진행하는 가장 직접적인 방법입니다."
  }
} satisfies SiteCopy;
