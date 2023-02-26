import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`Verify if the Header is correct {string}`, (name) => {
    cy.get('h1 .maintext').should("have.text", name)
})