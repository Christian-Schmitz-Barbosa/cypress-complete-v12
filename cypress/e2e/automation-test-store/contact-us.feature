@Automation-test-Store
Feature: Automation Test Store
    # ats means automation test store, i forced to use this, because of the conflict in a steps files between the automation test store and the Web Driver Univesaty
    Background: Pre Conditions
        Given I navigate to the automation test store home page
        When Redirect to the clicked link 'Contact Us'

    Scenario Outline: Valid and Invalid Contact Us Form Submission
        And verify if the web page is char=utf8 ats
        And Verify if the title is correct
        And Verify if the url is correct
        And I type the first name <firstName> ats
        And I type the email '<emailAdress>' ats
        And I type the Enquiry '<Enquiry>' ats
        And I click the submit button ats
        Then I see the Message '<Message>' ats

        Examples:
            | firstName | emailAdress                    | Enquiry        | Message                                                     |
            | Christian | christian.schmitz1@hotmail.com | Mensagem teste | Your enquiry has been successfully sent to the store owner! |
            | d         | diennifer1hotmail.com          | a              | Name must be between 3 and 32 characters!                   |

    Scenario Outline: Just Click ont Submit Button Whitout type any form field
        And I click the submit button ats
        Then I see this tree messages '<message_name>' '<message_email>' '<message_enquiry>' ats

        Examples:
            | message_name                                                             | message_email                                                         | message_enquiry                                                             |
            | First name: is required field! Name must be between 3 and 32 characters! | Email: is required field! E-Mail Address does not appear to be valid! | Enquiry: is required field! Enquiry must be between 10 and 3000 characters! |