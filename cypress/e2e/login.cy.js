describe("Login Tests", () => {

  beforeEach("", () => {
    cy.visit("/login");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/login`);
  });

  it("Tentativa de Login com sucesso", () => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.get(".swal2-popup").should("be.visible");
    cy.contains("Login realizado").should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it("Tentativa de Login sem sucesso", () => {
    cy.login("email", "P@ssw0rd!");
    cy.contains("E-mail inválido").should("be.visible");
  });
});
