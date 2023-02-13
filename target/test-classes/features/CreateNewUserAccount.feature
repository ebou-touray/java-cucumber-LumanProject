Feature: New User
  Background: Common Steps
    Given I am on the landing screen
    When I click on the create account link

  Scenario: Verify that new user can create account


    And I enter first name
    And I enter lastname
    And I sign up for news letter
    And I enter email
    And I enter new user password
    And I confirm password
    When I click the create aacount button
    Then my account should be created successfully


