export const posts = [
  {
    slug: 'designing-with-restraint',
    title: 'Projetando com Contenção',
    date: 'Nov 20, 2025',
    category: 'Frontend',
    excerpt:
      'Como reduzir excessos visuais pode tornar interfaces web mais claras, consistentes e fáceis de manter.',
    readTime: '5 min read',
    content: `
Existe algo em comum entre interfaces que continuam funcionando bem com o tempo: elas não dependem de exagero.

Menos cor. Menos ruído. Menos decisões visuais feitas só para preencher espaço.

Não se trata apenas de seguir uma estética minimalista. A ideia é reduzir a complexidade para que a interface fique mais clara, mais consistente e mais fácil de evoluir.

## O problema da complexidade visual

Durante o desenvolvimento, é normal recorrer a soluções visuais rápidas. Um botão não chama atenção o suficiente, então recebe uma nova cor. Uma seção parece sem vida, então ganha mais contraste.

O problema é que cada nova escolha acaba criando uma regra nova, mesmo que isso não esteja explícito. Com o tempo, essas pequenas decisões se acumulam e deixam a interface mais difícil de organizar e manter.

Isso também gera inconsistência entre componentes e torna mais complicado construir novas telas seguindo um padrão realmente sólido.

## Contenção como estratégia

Trabalhar com uma paleta mais restrita obriga decisões mais conscientes.

A hierarquia passa a depender mais da tipografia. O espaçamento começa a organizar melhor os blocos. Os componentes ganham mais consistência e ficam mais fáceis de reutilizar.

Esse tipo de abordagem reduz a necessidade de correções constantes e torna o sistema mais previsível.

## O impacto no desenvolvimento

Quando o design é mais contido, o desenvolvimento também tende a ficar mais simples.

O código costuma ter menos variações, menos exceções e menos remendos ao longo do processo. Os componentes ficam mais fáceis de reaproveitar, entender e manter.

No fim, isso reduz tanto a complexidade visual quanto a estrutural.

## O que vale a pena manter

Antes de adicionar uma nova cor ou uma nova variação, vale pensar se aquilo realmente resolve o problema ou só disfarça ele por um momento.

Na maior parte das vezes, ajustar a estrutura, o espaçamento ou a hierarquia traz uma solução mais consistente.

Interfaces que envelhecem bem geralmente não são as mais chamativas. São as que continuam claras, coerentes e fáceis de usar com o passar do tempo.
`.trim(),
  },
  {
    slug: 'building-rest-api-spring-boot',
    title: 'Criando uma API REST com Spring Boot',
    date: 'Fev 02, 2026',
    category: 'Backend',
    excerpt:
      'Uma visão prática de como estruturar uma API REST com Java e Spring Boot, com foco em organização, clareza e evolução do projeto.',
    readTime: '6 min read',
    content: `
Quando a gente começa a estudar Spring Boot, é comum querer apenas fazer a API funcionar.

Criar endpoints, conectar com o banco e testar tudo o mais rápido possível. Só que, conforme a aplicação cresce, o desafio deixa de ser apenas colocar tudo para rodar e passa a ser manter o projeto organizado.

## Estrutura básica

Uma API bem organizada separa responsabilidades de forma clara.

O controller lida com a requisição, o service concentra a lógica de negócio e o repository cuida da comunicação com o banco de dados.

Essa divisão ajuda bastante na manutenção e evita que o código fique confuso conforme novas funcionalidades vão sendo adicionadas.

## Criando endpoints REST

Uma API REST costuma seguir padrões simples.

Rotas para listar, buscar por id, criar, atualizar e remover dados precisam ser consistentes. Mais importante do que decorar cada método é manter um padrão claro em toda a aplicação.

Isso deixa a API mais previsível para quem vai consumir e também para quem vai dar manutenção depois.

## O papel do Service

Um erro bem comum no começo é colocar toda a lógica dentro do controller.

O service existe justamente para centralizar regras de negócio, validações e processamento de dados. Isso deixa o código mais limpo, mais organizado e mais reaproveitável.

Além disso, facilita muito quando o projeto começa a crescer.

## Integração com banco

Com Spring Data JPA, trabalhar com banco de dados se torna mais direto.

Operações básicas como salvar, buscar e deletar já ficam bem mais simples, o que permite focar mais na lógica da aplicação e menos na escrita manual de consultas para tudo.

Isso acelera o desenvolvimento e ajuda bastante em projetos iniciais.

## Pensando além do básico

Mesmo em aplicações menores, vale a pena pensar em organização desde o início.

Tratamento de erros, padronização de respostas e separação de responsabilidades fazem diferença de verdade quando o projeto começa a ganhar novas camadas e mais regras.

## Conclusão

Aprender Spring Boot não é só criar endpoints e conectar com o banco.

É entender como estruturar uma aplicação backend de um jeito que continue clara, organizada e fácil de evoluir com o tempo.
`.trim(),
  },
]