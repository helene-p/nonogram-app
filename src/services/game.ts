const _solution_array_mock2 = ['1111', '1010', '0111', '1011', '0111'];
const solution_array_mock = ['1001', '1001', '1111', '1001', '1001'];
const empty_cell_symbol = '0';
const filled_cell_symbol = '1';

// "Filled cell" : case remplie
// "Crossed cell" : case barrée (indiquant qu’elle ne doit pas être remplie)
const computeHead = (gridLine: string) =>
  gridLine
    .split(new RegExp(`[^${filled_cell_symbol}]`))
    .map(filledCells => filledCells.length)
    .filter(nbCells => nbCells > 0);

const computeHeads = (solution: string[]) => {
  const rowHeads = solution.map(computeHead);
  const solution_columns = solution_array_mock.reduce((acc: string[], x: string) => {
    const test = x.split('');
    return acc.length ? acc.map((a, index) => a + test[index]) : test;
  }, []);
  const columnHeads = solution_columns.map(computeHead);

  return [rowHeads, columnHeads];
};
const getInitGrid = (row_size: number, column_size: number) =>
  [...Array(row_size)].fill(empty_cell_symbol.repeat(column_size));

export { computeHeads, filled_cell_symbol, getInitGrid, solution_array_mock };
