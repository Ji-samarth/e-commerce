import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProd';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <CategoryProducts/>
      <Footer/>
    </>
  );
};

export default App;
