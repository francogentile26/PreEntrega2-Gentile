// ItemListContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

// Aquí se importan las imágenes de los productos
import monitorImage from '../assets/productos/monitorsamsung24.jpg';
import placaImage from '../assets/productos/rtx3060.jpg';
import procesadorImage from '../assets/productos/i710700k.jpg';

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); // Captura el parámetro de categoría desde la URL

  // Productos con categorías asignadas
  const products = [
    {
      id: 1,
      title: 'Monitor Gamer 24"',
      description: 'Monitor de 24 pulgadas con resolución Full HD y tecnología FreeSync para una experiencia de juego fluida.',
      image: monitorImage,
      category: 'monitores', // Categoría asignada
    },
    {
      id: 2,
      title: 'Placa de Video RTX 3060',
      description: 'Placa gráfica con 12GB de memoria GDDR6, ideal para juegos y aplicaciones gráficas intensivas.',
      image: placaImage,
      category: 'placas-de-video', // Categoría asignada
    },
    {
      id: 3,
      title: 'Procesador Intel Core i7-10700K',
      description: 'Procesador de 8 núcleos y 16 hilos, con una velocidad de hasta 5.1GHz para un rendimiento excepcional.',
      image: procesadorImage,
      category: 'procesadores', // Categoría asignada
    },
  ];

  // Filtra los productos por la categoría seleccionada o muestra todos si no hay categoría
  const filteredProducts = id
    ? products.filter((product) => product.category === id) // Filtra por categoría
    : products; // Si no hay id, muestra todos los productos

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

