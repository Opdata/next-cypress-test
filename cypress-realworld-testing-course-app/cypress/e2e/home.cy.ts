// describe("My First Test", () => {
//   it('finds the content "type"', () => {
//     cy.visit("https://example.cypress.io")

//     // cy.contains('type'); // 요소 찾기, 없는 요소찾을시 기본값 4초간 찾다가 오류 출력

//     cy.contains("type").click() // 요소 찾고, 클릭 / cypress에서 명령을 함께 연결하여 수행하는걸 chaining 이라고 한다.

//     // 여기서 type 클릭에 대한 페이지 이동이 있고, 이 페이지가 로드 단계에서 완료하지 않았다면 cypress는 테스트 종료 및 오류 표시
//     // 페이지 로드의 경우 기본값 60초의 이벤트 대기를 함

//     cy.url().should("include", "/commands/actions") // url이 맞는지 확인, baseURL 이 이미 설정되어있으니 그 이후 URL 입력

//     cy.get(".action-email").type("fake@email.com") // class가 action-email 인것을 찾아 fake@email.com 입력

//     cy.get(".action-email").should("have.value", "fake@email.com") // 값을 가졌는지 확인

//     /**
//      * 클래스 이름으로 요소를 선택하는 방식은 추천되는 방식은 아니다.
//      * 예제의 경우 외부사이트를 기준으로 하는 방식이므로 이 방법을 사용
//      */
//   })
// })

describe("home page", () => {
  beforeEach(() => {
    // 기존 cy.visit의 중복코드를 줄였다.
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct text", () => {
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress"
    ) // 기존 h1 선택방식에서 data-test 선택으로 방식 변경
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses") // dt요소 중 0번째 요소 액세스 후 4 courses 텍스트 포함 확인
  })
})

export {}
