import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import CrearUsuario from './Pages/CrearUsuario';
import VerDatosUsuario from './Pages/VerDatosUsuario';
import VisualizarUsuario from './Pages/VisualizarUsuario';
import Navbar from './Components/Navbar/Navbar';
import DetallesUsuario from './Pages/DetallesUsuario';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crear-usuario" element={<CrearUsuario />} />
          <Route path="/visualizar-usuario" element={<VisualizarUsuario />} />
          <Route path="/ver-datos-usuario" element={<VerDatosUsuario />} />
          <Route path="/usuarios/:id" element={<DetallesUsuario />} /> {/* Corregido */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
