// Campos traduzíveis usam { pt, en } e são resolvidos pelo hook useLocalized.
// `date` fica em ISO e é formatada conforme o idioma; `readTime` é em minutos.

export const posts = [
  {
    slug: 'designing-with-restraint',
    title: { pt: 'Projetando com Contenção', en: 'Designing with Restraint' },
    date: '2025-11-20',
    category: 'Frontend',
    excerpt: {
      pt: 'Como reduzir excessos visuais pode tornar interfaces web mais claras, consistentes e fáceis de manter.',
      en: 'How cutting visual excess can make web interfaces clearer, more consistent and easier to maintain.',
    },
    readTime: 5,
    content: {
      pt: `
Existe algo em comum entre interfaces que continuam funcionando bem com o tempo: **elas não dependem de exagero**.

- Menos cor  
- Menos ruído  
- Menos decisões visuais feitas só para preencher espaço  

Não se trata apenas de seguir uma estética minimalista. A ideia é **reduzir a complexidade** para que a interface fique mais clara, consistente e fácil de evoluir.

## O problema da complexidade visual

Durante o desenvolvimento, é normal recorrer a soluções visuais rápidas.

Um botão não chama atenção o suficiente → ganha uma nova cor.  
Uma seção parece sem vida → ganha mais contraste.

O problema é que cada nova escolha acaba criando **uma regra nova**, mesmo que isso não esteja explícito.

Com o tempo:
- decisões se acumulam  
- a interface fica mais difícil de manter  
- surgem inconsistências entre componentes  

## Contenção como estratégia

Trabalhar com uma paleta mais restrita obriga decisões mais conscientes.

- A hierarquia passa a depender mais da **tipografia**
- O espaçamento organiza melhor os blocos
- Componentes ficam mais consistentes e reutilizáveis

Esse tipo de abordagem reduz correções constantes e torna o sistema mais previsível.

## O impacto no desenvolvimento

Quando o design é mais contido, o desenvolvimento também tende a ficar mais simples.

O código costuma ter:
- menos variações  
- menos exceções  
- menos remendos  

Os componentes ficam mais fáceis de:
- reaproveitar  
- entender  
- manter  

No fim, isso reduz tanto a complexidade **visual** quanto **estrutural**.

## O que vale a pena manter

Antes de adicionar uma nova cor ou variação, vale perguntar:

> Isso resolve o problema ou só disfarça?

Na maioria dos casos:
- ajustar estrutura  
- melhorar espaçamento  
- refinar hierarquia  

traz uma solução mais consistente.

Interfaces que envelhecem bem não são as mais chamativas,  
são as que continuam **claras, coerentes e fáceis de usar** com o tempo.
`.trim(),
      en: `
There is something shared by interfaces that keep working well over time: **they don't rely on excess**.

- Less color
- Less noise
- Fewer visual decisions made just to fill space

This isn't only about following a minimalist aesthetic. The idea is to **reduce complexity** so the interface becomes clearer, more consistent and easier to evolve.

## The problem with visual complexity

During development, it's normal to reach for quick visual fixes.

A button doesn't stand out enough → it gets a new color.
A section feels lifeless → it gets more contrast.

The problem is that every new choice ends up creating **a new rule**, even if it isn't explicit.

Over time:
- decisions pile up
- the interface becomes harder to maintain
- inconsistencies appear between components

## Restraint as a strategy

Working with a more limited palette forces more deliberate decisions.

- Hierarchy relies more on **typography**
- Spacing organizes blocks better
- Components become more consistent and reusable

This approach reduces constant fixes and makes the system more predictable.

## The impact on development

When the design is more restrained, development also tends to get simpler.

The code usually has:
- fewer variations
- fewer exceptions
- fewer patches

Components become easier to:
- reuse
- understand
- maintain

In the end, this reduces both **visual** and **structural** complexity.

## What is worth keeping

Before adding a new color or variation, it's worth asking:

> Does this solve the problem or just hide it?

In most cases:
- adjusting structure
- improving spacing
- refining hierarchy

leads to a more consistent solution.

Interfaces that age well aren't the flashiest ones,
they're the ones that stay **clear, coherent and easy to use** over time.
`.trim(),
    },
  },
  {
    slug: 'building-rest-api-spring-boot',
    title: { pt: 'Criando uma API REST com Spring Boot', en: 'Building a REST API with Spring Boot' },
    date: '2026-02-02',
    category: 'Backend',
    excerpt: {
      pt: 'Uma visão prática de como estruturar uma API REST com Java e Spring Boot, com foco em organização, clareza e evolução do projeto.',
      en: 'A practical look at how to structure a REST API with Java and Spring Boot, focusing on organization, clarity and project growth.',
    },
    readTime: 6,
    content: {
      pt: `
Quando a gente começa a estudar Spring Boot, é comum querer apenas **fazer a API funcionar**.

- Criar endpoints  
- Conectar com o banco  
- Testar o mais rápido possível  

Mas conforme a aplicação cresce, o desafio muda:  
não é mais só rodar, é **manter organizado**.

## Estrutura básica

Uma API bem organizada separa responsabilidades de forma clara:

- **Controller:** Lida com a requisição  
- **Service:** Contém a lógica de negócio  
- **Repository:** Comunicação com o banco  

Essa divisão:
- facilita manutenção  
- evita código confuso  
- ajuda na escalabilidade  

## Criando endpoints REST

Uma API REST segue padrões simples:

- \`GET /items\`
- \`GET /items/{id}\`
- \`POST /items\`
- \`PUT /items/{id}\`
- \`DELETE /items/{id}\`

Mais importante que decorar métodos é manter **consistência**.

Isso deixa a API:
- previsível para quem consome  
- fácil de manter  

## O papel do Service

Erro comum:

> colocar toda a lógica no controller

O \`service\` existe para:
- centralizar regras de negócio  
- validar dados  
- processar informações  

Resultado:
- código mais limpo  
- melhor organização  
- maior reaproveitamento  

## Integração com banco

Com **Spring Data JPA**, trabalhar com banco fica mais direto.

Exemplo:

\`\`\`java
repository.save(entity);
repository.findById(id);
repository.delete(entity);
\`\`\`

Isso reduz código boilerplate e permite focar no que importa:  
**a lógica da aplicação**.

## Pensando além do básico

Mesmo em projetos pequenos, vale investir em:

- tratamento de erros  
- padronização de respostas  
- separação de responsabilidades  

Esses pontos fazem diferença quando o sistema cresce.

## Conclusão

Aprender Spring Boot não é só criar endpoints.

É entender como estruturar uma aplicação backend que seja:

- clara  
- organizada  
- fácil de evoluir  

com o passar do tempo.
`.trim(),
      en: `
When we start learning Spring Boot, it's common to just want to **make the API work**.

- Create endpoints
- Connect to the database
- Test as fast as possible

But as the application grows, the challenge changes:
it's no longer just about running, it's about **staying organized**.

## Basic structure

A well-organized API separates responsibilities clearly:

- **Controller:** Handles the request
- **Service:** Holds the business logic
- **Repository:** Talks to the database

This split:
- makes maintenance easier
- avoids messy code
- helps with scalability

## Creating REST endpoints

A REST API follows simple patterns:

- \`GET /items\`
- \`GET /items/{id}\`
- \`POST /items\`
- \`PUT /items/{id}\`
- \`DELETE /items/{id}\`

More important than memorizing methods is keeping things **consistent**.

That makes the API:
- predictable for consumers
- easy to maintain

## The role of the Service

A common mistake:

> putting all the logic in the controller

The \`service\` exists to:
- centralize business rules
- validate data
- process information

The result:
- cleaner code
- better organization
- more reuse

## Database integration

With **Spring Data JPA**, working with the database becomes more straightforward.

Example:

\`\`\`java
repository.save(entity);
repository.findById(id);
repository.delete(entity);
\`\`\`

This cuts boilerplate code and lets you focus on what matters:
**the application logic**.

## Thinking beyond the basics

Even in small projects, it's worth investing in:

- error handling
- standardized responses
- separation of concerns

These points make a difference as the system grows.

## Conclusion

Learning Spring Boot isn't just about creating endpoints.

It's about understanding how to structure a backend application that is:

- clear
- organized
- easy to evolve

over time.
`.trim(),
    },
  },
]