import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Secret from './pages/Secret';
import CopasZone from './pages/CopasZone';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EyeTracker from './components/EyeTracker';
import MotivationalPopup from './components/MotivationalPopup';
import KonamiCode from './components/KonamiCode';

export default function App() {
  return (
    <Router>
      <Navbar />
      <EyeTracker />
      <KonamiCode />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rahasia" element={<Secret />} />
        <Route path="/copas-zone" element={<CopasZone />} />
      </Routes>
      <Footer />
    </Router>
  );
}
