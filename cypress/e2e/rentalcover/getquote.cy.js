
describe('Get Quote For Rental Cover', () => {
  before(() => {
    cy.visit('/')
  })

  it('Get An Instant Quote', () => {
    cy.intercept('POST', '/en/respondConsent/1/POPUP').as('popup')
    //Check to confirm url is loaded sucessfully
    cy.url().should('include', 'rentalcover.com/en/')

    //Accept the pop-up
    cy.wait('@popup')
    cy.get('.cky-notice-btn-wrapper .cky-btn.cky-btn-accept').click()

    //Enter Quote Details
    cy.enterQuoteDetails()

    //Get the Quote
    cy.get('.QuoteForm-submit .btn-text').contains('Get Your Instant Quote').click()

    //Assert url is displayed crrectly
    cy.url().should('include', 'en/payment')



  })


})
