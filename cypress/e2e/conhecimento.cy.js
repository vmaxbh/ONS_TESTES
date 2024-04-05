describe('Cenário de Navegação e coleta aba Conhecimento', () => {
    beforeEach(() => {
        cy.loginCaminhoFeliz()
    });

    it('Confirmando se Manual Sistema de Gerenciamento de Incidentes - OTRS está presente na interface', () => {
        cy.abaConhecimentoManu()
        
    });

    it('Confirmando se Remuneração da Fronteira está presente na Interface', () => {
        cy.abaConhecimentoContab()
    });
});