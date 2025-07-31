import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Menu } from './styled';
import { useMoveComponent } from '../../hook/useMoveComponent';
import { InputColor } from './InputColor';

export function FloatingMenu() {
  const {
    colors = {},
    changeXColor,
    changeOColor,
    changeBoardColor,
    changeBackgroundColor,
  } = useContext(ThemeContext);
  const { X, O, board, background } = colors;

  const {
    onMouseDown,
    position,
    onMouseUp,
    onMouseMove,
    onTouchMove,
    onTouchEnd,
    onTouchStart,
  } = useMoveComponent();

  return (
    <Menu
      positionTop={position.y}
      positionLeft={position.x}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="header"
        role="button"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        tabIndex={0}
      >
        <h3>Personalizar cores</h3>
      </div>
      <InputColor label="X" onChangeValue={changeXColor} value={X} />
      <InputColor label="O" onChangeValue={changeOColor} value={O} />
      <InputColor
        label="Tabuleiro"
        onChangeValue={changeBoardColor}
        value={board}
      />
      <InputColor
        label="Fundo"
        onChangeValue={changeBackgroundColor}
        value={background}
      />
    </Menu>
  );
}
