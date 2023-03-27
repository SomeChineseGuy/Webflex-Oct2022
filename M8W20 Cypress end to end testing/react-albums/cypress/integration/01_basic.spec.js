/* eslint-disable no-undef */
describe('going to the site', () => {
  it('can I go to the site?', () => {
    cy.visit('http://localhost:8002/')
  })
})