describe('Fixtures and Hooks Demo - Cypress Example Site', () => {
  let testData

  before(() => {
    cy.fixture('siteData').then((data) => {
      testData = data
    })
  })

  beforeEach(() => {
    cy.visit(testData.url)
  })

  it('should verify main text using fixture data', () => {
    cy.contains(testData.mainText).should('be.visible')
  })

  it('should verify commands section using fixture data', () => {
    cy.contains(testData.sectionText).should('be.visible')
  })
})