import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1>🛒 Redux Shopping Cart</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
