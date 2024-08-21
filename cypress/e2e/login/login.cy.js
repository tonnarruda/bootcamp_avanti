import '../../page/loginPage/loginPage'
import '../../page/dashboardPage/dashboardPage'

const emailInvalid = "E-mail inválido.";
const passwordInvalid = "Senha inválida.";

describe("Login Tests", () => {

  beforeEach("Login", () => {
    cy.visit("/login");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/login`);
  });

  it("CT012 - Login com sucesso", () => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.clickLogin();

    cy.validateLogin()
  });

  it("CT013 - Login com email inválido", () => {
    cy.login("email", Cypress.env('password'));
    cy.clickLogin();

    cy.validateMsgError(emailInvalid);
  });

  it("CT014 - Login com senha inválida", () => {
    cy.login(Cypress.env('email'), "111!");
    cy.clickLogin();

    cy.validateMsgError(passwordInvalid);
  });

  it("CT015 - Login com e-mail vazio", () => {
    cy.login(null, Cypress.env('password'));
    cy.clickLogin();

    cy.validateMsgError(emailInvalid);
  });

  it("CT016 - Login com senha vazia", () => {
    cy.login(Cypress.env('email'), null);
    cy.clickLogin();

    cy.validateMsgError(passwordInvalid);
  });

  it("CT017 - Login com e-mail e senha vazios", () => {
    cy.login(null, null);
    cy.clickLogin();

    cy.validateMsgError(emailInvalid);
    cy.validateMsgError(passwordInvalid);
  });

  it("CT018 - Validar checkbox Lembrar de mim", () => {
    cy.clickCheckbox();

    cy.get('#materialUnchecked').should('be.checked');
  });

  it("CT019 - Validar o link Ainda não tem conta", () => {
    cy.clickLink();

    cy.contains("Cadastro de usuário").should("be.visible");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });
});