Feature: Login
  Background:
    Given I am on the homepage
    When I click the signin link

  Scenario Outline: : Validate error messages for each invalid login scenario

    #Given I am on the landing page
    #And I click sign in
    When  I enter my "<username>"
    And I type my "<password>"
    When I press the login button
    Then I should get the correct "<errorMessage>"


   Examples:
      |username                               |password                                |errorMessage                                                                                                |
      |davidzoe@gmail.com                     |Testing123                              |The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later. |
      |davidzoe@gmail.com                     |Testing123!                             |The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later. |
      |                                       |Testing123!                             |This is a required field.                                                                                   |
      |davidzoe@gmail.com                     |                                        |This is a required field.                                                                                   |