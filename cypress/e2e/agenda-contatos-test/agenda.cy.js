/// <reference types="cypress" />

describe('Teste das funcionalidades da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir contato', () => {
        cy.get('.sc-iAEyYk > :nth-child(2)').should('be.visible')
        cy.get('input[type="text"]').type('Felipe Firms')
        cy.get('input[type="email"]').type('felipefirms@test.com')
        cy.get('input[type="tel"]').type('21 12345678')
        cy.get('.adicionar').click()
        cy.screenshot('tela-contatos-preenchida-adicionada')
    })

    it('Deve alterar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Editado Jr')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('editadojr@test.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('21 87654321')
        cy.get('.alterar').click()
        cy.screenshot('tela-contatos-preenchida-alterada')
    })

    it('Deve remover contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
        cy.screenshot('tela-contatos-preenchida-deletado')
    })
})