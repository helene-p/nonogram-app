import HeaderCell from './HeaderCell';

type HeaderProps = {
  markedInstructions: number[][];
  isColDirection?: boolean;
};

export default function Header({ markedInstructions, isColDirection }: HeaderProps) {
  return (
    <div className={`flex ${isColDirection ? 'flex-row' : 'flex-col'} items-end`}>
      {markedInstructions.map((instructionRow, index) => (
        <div key={index} className={`flex ${isColDirection ? 'flex-col' : 'flex-row'} `}>
          {instructionRow.map((instruction, index) => (
            <HeaderCell key={index} instruction={instruction} />
          ))}
        </div>
      ))}
    </div>
  );
}
