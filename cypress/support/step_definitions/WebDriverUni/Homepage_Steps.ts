import { When, Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`I navigate to the Web Driver Univesity Home page`, () => {
    cy.visit("http://www.webdriveruniversity.com/")
})
When(`I Click on the contact us button wdu`, () => {
    cy.get("#contact-us")
        .invoke("removeAttr", "target")
        .click()
})