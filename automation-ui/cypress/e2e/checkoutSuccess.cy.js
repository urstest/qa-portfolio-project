import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";

describe("Checkout Success Test", () => {
  it("should complete order successfully", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    cartPage.addProduct("Sauce Labs Backpack");
    cartPage.openCart();

    checkoutPage.clickCheckout();
    checkoutPage.fillForm("Anna", "Test", "12345");
    checkoutPage.continueCheckout();
    checkoutPage.finishCheckout();

    cy.contains("Thank you for your order");
  });
});
