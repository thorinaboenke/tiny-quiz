describe('Play Quiz', () => {
  it('plays quiz', () => {
    cy.visit('/');
    cy.get('.wrong').should('not.exist');
    cy.get('.correct').should('not.exist');
    cy.get('[data-cy=checkbox]').first().click();
    cy.get('[data-cy=submit-button]').first().click();
    cy.contains('Wrong');
  });
});
