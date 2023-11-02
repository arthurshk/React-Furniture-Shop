import React, { useState } from 'react';
import Layout from '../component/layout/layout';
import './cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Space Black Sofa', price: 464.99, quantity: 2 },
    { id: 2, name: 'Dark Cabinet', price: 89.99, quantity: 1 },
    { id: 3, name: 'Wooden Table', price: 149.99, quantity: 3 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Layout>
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
            <button className="remove-item-button">Remove</button>
          </div>
        ))}
        <div className="cart-summary">
          <p>Total: ${calculateTotal()}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;