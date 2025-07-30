import { BoardWrapper, Info, Result } from "./styled";

export const Board = ({
  board,
  currentPlayer,
  makeMove = ()=>{},
  timer,
  winner,
  resetBoard,
}) => {
    <div >
      <BoardWrapper>
        {board.map((cell, index) => (
          <Cell key={index} value={cell} onClick={() => makeMove(index)} />
        ))}
      </BoardWrapper>
      <Info>Jogador atual: {currentPlayer}</Info>
      <Info>Tempo restante: {timer}s</Info>
      {winner && (
        <Result>
          <p>Resultado: {winner === "draw" ? "Empate" : `${winner} venceu!`}</p>
          <button onClick={resetBoard}>Nova Partida</button>
        </Result>
      )}
    </div>
};
