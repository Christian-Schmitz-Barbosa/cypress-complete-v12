export default class contactUs_PO {
    protected elements = {
        first_name: "input[name='first_name']",
        last_name: "input[name='last_name']",
        email: "input[name='email']",
        comment: "textarea",
        submit: "input[value=SUBMIT]",
        success_message: "Thank You for your Message!"
    }

    type_First_Name(first_name: string) {
        cy.get(this.elements.first_name).type(first_name);
    }
    type_Last_Name(last_name: string) {
        cy.get(this.elements.last_name).type(last_name);
    }
    type_Email(email: string) {
        cy.get(this.elements.email).type(email);
    }
    type_Comment(comment: string) {
        cy.get(this.elements.comment).type(comment);
    }

    submit() {
        cy.get(this.elements.submit).click();
    }

    validate_test(message: string) {
        if (message == this.elements.success_message) {
            return true
        } else {
            cy.get("body").should("contain", message);
        }
    }
}