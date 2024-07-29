import {fakerPT_BR as faker} from '@faker-js/faker';

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password(6);
const passwordMsg = "O campo senha deve ter pelo menos 6 dígitos";

describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit("/register");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT009 - Tentativa de Cadastro com sucesso', () => {
    cy.cadastro(name, email, password);
    cy.get("#swal2-title").should("be.visible");
    cy.contains("Cadastro realizado!").should("be.visible");
    cy.contains(`Bem-vindo ${name}`).should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it('CT016 - Tentativa de Cadastro com senha com 5 caracteres', () => {
    cy.cadastro(name, email, "tes12");
    cy.validaMsgErro(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT017 - Tentativa de Cadastro com senha com 7 caracteres', () => {
    cy.cadastro(name, email, "teste12");
    cy.contains("Cadastro realizado!").should("be.visible");
    cy.contains(`Bem-vindo ${name}`).should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it('CT018 - Tentativa de Cadastro com senha vazia', () => {
    cy.cadastro(name, email, null);
    cy.validaMsgErro(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });
})