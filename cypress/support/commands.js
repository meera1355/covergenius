// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

//Using javascript date constructor to set future date
const fromDate = new Date()
fromDate.setDate(new Date().getDate() + 5)
const fromDateValue = fromDate.toLocaleDateString('en-GB').replace(/ /g, ' ')
const toDate = new Date()
toDate.setDate(new Date().getDate() + 10)
const toDateValue = fromDate.toLocaleDateString('en-GB').replace(/ /g, ' ')

Cypress.Commands.add('enterQuoteDetails', () => {

  cy.fixture('getquotedata').then(function (data) {
    //Select Country
    cy.get('.QuoteForm-destination-select.Field-input').scrollIntoView().type(data.country)

    //Select From/To dates
    cy.setNewDate(fromDateValue)
    cy.setNewDate(toDateValue)


    //Select Country of Residence
    cy.get('.QuoteForm-country .QuoteForm-optionalField-change').click()
    cy.get('#QuoteForm-country-field input').type(data.countryOfResidence).click()

    //Select Car/vehicle type
    cy.get('.QuoteForm-vehicleType .QuoteForm-optionalField-change').click()

  })


})

Cypress.Commands.add('setNewDate', (value) => {
  //Select From/To dates
  cy.get('#QuoteForm_FromDate-datepicker').click()
  cy.get("#QuoteForm_FromDate-datepicker").invoke("val", value)


})
