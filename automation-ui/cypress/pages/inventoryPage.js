class InventoryPage {
  sortDropdown() {
    return cy.get('[data-test="product-sort-container"]');
  }

  sortBy(option) {
    this.sortDropdown().select(option);
  }

  verifyFirstProduct(expectedName) {
    cy.get(".inventory_item_name").first().should("contain.text", expectedName);
  }
}

export default new InventoryPage();
