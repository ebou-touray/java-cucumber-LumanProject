Feature:  Login

  Scenario: Verify that a valid use can login successfully
    Given I am on the home page
    When  I click on sign in
    And I enter username
    And I enter password
    When  I click the sign in button
    Then I should be successfully logged
