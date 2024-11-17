import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer';
import Cart from './components/cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a GamerStore!" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Categoría seleccionada" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {}
      </Routes>
    </Router>
  );
};

export default App;

