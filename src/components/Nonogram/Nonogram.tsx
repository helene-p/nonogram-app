import { useGame } from '@/hooks/useGame';
import { useEffect, useState } from 'react';
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import Victory from './Victory';

export default function Nonogram() {
  const [rowInstructions, columnInstructions, solution, emptyGrid] = useGame();
  const [progressCells, setProgressCells] = useState<string[]>(emptyGrid);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    setVictory(solution.join('') === progressCells.join(''));
  }, [solution, progressCells]);

  return (
    <div className="relative grid grid-flow-row border border-blue-400 w-fit">
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
