"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_cucumber_preprocessor_1 = require("@badeball/cypress-cucumber-preprocessor");
(0, cypress_cucumber_preprocessor_1.Given)(`I navigate to the Web Driver Univesity Home page`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
});
(0, cypress_cucumber_preprocessor_1.When)(`I Click on the contact us button wdu`, () => {
    cy.get("#contact-us")
        .invoke("removeAttr", "target")
        .click();
});
