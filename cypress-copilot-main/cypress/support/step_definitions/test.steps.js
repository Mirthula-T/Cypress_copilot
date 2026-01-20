import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the website', () => {
  cy.visit('https://example.com');
});

Then('I should see the page', () => {
  cy.contains('Example Domain').should('be.visible');
});