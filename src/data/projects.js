import helpdesk from '../assets/HelpDeskPrint.png'
import agentia from '../assets/agentIa.png'
import systemcheck from '../assets/systemcheck.png'

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
]
