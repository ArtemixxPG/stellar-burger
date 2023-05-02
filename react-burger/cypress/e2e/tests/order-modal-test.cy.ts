describe('order-modal-test.cy', () => {
    before(() => {
        const testEmail = 'asir5@gmail.com';
        const testPassword = '1234'
        cy.visit('http://localhost:3000/login');
        cy.get('input[name="email"]').type(testEmail)
        cy.get('input[name="password"]').type(testPassword)
        cy.get('button[type="submit"]').contains('Войти').click()


    })

    it('order-modal-test', () => {
        cy.wait(2000)

        cy.get('#ingredient').contains('Краторная булка N-200i').trigger("dragstart")
            .trigger("dragleave")

        cy.get('#drop-area')
            .trigger("dragenter")
            .trigger("dragover")
            .trigger("drop")
            .trigger("dragend");

        cy.get('li').find('#ingredient').contains('Соус Spicy-X').trigger("dragstart")
        cy.get('li').find('#ingredient').contains('Соус Spicy-X').trigger("dragleave")

        cy.get('#drop-area')
            .trigger("dragenter")
            .trigger("dragover")
            .trigger("drop")
            .trigger("dragend");

        cy.get('li').find('#ingredient').contains('Мясо бессмертных моллюсков Protostomia').trigger("dragstart")
        cy.get('li').find('#ingredient').contains('Мясо бессмертных моллюсков Protostomia').trigger("dragleave")

        cy.get('#drop-area')
            .trigger("dragenter")
            .trigger("dragover")
            .trigger("drop")
            .trigger("dragend");


        cy.get('button').contains('Оформить заказ').click()
        cy.get('#modal-content').should('be.visible');
        cy.wait(20000)
        cy.get('#modal-content').find('#order').find('img').should('be.visible');
        cy.get('#modal-content').find('#order-id').should('be.visible');
        cy.get('#modal-content').find('#order-name').should('be.visible');

        cy.get('#modal-content').find('#close-icon').click({force: true})
        cy.get('#modal-content').should('not.exist');
    })
})

export {}