Cypress.Commands.add('macroprocessos', () => {
    cy.get('li[data-id="first-lvl-0"] > a', {timeout:10000}).contains('Conheça os macroprocessos').click({force: true});
});

Cypress.Commands.add('agenda', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('Agenda').click({force: true});
});

Cypress.Commands.add('noticias', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('Notícias').click({force: true});
});

Cypress.Commands.add('consultaPR', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('ConsultaPR').click({force: true});
});

Cypress.Commands.add('portalAPI', () => {
    cy.get('li[data-id="first-lvl-1"] > a', {timeout:10000}).contains('Portal API').click({force: true});
});