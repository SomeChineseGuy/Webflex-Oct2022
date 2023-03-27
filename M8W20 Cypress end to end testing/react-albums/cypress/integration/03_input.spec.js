/* eslint-disable no-undef */
describe('test all features of the input', ()=> {
  before(() => {
    cy.visit('http://localhost:8002/');
  })

  beforeEach(() => {
    cy.get('.search__form input').as('inputField')
    cy.get('.search__form input').clear()
  })
  it('I can type something in the input and a result will show', () => {
    cy.get('@inputField').type('Daft Punk')
    
  })

  it('After typing daft punk I see a result for it ', () => {
    cy.get('@inputField').type('Daft Punk', {delay: 200})
    cy.get('.album__name').contains('Random Access Memories (10th Anniversary Edition)').should('exist')
  })

  it('can handle backspace', () => {
    cy.get('@inputField').type('Suuuu{backspace}{backspace}{backspace}m 44{backspace}1', {delay: 200})
    .should('have.value', 'Sum 41')
  })
})