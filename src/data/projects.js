import helpdesk from '../assets/HelpDeskPrint.png'
import systemcheck from '../assets/systemcheck.png'
import xadrez from '../assets/xadrezProject.png'

export const projects = [
  {
    slug: 'helpdesk-system',
    title: 'Help Desk System',
    role: 'Fullstack',  
    year: '2025',
    tags: ['Next.js', 'PHP', 'MySQL'],
    preview: helpdesk,
    previewPosition: 'object-top',
    githubURL: 'https://github.com/tenmenezes/HelpDesk-System',
    summary:
      'Sistema completo de Help Desk com gerenciamento de chamados, usuários e fluxo de atendimento, focado em organização e integração entre front-end e back-end.',
    description:
      'Desenvolvido como projeto acadêmico, o Help Desk System implementa um fluxo completo de abertura, acompanhamento e resolução de chamados. O projeto integra um front-end moderno com Next.js a um back-end em PHP, utilizando MySQL para persistência de dados e garantindo separação clara de responsabilidades.',
    details: [
      { label: 'Tipo', value: 'Sistema Web' },
      { label: 'Stack', value: 'Next.js, PHP, MySQL' },
      { label: 'Escopo', value: 'CRUD completo e autenticação' },
      { label: 'Ano', value: '2025' },
    ],
    highlights: [
      'Sistema completo de gerenciamento de chamados com status e histórico',
      'Integração entre front-end moderno e back-end em PHP',
      'Modelagem de banco de dados relacional com múltiplas entidades',
      'Implementação de autenticação e controle de acesso por tipo de usuário',
    ],
  },
  {
    slug: 'system-check',
    title: 'System Check',
    role: 'Frontend',
    year: '2025',
    tags: ['Next.js', 'Tailwind CSS', 'AOS.js'],
    preview: systemcheck,
    previewPosition: 'object-left',
    githubURL: 'https://github.com/tenmenezes/SystemCheck',
    liveURL: 'https://systemcheck.vercel.app/',
    summary:
      'O foco está na performance, organização de componentes e experiência imersiva, servindo como base para evoluir em breve para uma aplicação completa de suporte técnico online.',
    description:
      'O SystemCheck é uma aplicação que simula uma página institucional de uma empresa de tecnologia e diagnóstico digital, destacando serviços, diferenciais e depoimentos de forma visual e envolvente.',
    details: [
      { label: 'Tipo', value: 'Landing Page Interativa' },
      { label: 'Stack', value: 'Next.js, TypeScript, Tailwind CSS, AOS.js' },
      { label: 'Escopo', value: 'Página institucional para serviços de tecnologia e diagnóstico digital' },
      { label: 'Ano', value: '2025' },
    ],
    highlights: [
      'Design responsivo adaptado para mobile, tablet e desktop',
      'Organização visual com foco em hierarquia, legibilidade e acessibilidade',
      'Simulação de landing page institucional para serviços de tecnologia',
      'Base preparada para evolução futura com integração de APIs e funcionalidades dinâmicas',
    ],
  },
  {
    slug: 'xadrez-console',
    title: 'Xadrez no Console',
    role: 'Backend',
    year: '2024',
    tags: ['C#.NET', 'Lógica', 'POO'],
    preview: xadrez,
    previewPosition: 'object-center',
    githubURL: 'https://github.com/tenmenezes/Project-Xadrez-Console',
    summary:
      'Implementação de um jogo de xadrez no console utilizando C#, com foco em lógica, regras do jogo e programação orientada a objetos.',
    description:
      'Projeto desenvolvido para praticar lógica de programação e conceitos de orientação a objetos. O sistema implementa as regras completas do xadrez, incluindo movimentação de peças, validações e controle de estado do jogo diretamente no terminal.',
    details: [
      { label: 'Tipo', value: 'Aplicação Console' },
      { label: 'Stack', value: 'C#.NET' },
      { label: 'Escopo', value: 'Jogo completo com regras de xadrez' },
      { label: 'Ano', value: '2024' },
    ],
    highlights: [
      'Implementação das regras completas de movimentação de peças',
      'Validação de jogadas e controle de turnos',
      'Uso de orientação a objetos para modelar peças e tabuleiro',
      'Foco em lógica e estrutura de código limpa',
    ],
  },
]
