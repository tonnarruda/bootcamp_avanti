import {fakerPT_BR as faker} from '@faker-js/faker';

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password(6);
const passwordMsg = "O campo senha deve ter pelo menos 6 dígitos";
const requiredEmail = "O campo e-mail deve ser prenchido corretamente";
const requiredNome= "O campo nome deve ser prenchido"

describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit("/register");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT001 - Tentativa de Cadastro com sucesso', () => {
    cy.cadastro(name, email, password);
    cy.get("#swal2-title").should("be.visible");
    cy.contains("Cadastro realizado!").should("be.visible");
    cy.contains(`Bem-vindo ${name}`).should("be.visible");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it('CT002 - Tentativa de cadastro com e-mail já cadastrado', () => {
    cy.cadastro(name, "kaiqueteste@hotmail.com", password);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT003 - Tentativa de Cadastro com nome vazio', () => {
    cy.cadastro(null, email, password);
    cy.validaMsgErro(requiredNome);
  });

  it('CT004 - Tentativa de Cadastro com e-mail inválido', () => {
    cy.cadastro(name, "email", password);
    cy.validaMsgErro(requiredEmail);
  });

  it('CT005 - Tentativa de Cadastro com e-mail vazio', () => {
    cy.cadastro(name, null, password);
    cy.validaMsgErro(requiredEmail);
  });

  it('CT006 - Tentativa de Cadastro com e-mail com números', () => {
    cy.cadastro(name, "1312412", password);
    cy.validaMsgErro(requiredEmail);
  }); 

  it('CT007 - Tentativa de Cadastro com e-mail com caracter especial', () => {
    cy.cadastro(name, "@!#!#!@", password);
    cy.validaMsgErro(requiredEmail);
  });

  it('CT008 - Tentativa de Cadastro com senha com 5 caracteres', () => {
    cy.cadastro(name, email, "tes12");
    cy.validaMsgErro(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT009 - Tentativa de Cadastro com senha com 7 caracteres', () => {
    cy.cadastro(name, email, "teste12");
    cy.contains("Cadastro realizado!").should("be.visible");
    cy.contains(`Bem-vindo ${name}`).should("be.visible");
    cy.contains("OK").should("be.visible").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it('CT010 - Tentativa de Cadastro com senha vazia', () => {
    cy.cadastro(name, email, null);
    cy.validaMsgErro(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it.only('CT011 - Tentativa de Cadastro com campos vazios', () => {
    cy.validaMsgErro(requiredNome);
    // cy.validaMsgErro(requiredEmail);
    // cy.validaMsgErro(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });
})