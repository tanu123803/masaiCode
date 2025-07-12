import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const products = [
  { id: 1, name: 'T-shirt', price: 500 },
  { id: 2, name: 'Jeans', price: 1000 },
  { id: 3, name: 'Shoes', price: 1500 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => dispatch(addItem(product))} style={{ marginLeft: '10px' }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;