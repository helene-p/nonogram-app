import HeaderCell from './HeaderCell';

type HeaderProps = {
  markedInstructions: number[][];
  isColDirection?: boolean;
};

export default function Header({ markedInstructions, isColDirection }: HeaderProps) {
  return (
    <div className={`flex ${isColDirection ? 'flex-row' : 'flex-col'} items-end`}>
      {markedInstructions.map((instructionRow, index) => (
        <div
          key={index}
          className={`flex bg-gray-100 self-stretch justify-end outline-2 outline-gray-400 -outline-offset-1
           ${isColDirection ? 'flex-col' : 'flex-row'}`}>
          {instructionRow.map((instruction, index) => (
            <HeaderCell key={index} instruction={instruction} />
          ))}
        </div>
      ))}
    </div>
  );
}
