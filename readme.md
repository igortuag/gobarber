<p align="center">
    <img width="300" align="center" src=".github/gostack.svg">   
</p>

<h4 align="center"> 
	🚧 GoBarber 1.0 🚀 em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/igortuag/gobarber?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/igortuag/gobarber">

  	
  <a href="https://www.linkedin.com/in/igortuag/">
    <img alt="Made by Igor Tuag" src="https://img.shields.io/badge/made%20by-Igort--Tuag-%2304D361">
  </a>
	
  
  <a href="https://github.com/igortuag/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/igortuag/gobarber">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/igortuag/gobarber/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/igortuag/gobarber?style=social">
  </a>
</p>


## :rocket: Sobre o projeto

<p>Esta é uma plataforma completa onde o cliente pode visualizar a agenda de barbeiros e agendar um horário, 
e para barbeiros, permite gerenciar os horários marcados.</p> 


## 🎨 Layout

<img src=".github/gobarber.png">

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber?node-id=23%3A183">
  <img alt="Made by leon-carvalho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


### Mobile

	🚧 GoBarber 1.0 🚀 em construção... 🚧


### Web

	🚧 GoBarber 1.0 🚀 em construção... 🚧

## :computer: Tecnologias

Além das tecnologias abaixo, esta aplicação foi desenvolvida com as melhores práticas de desenvolvimento! 
<p>:heart_eyes: <strong>TDD</strong> :sparkling_heart: Design patterns: <strong>SOLID</strong>, <strong>DDD</strong> e <strong>DRY</strong>, :balance_scale: estratégia de <strong>cache</strong> e :police_car: <strong>segurança</strong> no node.</p>
    
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Celebrate](https://github.com/arb/celebrate)
- [Jest](https://jestjs.io/) 
- [Multer](https://github.com/expressjs/multer)
- [Datefns](https://date-fns.org/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [TypeORM](https://typeorm.io/#/)
- [Handlebars](https://handlebarsjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Ioredis](https://github.com/luin/ioredis)
- [Cors](https://github.com/expressjs/cors)
- [Aws-sdk](https://github.com/aws/aws-sdk-js)
- [Class-transformer](https://github.com/typestack/class-transformer)
- [Rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Uuidv4](https://github.com/thenativeweb/uuidv4)


## 🚀 Como rodar este projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta backend) 
2. Front End (pasta frontend) 🚧 GoBarber 1.0 🚀 em construção... 🚧
3. Mobile (pasta mobile) 🚧 GoBarber 1.0 🚀 em construção... 🚧

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) v10.20 ou maior
- [Yarn](https://yarnpkg.com/)
- Uma instância de [PostgreSQL](https://www.postgresql.org/), [Mongodb](https://www.mongodb.com/) e [Redis](https://redis.io/) **

** Ou [Docker](https://www.docker.com/) 
** Ou (Docker Compose)[https://docs.docker.com/compose/] - exemplo (aqui)[https://github.com/LuizFellype/gobarber/tree/master]

## :books: Guia de instalação e execução

### 🎲 Rodando o Back End (servidor)

<i>Antes de executar estes passos, você precisa ter uma instância dos bancos listados acima ou um Docker com as imagens e os databases e schemas criados.</i>

- Clone o repositório ```git clone https://github.com/igortuag/gobarber.git```
- Vá até o diretório ```cd backend```
- Execute ```yarn``` para instalar as dependências
- Caso exista, Copie o arquivo .env.example executando ```cp .env.example .env``` para linux ou mac e ```copy .env.example .env``` para windows
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Abra o arquivo `ormconfig.json` e preencha com suas credenciais das instâncias dos bancos de dados
- Execute ```yarn typeorm migration:run``` para rodar as migrations 
- Execute ```yarn dev:server``` para rodar o servidor

Você pode realizar requisições REST através do Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoBarber&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fnathaliacristina20%2Fgostack-gobarber-server%2Fmaster%2Finsomnia.json)

Caso deseje executar os testes unitários e de integração basta executar ```yarn test``` em seu terminal. Você poderá ver um relatório da cobertura acessando o arquivo ```coverage/lcov-report/index.html```.

## :pencil: Como contribuir

<b>Faça um fork deste repositório</b>

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gostack-gobarber-server

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](license) para saber mais.

Feito com ❤️ por Igor Tuag 👋🏽 [Entre em contato!](https://www.linkedin.com/in/igortuag/)