import type { SiteCopy } from "./en";

export const es = {
  "siteName": "tzap",
  "titleSuffix": "Formato de archivo tzap",
  "skip": "Saltar al contenido",
  "openSourceNote": "Formato abierto. Implementación de referencia Rust. Apache-2.0.",
  "language": "Idioma",
  "source": "Fuente",
  "support": "Apoyo",
  "primaryNavigation": "Navegación primaria",
  "footer": "tzap.org es el hogar público del formato de archivo tzap y las herramientas abiertas relacionadas.",
  "editSite": "Fuente del sitio web",
  "home": {
    "title": "Formato de archivo tzap",
    "description": "Archivos rápidos, cifrados y recuperables para un almacenamiento serio a largo plazo.",
    "eyebrow": "Formato de archivo abierto",
    "subhead": "tzap combina compresión Zstandard, cifrado autenticado, volúmenes divididos y datos de recuperación en un formato práctico con una implementación de referencia Rust.",
    "primary": "Descargar tzap",
    "secondary": "Ver GitHub",
    "tertiary": "Lea las especificaciones",
    "installLabel": "Instalar",
    "installCommand": "cargo install tzap",
    "whyTitle": "¿Por qué tzap?",
    "why": "La mayoría de las herramientas de archivo se optimizan para compartir archivos pequeños o descomprimir formatos antiguos. tzap está dirigido a archivos en los que quizás necesite confiar dentro de muchos años: conjuntos de datos privados, registros de origen, conjuntos de medios, material legal y copias de seguridad en frío.",
    "featuresTitle": "Capacidades principales",
    "features": [
      "Compresión rápida con Zstandard.",
      "Contenidos, nombres, metadatos e índices cifrados.",
      "Encabezados, manifiestos, índices, avances y cargas útiles autenticados.",
      "Recuperación Reed-Solomon para volúmenes dañados o faltantes.",
      "Restauraciones de acceso aleatorio desde archivos muy grandes.",
      "Diseños de volúmenes divididos para objetos en la nube, unidades, discos y medios fuera de línea."
    ],
    "quickStartTitle": "Inicio rápido",
    "ecosystemTitle": "Herramientas relacionadas",
    "ecosystem": "ZManager CLI es un archivador universal de código abierto que admite flujos de trabajo .tzap junto con ZIP, TAR.ZST, 7z y amplios formatos de extracción.",
    "ecosystemAction": "Abrir ZManager CLI",
    "contactTitle": "Contacto",
    "contactBody": "Las preguntas, solicitudes de soporte y coordinación de proyectos pueden enviarse por correo electrónico.",
    "contactAction": "Enviar correo a support@tzap.org",
    "sponsorshipTitle": "Patrocinio",
    "sponsorshipBody": "Financia el trabajo de publicación, las pruebas de compatibilidad, la documentación y el mantenimiento a largo plazo.",
    "openCollectiveAction": "Patrocinar tzap",
    "koFiAction": "Patrocinador en Ko-fi"
  },
  "download": {
    "title": "Descargar tzap",
    "description": "Instale tzap desde crates.io, Homebrew, GitHub Releases o fuente.",
    "intro": "El camino más rápido es Cargo. GitHub Releases y Homebrew son útiles para archivos binarios empaquetados cuando estén disponibles.",
    "methods": [
      {
        "name": "Cargo",
        "command": "cargo install tzap",
        "note": "Funciona en cualquier lugar donde esté disponible Rust 1.85 o posterior."
      },
      {
        "name": "Homebrew",
        "command": "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        "note": "Bueno para usuarios de macOS y Linuxbrew."
      },
      {
        "name": "De la fuente",
        "command": "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        "note": "Lo mejor para contribuyentes e implementadores."
      }
    ],
    "releases": "Liberar artefactos",
    "releasesBody": "Los artefactos de la versión publicada se alojan en GitHub Releases. Consulte las notas de la versión para conocer los sistemas operativos, sumas de verificación y nombres de archivos compatibles.",
    "releaseButton": "Abrir GitHub Releases"
  },
  "docs": {
    "title": "Documentación",
    "description": "Flujos de trabajo comunes de tzap para crear, verificar, enumerar, extraer y recuperar archivos.",
    "intro": "Estos ejemplos utilizan el modo de frase de contraseña a través de la entrada estándar para que los secretos no aparezcan en el historial del shell ni en las listas de procesos.",
    "sections": [
      {
        "title": "Crear un archivo",
        "command": "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project"
      },
      {
        "title": "Listar y verificar",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap"
      },
      {
        "title": "extraer todo",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap"
      },
      {
        "title": "Extraer un archivo",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt"
      },
      {
        "title": "Crear volúmenes recuperables",
        "command": "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002"
      }
    ],
    "more": "Referencia CLI completa"
  },
  "spec": {
    "title": "Especificación de formato",
    "description": "El formato tzap está documentado públicamente para implementadores y revisores.",
    "body": "La especificación pública actual es v0.43. Es el objetivo de implementación del borrador y reemplaza los borradores anteriores del formato tzap.",
    "specButton": "Leer las especificaciones actuales",
    "repoButton": "Implementación de referencia abierta",
    "notesTitle": "Notas de implementación",
    "notes": [
      "La implementación de referencia está escrita en Rust.",
      "El formato apunta a metadatos y cargas útiles autenticados.",
      "El comportamiento de recuperación y volumen dividido son parte de la historia del formato, no una idea de último momento.",
      "Las matrices de conformidad se pueden vincular aquí una vez que estén listas para los lectores públicos."
    ]
  },
  "zmanager": {
    "title": "ZManager CLI",
    "description": "Un archivador de línea de comandos de código abierto relacionado con flujos de trabajo tzap de primera clase.",
    "body": "ZManager CLI es un práctico archivador universal para macOS, Linux y Windows. Crea archivos modernos, extrae un amplio conjunto de formatos de forma segura y admite la creación y extracción de .tzap.",
    "openBoundary": "La CLI es de código abierto. La GUI de macOS es un límite de producto de código cerrado independiente y solo debe vincularse aquí cuando exista un canal de lanzamiento público.",
    "repoButton": "Abrir ZManager CLI",
    "releaseButton": "Lanzamientos ZManager",
    "featuresTitle": "que hace",
    "features": [
      "Cree archivos ZIP, TAR.ZST, TZAP y 7z.",
      "Extraiga muchos formatos de escritorio, desarrolladores, paquetes y compresión sin formato.",
      "Utilice solicitudes de contraseña o stdin en lugar de argumentos de contraseña de línea de comandos.",
      "Aplique comprobaciones de extracción segura de forma predeterminada."
    ]
  },
  "sponsor": {
    "title": "Patrocinar tzap",
    "description": "Ayude a financiar lanzamientos, documentación, pruebas de compatibilidad y mantenimiento a largo plazo de tzap.",
    "eyebrow": "Financiamiento de fuente abierta",
    "intro": "tzap es un software con forma de infraestructura: las partes útiles son las partes aburridas que siguen funcionando después del primer lanzamiento. El patrocinio ayuda a convertir un formato de archivo prometedor en una cadena de herramientas confiable en la que la gente puede confiar para obtener datos privados, registros de origen, bibliotecas multimedia, conjuntos de investigación y copias de seguridad en frío.",
    "primary": "Patrocinador en Open Collective",
    "secondary": "Patrocinador en Ko-fi",
    "tertiary": "Ver fuente",
    "panelTitle": "¿Qué financiación apoya?",
    "panelBody": "El primer objetivo es simple: mantener en marcha el trabajo de lanzamientos, documentos, empaquetado, pruebas y especificaciones sin depender únicamente del tiempo libre.",
    "stats": [
      {
        "label": "Licencia",
        "value": "Apache-2.0"
      },
      {
        "label": "Implementación de referencia",
        "value": "Rust"
      },
      {
        "label": "Proyecto de inicio",
        "value": "tzap.org"
      }
    ],
    "usesTitle": "A donde va el apoyo",
    "uses": [
      {
        "title": "Ingeniería de lanzamiento",
        "body": "Compilaciones multiplataforma, sumas de comprobación, documentos de instalación, pulido de paquetes y notas de versión predecibles."
      },
      {
        "title": "Pruebas de compatibilidad y recuperación.",
        "body": "Archivos fijos, casos de volumen dañado, comprobaciones de restauración de acceso aleatorio, objetivos difusos y cobertura de regresión."
      },
      {
        "title": "Trabajos de documentación y especificaciones.",
        "body": "Flujos de trabajo de usuario claros, notas del implementador, revisiones de formato, orientación sobre migración y ejemplos públicos."
      },
      {
        "title": "tiempo de mantenimiento",
        "body": "Clasificación de problemas, actualizaciones de dependencias, revisiones de seguridad, corrección de errores y el trabajo poco glamoroso que mantiene las herramientas confiables."
      }
    ],
    "whyTitle": "Por qué es importante",
    "why": "Los archivos a menudo sobreviven a las máquinas, cuentas de nube, unidades y sistemas operativos que los crearon. tzap se basa en esa realidad: metadatos autenticados, archivos privados cifrados, modo de texto plano explícito para archivos públicos, volúmenes divididos, datos de recuperación y restauraciones específicas de grandes conjuntos de datos.",
    "transparencyTitle": "Transparente por defecto",
    "transparency": "Open Collective mantiene la financiación visible y el trabajo en sí permanece inspeccionable a través de los repositorios públicos, las especificaciones, las pruebas y el historial de lanzamientos.",
    "footerTitle": "Ayude a que los archivos confiables sean menos frágiles",
    "footerBody": "Si tzap es útil para usted, su equipo o proyectos futuros que necesitan archivos privados recuperables, el patrocinio es la forma más directa de mantener el trabajo en movimiento."
  }
} satisfies SiteCopy;
