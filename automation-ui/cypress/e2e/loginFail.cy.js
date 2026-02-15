import loginPage from "../pages/loginPage";

describe("Login Fail Test", () => {
  it("should not login with invalid password", () => {
    loginPage.visit();
    loginPage.login("standard_user", "wrong_password");

    cy.contains("Epic sadface");
    cy.url().should("include", "saucedemo");
  });
});
