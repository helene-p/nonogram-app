import { useState } from 'react';
import Cell from '../ui/Cell';

export default function HeaderCell({ instruction }: { instruction: number }) {
  const [marked, setMarked] = useState(false);
  const handleClick = () => setMarked(!marked);

  return (
    <Cell content={instruction} onMouseUp={handleClick} customClass={marked ? 'text-gray-400 line-through' : ''} />
  );
}
