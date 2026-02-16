class CheckoutPage {
  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('[data-test="continue"]');
  }

  finishButton() {
    return cy.get('[data-test="finish"]');
  }

  clickCheckout() {
    this.checkoutButton().click();
  }

  fillForm(first, last, postal) {
    this.firstNameInput().clear().type(first);
    this.lastNameInput().clear().type(last);
    this.postalCodeInput().clear().type(postal);
  }

  continueCheckout() {
    this.continueButton().click();
  }

  finishCheckout() {
    this.finishButton().click();
  }
}

export default new CheckoutPage();
