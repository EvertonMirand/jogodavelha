import { useContext } from 'react';
import { Container } from './App.styled';
import { Board } from './components/Board/Board';
import { FloatingMenu } from './components/FloatingMenu/FloatingMenu';

import { ScoreBoard } from './components/ScoreBoard/ScoreBoard';
import { Title } from './components/ScoreBoard/styled';
import { ThemeContext } from './context/ThemeContext';
import { useGameState } from './hook/useGameState';
import { Results } from './components/Results/Results';
import { GlobalStyle } from './styles/GlobalStyled';

function App() {
  const {
    board,
    currentPlayer,
    makeMove,
    resetBoard,
    resetScores,
    scores,
    timer,
    matchWinner,
    winner,
  } = useGameState();

  const { colors = {} } = useContext(ThemeContext);

  return (
    <Container data-testid="body" background={colors.background}>
      <GlobalStyle />
      <Title>Jogo da Velha</Title>
      <ScoreBoard scores={scores} resetScores={resetScores} />
      <Board board={board} makeMove={makeMove} />
      <Results
        currentPlayer={currentPlayer}
        matchWinner={matchWinner}
        resetBoard={resetBoard}
        timer={timer}
        winner={winner}
      />
      <FloatingMenu />
    </Container>
  );
}

export default App;
