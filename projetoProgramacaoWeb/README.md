# projetoProgramacaoWeb
Projeto para a disciplina de programação web do curso de ADS da Claretiano

Este é um projeto para um e-commerce (Brechó), qualquer atualização será atualizada este arquivo com explicações sobre.

Dia 03/10 
Primeira entrega:
4 páginas
Index.html - Página principal, ao entrar no site terá acesso as páginas do projeto.
No menu principal, foi criado um modal para realizar o login.

Register.html - Página para registrar um usuário, possível ser acessado através do Navbar, selecionando minha conta e registrar ou através do modal de login, em registrar.

Shop.html - Página do catálogo de produtos, possível acessar através do Navbar, clicando em Loja ou então no botão da página index Ver produtos.

Admin.html - Página para gerenciamento da página, será possível realizar os CRUDs das principais funções do site. No momento temos apenas para Gerenciar produtos, Gerenciar promoções e Gerenciar Usuários. Para acessar, no Navbar deve-se clicar em Brechó Vintage, do lado direito dela.


Dia 28/11
Segunda entrega:
Foi adicionado um servidor docker para o backend.
Para rodar, é preciso ter o docker e o docker compose instalado na maquina, a versao mais recente atualmente (28/11/2024).
Apos isso, é necessario ir ate a pasta server e digitar o seguinte comando no prompt

docker-compose up --build

Necessario manter o terminal aberto, em outro prompt deve-se digitar 

docker ps

Esse comando serve para que seja mostrado as instancias do docker abertas, existem 3 delas: server-frontend, server-api e postgres:latest

Foi feito um CRUD (exceto o update) para a criacao de usuarios.
Para testar o CRUD, deve-se ir na pagina de administrador (admin.html) e utilizar as operacoes disponiveis.



