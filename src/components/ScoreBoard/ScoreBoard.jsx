import { Button, Container, Title } from './styled';

/**
 * @typedef {{ X: number, O: number }} Scores
 */

/**
 * Componente que exibe o placar do jogo
 * @param {{ scores: Scores, resetScores: () => void }} props
 */
export const ScoreBoard = ({ scores, resetScores }) => {
  return (
    <Container data-testid="scoreboard">
      <Title>Placar</Title>
      <p data-testid="score-text">
        X: {scores.X} | O: {scores.O}
      </p>
      <Button data-testid="reset-score" onClick={resetScores}>
        Zerar Placar
      </Button>
    </Container>
  );
};
