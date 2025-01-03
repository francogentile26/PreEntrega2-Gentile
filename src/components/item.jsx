import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '200px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '150px', height: 'auto', marginBottom: '10px' }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;

