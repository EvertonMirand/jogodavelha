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
    <Container>
      <Title>Placar</Title>
      <p>
        X: {scores.X} | O: {scores.O}
      </p>
      <Button onClick={resetScores}>Zerar Placar</Button>
    </Container>
  );
};
