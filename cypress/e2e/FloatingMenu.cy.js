describe('FloatingMenu - Personalização de cores', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('altera a cor do X quando input muda', () => {
    cy.setColor('[data-testid="input-x"]', '#ff0000');
    cy.get('[data-testid="cell-0"]').click();
    cy.get('[data-testid="cell-0"]').should(
      'have.css',
      'color',
      'rgb(255, 0, 0)',
    );
  });

  it('altera a cor do O quando input muda', () => {
    cy.setColor('[data-testid="input-o"]', '#00ff00');
    cy.get('[data-testid="cell-0"]').click(); // X
    cy.get('[data-testid="cell-1"]').click(); // O
    cy.get('[data-testid="cell-1"]').should(
      'have.css',
      'color',
      'rgb(0, 255, 0)',
    );
  });

  it('altera a cor do tabuleiro quando input muda', () => {
    cy.setColor('[data-testid="input-board"]', '#0000ff');
    cy.get('[data-testid="board"]').should(
      'have.css',
      'background-color',
      'rgb(0, 0, 255)',
    );
  });

  it('altera a cor do fundo quando input muda', () => {
    cy.setColor('[data-testid="input-background"]', '#cccccc');
    cy.get('[data-testid="body"]').should(
      'have.css',
      'background-color',
      'rgb(204, 204, 204)',
    );
  });
});
