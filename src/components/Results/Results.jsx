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
      <Info>Tempo restante: {timer}s</Info>
      {matchWinner && (
        <Result>
          {!winner && (
            <p>
              Resultado:{' '}
              {matchWinner === 'draw'
                ? 'Empate'
                : `${matchWinner} venceu a partida!`}
            </p>
          )}
          {winner && <p>Ganhador: {`${winner} venceu!`}</p>}

          <NewMatchButton onClick={resetBoard} disabled={!!winner}>
            Nova Partida
          </NewMatchButton>
        </Result>
      )}
    </div>
  );
};
