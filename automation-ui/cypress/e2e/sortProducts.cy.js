import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/inventoryPage";

describe("Product Sorting Test", () => {
  it("sorts products by name A-Z", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");

    inventoryPage.sortBy("Name (A to Z)");
    inventoryPage.verifyFirstProduct("Sauce Labs Backpack");
  });
});
