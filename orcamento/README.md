# Projeto de Controle de Gastos

Este projeto é uma aplicação web para controle de gastos pessoais, desenvolvida com Next.js. O objetivo é permitir que os usuários possam monitorar suas despesas de maneira organizada, com funcionalidades como gráficos, cards e modais. A interface é estilizada com Tailwind CSS.

## Funcionalidades

- **Criação de Orçamento**: O usuário pode criar um orçamento com categorias de despesas.
- **Controle de Despesas**: Adicione, edite e exclua despesas com categorias definidas.
- **Gráficos**: Visualização de gastos por meio de gráficos dinâmicos.
- **Interface Dinâmica**: Uso de modais e cards para facilitar a interação do usuário.
- **Tema Claro**: Estilização com Tailwind CSS, proporcionando uma interface moderna e intuit.
- **Validação de Porcentagens**: Validação de orçamentos para garantir que a soma das porcentagens por categoria não exceda 100%.

## Tecnologias Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/): Framework React para construção de aplicações web.
  - [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para estilização responsiva e moderna.
  - [Material UI](https://mui.com): Biblioteca para componentes react.

## Estrutura de Dados

A aplicação utiliza uma estrutura de dados local para gerenciar as despesas e orçamentos, com as seguintes propriedades:

- **Despesa**:
  - `category` (string): Categoria da despesa.
  - `date` (timestamp): Data da despesa.
  - `description` (string): Descrição da despesa.
  - `value` (number): Valor da despesa.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
