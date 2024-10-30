// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Facturacion from './pages/Facturacion';
import Gestionar from './pages/Gestionar';
import Informacion from './pages/Informacion';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/gestionar" element={<Gestionar />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
  );
}

export default App;

