/* eslint-disable no-undef */
// eslintでcyにエラーが出るけど無視していいの？
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("入力フォームのバリデーション", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("メールアドレスの入力フォームにエラーがある場合、エラーメッセージが表示される", () => {
    cy.get('input[name="email"]')
      .type("invalid-email")
      .should("have.value", "invalid-email")
      .get(".error-message")
      .should("be.visible")
      .and("contain", "メールアドレスの形式が正しくありません");
  });

  it("メールアドレスの入力フォームに正しい値を入力した場合、エラーメッセージは表示されない", () => {
    cy.get('input[name="email"]')
      .type("valid@example.com")
      .should("have.value", "valid@example.com")
      .get(".error-message")
      .should("not.be.visible");
  });
});
