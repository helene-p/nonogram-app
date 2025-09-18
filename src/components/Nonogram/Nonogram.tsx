import { useGame } from '@/hooks/useGame';
import { empty_cell_symbol, unmarked_cell_symbol } from '@/services/game';
import { useEffect, useState } from 'react';
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import Victory from './Victory';

export default function Nonogram() {
  const [rowInstructions, columnInstructions, solution, emptyGrid] = useGame();
  const [progressCells, setProgressCells] = useState<string[]>(emptyGrid);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    setVictory(solution.join('') === progressCells.join('').replaceAll(unmarked_cell_symbol, empty_cell_symbol));
  }, [solution, progressCells]);

  return (
    <div className="relative grid grid-flow-row outline-2 outline-blue-300 w-fit p-1">
      {victory && <Victory onClick={() => setProgressCells(emptyGrid)} />}
      <div className="col-start-2">
        <Header markedInstructions={columnInstructions} isColDirection />
      </div>
      <div className="row-start-2 ">
        <Header markedInstructions={rowInstructions} />
      </div>
      <div className="row-start-2 ">
        <Grid progressCells={progressCells} setProgressCells={setProgressCells} />
      </div>
    </div>
  );
}
