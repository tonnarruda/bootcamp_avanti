import {fakerPT_BR as faker} from '@faker-js/faker';
import '../../page/cadastroPage/cadastroPage'

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password(6);
const passwordMsg = "O campo senha deve ter pelo menos 6 dígitos";
const emailMsg = "O campo e-mail deve ser prenchido corretamente";
const nameMsg= "O campo nome deve ser prenchido"

describe('Cadastro', () => {
  
  beforeEach(() => {
    cy.visit("/register");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT001 - Cadastro com sucesso', () => {
    cy.typeName(name)
    cy.typeEmail(email)
    cy.typePassword(password)
    cy.clickRegister()

    cy.get("#swal2-title").should("be.visible");
    cy.contains("Cadastro realizado!").should("be.visible");
    cy.contains(`Bem-vindo ${name}`).should("be.visible");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it('CT002 - Cadastro com e-mail já cadastrado', () => {
    cy.typeName(name)
    cy.typeEmail("kaiqueteste@hotmail.com")
    cy.typePassword(password)
    cy.clickRegister()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT003 - Cadastro com nome vazio', () => {
    cy.typeEmail(email)
    cy.typePassword(password)
    cy.clickRegister()

    cy.validateMsgError(nameMsg);
  });

  it('CT004 - Cadastro com e-mail inválido', () => {
    cy.typeName(name)
    cy.typeEmail("email")
    cy.typePassword(password)
    cy.clickRegister()

    cy.validateMsgError(emailMsg);
  });

  it('CT005 - Cadastro com e-mail vazio', () => {
    cy.typeName(name)
    cy.typePassword(password)
    cy.clickRegister()

    cy.validateMsgError(emailMsg);
  });

  it('CT006 - Cadastro com e-mail com números', () => {
    cy.typeName(name)
    cy.typeEmail("1312412")
    cy.typePassword(password)
    cy.clickRegister()

    cy.validateMsgError(emailMsg);
  }); 

  it('CT007 - Cadastro com e-mail com caracter especial', () => {
    cy.typeName(name)
    cy.typeEmail("!@#!@#!@")
    cy.typePassword(password)
    cy.clickRegister()

    cy.validateMsgError(emailMsg);
  });

  it('CT008 - Cadastro com senha com 5 caracteres', () => {
    cy.typeName(name)
    cy.typeEmail(email)
    cy.typePassword("tes12")
    cy.clickRegister()

    cy.validateMsgError(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT009 - Cadastro com senha com 7 caracteres', () => {
    cy.typeName(name)
    cy.typeEmail(email)
    cy.typePassword("teste12")
    cy.clickRegister()

    cy.contains(`Bem-vindo ${name}`).should("be.visible");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/my-account`);
  });

  it('CT010 - Cadastro com senha vazia', () => {
    cy.typeName(name)
    cy.typeEmail(email)
    cy.clickRegister()

    cy.validateMsgError(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });

  it('CT011 - Cadastro com campos vazios', () => {
    cy.clickRegister()

    cy.validateMsgError(nameMsg);
    cy.validateMsgError(emailMsg);
    cy.validateMsgError(passwordMsg);
    cy.url().should("eq", `${Cypress.config("baseUrl")}/register`);
  });
});