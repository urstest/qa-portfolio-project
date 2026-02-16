class CartPage {
  cartButton() {
    return cy.get(".shopping_cart_link");
  }

  addProduct(productName) {
    cy.contains(productName).parent().parent().find("button").click();
  }

  removeProduct(productName) {
    cy.contains(productName).parent().parent().find("button").click();
  }

  openCart() {
    this.cartButton().click({ force: true });
  }

  verifyProductInCart(productName) {
    cy.get(".inventory_item_name").should("contain.text", productName);
  }

  verifyProductNotInCart(productName) {
    cy.get(".inventory_item_name").should("not.exist", productName);
  }
}

export default new CartPage();
