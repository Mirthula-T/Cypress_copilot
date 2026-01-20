// RegistrationPage.js
class RegistrationPage {
  constructor() {
    this.url = '/register';
    this.usernameInput = '#username';
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.submitButton = '#submit';
    this.successMessage = '.success-message';
  }

  visit() {
    cy.visit(this.url);
  }

  enterUserDetails({ username, email, password }) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
  }

  submitForm() {
    cy.get(this.submitButton).click();
  }

  verifySuccessMessage(expectedMessage) {
    cy.get(this.successMessage).should('contain.text', expectedMessage);
  }
}

export default RegistrationPage;