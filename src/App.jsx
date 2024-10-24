// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a GamerStore!" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Category Products" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

