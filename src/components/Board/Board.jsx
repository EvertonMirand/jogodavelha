import { useContext } from 'react';
import { Cell } from '../Cell/Cell';
import { BoardContainer, BoardWrapper } from './styled';
import { ThemeContext } from '../../context/ThemeContext';

/**
 * @param {{
 *   board: (string|null)[],
 *   makeMove: (index:number) => void,
 * }} props
 */
export const Board = ({ board, makeMove }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div>
      <BoardWrapper>
        <BoardContainer data-testid="board" color={colors.board}>
          {board.map((cell, index) => (
            <Cell
              key={index}
              value={cell}
              onClick={() => makeMove(index)}
              index={index}
            />
          ))}
        </BoardContainer>
      </BoardWrapper>
    </div>
  );
};
