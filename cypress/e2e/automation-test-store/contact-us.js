/// <reference types="Cypress" />

describe("Test Contact Us form via Automation test store", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
        cy.get(".info_links_footer")
            .contains("Contact Us")
            .invoke("removeAttr", "target")
            .click()
    })

    it('Fill the form and submit', () => {
        cy.get("input[name=first_name")
            .type("Christian")
        cy.get("#ContactUsFrm_email")
            .type("christian@automationteststore.com")
        cy.get("#ContactUsFrm_enquiry")
            .type("asohfioagsdhjnóhigadsfjohi´fsga")
        cy.get("button[title=Submit]")
            .click()
        cy.get(".contentpanel")
            .contains("Your enquiry has been successfully sent to the store owner!")
    });

})