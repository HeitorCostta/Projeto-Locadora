#  Car Rental API

API REST desenvolvida para gerenciamento de uma **locadora de veículos**.

O sistema permite:

- gerenciamento de usuários
- gerenciamento de veículos
- controle de disponibilidade dos carros
- criação de aluguéis
- devolução de veículos
- cálculo automático do valor da locação

---

#  Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL

---

#  Arquitetura

O projeto segue uma arquitetura em camadas, separando responsabilidades para manter o código organizado, reutilizável e escalável.

txt
routes → controllers → services → repositories → database

Camadas da aplicação
Routes → definição das rotas da API
Controllers → recebem e tratam requisições HTTP
Services → regras de negócio da aplicação
Repositories → comunicação com o banco de dados
Database → conexão e estrutura do PostgreSQL


 Funcionalidades
👤 Usuários
Criar usuário
Listar usuários
Atualizar usuário
Deletar usuário

🚗 Carros

Criar carro
Listar carros
Listar carros disponíveis
Atualizar carro
Deletar carro
Atualizar disponibilidade automaticamente

📦 Aluguéis

Criar aluguel
Registrar devolução
Calcular valor total automaticamente
Impedir aluguel de carros indisponíveis
Impedir devolução duplicada

🗄 Banco de Dados

O projeto utiliza PostgreSQL com três tabelas principais:

users
cars
rentals

🔗 Relacionamentos
Um usuário pode possuir vários aluguéis
Um carro pode possuir vários aluguéis ao longo do tempo
Um carro não pode possuir dois aluguéis ativos simultaneamente


⚙ Regras de negócio implementadas
Um carro alugado fica automaticamente indisponível
Ao devolver o carro, ele volta a ficar disponível
O sistema calcula automaticamente o valor total do aluguel
O valor mínimo cobrado é de uma diária
Não é permitido devolver um aluguel já finalizado


▶ Como rodar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/HeitorCostta/projeto-locadora-backend.git

2️⃣ Entrar na pasta do projeto
cd projeto-locadora-backend

3️⃣ Instalar dependências
npm install

4️⃣ Criar banco no PostgreSQL
CREATE DATABASE locadora_db;

5️⃣ Rodar schema do banco
psql -d locadora_db -f schema.sql

6️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=locadora_db

7️⃣ Iniciar servidor
node src/server.js

Servidor disponível em:

http://localhost:3000
📡 Rotas principais

👤 Usuários
Criar usuário
POST /users
Listar usuários
GET /users
Atualizar usuário
PUT /users/:id
Deletar usuário
DELETE /users/:id

🚗 Carros
Criar carro
POST /cars
Listar carros
GET /cars
Listar carros disponíveis
GET /cars/available
Atualizar carro
PUT /cars/:id
Deletar carro
DELETE /cars/:id

📦 Aluguéis
Criar aluguel
POST /rentals
Registrar devolução
PATCH /rentals/:id/return

🔮 Melhorias futuras
Autenticação com JWT
Criptografia de senha com bcrypt
Middleware de autenticação
Paginação de resultados
Filtros de busca
Upload de imagens dos veículos
Testes automatizados
Dockerização da aplicação
Deploy em nuvem
Documentação com Swagger
Frontend administrativo da locadora

👨‍💻 Autor

Desenvolvido por Heitor Costta.

Projeto criado como prática avançada de backend utilizando Node.js, Express e PostgreSQL.