export default class Homepage_PO {
    NavigateAts(link: string) {
        console.log(link);

        switch (link) {
            case "Contact Us":
                cy.get(".info_links_footer")
                    .contains("Contact Us")
                    .invoke("removeAttr", "target")
                    .click()
                    .then((linkName) => {
                        console.log("O nome da pagina que foi clicada foi: " + linkName.text());
                    })
                break;
            case "first_item":
                cy.get(".fixed_wrapper")
                    .find(".prdocutname")
                    .eq(0)
                    .click();
                break;
            case "Makeup":
            case "Skincare":
            case "Hair Care":
                let path = "https://automationteststore.com/index.php?rt=product/category&path="
                if (link == "Makeup") path += "36"
                else if (link === "Skincare") path += "43"
                else if (link === "Hair Care") path += "52"

                cy.get(`a[href='${path}']`).click()
                break;

            default:
                cy.log("Não foi possivel encontrar o link: " + link);
                break;
        }
    }
}