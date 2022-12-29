/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *  Window object with additional properties used during test.
     */
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}
