import { filled_cell_symbol } from '@/services/game';
import type { Dispatch, SetStateAction } from 'react';
import GridCell from './GridCell';

type GridProps = {
  progressCells: string[];
  setProgressCells: Dispatch<SetStateAction<string[]>>;
};
export default function Grid({ progressCells, setProgressCells }: GridProps) {
  return progressCells.map((rows, rowIndex) => (
    <div key={rowIndex} className="col-start-2 flex outline outline-gray-400">
      {[...rows].map((isMarkedCell, columnIndex) => (
        <GridCell
          key={columnIndex}
          isMarkedCell={isMarkedCell === filled_cell_symbol}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          setProgressCells={setProgressCells}
        />
      ))}
    </div>
  ));
}
