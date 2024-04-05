Cypress.Commands.add('loginCaminhoFeliz', (username = Cypress.env("USERNAME"), password = Cypress.env("PASSWORD")) => {
    cy.visit('/')
    cy.get('#username', {timeout:5000}).type(username).log('Usuário inputado com Sucesso cypress.env.json!');
    cy.get('[type="submit"]', {timeout:5000}).click().log('Botão de Submit do Username clicado com Sucesso!');
    cy.get('#password', {timeout:5000}).type(password).log('Senha inputado com Sucesso cypress.env.json!');
    cy.get('[type="submit"]', {timeout:5000}).click().log('Botão de Submit do Password clicado com Sucesso!');
    cy.contains('Maxwell Madureira Viana', {timeout:15000}).should('be.visible').log('Componente na Tela Inicial identificado com Sucesso!');
    cy.log('Cenário de Login Caminho Feliz realizado com sucesso!');
});

Cypress.Commands.add('loginUsuárioInvalido', (username = Cypress.env("USERNAME"), password = Cypress.env("PASSWORD")) => {
    cy.visit('/')
    cy.get('#username', {timeout:5000}).type("usuario@invalido.com").log('Usuário fantasia inputado com Sucesso!');
    cy.get('[type="submit"]', {timeout:5000}).click().log('Botão de Submit do Username clicado com Sucesso!');
    cy.get('#password', {timeout:5000}).type(password).log('Senha inputado com Sucesso cypress.env.json!');
    cy.get('[type="submit"]', {timeout:5000}).click().log('Botão de Submit do Password clicado com Sucesso!');
    cy.get('.message').should('contain', 'Sua tentativa de acesso não obteve sucesso. Por favor tente novamente.').log('Mensagem de erro na tela de login, identificado com Sucesso!');
    cy.log('Cenário de Login Usuário Inválido realizado com sucesso!');
    
});

Cypress.Commands.add('loginSenhaInvalida', (username = Cypress.env("USERNAME"), password = Cypress.env("PASSWORD")) => {
    cy.visit('/')
    cy.get('#username', {timeout:5000}).type(username).log('Usuário inputado com Sucesso cypress.env.json!');
    cy.get('[type="submit"]', {timeout:5000}).click().log('Botão de Submit do Username clicado com Sucesso!');
    cy.get('#password', {timeout:5000}).type('123456').log('Senha fantasia inputado com Sucesso!');
    cy.get('[type="submit"]', {timeout:5000}).click().log('Botão de Submit do Password clicado com Sucesso!');
    cy.get('.message').should('contain', 'Sua tentativa de acesso não obteve sucesso. Por favor tente novamente.').log('Mensagem de erro na tela de login, identificado com Sucesso!');
    cy.log('Cenário de Login Senha Inválida realizado com sucesso!');
    
});