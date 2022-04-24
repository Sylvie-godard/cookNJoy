/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3003/')
  })

  it('cy.navigation() - get navigation', () => {
    cy.location('pathname').should('include', 'navigation')
  })

  beforeEach(() => {
    cy.visit('http://localhost:3003/api/recipes/list')
  })
})
