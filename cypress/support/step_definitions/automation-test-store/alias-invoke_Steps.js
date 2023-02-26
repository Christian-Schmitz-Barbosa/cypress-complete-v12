import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
// Methods used two or more times
When("Select all the elements which have a product", () => {
    cy.get(".thumbnail").as("homePageProducts")
})

// Validate a specific hari care product
When("Store the first product", () => {
    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail")
})
Then("Validate the length of the product name", () => {
    cy.get("@productThumbnail").its("length").should("be.gt", 5)
})

Then("Validate the Name of the product", () => {
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner")
})

// Validate the products in the home page
Then("Validate the quantity of the selected products", () => {
    cy.log(cy.get("@homePageProducts"))
    cy.get("@homePageProducts").should("have.length", 16)
})
Then("The Selected Elements will contain the title property", () => {
    cy.get("@homePageProducts").find(".productcart").invoke("attr", "title").should("include", "Add to Cart")
})

//Calculate total of normal and sale products
When("Select all products prices", () => {
    cy.get("@homePageProducts").find(".oneprice").invoke("text").as("itemNonSalePrice")
    cy.get("@homePageProducts").find(".pricenew").invoke("text").as("itemSalePrice")
    var total = 0
    cy.get("@itemNonSalePrice").then(($itemText) => {
        var itemPrice = $itemText.split("$")
        var totalNonSaleProductsPrice = itemPrice.reduce((acumulador, atual) => Number(atual) + Number(acumulador))
        cy.log("Total non sale price: " + totalNonSaleProductsPrice)

        total += totalNonSaleProductsPrice
    })
    cy.get("@itemSalePrice").then(($itemText) => {
        var itemPrice = $itemText.split("$")
        var totalSaleProductsPrice = itemPrice.reduce((acumulador, atual) => Number(acumulador) + Number(atual))
        cy.log("Total sale price: " + totalSaleProductsPrice)

        total += totalSaleProductsPrice
    })
        .then(() => {
            cy.log("Total: " + total)
            expect(total).to.equal(669)
        })
})
