"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class contactUs_PO {
    constructor() {
        this.elements = {
            first_name: "#ContactUsFrm_first_name",
            email: "#ContactUsFrm_email",
            comment: "#ContactUsFrm_enquiry",
            submit: "button[title=Submit]"
        };
    }
    type_First_Name(first_name) {
        cy.get(this.elements.first_name)
            .type(first_name);
    }
    type_Email(email) {
        cy.get(this.elements.email)
            .type(email);
    }
    type_Comment(comment) {
        cy.get(this.elements.comment)
            .type(comment);
    }
    submit() {
        cy.get(this.elements.submit)
            .click();
    }
}
exports.default = contactUs_PO;
