import React from 'react';

const AddItemButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd} style={{ padding: '10px 20px', cursor: 'pointer' }}>
      Agregar al Carrito
    </button>
  );
};

export default AddItemButton;
