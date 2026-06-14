Feature: Free CRM Company Flow

  Scenario: End to End Company Management
    Given user navigates to Free CRM application
    When user logs into the application
    And user navigates to companies page
    And user creates a company
    Then user verifies the company by searching
    And user edits the company details
    And user deletes the company
