import type { SiteCopy } from "./en";

export const de = {
  "siteName": "tzap",
  "titleSuffix": "tzap-Archivformat",
  "skip": "Zum Inhalt springen",
  "openSourceNote": "Offenes Format. Rust-Referenzimplementierung. Apache-2.0.",
  "language": "Sprache",
  "source": "Quelle",
  "support": "Unterstützung",
  "primaryNavigation": "Primäre Navigation",
  "footer": "tzap.org ist die öffentliche Heimat des tzap-Archivformats und der zugehörigen offenen Tools.",
  "editSite": "Website-Quelle",
  "home": {
    "title": "tzap-Archivformat",
    "description": "Schnelle, verschlüsselte, wiederherstellbare Archive für ernsthafte Langzeitspeicherung.",
    "eyebrow": "Offenes Archivformat",
    "subhead": "tzap kombiniert Zstandard-Komprimierung, authentifizierte Verschlüsselung, geteilte Volumes und Wiederherstellungsdaten in einem praktischen Format mit einer Rust-Referenzimplementierung.",
    "primary": "Laden Sie tzap herunter",
    "secondary": "Sehen Sie sich GitHub an",
    "tertiary": "Lesen Sie die Spezifikation",
    "installLabel": "Installieren",
    "installCommand": "cargo install tzap",
    "whyTitle": "Warum tzap",
    "why": "Die meisten Archivierungstools sind für die gemeinsame Nutzung kleiner Dateien oder das Entpacken alter Formate optimiert. tzap richtet sich an Archive, denen Sie in einigen Jahren möglicherweise vertrauen müssen: private Datensätze, Quelldatensätze, Mediensätze, juristisches Material und Kaltsicherungen.",
    "featuresTitle": "Kernkompetenzen",
    "features": [
      "Schnelle Komprimierung mit Zstandard.",
      "Verschlüsselte Inhalte, Namen, Metadaten und Indizes.",
      "Authentifizierte Header, Manifeste, Indizes, Trailer und Nutzlasten.",
      "Reed-Solomon-Wiederherstellung für beschädigte oder fehlende Volumes.",
      "Wiederherstellungen mit wahlfreiem Zugriff aus sehr großen Archiven.",
      "Split-Volume-Layouts für Cloud-Objekte, Laufwerke, Discs und Offline-Medien."
    ],
    "quickStartTitle": "Schnellstart",
    "ecosystemTitle": "Verwandte Tools",
    "ecosystem": "ZManager CLI ist ein universeller Open-Source-Archivierer, der neben ZIP, TAR.ZST, 7z und breiten Extraktionsformaten auch .tzap-Workflows unterstützt.",
    "ecosystemAction": "Öffnen Sie ZManager CLI",
    "contactTitle": "Kontakt",
    "contactBody": "Fragen, Supportanfragen und Projektkoordination können per E-Mail erfolgen.",
    "contactAction": "E-Mail an support@tzap.org",
    "sponsorshipTitle": "Sponsoring",
    "sponsorshipBody": "Unterstützt Release-Arbeit, Kompatibilitätstests, Dokumentation und langfristige Wartung.",
    "openCollectiveAction": "tzap unterstützen",
    "koFiAction": "Sponsor auf Ko-fi"
  },
  "download": {
    "title": "Laden Sie tzap herunter",
    "description": "Installieren Sie tzap von crates.io, Homebrew, GitHub Releases oder der Quelle.",
    "intro": "Der schnellste Weg ist Cargo. GitHub Releases und Homebrew sind für gepackte Binärdateien nützlich, sofern verfügbar.",
    "methods": [
      {
        "name": "Cargo",
        "command": "cargo install tzap",
        "note": "Funktioniert überall dort, wo Rust 1.85 oder neuer verfügbar ist."
      },
      {
        "name": "Homebrew",
        "command": "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        "note": "Gut für macOS- und Linuxbrew-Benutzer."
      },
      {
        "name": "Aus der Quelle",
        "command": "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        "note": "Am besten für Mitwirkende und Implementierer."
      }
    ],
    "releases": "Release-Artefakte",
    "releasesBody": "Veröffentlichte Release-Artefakte werden auf GitHub Releases gehostet. Überprüfen Sie die Versionshinweise auf unterstützte Betriebssysteme, Prüfsummen und Archivnamen.",
    "releaseButton": "Öffnen Sie GitHub Releases"
  },
  "docs": {
    "title": "Dokumentation",
    "description": "Gängige tzap-Workflows zum Erstellen, Überprüfen, Auflisten, Extrahieren und Wiederherstellen von Archiven.",
    "intro": "Diese Beispiele verwenden den Passphrase-Modus über stdin, sodass Geheimnisse nicht im Shell-Verlauf oder in Prozesslisten angezeigt werden.",
    "sections": [
      {
        "title": "Erstellen Sie ein Archiv",
        "command": "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project"
      },
      {
        "title": "Auflisten und überprüfen",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap"
      },
      {
        "title": "Alles extrahieren",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap"
      },
      {
        "title": "Extrahieren Sie eine Datei",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt"
      },
      {
        "title": "Erstellen Sie wiederherstellbare Volumes",
        "command": "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002"
      }
    ],
    "more": "Vollständige CLI-Referenz"
  },
  "spec": {
    "title": "Formatangabe",
    "description": "Das tzap-Format ist für Implementierer und Prüfer öffentlich dokumentiert.",
    "body": "Die aktuelle öffentliche Spezifikation ist v0.43. Es handelt sich um das Implementierungsziel des Entwurfs und ersetzt die früheren Entwürfe des tzap-Formats.",
    "specButton": "Lesen Sie die aktuelle Spezifikation",
    "repoButton": "Offene Referenzimplementierung",
    "notesTitle": "Hinweise zur Implementierung",
    "notes": [
      "Die Referenzimplementierung ist in Rust geschrieben.",
      "Das Format zielt auf authentifizierte Metadaten und Nutzlasten ab.",
      "Split-Volume- und Wiederherstellungsverhalten sind Teil der Formatgeschichte und kein nachträglicher Einfall.",
      "Konformitätsmatrizen können hier verlinkt werden, sobald sie für die öffentliche Leserschaft bereit sind."
    ]
  },
  "zmanager": {
    "title": "ZManager CLI",
    "description": "Ein verwandter Open-Source-Befehlszeilenarchivierer mit erstklassigen tzap-Workflows.",
    "body": "ZManager CLI ist ein praktischer Universalarchivierer für macOS, Linux und Windows. Es erstellt moderne Archive, extrahiert sicher eine breite Palette von Formaten und unterstützt die Erstellung und Extraktion von .tzap.",
    "openBoundary": "Die CLI ist Open Source. Die macOS-GUI ist eine separate Closed-Source-Produktgrenze und sollte hier nur verlinkt werden, wenn es einen öffentlichen Veröffentlichungskanal gibt.",
    "repoButton": "Öffnen Sie ZManager CLI",
    "releaseButton": "ZManager-Versionen",
    "featuresTitle": "Was es bewirkt",
    "features": [
      "Erstellen Sie ZIP-, TAR.ZST-, TZAP- und 7z-Archive.",
      "Extrahieren Sie viele Desktop-, Entwickler-, Paket- und Rohkomprimierungsformate.",
      "Verwenden Sie Passwortabfragen oder stdin anstelle von Befehlszeilen-Passwortargumenten.",
      "Wenden Sie standardmäßig sichere Extraktionsprüfungen an."
    ]
  },
  "sponsor": {
    "title": "tzap unterstützen",
    "description": "Helfen Sie bei der Finanzierung von tzap-Releases, Dokumentation, Kompatibilitätstests und langfristiger Wartung.",
    "eyebrow": "Open-Source-Finanzierung",
    "intro": "tzap ist eine infrastrukturorientierte Software: Die nützlichen Teile sind die langweiligen Teile, die nach der ersten Veröffentlichung weiter funktionieren. Sponsoring trägt dazu bei, ein vielversprechendes Archivformat in eine zuverlässige Toolchain zu verwandeln, der Menschen für private Daten, Quelldatensätze, Medienbibliotheken, Forschungssätze und Kaltsicherungen vertrauen können.",
    "primary": "Sponsor auf Open Collective",
    "secondary": "Sponsor auf Ko-fi",
    "tertiary": "Quelle ansehen",
    "panelTitle": "Welche Finanzierung unterstützt",
    "panelBody": "Das erste Ziel ist einfach: Halten Sie die Release-, Dokumentations-, Verpackungs-, Test- und Spezifikationsarbeit am Laufen, ohne sich allein auf Ihre Freizeit zu verlassen.",
    "stats": [
      {
        "label": "Lizenz",
        "value": "Apache-2.0"
      },
      {
        "label": "Referenzimplementierung",
        "value": "Rust"
      },
      {
        "label": "Projekthaus",
        "value": "tzap.org"
      }
    ],
    "usesTitle": "Wohin die Unterstützung geht",
    "uses": [
      {
        "title": "Release-Engineering",
        "body": "Plattformübergreifende Builds, Prüfsummen, Installationsdokumente, Verpackungspolitur und vorhersehbare Versionshinweise."
      },
      {
        "title": "Kompatibilitäts- und Wiederherstellungstests",
        "body": "Archivierungseinbauten, Fälle von beschädigten Datenträgern, Wiederherstellungsprüfungen mit wahlfreiem Zugriff, Fuzz-Ziele und Regressionsabdeckung."
      },
      {
        "title": "Dokumentations- und Spezifikationsarbeiten",
        "body": "Klare Benutzerabläufe, Implementierungshinweise, Formatrevisionen, Migrationsanleitungen und öffentliche Beispiele."
      },
      {
        "title": "Wartungszeit",
        "body": "Problemtriage, Abhängigkeitsaktualisierungen, Sicherheitsüberprüfungen, Fehlerbehebungen und die unrühmliche Arbeit, die dafür sorgt, dass Tools vertrauenswürdig bleiben."
      }
    ],
    "whyTitle": "Warum es wichtig ist",
    "why": "Archive überleben oft die Maschinen, Cloud-Konten, Laufwerke und Betriebssysteme, auf denen sie erstellt wurden. tzap basiert auf dieser Realität: authentifizierte Metadaten, verschlüsselte private Archive, expliziter Klartextmodus für öffentliche Archive, geteilte Volumes, Wiederherstellungsdaten und gezielte Wiederherstellungen aus großen Datensätzen.",
    "transparencyTitle": "Standardmäßig transparent",
    "transparency": "Open Collective hält die Finanzierung sichtbar und die Arbeit selbst bleibt durch die öffentlichen Repositories, Spezifikationen, Tests und den Veröffentlichungsverlauf einsehbar.",
    "footerTitle": "Helfen Sie dabei, zuverlässige Archive weniger anfällig zu machen",
    "footerBody": "Wenn tzap für Sie, Ihr Team oder zukünftige Projekte, die wiederherstellbare private Archive benötigen, nützlich ist, ist Sponsoring der direkteste Weg, die Arbeit am Laufen zu halten."
  }
} satisfies SiteCopy;
