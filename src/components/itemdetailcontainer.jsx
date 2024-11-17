import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/cartcontext';
import monitorImage from '../assets/productos/monitorsamsung24.jpg';
import rtxImage from '../assets/productos/rtx3060.jpg';
import procesadorImage from '../assets/productos/i710700k.jpg';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext(); 
  const [product, setProduct] = useState(null);

  const productData = [
    {
      id: 1,
      title: 'Monitor Gamer 24"',
      description: 'Monitor de 24 pulgadas con resolución Full HD y tecnología FreeSync.',
      image: monitorImage,
    },
    {
      id: 2,
      title: 'Placa de Video RTX 3060',
      description: 'Placa gráfica con 12GB de memoria GDDR6, ideal para juegos.',
      image: rtxImage,
    },
    {
      id: 3,
      title: 'Procesador Intel Core i7-10700K',
      description: 'Procesador de 8 núcleos y 16 hilos, hasta 5.1GHz.',
      image: procesadorImage,
    },
  ];

  useEffect(() => {
    const foundProduct = productData.find((p) => p.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); 
    alert(`${product.title} se ha añadido al carrito.`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={product.image} alt={product.title} style={{ width: '300px', height: 'auto', marginBottom: '20px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={handleAddToCart} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
