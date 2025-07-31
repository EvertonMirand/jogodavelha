import { useContext } from 'react';
import { Button } from './styled';
import { ThemeContext } from '../../context/ThemeContext';

/**
 * @param {{ value: string|null, onClick: () => void, index?: number }} props
 */
export function Cell({ value, onClick, index }) {
  const { colors } = useContext(ThemeContext);

  return (
    <Button
      data-testid={`cell-${index}`}
      onClick={onClick}
      disabled={!!value}
      color={colors[value]}
      backGroundColor={colors.board}
    >
      {value}
    </Button>
  );
}
