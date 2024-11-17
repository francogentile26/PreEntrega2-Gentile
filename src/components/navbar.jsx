import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartcontext';

const Navbar = () => {
  const { cart } = useCartContext();
  
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px' }}>GamerStore</Link>
      <div>
        <Link to="/category/monitores" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Monitores</Link>
        <Link to="/category/placas-de-video" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Placas de Video</Link>
        <Link to="/category/procesadores" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Procesadores</Link>
      </div>
      <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        🛒 ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;



