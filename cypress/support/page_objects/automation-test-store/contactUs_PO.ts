export default class contactUs_PO {
    protected elements = {
        first_name: "#ContactUsFrm_first_name",
        email: "#ContactUsFrm_email",
        comment: "#ContactUsFrm_enquiry",
        submit: "button[title=Submit]"
    }

    type_First_Name(first_name: string) {
        cy.get(this.elements.first_name)
            .type(first_name);
    }
    type_Email(email: string) {
        cy.get(this.elements.email)
            .type(email);
    }
    type_Comment(comment: string) {
        cy.get(this.elements.comment)
            .type(comment);
    }
    submit() {
        cy.get(this.elements.submit)
            .click()
    }
}