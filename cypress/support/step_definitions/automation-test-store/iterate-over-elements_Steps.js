import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`Log Description of all hair care products`, () => {
    cy.get("div .thumbnails.list.row").each(($product) => {
        cy.wrap($product).find(".productdiscrption").find("p").each(($product_description) => {
            cy.log($product_description.text());
        })
    })
})
When(`Log information of all hair care products`, () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, i) => {
        cy.log("Index: " + (i + 1) + " |---| Product Name: " + $el.text());
    })
})
When(`Add specific product to basket`, () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, i) => {
        if ($el.text().includes("Shopping Cart")) {
            cy.wrap($el).click()
            cy.get(".cart").click();
        }
    })
})

