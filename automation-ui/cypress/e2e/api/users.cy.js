describe("API GET User", () => {
  it("should return user data", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
      },
    );
  });

  it("should create new user", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "QA Test",
      body: "Automation",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("should delete user", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
      },
    );
  });

  it("should return 404 for invalid user", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/9999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
