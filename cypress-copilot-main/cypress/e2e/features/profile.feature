Feature: Profile Management
  As a logged-in user
  I want to manage my profile
  So that I can keep my information up to date

  Background:
    Given I am logged in as a user
    And I am on the profile page

  Scenario: Successfully update profile information
    When I open the profile menu
    And I click the edit profile button
    And I update my profile with first name "John", last name "Smith", and email "john.smith@example.com"
    Then I should see a success message "Profile updated successfully"
    And my profile should be updated with first name "John", last name "Smith", and email "john.smith@example.com"

  Scenario: Cancel profile update
    When I open the profile menu
    And I click the edit profile button
    And I enter first name "Jane" in the profile form
    And I click the cancel button
    Then I should remain on the profile page
    And my profile should not be updated with first name "Jane"

  Scenario: Update profile with invalid email
    When I open the profile menu
    And I click the edit profile button
    And I enter email "invalid-email" in the profile form
    And I click the save button
    Then I should see an error message "Please enter a valid email address"
    And I should remain on the profile page