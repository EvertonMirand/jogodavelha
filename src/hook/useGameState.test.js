import { renderHook, act } from '@testing-library/react';
import { useGameState } from './useGameState';

jest.useFakeTimers();

describe('useGameState', () => {
  it('faz jogada automática quando tempo chega a 0', () => {
    const { result } = renderHook(() => useGameState());

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.board.some((cell) => cell != null)).toBe(true);
  });

  it('reseta o tabuleiro corretamente', () => {
    const { result } = renderHook(() => useGameState());

    act(() => {
      result.current.makeMove(0);
      result.current.makeMove(1);
      result.current.resetBoard();
    });

    expect(result.current.board.every((c) => c === null)).toBe(true);
    expect(result.current.matchWinner).toBe(null);
  });

  it('incrementa placar quando X vence', () => {
    const { result } = renderHook(() => useGameState());

    act(() => {
      result.current.makeMove(0);
    });
    act(() => {
      result.current.makeMove(4);
    });
    act(() => {
      result.current.makeMove(2);
    });
    act(() => {
      result.current.makeMove(6);
    });
    act(() => {
      result.current.makeMove(1);
    });

    act(() => {});

    expect(result.current.matchWinner).toBe('X');
    expect(result.current.scores.X).toBe(1);
    expect(result.current.scores.O).toBe(0);
  });
});
