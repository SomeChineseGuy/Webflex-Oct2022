/* eslint-disable no-undef */
describe('all the checkbox features', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8002/');
  });
  it('I can uncheck the box explicit', () => {
    
    // cy.get('.filters__form').first().find('input').uncheck().should('not.be.checked')
    cy.get('#Explicit').uncheck().should('not.be.checked')
  })

  it('I can check the single box', () => {
    cy.get('#Single').check().should('be.checked') 
  })
})