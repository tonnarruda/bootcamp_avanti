Cypress.Commands.add('login', (email, senha) =>{
    if (email !== null) {
        cy.get('input[id = "user"]')
            .should('be.visible')
            .type(email, {log: false})
        }
        if (senha !== null) {
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(senha, {log: false})
        }
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