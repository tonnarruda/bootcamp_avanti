Cypress.Commands.add('clickHome', () =>{
    cy.contains('Aproveitar...').click();
});

Cypress.Commands.add('MouseOver', ()=>{
    cy.get('.hover-image').eq(1).trigger('mousever',{force: true}) 
});

Cypress.Commands.add('AddToCart',()=>{
    cy.get('.add-to-cart').first().click({force: true})
} );

Cypress.Commands.add('ValidateMsg',()=>{
    cy.contains('Success!')
});

Cypress.Commands.add('ClickCarrinho',()=>{
    cy.get('.offcanvas-toggle').eq(3).click({force: true})
});

Cypress.Commands.add('RetirandoCarrinho', ()=>{
    cy.get('.fa-trash').eq(0).click();
    cy.get('a.offcanvas-toggle span.item-count')
    .should('be.visible')
    .and(($span) => {
      expect(parseInt($span.text().trim())).to.be.greaterThan(0);
});

Cypress.Commands.add('Detalhamento',()=>{
    cy.get('.hover-image').eq(1).trigger('mousever',{force: true});
    cy.get('a[title="Quick view"]').eq(0).should('have.class', 'action').and('have.class', 'quickview').click({force: true})
    cy.contains('Add To Cart').click()
    });
});