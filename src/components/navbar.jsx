import React from 'react';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between' }}>
      <h1>Componentes Store</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

