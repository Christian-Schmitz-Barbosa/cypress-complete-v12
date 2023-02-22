import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import contactUs_PO from "../../page_objects/WebDriverUni/contactUs_PO";

const contactUs = new contactUs_PO()

When(`I type the first name {word} wdu`, (first_name) => {
    contactUs.type_First_Name(first_name);
})

When(`I type the last name {string} wdu`, (last_name) => {
    contactUs.type_Last_Name(last_name);
})

When(`I type the email adress {string} wdu`, (email) => {
    contactUs.type_Email(email);
})

When(`I type the message in the comment field {string} wdu`, (comment) => {
    contactUs.type_Comment(comment)
})
When(`I click on the submit button wdu`, () => {
    contactUs.submit()
})

Then(`It should be visible the message {string} wdu`, (message) => {
    contactUs.validate_test(message)
})