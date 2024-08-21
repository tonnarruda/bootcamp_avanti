import '../../page/loginPage/loginPage'
import '../../page/dashboardPage/dashboardPage'

describe('Menu Tests', () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.clickLogin();
  }); 

  it("CT022 - Validar menu sobre nós", () => {
    cy.accessMenu('#aboutPage');
    cy.validateMenuAbout("Sobre a QAZANDO")
    cy.url().should("eq", `${Cypress.config("baseUrl")}/about`);
  });

  it("CT027 - Validar menu custumer dashboard", () => {
  cy.accessMenu('#dashPage');
  cy.validateMenuDashboard("Total Products", "Total Sales", "Order Pending");
  cy.url().should("eq", `${Cypress.config("baseUrl")}/vendor-dashboard`);
  });

  it("CT025 - Validar menu política de privacidade", () => {
  cy.accessMenu('#contact1Page');
  cy.validateMenuPrivacyPolicy("Get In Touch")
  cy.url().should("eq", `${Cypress.config("baseUrl")}/contact-two`);
  });
});