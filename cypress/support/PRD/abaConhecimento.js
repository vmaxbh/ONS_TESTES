Cypress.Commands.add('abaConhecimentoManu', () => {
    cy.get('.area-menu > :nth-child(3) > a').click().log('Aba Conhecimento Clicado com Sucesso!');
    cy.get('#select2-filtro_processo-container', {timeout:10000}).click().log('Campo de Filtro clicado com Sucesso!')
    cy.get('.select2-search__field').type('Institucional').type('{enter}').log('Input do campo de pesquisa do Filtro feito com Sucesso!')
    cy.get('#select2-filtro_conhecimento-container').click().log('Campo de Filtro2 clicado com Sucesso!')
    cy.get('.select2-search__field').type('Manuais').type('{enter}').log('Input do campo de pesquisa do Filtro2 feito com Sucesso!')
    cy.get('#inputTexto').type('Sistema de Gerenciamento de Incidentes - OTRS').log('Input do campo de pesquisa do Filtro3 feito com Sucesso!')
    
});

Cypress.Commands.add('abaConhecimentoContab', () => {
    cy.wait(5000)
    cy.get('.area-menu > :nth-child(3) > a', {timeout:10000}).click().log('Aba Conhecimento Clicado com Sucesso!');
    cy.get('#select2-filtro_processo-container', {timeout:10000}).click().log('Campo de Filtro clicado com Sucesso!')
    cy.get('.select2-search__field', {timeout:10000}).type('Apuração e Contabilização').type('{enter}').log('Input do campo de pesquisa do Filtro feito com Sucesso!')
    

});