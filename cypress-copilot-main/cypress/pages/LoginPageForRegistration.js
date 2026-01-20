// LoginPage.js for registration tests
class LoginPage {
  constructor() {
    this.url = '/login';
    this.usernameInput = '#login-username';
    this.passwordInput = '#login-password';
    this.loginButton = '#login-submit';
    this.successIndicator = '.login-success';
  }

  visit() {
    cy.visit(this.url);
  }

  login(username, password) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }

  verifyLoginSuccess() {
    cy.get(this.successIndicator).should('be.visible');
  }
}

export default LoginPage;