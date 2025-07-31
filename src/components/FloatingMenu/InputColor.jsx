import { useCallback } from 'react';

/**
 * @typedef InputColorProps
 * @property {string} value - Cor atual (hexadecimal ou string CSS)
 * @property {string} label - Rótulo do campo
 * @property {(newColor: string) => void} onChangeValue - Função chamada quando a cor muda
 * @property {string} [data-testid]
 */

/**
 * Componente de input de cor
 * @param {InputColorProps} props
 */
export const InputColor = ({ value, label, onChangeValue, ...rest }) => {
  /**
   * Handler para mudança de cor
   * @param {React.ChangeEvent<HTMLInputElement>} e
   * @param {(newColor: string) => void} changeColorFunction
   */

  const onChangeColor = useCallback(
    (e, changeColorFunction = () => {}, ...rest) => {
      changeColorFunction(e.target.value);
    },
    [],
  );

  return (
    <label>
      {label}:
      <input
        type="color"
        value={value}
        onChange={(e) => onChangeColor(e, onChangeValue)}
        {...rest}
      />
    </label>
  );
};
