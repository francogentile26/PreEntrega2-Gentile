// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Datos de ejemplo
  const productData = [
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

  useEffect(() => {
    // Busca el producto con el id correspondiente
    const foundProduct = productData.find((p) => p.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;

