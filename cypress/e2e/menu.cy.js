import '../page/loginPage/loginPage'

describe('Menu de Navegação', () => {
  beforeEach(() => {
    // Visita a página inicial do site antes de cada teste
    cy.visit("/login");
    cy.typeEmail(Cypress.env('email'));
    cy.typePassword(Cypress.env('password'));
    cy.clickLogin();
  }); 

  it("Sobre nós", () => {
    
    cy.get('h2').should("be.visible").and('have.text', "Sobre a QAZANDO")
    cy.url().should("eq", `${Cypress.config("baseUrl")}/about`);
});

it("Dashboard", () => {
  cy.get('button[class="swal2-confirm swal2-styled"]').click({force: true})
  cy.get('a[class="offcanvas-toggle offside-menu"]').click({force: true})
  cy.get('#menupagesText').click()
  cy.get('#dashPage').click()
  cy.get('h4').eq(2).should("be.visible").and('have.text', "Total Products")
  cy.get('h4').eq(3).should("be.visible").and('have.text', "Total Sales")
  cy.get('h4').eq(4).should("be.visible").and('have.text', "Order Pending")
  cy.url().should("eq", `${Cypress.config("baseUrl")}/vendor-dashboard`);
});

it("Políticas de privacidade", () => {
  cy.get('button[class="swal2-confirm swal2-styled"]').click({force: true})
  cy.get('a[class="offcanvas-toggle offside-menu"]').click({force: true})
  cy.get('#menupagesText').click()
  cy.get('#contact1Page').click()
  cy.get('h3').eq(0).should("be.visible").and('have.text', "Get In Touch")
  cy.url().should("eq", `${Cypress.config("baseUrl")}/contact-two`);
});
});