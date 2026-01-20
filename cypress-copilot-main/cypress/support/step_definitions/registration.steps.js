import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPageForRegistration';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();

Given('I am on the registration page', () => {
  registrationPage.visit();
});

When('I fill in the registration form with:', (dataTable) => {
  const data = dataTable.rowsHash();
  registrationPage.enterFirstName(data.firstName);
  registrationPage.enterLastName(data.lastName);
  registrationPage.enterEmail(data.email);
  registrationPage.enterPassword(data.password);
  registrationPage.confirmPassword(data.confirmPassword);
});

When('I click the register button', () => {
  registrationPage.submit();
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/login');
});

Then('I should see a success message {string}', (message) => {
  cy.get('#success-message').should('contain', message);
});

When('I enter first name {string}', (firstName) => {
  registrationPage.enterFirstName(firstName);
});

When('I enter last name {string}', (lastName) => {
  registrationPage.enterLastName(lastName);
});

When('I enter email {string}', (email) => {
  registrationPage.enterEmail(email);
});

When('I enter password {string}', (password) => {
  registrationPage.enterPassword(password);
});

When('I confirm password {string}', (confirmPassword) => {
  registrationPage.confirmPassword(confirmPassword);
});

Then('I should see an error message {string}', (errorMessage) => {
  cy.get('#error-message').should('contain', errorMessage);
});

Then('I should remain on the registration page', () => {
  cy.url().should('include', '/register');
});

When('I navigate to the login page', () => {
  cy.get('#login-link').click();
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/login');
});