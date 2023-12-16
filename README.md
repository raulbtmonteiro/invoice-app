# 📰 Invoice App
Projeto da interface de uma aplicação web utilizada para gerenciar as notas fiscais de uma empresa.

## 📋 Pré-requisitos
Para executar o projeto é necessário possuir as seguintes ferramentas e softwares instaladas na máquina:
- Git
- Node.js
- yarn

Neste tutorial iremos ensinar a rodar o projeto utilizando o gerenciador de pacotes yarn, porém você também pode utilizar o npm caso seja de sua preferência.

## 🚀 Começando
Para rodar o projeto em sua máquina, abre o seu terminal e siga os seguintes passos:
1. Clone o repositório
```
git clone https://github.com/raulbtmonteiro/invoice-app.git
```
2. Entre no diretório do projeto
```
cd invoice-app
```
3. Instale as dependências
```
yarn
```
4. Execute o projeto
```
yarn dev
```
Pronto, seguidos esses passos agora você possui o projeto rodando local em sua máquina através do endereço http://localhost:5173/
## ⚙ O projeto
A aplicação é uma interface para os que usuários possam fazer o gerenciamento das notas fiscais de uma empresa. Nela, é possível cadastrar uma nova nota, editar uma já existente ou excluir uma caso seja da vontade do usuário.
O projeto consiste em duas telas: 
* Dashboard principal: onde é possível visualizar todas as notas e suas informações principais, realizar o filtro através do status e criar uma nova nota.
* Detalhes da nota: onde é possível visualizar informações mais detalhadas da nota, como o pagador e o pagante e os itens referenciados na nota. Também é possível editar as informações e alterar o status da nota.

Em sua lateral esquerda, para dispositivos desktop, e em seu topo, para dispositivos mobile, há uma barra onde é possível visualizar a foto do usuário logado na plataforma, alterar o tema de cores entre claro e escuro, além de alterar o idiota da aplicação entre inglês e português.

Obs: Este projeto contempla apenas a parte da interface da aplicação, ou seja, o seu front-end. Toda a persistência dos dados é realizada no navegador, através do localStorage. Dessa forma, uma vez que a aplicação for restartada ou dados também serão.

