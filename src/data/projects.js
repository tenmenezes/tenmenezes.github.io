import helpdesk from '../assets/HelpDeskPrint.png'
import agentia from '../assets/agentIa.png'
import systemcheck from '../assets/systemcheck.png'
import brandify from '../assets/brandify.png'
import fourplayers from '../assets/fourplayers.png'
import xadrez from '../assets/xadrezProject.png'

export const projects = [
  {
    slug: 'helpdesk-system',
    title: 'Help Desk Corp',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js', 'Prisma', 'Supabase'],
    preview: helpdesk,
    previewPosition: 'object-top',
    githubURL: 'https://github.com/tenmenezes/HelpDesk-System',
    liveURL: 'https://help-desk-system-jet.vercel.app',
    summary:
      'Sistema full-stack de help desk para gerenciamento de chamados internos, usuários e fluxo de atendimento, com autenticação real, controle de acesso por perfil e deploy online.',
    description:
      'Desenvolvido como projeto acadêmico, o Help Desk Corp passou por uma migração completa de uma arquitetura legada em PHP + MySQL para uma stack moderna com Next.js, Prisma e Supabase. O sistema permite autenticação com sessão real via cookie HTTP-only, gerenciamento de usuários e chamados, histórico de alterações, dashboard com gráficos reais e upload de foto de perfil com Supabase Storage, mantendo uma interface moderna e preparada para deploy na Vercel.',
    details: [
      { label: 'Tipo', value: 'Sistema Web' },
      { label: 'Stack', value: 'Next.js, Prisma, Supabase, TypeScript' },
      { label: 'Escopo', value: 'CRUD completo, autenticação e controle de acesso' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Autenticação real com JWT em cookie HTTP-only e controle de acesso por perfis de usuário',
      'Upload de foto de perfil com Supabase Storage e aplicação preparada para deploy na Vercel',
      'Logins - Caso queira explorar a aplicação online:',
      'Usuário comum: E-mail - user-comum@gmail.com | Senha - UserCom.123',
      'Usuário de suporte: E-mail - user-suporte@gmail.com | Senha - UserSup.123',
    ],
  },
  {
    slug: 'agent-ia',
    title: 'Agente de RoadMap',
    role: 'Fullstack',
    year: '2025',
    tags: ['Next.js', 'Zod', 'OpenAI API'],
    preview: agentia,
    previewPosition: 'object-center',
    githubURL: 'https://github.com/tenmenezes/agentIA',
    liveURL: 'https://agent-ia-beta.vercel.app',
    summary:
      'Aplicação full-stack desenvolvida para gerar roadmaps personalizados com IA, criando rotas de estudo sob medida para cada usuário e permitindo exportação do resultado em PDF.',
    description:
      'O Agente IA foi desenvolvido com Next.js, TypeScript, Zod, OpenAI API e Tailwind CSS, integrando front-end e lógica de geração em uma única aplicação. A versão online utiliza API Routes no Next.js para processar a geração do roadmap, retornando respostas em streaming Markdown com formatação automática.',
    details: [
      { label: 'Tipo', value: 'Aplicação Web com IA' },
      { label: 'Stack', value: 'Next.js, TypeScript, Zod, OpenAI API, Tailwind CSS' },
      { label: 'Escopo', value: 'Geração de roadmaps personalizados com exportação em PDF' },
      { label: 'Ano', value: '2025' },
    ],
    highlights: [
      'Geração inteligente de roadmaps personalizados com IA',
      'Arquitetura full-stack centralizada em Next.js com API Routes',
      'Respostas em streaming Markdown com formatação automática',
      'Validação de dados com Zod e interface moderna com Tailwind CSS',
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
    slug: 'brandify',
    title: 'Brandify',
    role: 'Frontend',
    year: '2025',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    preview: brandify,
    previewPosition: 'object-left',
    githubURL: 'https://github.com/tenmenezes/Brandify',
    liveURL: 'https://tenmenezes.github.io/Brandify',
    summary:
      'Projeto front-end moderno com foco em interface interativa, experiência fluida e animações elegantes, desenvolvido para apresentar uma navegação visualmente atraente e responsiva.',
    description:
      'Brandify é um projeto desenvolvido com React e Vite, estilizado com Tailwind CSS e animado com Framer Motion. O site foi projetado para entregar uma experiência de usuário fluida, com componentização em React, desempenho otimizado e deploy automatizado no GitHub Pages.',
    details: [
      { label: 'Tipo', value: 'Site Institucional / Landing Page Front-end' },
      { label: 'Stack', value: 'React, Vite, Tailwind CSS, Framer Motion' },
      { label: 'Escopo', value: 'Interface interativa, responsiva e com animações suaves' },
      { label: 'Ano', value: '2025' },
    ],
    highlights: [
      'Layout 100% responsivo para diferentes dispositivos',
      'Animações suaves e interativas com Framer Motion',
      'Componentização completa com React',
      'Deploy automatizado no GitHub Pages com build otimizada via Vite',
    ],
  },
  {
    slug: '4players',
    title: '4 Players',
    role: 'Frontend',
    year: '2025',
    tags: ['HTML5 / CSS3 / JS', 'LocalStorage'],
    preview: fourplayers,
    previewPosition: 'object-center',
    githubURL: 'https://github.com/tenmenezes/4Players',
    liveURL: 'https://tenmenezes.github.io/4Players',
    summary:
      'Projeto web de estudo que simula uma loja virtual de jogos com páginas por plataforma, cadastro de usuário, carrinho de compras e alternância entre tema claro e escuro.',
    description:
      'O 4Players foi desenvolvido como parte dos estudos em front-end para simular um site de vendas de jogos. A aplicação possui páginas dedicadas para PlayStation, Xbox e Nintendo, além de recursos de cadastro, carrinho com JavaScript e persistência de preferência de tema usando localStorage.',
    details: [
      { label: 'Tipo', value: 'Loja Virtual de Jogos' },
      { label: 'Stack', value: 'HTML5, CSS3, JavaScript, LocalStorage' },
      { label: 'Escopo', value: 'Catálogo por plataforma, cadastro, carrinho e tema dinâmico' },
      { label: 'Ano', value: '2025' },
    ],
    highlights: [
      'Páginas específicas para jogos de PlayStation, Xbox e Nintendo',
      'Cadastro de usuário com formulário interativo',
      'Carrinho de compras funcional com JavaScript puro',
      'Tema claro e escuro com salvamento da preferência no localStorage',
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
