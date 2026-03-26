# 🚗 Car Rental API

API REST para gerenciamento de uma **locadora de carros**.

O sistema permite:

* cadastrar usuários
* cadastrar veículos
* realizar aluguéis
* registrar devoluções com cálculo automático do valor da locação

---

# 🛠 Tecnologias utilizadas

* **Node.js**
* **Express**
* **PostgreSQL**

---

# 📦 Arquitetura

O projeto segue uma **arquitetura em camadas**, separando responsabilidades para manter o código organizado e escalável.

```
routes → controllers → services → repositories → database
```

* **Routes** → definição das rotas da API
* **Controllers** → recebem as requisições HTTP
* **Services** → regras de negócio da aplicação
* **Repositories** → comunicação com o banco de dados
* **Database** → conexão e estrutura do banco

---

# 📚 Funcionalidades

✔ Criar usuário
✔ Criar carro
✔ Listar carros
✔ Listar carros disponíveis
✔ Criar aluguel de carro
✔ Registrar devolução de carro
✔ Calcular valor do aluguel automaticamente

---

# 🗄 Banco de Dados

O projeto utiliza **PostgreSQL** com três tabelas principais:

* **users**
* **cars**
* **rentals**

### Relacionamentos

* Um **usuário** pode ter vários aluguéis
* Um **carro** pode ter vários aluguéis ao longo do tempo
* Um **carro não pode possuir dois aluguéis ativos simultaneamente**

---

# ▶ Como rodar o projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/HeitorCostta/projeto-locadora-backend.git
```

## 2️⃣ Entrar na pasta do projeto

```bash
cd projeto-locadora-backend
```

## 3️⃣ Instalar dependências

```bash
npm install
```

## 4️⃣ Criar banco no PostgreSQL

```sql
CREATE DATABASE locadora_db;
```

## 5️⃣ Rodar o schema do banco

```bash
psql -d locadora_db -f schema.sql
```

## 6️⃣ Iniciar o servidor

```bash
node src/server.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

# 📡 Principais rotas da API

### Usuários

```
POST /users
```

Criar usuário

---

### Carros

```
POST /cars
GET /cars
GET /cars/available
```

Criar e listar carros

---

### Aluguéis

```
POST /rentals
PATCH /rentals/:id/return
```

Criar aluguel e registrar devolução

---

# 🔮 Melhorias futuras

* Implementar autenticação com **JWT**
* Criptografia de senha com **bcrypt**
* Paginação na listagem de carros
* Filtros de busca (marca, modelo)
* Testes automatizados
* Deploy da API
* Documentação da API com **Swagger**
* Criar **frontend para gerenciamento da locadora**

---

# 👨‍💻 Autor

**Heitor Costta**

Projeto desenvolvido como prática de backend utilizando **Node.js**, **Express** e **PostgreSQL**.
