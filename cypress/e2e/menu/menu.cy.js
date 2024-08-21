import '../../page/loginPage/loginPage'
import '../../page/dashboardPage/dashboardPage'

describe('Menu de Navegação', () => {
  beforeEach(() => {
    // Visita a página inicial do site antes de cada teste
    cy.visit("/login");
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.clickLogin();
  }); 

  it("Sobre nós", () => {
    cy.accessMenu('#aboutPage');
    cy.validateMenuAbout("Sobre a QAZANDO")
    cy.url().should("eq", `${Cypress.config("baseUrl")}/about`);
});

it("Dashboard", () => {
  cy.accessMenu('#dashPage');
  cy.validateMenuDashboard("Total Products", "Total Sales", "Order Pending");
  cy.url().should("eq", `${Cypress.config("baseUrl")}/vendor-dashboard`);
});

it("Políticas de privacidade", () => {
  cy.accessMenu('#contact1Page');
  cy.validateMenuPrivacyPolicy("Get In Touch")
  cy.url().should("eq", `${Cypress.config("baseUrl")}/contact-two`);
});
});