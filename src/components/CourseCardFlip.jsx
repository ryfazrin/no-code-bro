export default function CourseCardFlip() {
  return (
    <div className="group relative w-64 h-40 perspective mx-auto my-6">
      <div className="relative w-full h-full transition-transform duration-700 transform group-hover:rotate-y-180">
        <div className="absolute backface-hidden w-full h-full bg-green-400 p-4 flex items-center justify-center">
          <p>Belajar React</p>
        </div>
        <div className="absolute w-full h-full bg-black text-white p-4 backface-hidden transform rotate-y-180 flex items-center justify-center">
          <p>Copas aja, buat apa belajar?</p>
        </div>
      </div>
    </div>
  );
}
