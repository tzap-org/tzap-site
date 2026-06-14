import type { SiteCopy } from "./en";

export const fr = {
  "siteName": "tzap",
  "titleSuffix": "Format d'archive tzap",
  "skip": "Passer au contenu",
  "openSourceNote": "Format ouvert. Implémentation de référence Rust. Apache-2.0.",
  "language": "Langue",
  "source": "Source",
  "support": "Soutien",
  "primaryNavigation": "Navigation principale",
  "footer": "tzap.org est le site public du format d'archive tzap et des outils ouverts associés.",
  "editSite": "Source du site Web",
  "home": {
    "title": "Format d'archive tzap",
    "description": "Archives rapides, cryptées et récupérables pour un stockage sérieux à long terme.",
    "eyebrow": "Format d'archive ouvert",
    "subhead": "tzap combine la compression Zstandard, le chiffrement authentifié, les volumes divisés et les données de récupération dans un format pratique avec une implémentation de référence Rust.",
    "primary": "Télécharger tzap",
    "secondary": "Voir GitHub",
    "tertiary": "Lire la spécification",
    "installLabel": "Installer",
    "installCommand": "cargo install tzap",
    "whyTitle": "Pourquoi tzap",
    "why": "La plupart des outils d'archives sont optimisés pour le partage de petits fichiers ou le décompression d'anciens formats. tzap est destiné aux archives auxquelles vous devrez peut-être faire confiance dans des années : ensembles de données privés, enregistrements sources, ensembles de médias, documents juridiques et sauvegardes à froid.",
    "featuresTitle": "Capacités de base",
    "features": [
      "Compression rapide avec Zstandard.",
      "Contenus, noms, métadonnées et index cryptés.",
      "En-têtes, manifestes, index, bandes-annonces et charges utiles authentifiés.",
      "Récupération Reed-Solomon pour les volumes endommagés ou manquants.",
      "Restaurations à accès aléatoire à partir de très grandes archives.",
      "Dispositions en volumes divisés pour les objets cloud, les lecteurs, les disques et les supports hors ligne."
    ],
    "quickStartTitle": "Démarrage rapide",
    "ecosystemTitle": "Outils associés",
    "ecosystem": "ZManager CLI est un archiveur universel open source qui prend en charge les flux de travail .tzap aux côtés de ZIP, TAR.ZST, 7z et de larges formats d'extraction.",
    "ecosystemAction": "Ouvrir ZManager CLI",
    "contactTitle": "Contact",
    "contactBody": "Les questions, les demandes d'assistance et la coordination du projet peuvent être envoyées par courrier électronique.",
    "contactAction": "Envoyer un e-mail à support@tzap.org",
    "sponsorshipTitle": "Parrainage",
    "sponsorshipBody": "Finance le travail de publication, les tests de compatibilité, la documentation et la maintenance à long terme.",
    "openCollectiveAction": "Parrainer tzap",
    "koFiAction": "Parrainer sur Ko-fi"
  },
  "download": {
    "title": "Télécharger tzap",
    "description": "Installez tzap à partir de crates.io, Homebrew, GitHub Releases ou d'une source.",
    "intro": "Le chemin le plus rapide est Cargo. GitHub Releases et Homebrew sont utiles pour les binaires packagés lorsqu'ils sont disponibles.",
    "methods": [
      {
        "name": "Cargo",
        "command": "cargo install tzap",
        "note": "Fonctionne partout où Rust 1.85 ou version ultérieure est disponible."
      },
      {
        "name": "Homebrew",
        "command": "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        "note": "Idéal pour les utilisateurs de macOS et Linuxbrew."
      },
      {
        "name": "De la source",
        "command": "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        "note": "Idéal pour les contributeurs et les implémenteurs."
      }
    ],
    "releases": "Artefacts de publication",
    "releasesBody": "Les artefacts de version publiée sont hébergés sur GitHub Releases. Consultez les notes de version pour connaître les systèmes d'exploitation, les sommes de contrôle et les noms d'archives pris en charge.",
    "releaseButton": "Ouvrir GitHub Releases"
  },
  "docs": {
    "title": "Documentation",
    "description": "Flux de travail tzap courants pour la création, la vérification, la liste, l'extraction et la récupération d'archives.",
    "intro": "Ces exemples utilisent le mode phrase secrète via stdin afin que les secrets n'apparaissent pas dans l'historique du shell ou dans les listes de processus.",
    "sections": [
      {
        "title": "Créer une archive",
        "command": "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project"
      },
      {
        "title": "Lister et vérifier",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap"
      },
      {
        "title": "Extraire tout",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap"
      },
      {
        "title": "Extraire un fichier",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt"
      },
      {
        "title": "Créer des volumes récupérables",
        "command": "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002"
      }
    ],
    "more": "Référence CLI complète"
  },
  "spec": {
    "title": "Spécification du format",
    "description": "Le format tzap est documenté publiquement pour les implémenteurs et les réviseurs.",
    "body": "La spécification publique actuelle est la v0.43. Il s’agit du projet d’objectif de mise en œuvre et remplace les versions antérieures du format tzap.",
    "specButton": "Lire la spécification actuelle",
    "repoButton": "Implémentation de référence ouverte",
    "notesTitle": "Notes de mise en œuvre",
    "notes": [
      "L'implémentation de référence est écrite en Rust.",
      "Le format cible les métadonnées et les charges utiles authentifiées.",
      "Le partage du volume et le comportement de récupération font partie de l’histoire du format, et non une réflexion après coup.",
      "Les matrices de conformité peuvent être liées ici une fois qu'elles sont prêtes pour les lecteurs publics."
    ]
  },
  "zmanager": {
    "title": "ZManager CLI",
    "description": "Un archiveur de ligne de commande open source associé avec des flux de travail tzap de première classe.",
    "body": "ZManager CLI est un archiveur universel pratique pour macOS, Linux et Windows. Il crée des archives modernes, extrait un large éventail de formats en toute sécurité et prend en charge la création et l'extraction .tzap.",
    "openBoundary": "La CLI est open source. L'interface graphique de macOS constitue une limite distincte de produit à code source fermé et ne doit être liée ici que lorsqu'il existe un canal de publication public.",
    "repoButton": "Ouvrir ZManager CLI",
    "releaseButton": "Sorties ZManager",
    "featuresTitle": "Ce que ça fait",
    "features": [
      "Créez des archives ZIP, TAR.ZST, TZAP et 7z.",
      "Extrayez de nombreux formats de compression de bureau, de développeur, de package et bruts.",
      "Utilisez des invites de mot de passe ou stdin au lieu des arguments de mot de passe de ligne de commande.",
      "Appliquez des contrôles d'extraction sécurisés par défaut."
    ]
  },
  "sponsor": {
    "title": "Parrainer tzap",
    "description": "Aidez à financer les versions tzap, la documentation, les tests de compatibilité et la maintenance à long terme.",
    "eyebrow": "Financement open source",
    "intro": "tzap est un logiciel en forme d'infrastructure : les parties utiles sont les parties ennuyeuses qui continuent de fonctionner après la première version. Le parrainage permet de transformer un format d'archive prometteur en une chaîne d'outils fiable à laquelle les gens peuvent faire confiance pour les données privées, les enregistrements sources, les médiathèques, les ensembles de recherche et les sauvegardes à froid.",
    "primary": "Parrainer sur Open Collective",
    "secondary": "Parrainer sur Ko-fi",
    "tertiary": "Voir la source",
    "panelTitle": "Quel financement soutient",
    "panelBody": "Le premier objectif est simple : maintenir le travail sur les versions, la documentation, l'empaquetage, les tests et les spécifications sans compter uniquement sur le temps libre.",
    "stats": [
      {
        "label": "Licence",
        "value": "Apache-2.0"
      },
      {
        "label": "Implémentation de référence",
        "value": "Rust"
      },
      {
        "label": "Accueil du projet",
        "value": "tzap.org"
      }
    ],
    "usesTitle": "Où va le soutien",
    "uses": [
      {
        "title": "Ingénierie des versions",
        "body": "Constructions multiplateformes, sommes de contrôle, documents d'installation, finition de l'emballage et notes de version prévisibles."
      },
      {
        "title": "Tests de compatibilité et de récupération",
        "body": "Archivez les montages, les cas de volumes endommagés, les contrôles de restauration par accès aléatoire, les cibles fuzz et la couverture de régression."
      },
      {
        "title": "Travail de documentation et de spécification",
        "body": "Flux de travail utilisateur clairs, notes de mise en œuvre, révisions de format, conseils de migration et exemples publics."
      },
      {
        "title": "Temps d'entretien",
        "body": "Tri des problèmes, mises à jour des dépendances, examens de sécurité, corrections de bugs et travail peu glamour qui garantit la fiabilité des outils."
      }
    ],
    "whyTitle": "Pourquoi c'est important",
    "why": "Les archives survivent souvent aux machines, aux comptes cloud, aux lecteurs et aux systèmes d'exploitation qui les ont créées. tzap est construit autour de cette réalité : métadonnées authentifiées, archives privées chiffrées, mode texte clair explicite pour les archives publiques, volumes fractionnés, données de récupération et restaurations ciblées à partir de grands ensembles de données.",
    "transparencyTitle": "Transparent par défaut",
    "transparency": "Open Collective maintient le financement visible et le travail lui-même reste inspectable via les référentiels publics, les spécifications, les tests et l'historique des versions.",
    "footerTitle": "Contribuez à rendre les archives fiables moins fragiles",
    "footerBody": "Si tzap est utile pour vous, votre équipe ou pour de futurs projets nécessitant des archives privées récupérables, le parrainage est le moyen le plus direct de faire avancer le travail."
  }
} satisfies SiteCopy;
