import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";

describe("Checkout Validation Test", () => {
  it("should show error when form is empty", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    cartPage.addProduct("Sauce Labs Backpack");
    cartPage.openCart();

    checkoutPage.clickCheckout();
    checkoutPage.continueCheckout();

    cy.contains("Error");
  });
});
