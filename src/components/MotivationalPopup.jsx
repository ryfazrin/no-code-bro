import { useEffect } from 'react';

export default function MotivationalPopup() {
  useEffect(() => {
    const quotes = [
      "Ngoding itu overrated.",
      "Copas adalah seni.",
      "Mager hari ini, tetap sukses besok.",
      "Kalau bisa auto, ngapain manual?",
    ];
    const interval = setInterval(() => {
      alert(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
