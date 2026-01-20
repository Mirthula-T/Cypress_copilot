// DashboardPage.js
class DashboardPage {
  constructor() {
    this.dashboardHeader = '#dashboard-header';
  }

  verifyIsDisplayed() {
    cy.get(this.dashboardHeader).should('be.visible');
  }
}

export default DashboardPage;