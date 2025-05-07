import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProd';
import Footer from './components/Footer';
import Explore from './components/Explore'; // Import the Explore component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={
          <>
            <Hero />
            <CategoryProducts />
          </>
        } />
        
        {/* Explore page route */}
        <Route path="/explore" element={<Explore />} />
        
        {/* You can add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;