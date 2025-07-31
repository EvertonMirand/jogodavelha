import { useCallback, useEffect, useState } from 'react';
import { checkMatchWinner, checkWinner } from '../utils/checkWinner';

/**
 * @typedef {{ X: number, O: number }} Scores
 * @typedef {"X" | "O" | "draw" | null} MatchWinner
 */

/**
 * Hook customizado para controlar o jogo da velha
 * @returns {{
 *   board: (string|null)[],
 *   currentPlayer: "X"|"O",
 *   scores: Scores,
 *   timer: number,
 *   winner?: 'X'|'O',
 *   matchWinner: MatchWinner,
 *   makeMove: (index: number) => void,
 *   resetBoard: () => void,
 *   resetScores: () => void
 * }}
 */
export function useGameState() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [timer, setTimer] = useState(5);
  const [matchWinner, setMatchWinner] = useState(null);
  const [winner, setWinner] = useState();

  useEffect(() => {
    const result = checkMatchWinner(board);
    if (result) {
      setMatchWinner(result);
      if (result !== 'drawn') {
        setScores((prevValue) => ({
          ...prevValue,
          [result]: prevValue[result] + 1,
        }));
      }
    }
  }, [board]);

  useEffect(() => {
    setWinner(checkWinner(scores));
  }, [scores]);

  const makeMove = useCallback(
    (index) => {
      if (board[index] || matchWinner) {
        return;
      }
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      setTimer(5);
    },
    [board, currentPlayer, matchWinner],
  );

  const autoPlay = useCallback(() => {
    const emptyCells = board
      .map((value, index) => (value ? null : index))
      .filter((value) => value !== null);
    if (emptyCells.length > 0) {
      const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      makeMove(randomIndex);
    }
  }, [board, makeMove]);

  useEffect(() => {
    if (matchWinner) {
      return;
    }
    if (timer === 0) {
      autoPlay();
      return;
    }
    const countdown = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(countdown);
  }, [autoPlay, timer, matchWinner]);

  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
    setMatchWinner(null);
    setTimer(5);
  }, []);

  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0 });
    resetBoard();
  }, [resetBoard]);

  return {
    board,
    currentPlayer,
    scores,
    timer,
    matchWinner,
    winner,
    makeMove,
    resetBoard,
    resetScores,
  };
}
