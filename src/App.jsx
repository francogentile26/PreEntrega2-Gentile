// src/App.jsx
import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;
