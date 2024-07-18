describe('Login Tests', () => {
  beforeEach('', () => {
    cy.visit('/login')
});

  it('Tentativa de Login sem sucesso', () => {
    cy.login('email', 'P@ssw0rd!')
    cy.contains('E-mail inválido').should('be.visible')
  })
})