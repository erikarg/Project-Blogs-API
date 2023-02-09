
# Project Blogs API :computer:

<details>
<summary>:brazil: Português</summary>

## Descrição

Projeto desenvolvido durante o terceiro módulo (desenvolvimento back-end) do curso da Trybe.

## Objetivo

Construir uma API Rest e um banco de dados para a produção de conteúdo para um blog. Para tanto, foi desenvolvido:

* CRUD de usuários, postagens e categorias;
* autenticação de usuário com JWT;
* gerenciamento do banco de dados com o ORM Sequelize.

## Stacks utilizadas

* **Back-end:** Express, Node.js, Sequelize
* **Plataforma:** Docker
* **Linguagem:** JavaScript
* **Banco de dados:** MySQL

## Rodando localmente

* Suba os containers:

`docker-compose up -d`

* Execute o terminal do container:

`docker exec -it bash blogs_api`

* Instale as dependências, crie e popule o banco de dados: 

`npm install && npm run prestart && npm run seed`

* Inicialize a aplicação:

`npm start`

## Rotas

**Login**

| Requisição   | URL       
| :---------- | :-------
| `POST` | http://localhost:3000/login

**User**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/user
| `GET` | http://localhost:3000/user/:id
| `POST` | http://localhost:3000/user
| `DELETE` | http://localhost:3000/user/:id

**BlogPost**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/post
| `GET` | http://localhost:3000/post/:id
| `GET` | http://localhost:3000/post/search?q=name
| `PUT` | http://localhost:3000/post/:id
| `POST` | http://localhost:3000/post
| `DELETE` | http://localhost:3000/post/:id

**Categories**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/categories
| `POST` | http://localhost:3000/categories

</details>

<details>
<summary>:us: English</summary>

## Description

Project developed during the third module (back-end development) of the Trybe course.

## Objective

Build a Rest API and a database to produce content for a blog. For this purpose, it was developed:

* CRUD of users, posts and categories;
* user authentication with JWT;
* database management with ORM Sequelize.

## Stacks

* **Back-end:** Express, Node.js, Sequelize
* **Platform:** Docker
* **Language:** JavaScript
* **Database:** MySQL

## Running the application locally

* Install the docker containers:

`docker-compose up -d`

* Run the container terminal:

`docker exec -it bash blogs_api`

* Installl dependencies, create and populate the database: 

`npm install && npm run prestart && npm run seed`

* Start the application:

`npm start`

## Endpoints

**Login**

| Request   | URL       
| :---------- | :-------
| `POST` | http://localhost:3000/login

**User**

| Request   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/user
| `GET` | http://localhost:3000/user/:id
| `POST` | http://localhost:3000/user
| `DELETE` | http://localhost:3000/user/:id

**BlogPost**

| Request   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/post
| `GET` | http://localhost:3000/post/:id
| `GET` | http://localhost:3000/post/search?q=name
| `PUT` | http://localhost:3000/post/:id
| `POST` | http://localhost:3000/post
| `DELETE` | http://localhost:3000/post/:id

**Categories**

| Request   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/categories
| `POST` | http://localhost:3000/categories
</details>



