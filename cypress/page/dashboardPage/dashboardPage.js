Cypress.Commands.add('validateLogin', () =>{
    cy.get(".swal2-popup").should("be.visible");
    cy.contains("Login realizado").should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
})

Cypress.Commands.add('accessMenu', (el) =>{
    cy.get('button[class="swal2-confirm swal2-styled"]').click({force: true})
    cy.get('a[class="offcanvas-toggle offside-menu"]').click({force: true})
    cy.get('#menupagesText').click()
    cy.get(el).click()
})

Cypress.Commands.add('validateMenuAbout', (msg) =>{
    cy.get('h2').should("be.visible").and('have.text', msg)
})

Cypress.Commands.add('validateMenuDashboard', (msg1, msg2, msg3) =>{
    cy.get('h4').eq(2).should("be.visible").and('have.text', msg1)
    cy.get('h4').eq(3).should("be.visible").and('have.text', msg2)
    cy.get('h4').eq(4).should("be.visible").and('have.text', msg3)
})

Cypress.Commands.add('validateMenuPrivacyPolicy', (msg) =>{
    cy.get('h3').eq(0).should("be.visible").and('have.text', "Get In Touch")
})