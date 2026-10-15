// Campos traduzíveis usam { pt, en } e são resolvidos pelo hook useLocalized

export const capabilities = [
  {
    title: { pt: 'Backend & APIs com .NET', en: 'Backend & APIs with .NET' },
    description: {
      pt: 'Desenvolvimento de APIs e regras de negócio com C# e ASP.NET Core, persistência com Entity Framework e foco em organização, clareza e escalabilidade.',
      en: 'Building APIs and business logic with C# and ASP.NET Core, persistence with Entity Framework and a focus on organization, clarity and scalability.',
    },
    items: ['C# · ASP.NET Core', 'Entity Framework', 'Java + Spring Boot', 'SQL'],
  },
  {
    title: { pt: 'Desenvolvimento Frontend', en: 'Frontend Development' },
    description: {
      pt: 'Construção de interfaces modernas com foco em performance, organização e experiência do usuário.',
      en: 'Building modern interfaces focused on performance, organization and user experience.',
    },
    items: [
      'React / Next.js',
      { pt: 'Componentização', en: 'Componentization' },
      { pt: 'Integração com APIs', en: 'API Integration' },
    ],
  },
  {
    title: { pt: 'Estrutura de Sistemas', en: 'System Structure' },
    description: {
      pt: 'Modelagem de dados e organização de aplicações completas, conectando front-end e back-end.',
      en: 'Data modeling and organization of complete applications, connecting front-end and back-end.',
    },
    items: [
      { pt: 'Arquitetura básica', en: 'Basic architecture' },
      { pt: 'CRUDs completos', en: 'Complete CRUDs' },
      { pt: 'Integração de sistemas', en: 'System integration' },
    ],
  },
]

// Timelines ordenadas do mais recente ao mais antigo

export const professionalTimeline = [
  {
    number: '01',
    title: {
      pt: 'Desenvolvedor .NET Back-End Júnior · TOTVS — 2026 / atual',
      en: 'Junior .NET Back-End Developer · TOTVS — 2026 / present',
    },
    description: {
      pt: 'Manutenção de sistemas legados em .NET 6 e .NET Framework 4 com Visual Studio Professional, atuando em novas implementações, correção de bugs e análise de código legado. Monitoramento e resolução de problemas a partir de logs nas ferramentas de observabilidade Datadog e Grafana, além da migração de sistemas legados para o .NET 10.',
      en: 'Maintenance of legacy systems in .NET 6 and .NET Framework 4 using Visual Studio Professional, working on new implementations, bug fixes and legacy code analysis. Monitoring and troubleshooting issues from logs in the Datadog and Grafana observability tools, as well as migrating legacy systems to .NET 10.',
    },
  },
  {
    number: '02',
    title: {
      pt: 'Estagiário Full-Stack · Hubfy Space — 2026',
      en: 'Full-Stack Intern · Hubfy Space — 2026',
    },
    description: {
      pt: 'Atuação no desenvolvimento e manutenção de uma plataforma de ensino digital, com implementação de funcionalidades envolvendo integração com banco de dados, criação de rotas de API e ajustes no Front-End para suporte às novas features.',
      en: 'Development and maintenance of a digital learning platform, implementing features involving database integration, API route creation and Front-End adjustments to support new features.',
    },
  },
  {
    number: '03',
    title: {
      pt: 'Projetos Acadêmicos — 2024 / 2027',
      en: 'Academic Projects — 2024 / 2027',
    },
    description: {
      pt: 'Desenvolvimento de projetos práticos durante a graduação e ensino médio técnico, incluindo aplicações web, sistemas com banco de dados e estudos em desenvolvimento Full-Stack.',
      en: 'Hands-on projects during my degree and technical high school, including web applications, database-driven systems and Full-Stack development studies.',
    },
  },
  {
    number: '04',
    title: {
      pt: 'Estagiário de Suporte Técnico · ETERJ — 2024 / 2025',
      en: 'Technical Support Intern · ETERJ — 2024 / 2025',
    },
    description: {
      pt: 'Atuei com suporte a usuários, manutenção básica de sistemas e resolução de problemas técnicos em ambiente escolar.',
      en: 'Provided user support, basic system maintenance and technical troubleshooting in a school environment.',
    },
  },
]

export const learningTimeline = [
  {
    number: '01',
    title: {
      pt: 'Graduação em Análise e Desenvolvimento de Sistemas — 2025 / 2027',
      en: 'Associate Degree in Systems Analysis and Development — 2025 / 2027',
    },
    description: {
      pt: 'Atualmente cursando Análise e Desenvolvimento de Sistemas, aprofundando conhecimentos em desenvolvimento e arquitetura de software.',
      en: 'Currently studying Systems Analysis and Development, deepening my knowledge of software development and architecture.',
    },
  },
  {
    number: '02',
    title: {
      pt: 'Cursos e prática independente — 2024 / atual',
      en: 'Courses and independent practice — 2024 / present',
    },
    description: {
      pt: 'Estudo contínuo com cursos online e desenvolvimento de projetos próprios para evoluir habilidades em programação, hoje com foco em C#, .NET e ASP.NET Core.',
      en: 'Continuous learning through online courses and personal projects to grow my programming skills, currently focused on C#, .NET and ASP.NET Core.',
    },
  },
  {
    number: '03',
    title: {
      pt: 'Ensino Médio Técnico — 2022 / 2024',
      en: 'Technical High School — 2022 / 2024',
    },
    description: {
      pt: 'Formação inicial com foco em tecnologia, adquirindo base em lógica, sistemas e fundamentos de desenvolvimento.',
      en: 'Initial technology-focused education, building a foundation in logic, systems and development fundamentals.',
    },
  },
]

export const clients = ['SystemCheck', 'RoadMap Agent', 'Brandify']
