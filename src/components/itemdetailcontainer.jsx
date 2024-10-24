// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importa las imágenes de los productos
import monitorImage from '../assets/productos/monitorsamsung24.jpg';
import rtxImage from '../assets/productos/rtx3060.jpg';
import procesadorImage from '../assets/productos/i710700k.jpg';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  const productData = [
    {
      id: 1,
      title: 'Monitor Gamer 24"',
      description: 'Monitor de 24 pulgadas con resolución Full HD y tecnología FreeSync para una experiencia de juego fluida.',
      image: monitorImage, // Imagen del monitor
    },
    {
      id: 2,
      title: 'Placa de Video RTX 3060',
      description: 'Placa gráfica con 12GB de memoria GDDR6, ideal para juegos y aplicaciones gráficas intensivas.',
      image: rtxImage, // Imagen de la placa de video
    },
    {
      id: 3,
      title: 'Procesador Intel Core i7-10700K',
      description: 'Procesador de 8 núcleos y 16 hilos, con una velocidad de hasta 5.1GHz para un rendimiento excepcional.',
      image: procesadorImage, // Imagen del procesador
    },
  ];

  useEffect(() => {
    // Busca el producto con el id correspondiente en los datos
    const foundProduct = productData.find((p) => p.id === parseInt(id, 10));
    setProduct(foundProduct); // Actualiza el estado con el producto encontrado
  }, [id]);

  if (!product) {
    // Mientras no se encuentre el producto, muestra un mensaje de carga
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Imagen del producto */}
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }} // Tamaño medio de la imagen
      />
      {/* Título y descripción del producto */}
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;

