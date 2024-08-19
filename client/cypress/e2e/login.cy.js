describe("Login Test", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("Logs in successfully", () => {
    cy.intercept("POST", "/api/auth/login").as("loginRequest");

    cy.visit("/login");

    cy.url().should("include", "/login");

    cy.get('[data-test-id="email-input"]').type("test@gmail.com");

    cy.get('[data-test-id="password-input"]').type("test1111");

    cy.get('[data-test-id="login-button"]').click();

    cy.getCookie('accessToken')
    cy.getCookie("refreshToken")

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Logs in fails due to incorrect credentials with a 400 error", () => {
    cy.intercept("POST", "/api/auth/login").as("loginRequest");

    cy.visit("/login");

    cy.url().should("include", "/login");

    cy.get('[data-test-id="email-input"]').type("test@gmail.com");

    cy.get('[data-test-id="password-input"]').type("test1112345");

    cy.get('[data-test-id="login-button"]').click();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(401);
    });
  });

  it("Logs in fails due to incorrect formatting with a 400 error", () => {
    cy.intercept("POST", "/api/auth/login").as("loginRequest");

    cy.visit("/login");

    cy.url().should("include", "/login");

    cy.get('[data-test-id="login-button"]').click();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(400);
    });
  });

});
