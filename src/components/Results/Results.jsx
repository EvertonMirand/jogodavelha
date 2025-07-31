import { Info, NewMatchButton, Result } from './styled';

/**
 * @param {{
 *   currentPlayer: "X"|"O",
 *   timer: number,
 *   matchWinner: "X"|"O"|"draw"|null,
 *   resetBoard: () => void
 *   winner?: "X"|"O",
 * }} props
 */
export const Results = ({
  currentPlayer,
  timer,
  matchWinner,
  resetBoard,
  winner,
}) => {
  return (
    <div>
      <Info>Jogador atual: {currentPlayer}</Info>
      <Info data-testid="timer">Tempo restante: {timer}s</Info>
      {matchWinner && (
        <Result>
          {!winner && (
            <p data-testid="match-winner">
              Resultado:{' '}
              {matchWinner === 'draw'
                ? 'Empate'
                : `${matchWinner} venceu a partida!`}
            </p>
          )}
          {winner && (
            <p data-testid="match-winner">Ganhador: {`${winner} venceu!`}</p>
          )}

          <NewMatchButton
            data-testid="new-match"
            onClick={resetBoard}
            disabled={!!winner}
          >
            Nova Partida
          </NewMatchButton>
        </Result>
      )}
    </div>
  );
};
