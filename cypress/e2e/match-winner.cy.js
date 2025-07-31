describe('Condições de Vitória', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('deve declarar vitória do jogador X quando ele completa a linha superior', () => {
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

  it('deve declarar X como vencedor do campeonato ao vencer 11 partidas', () => {
    const winAsX = (index) => {
      cy.get('[data-testid="cell-0"]').click();
      cy.get('[data-testid="cell-3"]').click();
      cy.get('[data-testid="cell-1"]').click();
      cy.get('[data-testid="cell-4"]').click();
      cy.get('[data-testid="cell-2"]').click();
      if (index < 20) {
        cy.get('[data-testid="new-match"]').click();
      }
    };

    for (let i = 0; i < 21; i++) {
      winAsX(i);
    }

    cy.get('[data-testid="winner"]')
      .should('contain.text', 'X é o campeão!')
      .and('be.visible');
  });

  it('deve declarar vitória do jogador O quando o tempo limite expira', () => {
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
