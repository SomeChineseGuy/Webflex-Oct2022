/* eslint-disable no-undef */
describe('make sure all the checkboxes work and they show data', () => {
  before(() => {
    cy.visit('/');
  })
  beforeEach(() => {
    cy.get('.filters__form').find('input').uncheck().should('not.be.checked')
    cy.get('.search__form input').as('inputField')
    cy.get('@inputField').clear()
  })
  it('uncheck all the boxes beside explicit', () => {
    // cy.get('#Explicit').check();
    // cy.get('@inputField').type('blink 182')
    // cy.get('.ablum').should('not.exist')
    cy.checkBoxValue('#Explicit', 'blink 182')
    cy.checkBoxValue('#1900s', 'blink 182', 'Enema of the State')
    cy.checkBoxValue('#2000s', 'blink 182', 'Neighborhoods (Deluxe)')
    cy.checkBoxValue('#1900s', 'blink 182')
    cy.checkBoxValue('#1900s', 'blink 182')
  })
  // it('uncheck all boxes and check 1900s', () => {
  //   cy.checkBoxValue('#1900s', 'blink 182', 'Enema of the State')
  // })
})