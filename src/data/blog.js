export const posts = [
  {
    slug: 'designing-with-restraint',
    title: 'Projetando com Contenção',
    date: 'Nov 20, 2025',
    category: 'Frontend',
    excerpt:
      'Como reduzir complexidade visual pode melhorar a clareza, manutenção e escalabilidade de interfaces web.',
    readTime: '5 min read',
    content: `
Existe um padrão silencioso nas interfaces que continuam boas com o tempo: elas não dependem de excesso.

Menos cor. Menos variação. Menos decisões visuais desnecessárias.

Não é sobre estética minimalista — é sobre reduzir complexidade para que a interface seja mais previsível, consistente e fácil de manter.

## O problema da complexidade visual

Durante o desenvolvimento, é comum usar cor como solução rápida. Um botão não se destaca, então muda a cor. Uma seção parece vazia, então adiciona contraste.

O problema é que cada nova variação cria uma regra implícita. Com o tempo, essas regras se acumulam e tornam a interface mais difícil de manter.

Isso acaba gerando inconsistência entre componentes e dificulta a criação de novas telas seguindo um padrão claro.

## Contenção como estratégia

Trabalhar com uma paleta mais restrita força decisões melhores.

A hierarquia passa a ser definida por tipografia. O espaçamento passa a organizar a interface. Os componentes ficam mais consistentes e reutilizáveis.

Esse tipo de abordagem reduz a necessidade de ajustes constantes e melhora a previsibilidade do sistema.

## O impacto no desenvolvimento

Quando o design é mais contido, o desenvolvimento também se beneficia.

O código tende a ser mais simples, com menos variações e menos exceções. Componentes ficam mais fáceis de reaproveitar e manter.

Isso reduz complexidade tanto visual quanto estrutural.

## O que vale a pena manter

Antes de adicionar uma nova cor ou variação, vale questionar se aquilo resolve o problema ou apenas mascara ele.

Na maioria dos casos, ajustar estrutura, hierarquia ou espaçamento gera uma solução mais sólida.

Interfaces que envelhecem bem não são as mais chamativas, mas sim as mais consistentes.
`.trim(),
  },
  {
    slug: 'building-rest-api-spring-boot',
    title: 'Criando uma API REST com Spring Boot',
    date: 'Fev 02, 2026',
    category: 'Backend',
    excerpt:
      'Uma visão prática de como estruturar uma API REST com Java e Spring Boot, focando em organização, clareza e boas práticas.',
    readTime: '6 min read',
    content: `
Ao começar com Spring Boot, é comum focar apenas em fazer a API funcionar.

Criar endpoints, conectar com o banco e testar tudo rapidamente. Mas conforme a aplicação cresce, o mais importante deixa de ser apenas funcionar e passa a ser organização.

## Estrutura básica

Uma API bem organizada separa responsabilidades.

O controller recebe a requisição, o service contém a lógica de negócio e o repository cuida da comunicação com o banco de dados.

Essa separação facilita manutenção e evita que o código fique confuso com o tempo.

## Criando endpoints REST

Uma API REST segue padrões simples.

Rotas para listar, buscar por id, criar, atualizar e remover dados devem ser consistentes. Mais importante do que decorar os métodos é manter um padrão claro em toda a aplicação.

Isso torna a API mais previsível para quem utiliza.

## O papel do Service

Um erro comum é colocar toda a lógica dentro do controller.

O service deve centralizar regras de negócio, validações e processamento de dados. Isso torna o código mais organizado e reutilizável.

## Integração com banco

Com Spring Data JPA, o acesso ao banco se torna mais simples.

Operações básicas como salvar, buscar e deletar já estão prontas, permitindo focar mais na lógica da aplicação do que na escrita de queries.

## Pensando além do básico

Mesmo em projetos simples, é importante considerar organização desde o início.

Tratamento de erros, padronização de respostas e separação de responsabilidades fazem diferença conforme a aplicação cresce.

## Conclusão

Aprender Spring Boot não é apenas criar endpoints.

É entender como estruturar uma aplicação backend de forma que ela continue clara, organizada e fácil de evoluir com o tempo.
`.trim(),
  },
]
