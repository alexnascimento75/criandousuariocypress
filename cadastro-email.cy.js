/// <reference types='Cypress'/>

describe.only('Criação de usuário', () => {
    it('Cadastrar e-mail com sucesso', () => {
        // Acessar a aplicação
        cy.visit('https://automationpratice.com.br/')  
        
        // Criar steps, selecionar elemento e preencher o campo
        cy.get('#top_header')
        
        cy.get('.form-control')
        .type('alex@teste.com')
        
        // Clicar no botão (elemento)
        cy.get('.clear .theme-btn-one.btn_md')
        .click()

       cy.get('#swal2-title')
       .should('be.visible')
       .should('have.text', 'Success')

    });
});


describe('Criação de usuário', () => {
    it('Cadastrar e-mail com sucesso apertando enter', () => {
        cy.visit('https://automationpratice.com.br/')  
        cy.get('#top_header')

        cy.get('.form-control')
        .type('alex@teste.com {enter}') 

       cy.get('#swal2-title')
       .should('be.visible')
       .should('have.text', 'Success')

    });
});


