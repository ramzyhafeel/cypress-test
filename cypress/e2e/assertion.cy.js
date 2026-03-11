describe('Assertions Demo - Cypress Example Site', () => {
  it('should verify homepage content correctly', () => {
    cy.visit('https://example.cypress.io')

    // Assertion 1: URL check
    cy.url().should('include', 'example.cypress.io')

    // Assertion 2: Page content check
    cy.contains('Kitchen Sink').should('be.visible')

    // Assertion 3: Commands text check
    cy.contains('Commands').should('be.visible')
  })
})