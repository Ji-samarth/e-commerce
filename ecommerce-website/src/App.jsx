import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Categories/>
    </>
  );
};

export default App;
