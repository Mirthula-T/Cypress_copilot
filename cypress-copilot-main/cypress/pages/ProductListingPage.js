// ProductListingPage.js
class ProductListingPage {
  visit() {
    cy.visit('/product-listing');
  }

  login() {
    cy.get('#login-button').click();
    cy.get('#username').type('user');
    cy.get('#password').type('password');
    cy.get('#submit-login').click();
  }

  selectProduct() {
    cy.get('.product-item').first().click();
  }

  clickAddToCart() {
    cy.get('#add-to-cart-button').click();
  }
}

export default ProductListingPage;