import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

Given('I am a registered user with username {string} and password {string}', (username, password) => {
  // This step would typically set up test data, but for now we'll just acknowledge it
  cy.log(`User ${username} with password ${password} is registered`);
});

When('I enter username {string} and password {string}', (username, password) => {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
});

When('I click the login button', () => {
  loginPage.submit();
});

Then('I should be redirected to the dashboard', () => {
  dashboardPage.verifyIsDisplayed();
});

Then('I should see an error message {string}', (errorMessage) => {
  cy.get('#error-message').should('contain', errorMessage);
});

Then('I should remain on the login page', () => {
  cy.url().should('include', '/login');
});

When('I navigate to the registration page', () => {
  cy.get('#register-link').click();
});

Then('I should be redirected to the registration page', () => {
  cy.url().should('include', '/register');
});