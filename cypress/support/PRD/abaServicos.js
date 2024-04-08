Cypress.Commands.add('macroprocessos', () => {
    cy.get('li[data-id="first-lvl-0"] > a', {timeout:10000}).contains('Conheça os macroprocessos').click({force: true});
    cy.get('#gomacro-4', {timeout:10000}).click().log('Clicando no macro processo Gestão de assuntos Regulatórios')
    cy.get('.processo_9ab23aca', {timeout:10000}).should('exist').log('Componente com o detalhamento dos processos confirmados na tela com Sucesso!')
});

Cypress.Commands.add('agenda', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('Agenda').click({force: true});
    cy.get('#leftSide', {timeout:10000}).should('exist').log('Componente de calendário confirmado na tela com Sucesso!')
});

Cypress.Commands.add('noticias', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('Notícias').click({force: true});
    cy.get('.content_title > h1', {timeout:10000}).should('exist').log('Componente do título das Notícias confirmado na tela com Sucesso!')
});

Cypress.Commands.add('consultaPR', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('ConsultaPR').click({force: true});
    cy.get('.custom-checkbox > span', {timeout:10000}).click().log('CLicado no campo checkbox com sucesso!')
    cy.get(':nth-child(1) > .cabecalho_produto > a > strong', {timeout:10000}).should('exist').log('Componente REVISÃO DO SUBMÓDULO 3.5-RS - CONSOLIDAÇÃO DA PREVISÃO DE CARGA PARA PLANEJAMENTO DA OPERAÇÃO ELETROENERGÉTICA (ALTERAÇÃO DE PRAZOS) confirmado na tela com Sucesso!')
});

Cypress.Commands.add('portalAPI', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('Portal API').click({force: true});
    cy.get(':nth-child(6) > .ms-rteFontSize-3', {timeout:10000}).should('exist').log('Componente de API confirmado na Interface com Sucesso!')
});