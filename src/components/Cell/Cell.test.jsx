import { render, screen } from '@testing-library/react';
import { ThemeContext } from '../../context/ThemeContext';
import { Cell } from './Cell';

describe('Cell', () => {
  it('usa cor correta para X', () => {
    render(
      <ThemeContext.Provider
        value={{
          colors: {
            X: '#123456',
            O: '#654321',
            board: '#fff',
            background: '#fff',
          },
        }}
      >
        <Cell value="X" onClick={() => {}} />
      </ThemeContext.Provider>,
    );

    const button = screen.getByTestId('cell');
    expect(button).toHaveStyle({ color: '#123456' });
  });
});
