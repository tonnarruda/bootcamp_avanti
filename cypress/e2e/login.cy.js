describe("Login Tests", () => {

  beforeEach("Login", () => {
    cy.visit("/login");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/login`);
  });

  it("CT012 - Tentativa de Login com sucesso", () => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.get(".swal2-popup").should("be.visible");
    cy.contains("Login realizado").should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it("CT013 - Tentativa de Login com email inválido", () => {
    cy.login("email", "P@ssw0rd!");
    cy.contains("E-mail inválido").should("be.visible");
  });

  it("CT014 - Tentativa de Login com senha inválida", () => {
    cy.login(Cypress.env('email'), "111!");
    cy.contains("Senha inválida.").should("be.visible");
  });
});
