Cypress.Commands.add('login', (user, pass) => {
    cy.get('input[id = "user"]')
        .should('be.enabled').and('be.visible')
        .clear().type(user)

    cy.get('input[type="password"]')
        .should('be.enabled').and('be.visible')
        .clear().type(pass)

        cy.get('button[id="btnLogin"]')
        .should('be.visible').and('be.enabled')
        .click();
})