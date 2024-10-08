import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      🛒
      <span style={{ marginLeft: '5px' }}>3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;
