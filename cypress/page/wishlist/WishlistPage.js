Cypress.Commands.add('AddingProductsToWishlist',()=>{
    cy.get('a.action.wishlist').eq(0).click({force:true})
    cy.contains( 'Success');
});
Cypress.Commands.add('RemovingProductsFromWishlist',()=>{
    cy.get('i.fa.fa-heart').eq(0).click({ force: true });
    cy.get('i.fa.fa-trash').its('length').then((initialCount) => {
    cy.get('i.fa.fa-trash').eq(0).click({ force: true });
    cy.get('i.fa.fa-trash').should('have.length', initialCount - 1);
});

    
});