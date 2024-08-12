Cypress.Commands.add('typeName', (name) =>{
    cy.get('#user').type(name);
})

Cypress.Commands.add('typeEmail', (email) =>{
    cy.get('#email').type(email);
})

Cypress.Commands.add('typePassword', (password) =>{
    cy.get('#password').type(password);
})

Cypress.Commands.add('clickRegister', () =>{
    cy.get('#btnRegister').click();
})

Cypress.Commands.add("validateMsgError", (msg) => {
    cy.get(".errorLabel").should("be.visible").and("have.text", msg);
})