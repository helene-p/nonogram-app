import type { JSX } from 'react';

export default function GameSetup({ title, children }: { title: string; children: JSX.Element }) {
  return (
    <div className="justify-items-start">
      <div className="relative z-1 mb-2 font-bold text-blue-300 underline">{title}</div>
      {children}
    </div>
  );
}
