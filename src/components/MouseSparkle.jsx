import { useEffect } from "react";

const MouseSparkle = () => {
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "w-2 h-2 fixed rounded-full pointer-events-none z-[9999] sparkle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => {
        sparkle.remove();
      }, 500);
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default MouseSparkle;
