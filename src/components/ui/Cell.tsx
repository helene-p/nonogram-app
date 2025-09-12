type CellProps = {
  isHeaderCell?: boolean;
  content?: number;
  onClick?: () => void;
  customClass?: string;
};

export default function Cell({ content, isHeaderCell, customClass = '', onClick }: CellProps) {
  return (
    <div
      onClick={onClick}
      className={`relative content-center w-10 h-10 border border-gray-400
        ${isHeaderCell ? 'bg-gray-100' : 'bg-blue-100 hover:bg-blue-300'}
         transition-colors duration-150 
        ${customClass}`}>
      {content}
    </div>
  );
}
