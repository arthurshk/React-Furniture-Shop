import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./page/home";
import Cart from './page/cart';
import Category from './page/category';
import Contact from './page/contact';
import DeliveryPayment from './page/deliveryPayment';
import Products from "./page/products";
function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/deliveryPayment" element={<DeliveryPayment />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
// "/cart/:id(\d+)"