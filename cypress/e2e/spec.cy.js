describe('Condições de Vitória', () => {
  it('deve declarar vitória do jogador X quando ele completa a linha superior', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="cell-1"]').should('be.visible').click();
    cy.get('[data-testid="cell-3"]').should('be.visible').click();
    cy.get('[data-testid="cell-0"]').should('be.visible').click();
    cy.get('[data-testid="cell-5"]').should('be.visible').click();
    cy.get('[data-testid="cell-2"]').should('be.visible').click();
    cy.get('[data-testid="match-winner"]')
      .should('contain.text', 'Resultado: X venceu a partida!')
      .and('be.visible');
  });

  it('deve declarar vitória do jogador O quando ele completa a diagonal principal', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="cell-1"]').click(); // X
    cy.get('[data-testid="cell-0"]').click(); // O
    cy.get('[data-testid="cell-2"]').click(); // X
    cy.get('[data-testid="cell-4"]').click(); // O
    cy.get('[data-testid="cell-3"]').click(); // X
    cy.get('[data-testid="cell-8"]').click(); // O vence na diagonal
    cy.get('[data-testid="match-winner"]')
      .should('contain.text', 'Resultado: O venceu a partida!')
      .and('be.visible');
  });

  it('deve declarar vitória do jogador O quando o tempo limite expira', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="cell-1"]').should('be.visible').click();
    cy.get('[data-testid="cell-3"]').should('be.visible').click();
    cy.get('[data-testid="cell-8"]').should('be.visible').click();
    cy.get('[data-testid="cell-4"]').should('be.visible').click();
    cy.get('[data-testid="cell-2"]').should('be.visible').click();
    cy.get('[data-testid="cell-0"]').should('be.visible').click();
    cy.get('[data-testid="cell-7"]').should('be.visible').click();
    cy.wait(5000);
    cy.get('[data-testid="match-winner"]')
      .should('contain.text', 'Resultado: O venceu a partida!')
      .and('be.visible');
  });
});
