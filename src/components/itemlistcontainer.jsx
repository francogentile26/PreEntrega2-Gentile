// ItemListContainer.jsx
import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const products = [
    {
      id: 1,
      title: 'Monitor Gamer 24"',
      description: 'Monitor de 24 pulgadas con resolución Full HD y tecnología FreeSync para una experiencia de juego fluida.',
    },
    {
      id: 2,
      title: 'Placa de Video Radeon RX 560',
      description: 'Placa gráfica con 4GB de memoria GDDR5, ideal para juegos y aplicaciones gráficas intensivas.',
    },
    {
      id: 3,
      title: 'Procesador Intel Core i5',
      description: 'Procesador de 6 núcleos y 12 hilos, con una velocidad de hasta 4.4GHz para un rendimiento excepcional.',
    },
  ];

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="item-list">
        {products.map((product) => (
          <div key={product.id}>
            <Item
              title={product.title}
              description={product.description}
            />
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
