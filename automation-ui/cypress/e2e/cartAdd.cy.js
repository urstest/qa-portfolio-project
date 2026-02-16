import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage";

describe("Cart Add Test", () => {
  it("adds product to cart", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    cartPage.addProduct("Sauce Labs Backpack");
    cartPage.openCart();
    cartPage.verifyProductInCart("Sauce Labs Backpack");
  });
});
