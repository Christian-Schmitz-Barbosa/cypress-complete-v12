"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class contactUs_PO {
    constructor() {
        this.elements = {
            first_name: "input[name='first_name']",
            last_name: "input[name='last_name']",
            email: "input[name='email']",
            comment: "textarea",
            submit: "input[value=SUBMIT]",
            success_message: "Thank You for your Message!"
        };
    }
    type_First_Name(first_name) {
        cy.get(this.elements.first_name).type(first_name);
    }
    type_Last_Name(last_name) {
        cy.get(this.elements.last_name).type(last_name);
    }
    type_Email(email) {
        cy.get(this.elements.email).type(email);
    }
    type_Comment(comment) {
        cy.get(this.elements.comment).type(comment);
    }
    submit() {
        cy.get(this.elements.submit).click();
    }
    validate_test(message) {
        if (message == this.elements.success_message) {
            return true;
        }
        else {
            cy.get("body").should("contain", message);
        }
    }
}
exports.default = contactUs_PO;
