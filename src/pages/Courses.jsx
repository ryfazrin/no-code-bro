import CourseCard from '../components/CourseCard';

const courses = [
  { title: 'Membangun Website Tanpa Menyentuh Kode', description: 'Pakai AI dan Canva.' },
  { title: 'React Tapi Bukan Kamu yang Ngoding', description: 'Biar Copilot yang kerja.' },
  { title: 'CSS? Gambar Saja di Canva', description: 'Ngapain susah-susah.' },
];

export default function Courses() {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-4">
      {courses.map((course, i) => (
        <CourseCard key={i} {...course} />
      ))}
    </div>
  );
}
