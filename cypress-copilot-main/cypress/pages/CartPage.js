// CartPage.js
class CartPage {
  verifyProductAdded() {
    cy.get('#cart-items').should('contain', '1 item');
  }

  verifyCartCountIncreased() {
    cy.get('#cart-count').invoke('text').then((text) => {
      const count = parseInt(text);
      expect(count).to.equal(1);
    });
  }
}

export default CartPage;