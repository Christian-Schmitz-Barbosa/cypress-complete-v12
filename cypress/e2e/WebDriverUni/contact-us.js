/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("#contact-us").invoke("removeAttr", "target").click()
    })

    it('Should be able to submit a successful via contact us form', () => {
        cy.get('input[name="first_name"]').type('John')
        cy.get("input[name=last_name]").type('Doe')
        cy.get('input[name="email"]').type('kenaa@example.com')
        cy.get('textarea').type('Hello World!')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful via contact us form as all fields are required", () => {
        cy.get("input[type=submit]").click()
        cy.get("body").should('contain', 'Error: all fields are required')
    });


})