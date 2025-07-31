import { useContext } from 'react';
import { Button } from './styled';
import { ThemeContext } from '../../context/ThemeContext';

/**
 * @param {{ value: string|null, onClick: () => void }} props
 */
export function Cell({ value, onClick }) {
  const { colors } = useContext(ThemeContext);

  return (
    <Button
      onClick={onClick}
      disabled={!!value}
      color={colors[value]}
      backGroundColor={colors.board}
    >
      {value}
    </Button>
  );
}
