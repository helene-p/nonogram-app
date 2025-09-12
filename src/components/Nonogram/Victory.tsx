export default function Victory({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute z-1 h-full w-full flex flex-col gap-5 items-center bg-gray-300/70">
      <div className="mt-6 text-4xl font-bold text-blue-300">Gagné !</div>
      <button className="opacity-100 w-50" onClick={onClick}>
        Restart
      </button>
    </div>
  );
}
