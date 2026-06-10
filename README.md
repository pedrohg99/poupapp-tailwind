💰 PoupApp Dashboard

Um dashboard financeiro fictício desenvolvido com React e Tailwind CSS, criado para fins de estudo e prática de desenvolvimento frontend.

Projeto desenvolvido durante os estudos de React com foco em componentização, reutilização de código e construção de interfaces modernas e responsivas.

📷 Preview

O PoupApp apresenta uma interface moderna para visualização de informações financeiras, permitindo acompanhar de forma visual:

Orçamento diário disponível
Progresso de metas financeiras
Histórico de movimentações
Contas bancárias cadastradas
Pesquisa de informações
Dashboard em tema escuro

🚀 Tecnologias Utilizadas
React
Tailwind CSS
JavaScript (ES6+)
Vite
HTML5
CSS3
ESLint

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

Desenvolvimento de interfaces com React
Componentização de aplicações frontend
Estilização utilizando Tailwind CSS
Estruturação de projetos escaláveis
Organização de layouts responsivos
Reutilização de componentes
Boas práticas de desenvolvimento frontend

📌 Funcionalidades
Implementadas
Dashboard financeiro completo
Sidebar de navegação
Campo de pesquisa
Card de orçamento diário
Card de progresso da meta financeira
Barra de progresso visual
Listagem de movimentações financeiras
Listagem de contas bancárias
Componentes reutilizáveis
Layout responsivo
Tema escuro (Dark Mode)
Não Implementadas

Por se tratar de um projeto exclusivamente frontend, não foram implementadas funcionalidades de negócio ou persistência de dados.

O projeto não possui:

Integração com APIs
Banco de dados
Sistema de autenticação
Cadastro de usuários
Cadastro de contas
Cadastro de transações
Filtros de pesquisa funcionais
Persistência de informações
Gerenciamento de estado global

Todos os dados exibidos na interface são estáticos e utilizados apenas para demonstração visual.

🧩 Arquitetura

A aplicação foi construída seguindo o conceito de componentização do React, onde cada elemento da interface é representado por componentes independentes e reutilizáveis.

Principais Componentes
Componente	Responsabilidade
Aside	Barra lateral da aplicação
Main	Área principal do dashboard
DailyBudget	Exibição do orçamento diário
SavingsStatus	Exibição da meta financeira
ProgressBar	Barra de progresso da meta
Accounts	Lista de contas bancárias
Account	Item individual de conta
Transaction	Lista de movimentações
TransactionItem	Item individual de movimentação
SearchInput	Campo de pesquisa
Card	Estrutura base dos cards
Button	Botões reutilizáveis
Typography	Componentes de texto
Container	Estrutura de layout
icons	Ícones utilizados na aplicação

📂 Estrutura do Projeto
src/
│
├── assets/
│
├── components/
│   ├── Account/
│   ├── Accounts/
│   ├── Aside/
│   ├── Button/
│   ├── Card/
│   ├── Container/
│   ├── DailyBudget/
│   ├── icons/
│   ├── List/
│   ├── ListItem/
│   ├── Main/
│   ├── ProgressBar/
│   ├── SavingsStatus/
│   ├── SearchInput/
│   ├── Transaction/
│   ├── TransactionItem/
│   └── Typography/
│
├── App.jsx
├── main.jsx
└── index.css

.gitignore
eslint.config.js
index.html
package.json
package-lock.json
vite.config.js
README.md

🖥️ Layout

O dashboard é composto por quatro áreas principais:

Orçamento Diário

Exibe o valor disponível para gastos no dia.

Meta Financeira

Apresenta o progresso visual de uma meta de economia através de uma barra de progresso.

Movimentação Financeira

Lista transações simuladas contendo:

Descrição
Valor
Data
Identificação visual de entrada e saída
Contas Bancárias

Exibe contas fictícias contendo:

Nome da instituição
Saldo disponível

⚙️ Como Executar o Projeto
1. Clone o repositório
git clone https://github.com/pedrohg99/poupapp-tailwind
2. Acesse o diretório
cd poupapp-dashboard
3. Instale as dependências
npm install
4. Execute o projeto
npm run dev
5. Acesse no navegador
http://localhost:5173

🎨 Design

A interface foi construída utilizando:

Tema escuro (Dark Mode)
Cards informativos
Hierarquia visual clara
Componentes reutilizáveis
Layout baseado em Flexbox
Paleta de cores voltada para aplicações financeiras
Experiência inspirada em dashboards SaaS modernos

📚 Conceitos Aplicados

Durante o desenvolvimento foram praticados conceitos importantes do ecossistema React:

Componentização
Reutilização de componentes
Organização de código
Estruturação de projetos React
Separação de responsabilidades
Responsividade
Tailwind CSS
Props
Composição de componentes
Organização modular

⚠️ Aviso

Este projeto é fictício e foi desenvolvido exclusivamente para fins educacionais e de aprendizado.

Nenhuma funcionalidade financeira real está implementada e nenhum dado é armazenado ou processado.

👨‍💻 Autor

Desenvolvido como projeto de estudo utilizando React e Tailwind CSS.

Projeto sem fins comerciais.
