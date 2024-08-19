describe("Signup Test", () => {
  it("Signs up successfully", () => {
    cy.intercept("POST", "/api/auth/signup").as("signupRequest");

    cy.visit("/signup");

    cy.url().should("include", "/signup");

    cy.get('[data-test-id="email-input"]').type("test7@gmail.com");

    cy.get('[data-test-id="password-input"]').type("test1111");

    cy.get('[data-test-id="signup-button"]').click();

    cy.wait("@signupRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
    });
  });

  it("Signs up fails with status code 409", () => {
    cy.intercept("POST", "/api/auth/signup").as("signupRequest");

    cy.visit("/signup");

    cy.url().should("include", "/signup");

    cy.get('[data-test-id="email-input"]').type("test@gmail.com");

    cy.get('[data-test-id="password-input"]').type("test1111");

    cy.get('[data-test-id="signup-button"]').click();

    cy.wait("@signupRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(409);
    });
  });

  it("Signs up fails with status code 400", () => {
    cy.intercept("POST", "/api/auth/signup").as("signupRequest");

    cy.visit("/signup");

    cy.url().should("include", "/signup");

    cy.get('[data-test-id="signup-button"]').click();

    cy.wait("@signupRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(400);
    });
  });
});
