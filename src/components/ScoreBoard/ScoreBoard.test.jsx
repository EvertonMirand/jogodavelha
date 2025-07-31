import { render, screen, fireEvent } from '@testing-library/react';
import { ScoreBoard } from './ScoreBoard';

describe('ScoreBoard', () => {
  it('mostra placar e reseta quando botão é clicado', () => {
    const resetScores = jest.fn();

    render(<ScoreBoard scores={{ X: 2, O: 1 }} resetScores={resetScores} />);

    expect(screen.getByTestId('score-text')).toHaveTextContent('X: 2 | O: 1');

    fireEvent.click(screen.getByTestId('reset-score'));
    expect(resetScores).toHaveBeenCalled();
  });
});
