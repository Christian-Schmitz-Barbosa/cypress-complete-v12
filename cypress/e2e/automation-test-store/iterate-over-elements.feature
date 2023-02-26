Feature: Interate over elements

    Background: Pre Condition
        Given I navigate to the automation test store home page
        When Redirect to the clicked link 'Hair Care'

    Scenario: Validate the information in the hair care products
        And Log Description of all hair care products
        And Log information of all hair care products
        And Add specific product to basket

