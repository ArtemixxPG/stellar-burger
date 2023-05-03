
describe('dnd testing ingredient-components', () => {
    before(() => {
        cy.visit('/')
        cy.viewport(1280, 720)
    })
    it('dnd test', () => {
        cy.wait(2000)




        cy.get('li').find('#ingredient').eq(5).trigger("dragstart")
        cy.get('li').find('#ingredient').eq(5).trigger("dragleave")

        cy.get('#drop-area')
            .trigger("dragenter")
            .trigger("dragover")
            .trigger("drop")
            .trigger("dragend");

    })

})

export {}