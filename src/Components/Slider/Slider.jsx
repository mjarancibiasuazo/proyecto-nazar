import React, { useState, useEffect } from 'react';
import './Slider.css';
import slide_uno from '../Assets/slide-1.png';
import slide_dos from '../Assets/slide-2.png';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { image: slide_uno, alt: 'Slide 1' },
    { image: slide_dos, alt: 'Slide 2' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Cambia de slide cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider">
      <div className="slides" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${slideIndex * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ width: `${100 / slides.length}%` }}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;


