import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KonamiCode() {
  const navigate = useNavigate();
  useEffect(() => {
    let input = [];
    const secret = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    const listener = (e) => {
      input.push(e.key);
      if (input.length > 10) input.shift();
      if (input.join('') === secret.join('')) {
        navigate('/copas-zone');
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, []);
  return null;
}
