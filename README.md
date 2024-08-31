<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Projeto backend para a aplicação mobile <strong>Organizator</strong> projeto mobile pode ser encontrado aqui no meu respositório <strong>mobile-organizator</strong> é um projeto que tem um acesso de usuários Jwt, criação de usuários e criação de registros de contatos, todas as rotas desses contatos estão validadas por usuário conectado, ele só poderá ver os contatos de outras pessoas.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Como iniciar o projeto

Depois de fazer o clone do projeto, instale as dependências.

```bash
$ npm install
```

## Com o docker instalado em sua máquina, crie uma imagem postgres

```bash
$ sudo docker pull postgres
```

## Agora crie o container com os detalhes do banco

```bash
$ sudo docker run --name some-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=contacts_db -p 5432:5432 -d postgres
```

## O projeto já está com as migrations, basta rodar ele para criar as tabelas no banco, a migration rodará automaticamente.

```bash
$ npm run start:dev
```

## Verifique se foi criado a tabela de contact, migrations e user

```bash
O arquivo .env.development.local já estará junto ao projeto
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
