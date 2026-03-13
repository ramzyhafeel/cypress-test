describe('Assertions Demo - Cypress Example Site', () => {
  it('should verify homepage content correctly', () => {
    cy.visit('https://example.cypress.io')

    // Assertion 1: URL check
    cy.url("https://example.cypress.io").should('include', 'example.cypress.io')

    // Assertion 2: Page content check
    cy.contains('h1', 'Kitchen Sink').should('be.visible')

    // Verifies the dropdown link exists and is visible
    cy.get('a.dropdown-toggle').should('be.visible').and('contain', 'Commands');
  })
})