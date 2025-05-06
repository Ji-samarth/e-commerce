import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    title: 'Summer Sale 50% OFF!',
    description: 'Explore the latest shoes at half price!',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Step into the season with new styles.',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Exclusive Sneakers',
    description: 'Only on Dheeza. Limited Stock!',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 sec
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => setCurrent((current + 1) % slides.length);
  const goToPrev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="hero-container">
      <div className="hero-slide">
        <img src={slides[current].image} alt={slides[current].title} />
        <div className="hero-text">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
        </div>
      </div>
      <button className="prev" onClick={goToPrev}>❮</button>
      <button className="next" onClick={goToNext}>❯</button>
    </div>
  );
}
