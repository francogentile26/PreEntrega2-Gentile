import React from 'react';
import { useCartContext } from '../context/cartcontext';

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  const handleCheckout = () => {
    alert("Compra finalizada. ¡Gracias por tu compra!");
    clearCart();
  };

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout} style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '20px' }}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default Cart;
