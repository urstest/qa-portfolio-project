import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage";

describe("Cart Remove Test", () => {
  it("removes product from cart", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    cartPage.addProduct("Sauce Labs Backpack");
    cartPage.openCart();
    cartPage.removeProduct("Sauce Labs Backpack");
    cartPage.verifyProductNotInCart("Sauce Labs Backpack");
  });
});
