import { type MouseEvent, type MouseEventHandler } from 'react';
import Cell from '../ui/Cell';

type GridCellProps = {
  isMarkedCell: boolean;
  isUnmarkedCell: boolean;
  isSelectedCell: boolean;
  isRightClick: boolean;
  onMouseUp: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
  onMouseOver: () => void;
};

export default function GridCell({
  isMarkedCell,
  isUnmarkedCell,
  isSelectedCell,
  isRightClick,
  onMouseDown,
  onMouseUp,
  onMouseOver,
}: GridCellProps) {
  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    onMouseUp(event);
    event.preventDefault();
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    onMouseDown(event);
    event.preventDefault();
  };

  const handleMouseOver = (_event: MouseEvent<HTMLDivElement>) => {
    onMouseOver();
  };

  const rightSelectionColor = isSelectedCell && isRightClick && 'bg-blue-500';
  const markedColor = isMarkedCell && 'bg-gray-600';
  const leftSelectionColor = isSelectedCell && !isRightClick && 'bg-gray-500';
  const bgColor = rightSelectionColor || markedColor || leftSelectionColor;

  return (
    <Cell
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      customClass={`bg-blue-100 border border-gray-400 hover:${!bgColor && 'bg-green-600'} ${bgColor}
       ${isUnmarkedCell && 'font-extrabold before:content-["\\002022"]'}`}
    />
  );
}
