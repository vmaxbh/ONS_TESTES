describe('Cenário de Navegação e coleta abas do Sintegre', () => {
    beforeEach(() => {
        cy.loginCaminhoFeliz()
    });

    it('Acessando aba Conhecimento e Confirmando se Manual Sistema de Gerenciamento de Incidentes - OTRS está presente na interface', () => {
        cy.abaConhecimentoManu()
    });

    it('Acessando aba Conhecimento Confirmando se Remuneração da Fronteira está presente na Interface', () => {
        cy.abaConhecimentoContab()
    });

    it('Acessando aba de Serviços e confirmando Macroprocessos', () => {
        cy.macroprocessos()
    });

    it('Acessando aba de Serviços e confirmando Agenda', () => {
        cy.agenda()
    });

    it('Acessando aba de Serviços e confirmando Notícias', () => {
        cy.noticias()
    });

   it('Acessando aba de Serviços e confirmando Consulta PR', () => {
        cy.consultaPR()
    });

   it('Acessando aba de Serviços e confirmando Portal API', () => {
        cy.portalAPI()
    });
    


});