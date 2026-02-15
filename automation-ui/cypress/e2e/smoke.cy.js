import loginPage from "../pages/loginPage";

describe("Login Test", () => {
  it("logs in successfully", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
  });
});
