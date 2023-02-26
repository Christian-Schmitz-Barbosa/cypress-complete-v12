Feature: Variables and Cy Commands

    Background: Pre Conditions
        Given I navigate to the automation test store home page

    Scenario Outline:Verifying variables, cypress commands and jquery commands
        When Redirect to the clicked link "<name>"
        And Verify if the Header is correct '<name>'
        Examples:
            | name     |
            | Makeup   |
            | Skincare |