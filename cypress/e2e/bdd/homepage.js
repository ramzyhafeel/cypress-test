import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("I open the Cypress example homepage", () => {
  cy.visit("https://example.cypress.io")
})

When("I look at the main page", () => {
  cy.url().should("include", "example.cypress.io")
})

Then("I should see the text {string}", (text) => {
  cy.contains(text).should("be.visible")
})