export default class Homepage_PO {
    NavigateAts(link: string) {
        cy.log("teste")

        if (link === "Contact Us") {
            cy.get(".info_links_footer")
                .contains("Contact Us")
                .invoke("removeAttr", "target")
                .click()
        } else if (link === "first_item") {
            cy.get(".fixed_wrapper")
                .find(".prdocutname")
                .eq(0)
                .click();
        }
    }
}