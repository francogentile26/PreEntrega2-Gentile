// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Importa la imagen

const NavBar = () => {
  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="GamerStore logo" className="logo" /> {/* Usa la imagen importada */}
        <h1>GamerStore</h1>
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/monitores">Monitores</Link></li>
        <li><Link to="/category/placas-de-video">Placas de Video</Link></li>
        <li><Link to="/category/procesadores">Procesadores</Link></li>
        <li><Link to="/category/gabinetes">Gabinetes</Link></li>
        <li><Link to="/category/perifericos">Periféricos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

