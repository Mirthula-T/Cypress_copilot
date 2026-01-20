import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductListingPage from '../pages/ProductListingPage';
import CartPage from '../pages/CartPage';

const productListingPage = new ProductListingPage();
const cartPage = new CartPage();

Given('I am on the product page', () => {
  productListingPage.visit();
});

When('I click the add to cart button for {string}', (productName) => {
  cy.contains(productName).parent().find('#add-to-cart-button').click();
});

Then('I should see {int} items in the cart', (count) => {
  cy.get('#cart-items').should('contain', `${count} item`);
});

When('I open the cart', () => {
  cy.get('#cart-icon').click();
});

Given('I have added {int} items to my cart', (count) => {
  productListingPage.visit();
  for (let i = 0; i < count; i++) {
    cy.contains(`Product ${String.fromCharCode(65 + i)}`).parent().find('#add-to-cart-button').click();
  }
});

When('I remove {string} from the cart', (productName) => {
  cy.contains(productName).parent().find('#remove-item').click();
});

Then('I should not see {string} in the cart', (productName) => {
  cy.get('#cart-items').should('not.contain', productName);
});

And('I should see {string} in the cart', (productName) => {
  cy.get('#cart-items').should('contain', productName);
});

When('I update the quantity of {string} to {int}', (productName, quantity) => {
  cy.contains(productName).parent().find('#quantity-input').clear().type(quantity);
});

Then('the total price should be {string}', (price) => {
  cy.get('#total-price').should('contain', price);
});

When('I proceed to checkout', () => {
  cy.get('#checkout-button').click();
});

Then('I should be redirected to the checkout page', () => {
  cy.url().should('include', '/checkout');
});

Then('I should see an empty cart message', () => {
  cy.get('#empty-cart-message').should('be.visible');
});