import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
    </>
  );
};

export default App;
