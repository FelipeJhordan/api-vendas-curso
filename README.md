# Api de vendas

## Sumário
<!--ts-->
   * [Motivacão](#motivacão)
   * [Processo](#processo)
   * [Instalação](#instalacão)
   * [Como Executar](#como-executar)
   * [Tecnologias](#tecnologias)
   * [Recursos externos](#recursos-externos)
<!--te-->

## Motivacão
Aprimorar o conhecimento de node com express, conhecer o orm typeorm, redis, celebrate e aws-sdk ( lib para utiilizar serviços do aws )

## Processo
Primeiramente foi criado a camada de serviços, utilizando docker com um container utilizando uma imagem de postgresql.
A aplicação foi separada por modulos, sendo que na infra foi criado as migrações, repositórios e entidades para cada modelo de domínio da aplicação, e também recursos especificamente relacionadas ao express, como controllers e routes.
Foi aplicado injeção de dependência/testes no módulo de customers.

## Instalacão
### Para rodar o projeto é necessário:
 - Node v12+
 - Git ( Para clonar )
 - Postgree || Docker || Redis
 ### Para instalar é necessário executar os seguintes comanandos: 
 - git clone https://github.com/FelipeJhordan/api-vendas-curso.git
 - cd api-vendas-curso
 - npm install
 - criar um serviço postgre na máquina, container ou na nuvem.
 - criar um serviço redis na máquina, container ou na nuvem.
 - preencher o .env/typeorm.config
## Como Executar
Para executar as migrações é necessário aplicar o comando "npm run typeorm migrations:run".
Para executar a camada de backend é necessário aplicar o comando "npm run dev".

## Tecnologias
- typescript
- express
- typeorm
- redis 
- celebrate/joi
- aws-sdk
- nodemailer
- rate-limiter-flexible
- multer
- docker

## Recursos externos 
- Zoho Mail
- Ethereal 
- Amazon SES
- Amazon S3
- Hostinger
