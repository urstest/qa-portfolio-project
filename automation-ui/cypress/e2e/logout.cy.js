import loginPage from "../pages/loginPage";
import menuPage from "../pages/menuPage";

describe("Logout Test", () => {
  it("should logout successfully", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    menuPage.logout();

    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
