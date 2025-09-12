import { type Dispatch, type SetStateAction } from 'react';
import Cell from '../ui/Cell';

type GridCellProps = {
  isMarkedCell: boolean;
  rowIndex: number;
  columnIndex: number;
  setProgressCells: Dispatch<SetStateAction<string[]>>;
};

export default function GridCell({ isMarkedCell, rowIndex, columnIndex, setProgressCells }: GridCellProps) {
  const handleClick = () =>
    setProgressCells(progressCells => {
      const row = progressCells[rowIndex].split('');
      row[columnIndex] = isMarkedCell ? '0' : '1';
      progressCells[rowIndex] = row.join('');
      return [...progressCells];
    });

  return <Cell onClick={handleClick} customClass={isMarkedCell ? 'bg-gray-500' : ''} />;
}
