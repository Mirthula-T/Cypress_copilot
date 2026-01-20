Feature: View Tea Details
  As a tea enthusiast,
  I want to view detailed information about a tea
  So that I can learn about its origin, benefits, and purchase options.
  Scenario: User clicks on a tea card to view tea details
    Given the user is on the TeaInsight homepage
    When the user clicks on the tea card "Green Tea"
    Then the tea details modal should open
    And the modal should display the tea name "Green Tea"
    And the modal should show the origin and description for "Green Tea"
    And the modal should list the health benefits of "Green Tea"
    And the modal should show a "Buy on Amazon" button for "Green Tea"
