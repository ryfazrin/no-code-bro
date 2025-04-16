import { useState } from 'react';

export default function LazyInput() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const raw = e.target.value;
    const fixed = raw.replace(/ngoding/gi, 'mager');
    setText(fixed);
  };

  return (
    <div className="p-4">
      <p className="mb-2">Tulis cita-citamu sebagai programmer:</p>
      <input
        className="border px-3 py-2 rounded w-full"
        value={text}
        onChange={handleChange}
        placeholder="Saya ingin ngoding..."
      />
    </div>
  );
}
