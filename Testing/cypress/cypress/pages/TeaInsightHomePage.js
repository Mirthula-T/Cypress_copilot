

class TeaInsightHomePage {
  visit() {
    cy.visit('/');
  }

  getTeaCard(teaName) {
    // Looking for div with class "col-lg-3" that contains the tea name in an h3 tag
    return cy.contains('.col-lg-3', teaName);
  }

  clickTeaCard(teaName) {
    // First find the tea card, then find the "View" button within it and click
    this.getTeaCard(teaName).find('button').contains('View').click();
  }
}

export default TeaInsightHomePage;