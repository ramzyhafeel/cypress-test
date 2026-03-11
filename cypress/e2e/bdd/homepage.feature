Feature: Cypress Example Homepage

  Scenario: Verify homepage content
    Given I open the Cypress example homepage
    When I look at the main page
    Then I should see the text "Kitchen Sink"
    And I should see the text "Commands"