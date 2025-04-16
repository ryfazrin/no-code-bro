import { useEffect, useState } from 'react';

export default function EyeTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="fixed top-10 right-10 text-3xl pointer-events-none">
      <div
        style={{
          transform: `translate(${pos.x / 100}px, ${pos.y / 100}px)`
        }}
      >
        👀
      </div>
    </div>
  );
}
