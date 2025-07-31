/**
 * Verifica o vencedor da partida em tabuleiros NxN
 * @param {(string|null)[]} board - tabuleiro linearizado
 * @param {number} size - tamanho do tabuleiro (ex: 3 para 3x3)
 * @returns {"X"|"O"|"draw"|null}
 */
export const checkMatchWinner = (board = [], size = 3) => {
  let winner = null;

  const checkLine = (indexes) => {
    const first = board[indexes[0]];
    if (!first) return null;
    for (let i = 1; i < indexes.length; i++) {
      if (board[indexes[i]] !== first) return null;
    }
    return first;
  };

  // Linhas e colunas ao mesmo tempo
  for (let i = 0; i < size; i++) {
    const row = [...Array(size)].map((_, c) => i * size + c);
    const col = [...Array(size)].map((_, r) => r * size + i);

    winner = checkLine(row) || checkLine(col);
    if (winner) return winner;
  }

  // Diagonal principal ↘
  winner = checkLine([...Array(size)].map((_, i) => i * size + i));
  if (winner) return winner;

  // Diagonal secundária ↙
  winner = checkLine([...Array(size)].map((_, i) => i * size + (size - 1 - i)));
  if (winner) return winner;

  // Empate
  if (board.every(Boolean)) return 'draw';

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
