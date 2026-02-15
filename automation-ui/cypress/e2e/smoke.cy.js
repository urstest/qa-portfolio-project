describe("SauceDemo Smoke Test", () => {
  it("opens login page", () => {
    cy.visit("https://www.saucedemo.com");
    cy.contains("Swag Labs");
  });
});
