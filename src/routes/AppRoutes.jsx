import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Parking from '@/pages/Parking';
import PQRSForm from '@/pages/PQRSForm';
import Features from '@/pages/Features';

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/parking" element={<Parking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pqrs" element={<PQRSForm/>} />
      <Route path="/features" element={<Features/>} />
    </Routes>
  </>
);

export default AppRoutes;
