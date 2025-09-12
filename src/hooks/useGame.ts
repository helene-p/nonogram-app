import { computeHeads, getInitGrid, solution_array_mock } from '@/services/game';

export function useGame() {
  const solution = solution_array_mock;
  const [rowInstructions, columnInstructions] = computeHeads(solution);
  const [row_size, column_size] = [solution.length, solution[0].length];
  const emptyGrid = getInitGrid(row_size, column_size);

  return [rowInstructions, columnInstructions, solution, emptyGrid];
}
