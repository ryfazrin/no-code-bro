import AntiCodeButton from '../components/AntiCodeButton';
import EscapingButton from '../components/EscapingButton';
import LazyInput from '../components/LazyInput';
import CourseCardFlip from '../components/CourseCardFlip';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-black text-green-400">
      <h1 className="glitch" data-text="NoCodeBroverse">
        NoCodeBroverse
      </h1>
      <h1 className="glitch-chaotic" data-text="ANTI NGODING ZONE">
        ANTI NGODING ZONE
      </h1>
      <p className="max-w-lg mb-8">Tempat dimana kamu jadi programmer tanpa pernah ngoding. Nikmati hidup, biar AI yang kerja.</p>
      <AntiCodeButton />
      <LazyInput />
      <EscapingButton />
      <CourseCardFlip />
    </div>
  );
}
