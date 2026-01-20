// ProfilePage.js
class ProfilePage {
  visit() {
    cy.visit('/profile');
  }

  updateProfileInformation({ firstName, lastName, email }) {
    cy.get('#firstName').clear().type(firstName);
    cy.get('#lastName').clear().type(lastName);
    cy.get('#email').clear().type(email);
  }

  clickButton(buttonText) {
    cy.contains('button', buttonText).click();
  }

  verifyProfileDetails({ firstName, lastName, email }) {
    cy.get('#firstName').should('have.value', firstName);
    cy.get('#lastName').should('have.value', lastName);
    cy.get('#email').should('have.value', email);
  }

  verifyConfirmationMessage(expectedMessage) {
    cy.get('.confirmation-message').should('contain.text', expectedMessage);
  }
}

 