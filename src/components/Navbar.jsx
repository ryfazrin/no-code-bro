import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-black text-green-400 p-4 flex justify-between items-center">
      <Logo />
      <div className="space-x-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/community">Community</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
