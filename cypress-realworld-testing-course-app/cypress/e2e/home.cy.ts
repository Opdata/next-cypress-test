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

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click() // data-set이 course-0인 요소에 접근하고 a element를 찾고 3번째 요소에 접근하고 클릭
      cy.location("pathname").should("eq", "/testing-your-first-application") // 경로가 /testing-your ... 이랑 같은지 확인
    })
  })

  context("Courses section", () => {
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click() // data-set이 course-0인 요소에 접근하고 a element를 찾고 3번째 요소에 접근하고 클릭
      cy.location("pathname").should("eq", "/testing-foundations") // 경로가 /testing ... 이랑 같은지 확인
    })
  })

  context("Courses section", () => {
    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click() // data-set이 course-0인 요소에 접근하고 a element를 찾고 3번째 요소에 접근하고 클릭
      cy.location("pathname").should("eq", "/cypress-fundamentals") // 경로가 /cypress ... 이랑 같은지 확인
    })
  })
})

export {}
