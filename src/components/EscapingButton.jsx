import { useState } from 'react';

export default function EscapingButton() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + '%';
    const randomLeft = Math.floor(Math.random() * 80) + '%';
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="relative w-full h-[400px] border-2 border-dashed border-green-500">
      <button
        onMouseEnter={moveButton}
        style={{ position: 'absolute', ...position }}
        className="px-4 py-2 bg-pink-500 text-white rounded-full"
      >
        Gabung Komunitas
      </button>
    </div>
  );
}
