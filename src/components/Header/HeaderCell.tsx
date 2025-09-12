import { useState } from 'react';
import Cell from '../ui/Cell';

export default function HeaderCell({ instruction }: { instruction: number }) {
  const [marked, setMarked] = useState(false);
  const handleClick = () => setMarked(!marked);

  return <Cell content={instruction} isHeaderCell onClick={handleClick} customClass={marked ? 'bg-red-500' : ''} />;
}
