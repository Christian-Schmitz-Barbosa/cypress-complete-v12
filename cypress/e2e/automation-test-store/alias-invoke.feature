Feature: Exemple of alias and invoke functions

    Background: Pre Condition
        Given I navigate to the automation test store home page

    Scenario: Validate a specific hari care product
        When Redirect to the clicked link 'Hair Care'
        And Store the first product
        Then Validate the length of the product name
        And Validate the Name of the product


    Scenario: Validate the products in the home page
        When Select all the elements which have a product
        Then Validate the quantity of the selected products
        And The Selected Elements will contain the title property

    Scenario:Calculate total of normal and sale products
        When Select all the elements which have a product
        And Select all products prices