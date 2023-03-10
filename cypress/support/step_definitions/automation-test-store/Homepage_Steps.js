import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../../page_objects/automation-test-store/Homepage_PO.js";

const homepage = new Homepage_PO();

Given(`I navigate to the automation test store home page`, () => {
    cy.visit("https://automationteststore.com/")
})
When(`Redirect to the clicked link {string}`, (link) => {
    homepage.NavigateAts(link);
})
When(`Promise Then example`, () => {
    cy.get(".prdocutname").contains("Skinsheen Brozer Stick").click().then((itemHeaderText) => {
        console.log("Selected the following item: " + itemHeaderText.text());
    })
})
