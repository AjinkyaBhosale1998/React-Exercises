import React from 'react';

const Product = (props) => {
  const { title, price, description } = props;

  return (
    <div>
      <h3>Title: {title}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Product;