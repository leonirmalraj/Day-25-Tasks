// App.js
import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import data from './data/products.json';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        
        <div className="products">
          <h1>Shopping Cart</h1>
          {data.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="cartProducts">
          <Cart />
        </div>
       
      </div>
    </CartProvider>
  );
};

export default App;
