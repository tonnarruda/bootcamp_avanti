Cypress.Commands.add('validateLogin', (email) =>{
    cy.get(".swal2-popup").should("be.visible");
    cy.contains("Login realizado").should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
})

Cypress.Commands.add('acessmenu', (email) =>{
    cy.get('button[class="swal2-confirm swal2-styled"]').click({force: true})
    cy.get('a[class="offcanvas-toggle offside-menu"]').click({force: true})
    cy.get('#menupagesText').click()
    cy.get('#aboutPage').click()

})

