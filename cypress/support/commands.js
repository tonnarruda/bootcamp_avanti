Cypress.Commands.add("login", (user, pass) => {
  if (user !== null) {
    cy.get('input[id = "user"]')
      .should("be.enabled")
      .and("be.visible")
      .clear()
      .type(user);
  }

  if (pass !== null) {
    cy.get('input[type="password"]')
      .should("be.enabled")
      .and("be.visible")
      .clear()
      .type(pass);
    }
    cy.get('button[id="btnLogin"]')
      .should("be.visible")
      .and("be.enabled")
      .click();
 
});

Cypress.Commands.add("cadastro", (name, email, pass) => {
  if (name !== null) {
    cy.get("#user").should("be.enabled").and("be.visible").clear().type(name);
  }

  if (email !== null) {
    cy.get("#email").should("be.enabled").and("be.visible").clear().type(email);
  }

  if (pass !== null) {
    cy.get("#password")
      .should("be.enabled")
      .and("be.visible")
      .clear()
      .type(pass);
  }
  
    cy.get('#btnRegister')
        .should('be.visible').and('be.enabled')
        .click();
});

Cypress.Commands.add("validaMsgErro", (msg) => {
  cy.get(".errorLabel")
    .should("be.visible")
    .and("have.text", msg);
})
