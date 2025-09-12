export default function Title() {
  const title = 'Nonogram';
  const accentColors = ['', 'text-green-600', '', 'text-green-600', '', '', 'text-pink-300'];

  return (
    <h1 className="h-20 font-extrabold text-blue-300 content-center">
      {[...title].map((letter, id) => (
        <span key={id} className={accentColors[id]}>
          {letter}
        </span>
      ))}
    </h1>
  );
}
