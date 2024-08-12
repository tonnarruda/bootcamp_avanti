Cypress.Commands.add('typeEmail', (email) =>{
    cy.get('input[id = "user"]').type(email);
})

Cypress.Commands.add('typePassword', (password) =>{
    cy.get('input[type="password"]').type(password);
})

Cypress.Commands.add('clickLogin', () =>{
    cy.get('button[id="btnLogin"]').click();
})

Cypress.Commands.add('clickCheckbox', () => {
    cy.get('#materialUnchecked').check();
})

Cypress.Commands.add('validateMsgError', (msg) => {
    cy.get('.invalid_input').should("be.visible").and("have.text", msg);
})

Cypress.Commands.add('clickLink', () => {
    cy.get('#createAccount').click();
})