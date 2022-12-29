/// <reference path="../global.d.ts" />
// @ts-nocheck
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

export {}
