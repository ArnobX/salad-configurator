import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Configurator } from './pages/Configurator';
import { Community } from './pages/Community';
import { Print } from './pages/print';

export default function App() {
  return (
    <div >

      <Header />

     
      <Routes>
        <Route path="/" element={<Configurator />} />
        <Route path="/community" element={<Community />} />
        <Route path="/print" element={<Print />} />
      </Routes>

      
      <Footer />

    </div>
  );
}