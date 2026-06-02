Fala, Matheus! Cara, sensacional ver o seu README com toda essa estrutura. O seu mapeamento de cenários e, principalmente, a sua lista de bugs encontrados mostram muita maturidade técnica. Parabéns pelo trabalho!

Para resolver de vez esse problema do Markdown grudando o texto e deixar o seu portfólio com aquela cara profissional que os recrutadores e Tech Leads adoram, eu apliquei as correções de formatação que conversamos.

Usei listas com marcadores (*) e recuos (espaçamentos) para que os Casos de Teste fiquem aninhados dentro de cada História, além de ajustar as quebras de linha e dar um tapa visual nos títulos.

Aqui está o código do seu README.md totalmente atualizado. É só copiar o bloco abaixo e colar por cima do seu arquivo:

Markdown
# 🧪 Projeto de Automação de Testes de API - Restful-Booker

Este repositório contém o projeto de automação de testes de API para a aplicação **Restful-Booker**, uma API pública de gerenciamento de reservas de hotel. O objetivo deste projeto é garantir a qualidade, estabilidade e o funcionamento correto dos endpoints principais da aplicação.

🔗 **Site da API:** [Restful-Booker API Doc](https://restful-booker.herokuapp.com/apidoc/index.html)

---

## 🚀 Tecnologias Utilizadas

* **Framework de Testes:** Cypress / Postman
* **Linguagem:** JavaScript / Node.js

---

## 🎯 Cenários de Testes Automatizados

Com foco em garantir o comportamento esperado da API, os cenários foram mapeados por Histórias de Usuário e estruturados da seguinte forma:

### ◢ História - Autenticação
* **Caso de teste Autenticação 1** – Autenticação com sucesso com credenciais válidas
* **Caso de teste Autenticação 2** – Validações de campos obrigatórios na autenticação

### ◢ História – Buscar reserva
* **Caso de teste Busca 1** – Busca de reserva com sucesso
* **Caso de teste Busca 2** – Busca de reserva inexistente
* **Caso de teste Busca 3** – Busca de reserva passando ID com caracteres especiais
* **Caso de teste Busca 4** – Busca de reserva passando ID com número inválido (negativo)

### ◢ História – Cadastrar reserva
* **Caso de teste Cadastro 1** – Cadastrar reserva com sucesso
* **Caso de teste Cadastro 2** – Cadastrar reserva passando payload vazio
* **Caso de teste Cadastro 3** – Validações de campos e tipos de dados no cadastro

### ◢ História - Atualizar reserva completa
* **Caso de teste Atualização Completa 1** – Atualizar reserva completa com sucesso
* **Caso de teste Atualização Completa 2** – Tentar atualizar reserva inexistente
* **Caso de teste Atualização Completa 3** – Tentar atualizar reserva com payload vazio
* **Caso de teste Atualização Completa 4** – Validar rejeição de atualização sem token válido

### ◢ História - Atualizar reserva parcial
* **Caso de teste Atualização Parcial 1** – Atualizar parcialmente dados da reserva com sucesso
* **Caso de teste Atualização Parcial 2** – Tentar atualizar parcialmente reserva com payload vazio
* **Caso de teste Atualização Parcial 3** – Tentar atualizar parcialmente reserva inexistente
* **Caso de teste Atualização Parcial 4** – Validar rejeição de atualização parcial sem token válido

### ◢ História – Deletar reserva
* **Caso de teste Exclusão 1** – Deletar reserva com sucesso
* **Caso de teste Exclusão 2** – Tentar deletar reserva já excluída
* **Caso de teste Exclusão 3** – Tentar deletar reserva inexistente
* **Caso de teste Exclusão 4** – Validar rejeição de exclusão sem token válido

---

## 🐛 Bugs Encontrados nos Testes

Durante a execução da automação, foram identificadas as seguintes inconformidades entre o comportamento real da API e as boas práticas de desenvolvimento/regras de negócio:

**[BUG] [API-Auth]** Autenticação retorna Status `200 OK` em falhas de autenticação.
**[BUG] [API-Booking]** Busca retorna Status `404 Not Found` para IDs malformados.
**[BUG] [API-Booking]** Cadastro retorna Status `500 Internal Server Error` para payloads incompletos ou vazios.
**[BUG] [API-Booking]** Cadastro retorna Status `500 Internal Server Error` ao enviar campo *firstname* preenchido com números.
**[BUG] [API-Booking]** Cadastro de reserva com sucesso recebendo dados inválidos ou em branco.
**[BUG] [API-Booking]** Atualização parcial retorna Status `405 Method Not Allowed` para ID inexistente.
**[BUG] [API-Booking]** Atualização completa retorna Status `405 Method Not Allowed` para ID inexistente.
**[BUG] [API-Booking]** Exclusão retorna Status `405 Method Not Allowed` para ID inexistente.
**[BUG] [API-Booking]** Exclusão retorna Status `201 Created` em exclusões bem-sucedidas.

---

## 👤 Autor

* **Matheus Koehler Zanella** - Quality Assurance Engineer
