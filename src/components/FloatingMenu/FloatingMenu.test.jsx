import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import { FloatingMenu } from './FloatingMenu';

describe('FloatingMenu', () => {
  it('altera a cor do X quando input muda', () => {
    render(
      <ThemeProvider>
        <FloatingMenu />
      </ThemeProvider>,
    );

    const inputX = screen.getByTestId('input-x');
    fireEvent.change(inputX, { target: { value: '#00ff00' } });

    expect(inputX.value).toBe('#00ff00');
  });

  it('altera a cor do O quando input muda', () => {
    render(
      <ThemeProvider>
        <FloatingMenu />
      </ThemeProvider>,
    );

    const inputO = screen.getByTestId('input-o');
    fireEvent.change(inputO, { target: { value: '#834d3f' } });

    expect(inputO.value).toBe('#834d3f');
  });

  it('altera a cor do board quando input muda', () => {
    render(
      <ThemeProvider>
        <FloatingMenu />
      </ThemeProvider>,
    );

    const inputBoard = screen.getByTestId('input-board');
    fireEvent.change(inputBoard, { target: { value: '#ee1717' } });

    expect(inputBoard.value).toBe('#ee1717');
  });

  it('altera a cor do background quando input muda', () => {
    render(
      <ThemeProvider>
        <FloatingMenu />
      </ThemeProvider>,
    );

    const inputBackground = screen.getByTestId('input-background');
    fireEvent.change(inputBackground, { target: { value: '#9c9b31' } });

    expect(inputBackground.value).toBe('#9c9b31');
  });

  it('renderiza todos inputs de cor', () => {
    render(
      <ThemeProvider>
        <FloatingMenu />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('input-x')).toBeInTheDocument();
    expect(screen.getByTestId('input-o')).toBeInTheDocument();
    expect(screen.getByTestId('input-board')).toBeInTheDocument();
    expect(screen.getByTestId('input-background')).toBeInTheDocument();
  });
});
