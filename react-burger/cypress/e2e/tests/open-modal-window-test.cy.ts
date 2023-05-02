describe('open-modal-window-test.cy.ts', () => {

    before(() => {
        cy.visit('http://localhost:3000')
        cy.viewport(1280, 720)
    })
    it('open-modal-window-test', () => {
        cy.get('#ingredient').first().click()
        cy.get('#modal-content').should('be.visible');
        cy.get('#modal-content').find('img').should('be.visible');
        cy.get('#modal-content').find('div').contains('Детали ингредиента').should('be.visible');
        cy.get('#modal-content').find('#close-icon').should('be.visible');
        cy.get('#modal-content').find('div').contains('Краторная булка N-200i').should('be.visible');
        cy.get('#modal-content').contains('Каллории, ккал').should('be.visible');
        cy.get('#modal-content').contains('420').should('be.visible');
        cy.get('#modal-content').contains('Белки, г').should('be.visible');
        cy.get('#modal-content').contains('80').should('be.visible');
        cy.get('#modal-content').contains('Жиры, г').should('be.visible');
        cy.get('#modal-content').contains('24').should('be.visible');
        cy.get('#modal-content').contains('Углеводы, г').should('be.visible');
        cy.get('#modal-content').contains('53').should('be.visible');

        cy.wait(1000)

        cy.get('#modal-content').find('#close-icon').click()
        cy.get('#modal-content').should('not.exist');
    })

})

export {}