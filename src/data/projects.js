import agentia from '../assets/agentIa.png'
import systemcheck from '../assets/systemcheck.png'
import brandify from '../assets/brandify.png'
import fourplayers from '../assets/fourplayers.png'

// Campos traduzíveis usam { pt, en } e são resolvidos pelo hook useLocalized

export const projects = [
  {
    slug: 'agent-ia',
    title: { pt: 'Agente de RoadMap', en: 'RoadMap Agent' },
    role: 'Fullstack',
    year: '2025',
    tags: ['Next.js', 'Zod', 'OpenAI API'],
    preview: agentia,
    previewPosition: 'object-center',
    githubURL: 'https://github.com/tenmenezes/agentIA',
    liveURL: 'https://agent-ia-beta.vercel.app',
    summary: {
      pt: 'Aplicação full-stack desenvolvida para gerar roadmaps personalizados com IA, criando rotas de estudo sob medida para cada usuário e permitindo exportação do resultado em PDF.',
      en: 'Full-stack application built to generate personalized AI roadmaps, creating tailored study paths for each user and allowing the result to be exported as PDF.',
    },
    description: {
      pt: 'O Agente IA foi desenvolvido com Next.js, TypeScript, Zod, OpenAI API e Tailwind CSS, integrando front-end e lógica de geração em uma única aplicação. A versão online utiliza API Routes no Next.js para processar a geração do roadmap, retornando respostas em streaming Markdown com formatação automática.',
      en: 'The AI Agent was built with Next.js, TypeScript, Zod, OpenAI API and Tailwind CSS, bringing the front-end and generation logic together in a single application. The online version uses Next.js API Routes to process roadmap generation, returning streamed Markdown responses with automatic formatting.',
    },
    details: [
      { label: { pt: 'Tipo', en: 'Type' }, value: { pt: 'Aplicação Web com IA', en: 'AI Web Application' } },
      { label: { pt: 'Stack', en: 'Stack' }, value: 'Next.js, TypeScript, Zod, OpenAI API, Tailwind CSS' },
      {
        label: { pt: 'Escopo', en: 'Scope' },
        value: {
          pt: 'Geração de roadmaps personalizados com exportação em PDF',
          en: 'Personalized roadmap generation with PDF export',
        },
      },
      { label: { pt: 'Ano', en: 'Year' }, value: '2025' },
    ],
    highlights: {
      pt: [
        'Geração inteligente de roadmaps personalizados com IA',
        'Arquitetura full-stack centralizada em Next.js com API Routes',
        'Respostas em streaming Markdown com formatação automática',
        'Validação de dados com Zod e interface moderna com Tailwind CSS',
      ],
      en: [
        'Smart generation of personalized roadmaps with AI',
        'Full-stack architecture centralized in Next.js with API Routes',
        'Streamed Markdown responses with automatic formatting',
        'Data validation with Zod and a modern interface with Tailwind CSS',
      ],
    },
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
    summary: {
      pt: 'O foco está na performance, organização de componentes e experiência imersiva, servindo como base para evoluir em breve para uma aplicação completa de suporte técnico online.',
      en: 'The focus is on performance, component organization and an immersive experience, serving as a foundation to soon evolve into a complete online technical support application.',
    },
    description: {
      pt: 'O SystemCheck é uma aplicação que simula uma página institucional de uma empresa de tecnologia e diagnóstico digital, destacando serviços, diferenciais e depoimentos de forma visual e envolvente.',
      en: 'SystemCheck is an application that simulates the institutional page of a technology and digital diagnostics company, showcasing services, differentiators and testimonials in a visual and engaging way.',
    },
    details: [
      { label: { pt: 'Tipo', en: 'Type' }, value: { pt: 'Landing Page Interativa', en: 'Interactive Landing Page' } },
      { label: { pt: 'Stack', en: 'Stack' }, value: 'Next.js, TypeScript, Tailwind CSS, AOS.js' },
      {
        label: { pt: 'Escopo', en: 'Scope' },
        value: {
          pt: 'Página institucional para serviços de tecnologia e diagnóstico digital',
          en: 'Institutional page for technology and digital diagnostics services',
        },
      },
      { label: { pt: 'Ano', en: 'Year' }, value: '2025' },
    ],
    highlights: {
      pt: [
        'Design responsivo adaptado para mobile, tablet e desktop',
        'Organização visual com foco em hierarquia, legibilidade e acessibilidade',
        'Simulação de landing page institucional para serviços de tecnologia',
        'Base preparada para evolução futura com integração de APIs e funcionalidades dinâmicas',
      ],
      en: [
        'Responsive design adapted for mobile, tablet and desktop',
        'Visual organization focused on hierarchy, readability and accessibility',
        'Simulated institutional landing page for technology services',
        'Foundation ready for future growth with API integration and dynamic features',
      ],
    },
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
    summary: {
      pt: 'Projeto front-end moderno com foco em interface interativa, experiência fluida e animações elegantes, desenvolvido para apresentar uma navegação visualmente atraente e responsiva.',
      en: 'Modern front-end project focused on an interactive interface, smooth experience and elegant animations, built to deliver visually appealing and responsive navigation.',
    },
    description: {
      pt: 'Brandify é um projeto desenvolvido com React e Vite, estilizado com Tailwind CSS e animado com Framer Motion. O site foi projetado para entregar uma experiência de usuário fluida, com componentização em React, desempenho otimizado e deploy automatizado no GitHub Pages.',
      en: 'Brandify is a project built with React and Vite, styled with Tailwind CSS and animated with Framer Motion. The site was designed to deliver a smooth user experience, with React componentization, optimized performance and automated deployment to GitHub Pages.',
    },
    details: [
      {
        label: { pt: 'Tipo', en: 'Type' },
        value: { pt: 'Site Institucional / Landing Page Front-end', en: 'Institutional Site / Front-end Landing Page' },
      },
      { label: { pt: 'Stack', en: 'Stack' }, value: 'React, Vite, Tailwind CSS, Framer Motion' },
      {
        label: { pt: 'Escopo', en: 'Scope' },
        value: {
          pt: 'Interface interativa, responsiva e com animações suaves',
          en: 'Interactive, responsive interface with smooth animations',
        },
      },
      { label: { pt: 'Ano', en: 'Year' }, value: '2025' },
    ],
    highlights: {
      pt: [
        'Layout 100% responsivo para diferentes dispositivos',
        'Animações suaves e interativas com Framer Motion',
        'Componentização completa com React',
        'Deploy automatizado no GitHub Pages com build otimizada via Vite',
      ],
      en: [
        'Fully responsive layout for different devices',
        'Smooth, interactive animations with Framer Motion',
        'Complete componentization with React',
        'Automated deployment to GitHub Pages with an optimized Vite build',
      ],
    },
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
    summary: {
      pt: 'Projeto web de estudo que simula uma loja virtual de jogos com páginas por plataforma, cadastro de usuário, carrinho de compras e alternância entre tema claro e escuro.',
      en: 'Study web project that simulates an online game store with per-platform pages, user registration, a shopping cart and light/dark theme switching.',
    },
    description: {
      pt: 'O 4Players foi desenvolvido como parte dos estudos em front-end para simular um site de vendas de jogos. A aplicação possui páginas dedicadas para PlayStation, Xbox e Nintendo, além de recursos de cadastro, carrinho com JavaScript e persistência de preferência de tema usando localStorage.',
      en: '4Players was built as part of my front-end studies to simulate a game store website. The application has dedicated pages for PlayStation, Xbox and Nintendo, plus registration, a JavaScript shopping cart and theme preference persistence using localStorage.',
    },
    details: [
      { label: { pt: 'Tipo', en: 'Type' }, value: { pt: 'Loja Virtual de Jogos', en: 'Online Game Store' } },
      { label: { pt: 'Stack', en: 'Stack' }, value: 'HTML5, CSS3, JavaScript, LocalStorage' },
      {
        label: { pt: 'Escopo', en: 'Scope' },
        value: {
          pt: 'Catálogo por plataforma, cadastro, carrinho e tema dinâmico',
          en: 'Per-platform catalog, registration, cart and dynamic theme',
        },
      },
      { label: { pt: 'Ano', en: 'Year' }, value: '2025' },
    ],
    highlights: {
      pt: [
        'Páginas específicas para jogos de PlayStation, Xbox e Nintendo',
        'Cadastro de usuário com formulário interativo',
        'Carrinho de compras funcional com JavaScript puro',
        'Tema claro e escuro com salvamento da preferência no localStorage',
      ],
      en: [
        'Dedicated pages for PlayStation, Xbox and Nintendo games',
        'User registration with an interactive form',
        'Working shopping cart built with vanilla JavaScript',
        'Light and dark theme with preference saved in localStorage',
      ],
    },
  },
]
