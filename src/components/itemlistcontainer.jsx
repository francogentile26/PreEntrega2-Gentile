import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

import monitorImage from '../assets/productos/monitorsamsung24.jpg';
import placaImage from '../assets/productos/rtx3060.jpg';
import procesadorImage from '../assets/productos/i710700k.jpg';

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); 

  const products = [
    {
      id: 1,
      title: 'Monitor Gamer 24"',
      description: 'Monitor de 24 pulgadas con resolución Full HD y tecnología FreeSync.',
      image: monitorImage,
      category: 'monitores',
    },
    {
      id: 2,
      title: 'Placa de Video RTX 3060',
      description: 'Placa gráfica con 12GB de memoria GDDR6, ideal para juegos.',
      image: placaImage,
      category: 'placas-de-video',
    },
    {
      id: 3,
      title: 'Procesador Intel Core i7-10700K',
      description: 'Procesador de 8 núcleos y 16 hilos, hasta 5.1GHz.',
      image: procesadorImage,
      category: 'procesadores',
    },
  ];

  const filteredProducts = id ? products.filter((product) => product.category === id) : products;

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="item-list">
        {filteredProducts.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
