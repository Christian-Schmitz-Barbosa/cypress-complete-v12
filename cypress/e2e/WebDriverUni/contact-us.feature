@Web-design-Unit
Feature: WebDriver University Contact Us
    # wdu means WebDriverUniversity, i forced to use this because of the conflict in a steps files between the automation test store and the Web Driver Univesity

    Background: Pre Configs
        Given I navigate to the Web Driver Univesity Home page
        When I Click on the contact us button wdu

    Scenario Outline: Validate Contact us Form
        And I type the first name <first_name> wdu
        And I type the last name '<last_name>' wdu
        And I type the email adress '<email>' wdu
        And I type the message in the comment field '<comment>' wdu
        And I click on the submit button wdu
        Then It should be visible the message '<message>' wdu

        Examples:
            | first_name | last_name | email              | comment              | message                     |
            | Ted        | Robb      | tedrob@gmail.com   | this site is a shit  | Thank You for your Message! |
            | Mona       | Lisa      | monalisa@gmail.com | this site is perfect | Thank You for your Message! |
            | Error      | Error     | Error              | Error                | Error                       |