Feature: User Registration
  As a new user
  I want to register for an account
  So that I can use the application

  Background:
    Given I am on the registration page

  Scenario: Successful registration with valid data
    When I fill in the registration form with:
      | firstName      | John             |
      | lastName       | Doe              |
      | email          | john.doe@example.com |
      | password       | password123      |
      | confirmPassword| password123      |
    And I click the register button
    Then I should be redirected to the login page
    And I should see a success message "Registration successful. Please log in."

  Scenario: Unsuccessful registration with mismatched passwords
    When I enter first name "Jane"
    And I enter last name "Smith"
    And I enter email "jane.smith@example.com"
    And I enter password "password123"
    And I confirm password "differentpassword"
    And I click the register button
    Then I should see an error message "Passwords do not match"
    And I should remain on the registration page

  Scenario: Unsuccessful registration with invalid email
    When I enter first name "Bob"
    And I enter last name "Johnson"
    And I enter email "invalid-email"
    And I enter password "password123"
    And I confirm password "password123"
    And I click the register button
    Then I should see an error message "Please enter a valid email address"
    And I should remain on the registration page

  Scenario: Navigate to login page
    When I navigate to the login page
    Then I should be redirected to the login page