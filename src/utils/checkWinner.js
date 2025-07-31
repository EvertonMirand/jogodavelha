/**
 * Verifica o vencedor da partida
 * @param {(string|null)[]} board - tabuleiro com 9 posições
 * @returns {"X"|"O"|"draw"|null} vencedor, empate ou null
 */
export const checkMatchWinner = (board = []) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every((cell) => cell)) return 'draw';
  return null;
};

const winPoints = 11;

/**
 * @typedef {{ X: number, O: number }} Scores
 */

/**
 * Verifica se algum jogador atingiu a pontuação de vitória
 * @param {Scores} scores - placar atual
 * @returns {"X"|"O"|undefined}
 */
export const checkWinner = (scores) => {
  if (scores.O >= winPoints) {
    return 'O';
  } else if (scores.X >= winPoints) {
    return 'X';
  }
};
