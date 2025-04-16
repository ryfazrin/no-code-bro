import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) {
      navigate('/rahasia');
    }
  };

  return <h1 onClick={handleClick} className="text-xl cursor-pointer font-bold">🧠 NoCodeBro</h1>;
}
