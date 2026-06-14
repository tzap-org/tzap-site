import type { SiteCopy } from "./en";

export const ptBR = {
  "siteName": "tzap",
  "titleSuffix": "Formato de arquivo tzap",
  "skip": "Pular para o conteúdo",
  "openSourceNote": "Formato aberto. Implementação de referência Rust. Apache-2.0.",
  "language": "Linguagem",
  "source": "Fonte",
  "support": "Apoiar",
  "primaryNavigation": "Navegação primária",
  "footer": "tzap.org é o local público do formato de arquivo tzap e ferramentas abertas relacionadas.",
  "editSite": "Fonte do site",
  "home": {
    "title": "Formato de arquivo tzap",
    "description": "Arquivos rápidos, criptografados e recuperáveis ​​para armazenamento sério de longo prazo.",
    "eyebrow": "Formato de arquivo aberto",
    "subhead": "O tzap combina compactação Zstandard, criptografia autenticada, volumes divididos e dados de recuperação em um formato prático com uma implementação de referência Rust.",
    "primary": "Baixar tzap",
    "secondary": "Ver GitHub",
    "tertiary": "Leia as especificações",
    "installLabel": "Instalar",
    "installCommand": "cargo install tzap",
    "whyTitle": "Por que tzap",
    "why": "A maioria das ferramentas de arquivamento otimiza o compartilhamento de arquivos pequenos ou a descompactação de formatos antigos. O tzap é voltado para arquivos nos quais você pode precisar confiar daqui a alguns anos: conjuntos de dados privados, registros de origem, conjuntos de mídia, material jurídico e backups frios.",
    "featuresTitle": "Capacidades principais",
    "features": [
      "Compressão rápida com Zstandard.",
      "Conteúdo, nomes, metadados e índices criptografados.",
      "Cabeçalhos, manifestos, índices, trailers e cargas autenticados.",
      "Recuperação Reed-Solomon para volumes danificados ou ausentes.",
      "Restaurações de acesso aleatório de arquivos muito grandes.",
      "Layouts de volume dividido para objetos na nuvem, unidades, discos e mídia offline."
    ],
    "quickStartTitle": "Início rápido",
    "ecosystemTitle": "Ferramentas relacionadas",
    "ecosystem": "ZManager CLI é um arquivador universal de código aberto que suporta fluxos de trabalho .tzap junto com ZIP, TAR.ZST, 7z e formatos de extração amplos.",
    "ecosystemAction": "Abra o ZManager CLI",
    "contactTitle": "Contato",
    "contactBody": "Dúvidas, solicitações de suporte e coordenação de projetos podem ser enviadas por e-mail.",
    "contactAction": "Enviar e-mail para support@tzap.org",
    "sponsorshipTitle": "Patrocínio",
    "sponsorshipBody": "Financia trabalho de lançamento, testes de compatibilidade, documentação e manutenção de longo prazo.",
    "openCollectiveAction": "Patrocinar tzap",
    "koFiAction": "Patrocinador do Ko-fi"
  },
  "download": {
    "title": "Baixar tzap",
    "description": "Instale o tzap do crates.io, Homebrew, GitHub Releases ou fonte.",
    "intro": "O caminho mais rápido é Cargo. GitHub Releases e Homebrew são úteis para binários empacotados quando disponíveis.",
    "methods": [
      {
        "name": "Cargo",
        "command": "cargo install tzap",
        "note": "Funciona em qualquer lugar que Rust 1.85 ou mais recente esteja disponível."
      },
      {
        "name": "Homebrew",
        "command": "brew tap tzap-org/tzap https://github.com/tzap-org/tzap\nbrew install tzap-org/tzap/tzap",
        "note": "Bom para usuários de macOS e Linuxbrew."
      },
      {
        "name": "Da fonte",
        "command": "git clone https://github.com/tzap-org/tzap.git\ncd tzap\ncargo build --release -p tzap",
        "note": "Melhor para contribuidores e implementadores."
      }
    ],
    "releases": "Artefatos de lançamento",
    "releasesBody": "Os artefatos de lançamento publicados são hospedados no GitHub Releases. Verifique as notas de versão para sistemas operacionais suportados, somas de verificação e nomes de arquivos.",
    "releaseButton": "Abra o GitHub Releases"
  },
  "docs": {
    "title": "Documentação",
    "description": "Fluxos de trabalho comuns do tzap para criar, verificar, listar, extrair e recuperar arquivos.",
    "intro": "Esses exemplos usam o modo de senha por meio de stdin para que os segredos não apareçam no histórico do shell ou nas listagens de processos.",
    "sections": [
      {
        "title": "Crie um arquivo",
        "command": "export TZAP_PASSPHRASE='correct horse battery staple'\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap create --password-stdin -o backup.tzap ./project"
      },
      {
        "title": "Liste e verifique",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap list --password-stdin backup.tzap\nprintf '%s\\n' \"$TZAP_PASSPHRASE\" | tzap verify --password-stdin backup.tzap"
      },
      {
        "title": "Extraia tudo",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --directory restored backup.tzap"
      },
      {
        "title": "Extraia um arquivo",
        "command": "printf '%s\\n' \"$TZAP_PASSPHRASE\" | \\\n  tzap extract --password-stdin --stdout backup.tzap project/readme.txt"
      },
      {
        "title": "Crie volumes recuperáveis",
        "command": "tzap keygen --output project.key\ntzap create --keyfile project.key --volumes 3 --volume-loss-tolerance 1 -o project.tzap ./project\ntzap verify --keyfile project.key project.tzap.000 project.tzap.001 project.tzap.002"
      }
    ],
    "more": "Referência CLI completa"
  },
  "spec": {
    "title": "Especificação de formato",
    "description": "O formato tzap é documentado publicamente para implementadores e revisores.",
    "body": "A especificação pública atual é v0.43. É o alvo de implementação do rascunho e substitui os rascunhos anteriores do formato tzap.",
    "specButton": "Leia as especificações atuais",
    "repoButton": "Implementação de referência aberta",
    "notesTitle": "Notas de implementação",
    "notes": [
      "A implementação de referência está escrita em Rust.",
      "O formato tem como alvo metadados e cargas autenticadas.",
      "O volume dividido e o comportamento de recuperação fazem parte da história do formato e não são uma reflexão tardia.",
      "As matrizes de conformidade podem ser vinculadas aqui assim que estiverem prontas para leitura pública."
    ]
  },
  "zmanager": {
    "title": "ZManager CLI",
    "description": "Um arquivador de linha de comando de código aberto relacionado com fluxos de trabalho tzap de primeira classe.",
    "body": "ZManager CLI é um arquivador universal prático para macOS, Linux e Windows. Ele cria arquivos modernos, extrai um amplo conjunto de formatos com segurança e oferece suporte à criação e extração do .tzap.",
    "openBoundary": "A CLI é de código aberto. A GUI do macOS é um limite separado do produto de código fechado e só deve ser vinculado aqui quando houver um canal de lançamento público.",
    "repoButton": "Abra o ZManager CLI",
    "releaseButton": "Lançamentos ZManager",
    "featuresTitle": "O que isso faz",
    "features": [
      "Crie arquivos ZIP, TAR.ZST, TZAP e 7z.",
      "Extraia muitos formatos de desktop, desenvolvedor, pacote e compactação bruta.",
      "Use prompts de senha ou stdin em vez de argumentos de senha de linha de comando.",
      "Aplique verificações de extração segura por padrão."
    ]
  },
  "sponsor": {
    "title": "Patrocinar tzap",
    "description": "Ajude a financiar lançamentos, documentação, testes de compatibilidade e manutenção de longo prazo do tzap.",
    "eyebrow": "Financiamento de código aberto",
    "intro": "tzap é um software em formato de infraestrutura: as partes úteis são as partes enfadonhas que continuam funcionando após o primeiro lançamento. O patrocínio ajuda a transformar um formato de arquivo promissor em um conjunto de ferramentas confiável em que as pessoas podem confiar para dados privados, registros de origem, bibliotecas de mídia, conjuntos de pesquisa e backups frios.",
    "primary": "Patrocinador do Open Collective",
    "secondary": "Patrocinador do Ko-fi",
    "tertiary": "Ver fonte",
    "panelTitle": "O que o financiamento apoia",
    "panelBody": "O primeiro objetivo é simples: manter o trabalho de lançamentos, documentação, empacotamento, testes e especificações em andamento, sem depender apenas do tempo livre.",
    "stats": [
      {
        "label": "Licença",
        "value": "Apache-2.0"
      },
      {
        "label": "Implementação de referência",
        "value": "Rust"
      },
      {
        "label": "Casa do projeto",
        "value": "tzap.org"
      }
    ],
    "usesTitle": "Para onde vai o suporte",
    "uses": [
      {
        "title": "Engenharia de liberação",
        "body": "Compilações multiplataforma, somas de verificação, documentos de instalação, aprimoramento de embalagens e notas de versão previsíveis."
      },
      {
        "title": "Testes de compatibilidade e recuperação",
        "body": "Arquive equipamentos, casos de volumes danificados, verificações de restauração de acesso aleatório, alvos fuzz e cobertura de regressão."
      },
      {
        "title": "Trabalho de documentação e especificação",
        "body": "Fluxos de trabalho de usuário claros, notas do implementador, revisões de formato, orientações de migração e exemplos públicos."
      },
      {
        "title": "Tempo de manutenção",
        "body": "Triagem de problemas, atualizações de dependências, análises de segurança, correções de bugs e o trabalho nada glamoroso que mantém as ferramentas confiáveis."
      }
    ],
    "whyTitle": "Por que isso importa",
    "why": "Os arquivos geralmente sobrevivem às máquinas, contas na nuvem, unidades e sistemas operacionais que os criaram. O tzap é construído em torno dessa realidade: metadados autenticados, arquivos privados criptografados, modo de texto simples explícito para arquivos públicos, volumes divididos, dados de recuperação e restaurações direcionadas de grandes conjuntos de dados.",
    "transparencyTitle": "Transparente por padrão",
    "transparency": "O Open Collective mantém o financiamento visível e o trabalho em si permanece inspecionável por meio de repositórios públicos, especificações, testes e histórico de lançamento.",
    "footerTitle": "Ajude a tornar arquivos confiáveis ​​menos frágeis",
    "footerBody": "Se o tzap for útil para você, sua equipe ou projetos futuros que precisam de arquivos privados recuperáveis, o patrocínio é a maneira mais direta de manter o trabalho em andamento."
  }
} satisfies SiteCopy;
