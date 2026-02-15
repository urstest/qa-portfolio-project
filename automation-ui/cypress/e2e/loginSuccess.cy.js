import loginPage from "../pages/loginPage";

describe("Login Success Test", () => {
  it("should login with valid credentials", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "inventory");
    cy.contains("Products");
  });
});
