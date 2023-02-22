import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import contactUs_PO from "../../page_objects/automation-test-store/contactUs_PO"

const contactUs = new contactUs_PO()


When(`Verify if the title is correct`, () => {
    cy.title().should('eq', 'Contact Us')
})
When(`verify if the web page is char=utf8 ats`, () => {
    cy.document().should('have.attr', 'charset').and("eq", "UTF-8")
})
When(`Verify if the url is correct`, () => {
    cy.url().should('include', 'index.php?rt=content/contact')
})
When(`I type the first name {word} ats`, (first_name) => {
    contactUs.type_First_Name(first_name)
})
When(`I type the email {string} ats`, (email) => {
    contactUs.type_Email(email)
})

When(`I type the Enquiry {string} ats`, (message) => {
    contactUs.type_Comment(message)
})

When(`I click the submit button ats`, () => {
    contactUs.submit()
})
Then(`I see this tree messages {string} {string} {string} ats`, (name, email, enquiry) => {
    cy.contains(name).should("be.visible").and("have.text", name)
    cy.contains(email).should("be.visible").and("have.text", email)
    cy.contains(enquiry).should("be.visible").and("have.text", enquiry)
})
Then(`I see the Message {string} ats`, (message) => {
    const final_message = cy.contains(message).should("be.visible")
    if (message === "Name must be between 3 and 32 characters!") {
        final_message.and("have.text", " " + message)
    } else {
        final_message.and("have.text", message)
    }
})