import React from 'react';
import Layout from '../component/layout/layout';
import './deliveryPayment.css'; 

function DeliveryPayment() {
  return (
    <Layout>
      <div className="delivery-payment-container">
        <h2>Delivery/Payment</h2>
        <div className="delivery-methods">
          <div className="delivery-method">
            <h3>Standard Shipping</h3>
            <p>Delivery in 3-5 business days</p>
            <p>Cost: $5.99</p>
          </div>
          <div className="delivery-method">
            <h3>Express Shipping</h3>
            <p>Next day delivery</p>
            <p>Cost: $12.99</p>
          </div>
        </div>
        <div className="payment-options">
          <h3>Payment Options</h3>
          <ul>
            <li>Credit Card</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
          </ul>
        </div>
        <button className="proceed-button">Proceed to Payment</button>
      </div>
    </Layout>
  );
}

export default DeliveryPayment;
