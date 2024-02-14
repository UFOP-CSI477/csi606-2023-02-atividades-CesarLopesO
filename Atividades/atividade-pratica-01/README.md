API de Doação de Sangue
Descrição

Esta é uma API RESTful que gerencia informações relacionadas a doações de sangue. Ela abrange entidades como pessoas, tipos sanguíneos, locais de coleta e doações.
Funcionalidades da API:

    Inserir (Create)
    Atualizar (Update)
    Excluir (Delete)
    Recuperar (Read)
        Todos os itens
        Por ID

Tecnologias Utilizadas:

    Node.js
    Nodemon (para ambiente de desenvolvimento)
    Express
    Axios
    PostgreSQL (Banco de Dados)

Iniciando a API:

    Execute npm install para instalar as dependências.
    Configure o banco de dados criando o arquivo .env.
    Crie o banco de dados utilizando o comando: npm run prisma e nomeie a migração.
    Inicie a API com o comando: npm run start.

Rotas
Pessoa

    Obter todas as pessoas: GET http://localhost:3000/pessoas
    Obter pessoa por ID: GET http://localhost:3000/pessoas/:id
    Criar pessoa: POST http://localhost:3000/pessoas
    Atualizar pessoa: PUT http://localhost:3000/pessoas/:id
    Excluir pessoa: DELETE http://localhost:3000/pessoas/:id

Tipos Sanguíneos

    Obter todos os tipos sanguíneos: GET http://localhost:3000/tipos
    Obter tipo sanguíneo por ID: GET http://localhost:3000/tipos/:id
    Criar tipo sanguíneo: POST http://localhost:3000/tipos
    Atualizar tipo sanguíneo: PUT http://localhost:3000/tipos/:id
    Excluir tipo sanguíneo: DELETE http://localhost:3000/tipos/:id

Locais de Coleta

    Obter todos os locais de coleta: GET http://localhost:3000/local
    Obter local de coleta por ID: GET http://localhost:3000/local/:id
    Criar local de coleta: POST http://localhost:3000/local
    Atualizar local de coleta: PUT http://localhost:3000/local/:id
    Excluir local de coleta: DELETE http://localhost:3000/local/:id

Doações

    Obter todas as doações: GET http://localhost:3000/doacoes
    Obter doação por ID: GET http://localhost:3000/doacoes/:id
    Criar doação: POST http://localhost:3000/doacoes
    Atualizar doação: PUT http://localhost:3000/doacoes/:id
    Excluir doação: DELETE http://localhost:3000/doacoes/:id


