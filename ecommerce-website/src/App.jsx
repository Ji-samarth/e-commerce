import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import CategoryProducts from './components/CategoryProd';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Auth from './components/Auth'; // <-- Combined Login + Signup
import useCart from './components/CartContext';

const App = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Router>
      <Header cartItems={cartItems} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategoryProducts />
            </>
          }
        />
        <Route path="/explore" element={<Explore addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout total={total} />} />
        <Route path="/login" element={<Auth />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
