describe('Mocking / Stubbing Demo - Cypress Example Site', () => {

  it('should intercept API request and verify mocked response', () => {

    cy.visit('https://example.cypress.io/commands/network-requests')

    cy.intercept('GET', '**/comments/1', {
      statusCode: 200,
      body: {
        postId: 1,
        id: 1,
        name: 'Stubbed Cypress User',
        email: 'stub@test.com',
        body: 'This response is mocked using cy.intercept()'
      }
    }).as('getComment')

    cy.contains('Get Comment').click()

    cy.wait('@getComment').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body.name).to.eq('Stubbed Cypress User')
      expect(interception.response.body.email).to.eq('stub@test.com')
    })

  })

})