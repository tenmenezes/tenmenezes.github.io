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
  },
]