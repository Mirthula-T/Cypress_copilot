// LoginPage.js
class LoginPage {
  constructor() {
    this.url = '/login';
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.submitButton = '#submit';
  }

  visit() {
    cy.visit(this.url);
  }

  enterUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }
}

export default LoginPage;