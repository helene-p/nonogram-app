import { empty_cell_symbol, filled_cell_symbol } from '@/services/game';
import { useState, type Dispatch, type MouseEvent, type SetStateAction } from 'react';
import GridCell from './GridCell';

type GridProps = {
  progressCells: string[];
  setProgressCells: Dispatch<SetStateAction<string[]>>;
};
export default function Grid({ progressCells, setProgressCells }: GridProps) {
  const [firstSelectedCell, setFirstSelectedCell] = useState<number[]>([]);
  const [lastSelectedCell, setLastSelectedCell] = useState<number[]>([]);
  const [isRightClick, setRightClick] = useState(false);

  const onMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    updateProgressCells(event.button === 0);
    setFirstSelectedCell([]);
    setLastSelectedCell([]);
  };

  const updateProgressCells = (isLeftClick = false) => {
    const [xStart, yStart] = firstSelectedCell;
    const [xEnd = xStart, yEnd = yStart] = lastSelectedCell;

    setProgressCells(prevCells => {
      if (xStart === xEnd) {
        const [yMin, nb] = getChangeInfo(yStart, yEnd);
        updateRow(progressCells, isLeftClick, xStart, yMin, nb);
      } else if (yStart === yEnd) {
        const [xMin, nb] = getChangeInfo(xStart, xEnd);
        for (let i = xMin; i < nb + xMin; i++) {
          updateRow(progressCells, isLeftClick, i, yStart);
        }
      }
      return [...prevCells];
    });
  };

  return progressCells.map((rows, rowIndex) => (
    <div key={rowIndex} className="flex outline outline-gray-400">
      {[...rows].map((isMarkedCell, columnIndex) => {
        const [xStart, yStart] = firstSelectedCell;
        const [xEnd, yEnd] = lastSelectedCell;
        const [xMin, xMax] = xStart > xEnd ? [xEnd, xStart] : [xStart, xEnd];
        const [yMin, yMax] = yStart > yEnd ? [yEnd, yStart] : [yStart, yEnd];

        const isCurrentStartCell = rowIndex === xStart && columnIndex === yStart;
        const isCurrentEndCell = rowIndex === xEnd && columnIndex === yEnd;
        const isInSameRow = xStart === xEnd && rowIndex === xStart && columnIndex > yMin && columnIndex < yMax;
        const isInSameCol = yStart === yEnd && columnIndex === yStart && rowIndex > xMin && rowIndex < xMax;
        const isSelected = isCurrentStartCell || isCurrentEndCell || isInSameRow || isInSameCol;

        return (
          <GridCell
            key={columnIndex}
            isMarkedCell={isMarkedCell === filled_cell_symbol}
            isSelectedCell={isSelected}
            isRightClick={isRightClick}
            onMouseUp={onMouseUp}
            onMouseDown={event => {
              setFirstSelectedCell([rowIndex, columnIndex]);
              setRightClick(event.button !== 0);
            }}
            onMouseOver={() => firstSelectedCell.length && setLastSelectedCell([rowIndex, columnIndex])}
          />
        );
      })}
    </div>
  ));
}

const getChangeInfo = (start = 0, end = 0) => [Math.min(start, end), Math.abs(start - end) + 1];

const updateRow = (progressCells: string[], isLeftClick: boolean, rowIndex: number, colIndex: number, changeNb = 1) => {
  const row = progressCells[rowIndex];
  const newValue = isLeftClick ? filled_cell_symbol : empty_cell_symbol;
  progressCells[rowIndex] = row.slice(0, colIndex) + newValue.repeat(changeNb) + row.slice(colIndex + changeNb);
};
