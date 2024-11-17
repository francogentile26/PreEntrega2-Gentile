import React from 'react';
import { useCartContext } from '../context/cartcontext';

const Checkout = () => {
  const { cart, clearCart } = useCartContext();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Resumen de la Compra</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio Total: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total a Pagar: ${totalPrice}</h3>
      <button onClick={clearCart}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
