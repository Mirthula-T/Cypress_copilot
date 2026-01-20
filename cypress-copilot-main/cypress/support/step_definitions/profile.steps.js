// Import necessary libraries and page objects
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPageForProfile';
import ProfilePage from '../pages/ProfilePage';

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

Given('I am logged in as a user', () => {
  loginPage.visit();
  loginPage.login('username', 'password');
});

Given('I am on the profile page', () => {
  profilePage.visit();
});

When('I open the profile menu', () => {
  cy.get('#profile-menu').click();
});

When('I click the edit profile button', () => {
  cy.get('#edit-profile-button').click();
});

When('I update my profile with first name {string}, last name {string}, and email {string}', (firstName, lastName, email) => {
  profilePage.enterFirstName(firstName);
  profilePage.enterLastName(lastName);
  profilePage.enterEmail(email);
});

Then('I should see a success message {string}', (message) => {
  cy.get('#success-message').should('contain', message);
});

And('my profile should be updated with first name {string}, last name {string}, and email {string}', (firstName, lastName, email) => {
  cy.get('#first-name').should('contain', firstName);
  cy.get('#last-name').should('contain', lastName);
  cy.get('#email').should('contain', email);
});

When('I enter first name {string} in the profile form', (firstName) => {
  profilePage.enterFirstName(firstName);
});

When('I click the cancel button', () => {
  cy.get('#cancel-button').click();
});

Then('I should remain on the profile page', () => {
  cy.url().should('include', '/profile');
});

And('my profile should not be updated with first name {string}', (firstName) => {
  cy.get('#first-name').should('not.contain', firstName);
});

When('I enter email {string} in the profile form', () => {
  profilePage.enterEmail(email);
});

When('I click the save button', () => {
  cy.get('#save-button').click();
});

Then('I should see an error message {string}', (errorMessage) => {
  cy.get('#error-message').should('contain', errorMessage);
});

And('I should remain on the profile page', () => {
  cy.url().should('include', '/profile');
});