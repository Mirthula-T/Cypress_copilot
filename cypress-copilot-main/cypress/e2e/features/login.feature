Feature: User Login
  As a registered user
  I want to log into the application
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    Given I am a registered user with username "testuser" and password "password123"
    When I enter username "testuser" and password "password123"
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Unsuccessful login with invalid credentials
    When I enter username "invaliduser" and password "wrongpassword"
    And I click the login button
    Then I should see an error message "Invalid username or password"
    And I should remain on the login page

  Scenario: Navigate to registration page
    When I navigate to the registration page
    Then I should be redirected to the registration page