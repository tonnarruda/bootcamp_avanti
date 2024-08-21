Cypress.Commands.add('clickHome', () =>{
    cy.contains('Aproveitar...').click();
});

Cypress.Commands.add('MouseOver', ()=>{
    cy.get('.hover-image').eq(1).trigger('mouseover',{force: true}) 
});

Cypress.Commands.add('AddToCart',()=>{
    cy.get('.add-to-cart').first().click({force: true})
});

Cypress.Commands.add('ValidateMsg',()=>{
    cy.contains('Success!').should('be.visible')
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
});

Cypress.Commands.add('Detalhamento',()=>{
    cy.get('.hover-image').eq(1).trigger('mouseover',{force: true});
    cy.get('a[title="Quick view"]').eq(0).should('have.class', 'action').and('have.class', 'quickview').click({force: true});
    cy.contains('Add To Cart').click();
});

Cypress.Commands.add('ValidacaoProdutos', () => {
    cy.get('td.product_total')
    .then(($tds) =>{
        const values=[]
        Cypress._.each($tds, (td)=>{
            const text = Cypress.$(td).text().trim(); // Obtém o texto e remove espaços em branco
            const numericValue = parseFloat(text.replace('$', '').replace(',', '')); 
            values.push(numericValue);
        })
        const sum = values.reduce((acc, value) => acc + value, 0);
        cy.log(`A soma dos valores é: ${sum}`);
    });
});