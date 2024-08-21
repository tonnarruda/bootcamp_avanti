import '../../page/dashboardPage/dashboardPage'
import '../../page/loginPage/loginPage'
import '../../page/wishlist/WishlistPage'
import '../../page/CarrinhoPage/Carrinho.Page'
describe('Testing Wishlist', () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.url().should("eq", `${Cypress.config("baseUrl")}/login`);
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.clickLogin()
        cy.validateLogin()
        cy.clickHome()
    });
    it('CT 034-Adding products to Wishlist', () => {
        cy.AddingProductsToWishlist()
    });
    it.only('CT- 35 Removing products from Wishlist', () => {
        cy.RemovingProductsFromWishlist()
    });
});