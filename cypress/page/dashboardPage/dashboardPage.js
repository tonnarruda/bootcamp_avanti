Cypress.Commands.add('validateLogin', (email) =>{
    cy.get(".swal2-popup").should("be.visible");
    cy.contains("Login realizado").should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
})