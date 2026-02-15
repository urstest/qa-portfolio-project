class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  usernameInput() {
    return cy.get("#user-name");
  }

  passwordInput() {
    return cy.get("#password");
  }

  loginButton() {
    return cy.get("#login-button");
  }

  enterUsername(username) {
    this.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    this.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.loginButton().click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
