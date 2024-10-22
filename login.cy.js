/// <reference types='Cypress'/>

describe.only('Criação de usuário', () => {
    it('Acessar login com sucesso', () => {
        // Acessar a aplicação
        cy.visit('https://automationpratice.com.br/')  // Corrigido o URL
        
        // Criar steps, selecionar elemento e preencher o campo
        cy.get('#top_header')
        cy.get('.form-control')
        .type('alex@teste.com')
        
        // Clicar no botão
        cy.get('.clear .theme-btn-one.btn_md')
        .click()

        // Confirmando ação
        cy.get('.swal2-confirm')
        .click()
    });
});