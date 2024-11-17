import React from 'react';
import { useCartContext } from '../context/cartcontext';

const CartWidget = () => {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      🛒
      <span style={{ marginLeft: '5px' }}>{totalItems}</span>
    </div>
  );
};

export default CartWidget;

