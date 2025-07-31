import { createContext, useCallback, useState } from 'react';

export const ThemeContext = createContext();

/**
 * @typedef {{ X: string, O: string, board: string, background: string }} ThemeColors
 */

/**
 * @typedef {Object} ThemeContextValue
 * @property {ThemeColors} colors - Objeto com as cores atuais
 * @property {React.Dispatch<React.SetStateAction<ThemeColors>>} setColors - Setter de cores
 * @property {(newColor: string) => void} changeXColor - Altera a cor do X
 * @property {(newColor: string) => void} changeOColor - Altera a cor do O
 * @property {(newColor: string) => void} changeBoardColor - Altera a cor do tabuleiro
 */
export function ThemeProvider({ children }) {
  const [colors, setColors] = useState({
    X: '#ff0000',
    O: '#0000ff',
    board: '#f0f0f0',
    background: '#ffffff',
  });

  const changeXColor = useCallback((newColor = '') => {
    setColors((oldValue) => ({ ...oldValue, X: newColor }));
  }, []);

  const changeOColor = useCallback((newColor = '') => {
    setColors((oldValue) => ({ ...oldValue, O: newColor }));
  }, []);

  const changeBoardColor = useCallback((newColor = '') => {
    setColors((oldValue) => ({ ...oldValue, board: newColor }));
  }, []);

  const changeBackgroundColor = useCallback((newColor = '') => {
    setColors((oldValue) => ({ ...oldValue, background: newColor }));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colors,
        setColors,
        changeXColor,
        changeOColor,
        changeBoardColor,
        changeBackgroundColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
