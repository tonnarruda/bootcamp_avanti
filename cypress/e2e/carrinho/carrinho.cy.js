import '../../page/loginPage/loginPage'
import '../../page/CarrinhoPage/Carrinho.Page'
import '../../page/dashboardPage/dashboardPage'

describe("Carrinho de compras test", () => {
    beforeEach("Login", () => {
      cy.visit("/login");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/login`);
      cy.login(Cypress.env('email'), Cypress.env('password'))
      cy.clickLogin()
      cy.validateLogin()
      cy.clickHome()
    });

    it('CT030 - Adicionando produtos no carrinho', () => {
        cy.MouseOver()
        cy.AddToCart()
        cy.ValidateMsg()
    }); 

    it('CT031 - Adicionando produtos no carrinho e checando valores', () => {
      cy.MouseOver()
      cy.Validate()
    });

    it('CT032-Retirando produtos no carrinho', () => {
      cy.ClickCarrinho()
      cy.RetirandoCarrinho()
    });

    it('CT033- Adicionando produtos no carrinho, após detalhamento do produto.', () => {
        cy.MouseOver()
        cy.Detalhamento()
        cy.ValidateMsg()
    });
});