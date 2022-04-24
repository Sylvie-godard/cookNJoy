
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3003/')
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3003/')
      expect(location.host).to.eq('localhost:3003')
      expect(location.hostname).to.eq('localhost')
      expect(location.pathname).to.eq('/')
      expect(location.port).to.eq('3003')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    })
  })

  beforeEach(() => {
    cy.visit('http://localhost:3003/api/recipes/list')
  })
})
