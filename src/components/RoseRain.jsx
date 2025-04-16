import { useEffect } from "react";

const RoseRain = () => {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.position = "fixed";
      petal.style.width = "20px";
      petal.style.height = "20px";
      petal.style.backgroundImage = "url('https://img.icons8.com/fluency/48/rose.png')";
      petal.style.backgroundSize = "cover";
      petal.style.left = Math.random() * window.innerWidth + "px";
      petal.style.top = "-30px";
      petal.style.animationDuration = 3 + Math.random() * 3 + "s";
      petal.style.zIndex = "9999";
      petal.style.pointerEvents = "none";
      petal.classList.add("animate-fall");
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 6000);
    };

    const interval = setInterval(createPetal, 300);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default RoseRain;