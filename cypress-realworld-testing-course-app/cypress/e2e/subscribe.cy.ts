describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()

    // cy.getByData("success-message") // 성공 메시지 요소 선택

    // cy.getByData("success-message").should("exist") // 성공 메시지 요소 선택 후 존재하는지 체크

    cy.getByData("success-message").should("exist").contains("tom@aol.com") // 성공 메시지 요소 선택 및 존재 체크 후 이메일 주소가 포함되어 있는지 확인
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist") // 성공메시지가 존재하지 않는지 확인
  })

  it("prevents email subscriptions of already registered users", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("Error: john@example.com")
  })
})

export {}
