import type { MouseEventHandler } from 'react';

type CellProps = {
  isHeaderCell?: boolean;
  content?: number;
  customClass?: string;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
  onMouseUp?: MouseEventHandler<HTMLDivElement>;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
};

export default function Cell({ content, customClass = '', onMouseDown, onMouseUp, onMouseOver }: CellProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseOver={onMouseOver}
      onContextMenu={e => e.preventDefault()}
      className={`relative content-center w-10 h-10 transition-colors duration-150
        ${customClass}`}>
      {content}
    </div>
  );
}
