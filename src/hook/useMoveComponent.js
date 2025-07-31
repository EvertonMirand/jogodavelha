import { useCallback, useState } from 'react';

/**
 * @typedef {{ x: number, y: number }} Position
 */

/**
 * Hook para mover um componente (mouse e touch)
 * @returns {{
 *   position: Position,
 *   dragging: boolean,
 *   offset: Position,
 *   onMouseDown: (e: React.MouseEvent) => void,
 *   onMouseMove: (e: React.MouseEvent) => void,
 *   onMouseUp: () => void,
 *   onTouchStart: (e: React.TouchEvent) => void,
 *   onTouchMove: (e: React.TouchEvent) => void,
 *   onTouchEnd: () => void
 * }}
 */
export const useMoveComponent = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (e) => {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position.x, position.y],
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    },
    [dragging, offset.x, offset.y],
  );

  const onMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  /** @param {React.TouchEvent} e */
  const onTouchStart = useCallback(
    (e) => {
      const touch = e.touches[0];
      setDragging(true);
      setOffset({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    },
    [position],
  );

  /** @param {React.TouchEvent} e */
  const onTouchMove = useCallback(
    (e) => {
      if (!dragging) return;
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - offset.x,
        y: touch.clientY - offset.y,
      });
    },
    [dragging, offset],
  );

  const onTouchEnd = useCallback(() => {
    setDragging(false);
  }, []);

  return {
    position,
    dragging,
    offset,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
