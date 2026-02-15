class MenuPage {
  menuButton() {
    return cy.get("#react-burger-menu-btn");
  }

  logoutLink() {
    return cy.get("#logout_sidebar_link");
  }

  logout() {
    this.menuButton().click();
    this.logoutLink().click();
  }
}

export default new MenuPage();
