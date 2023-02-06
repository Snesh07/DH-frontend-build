import React, { useState } from 'react';
// import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  }

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  }

  return (
    <div className="carousel">
      <div className="carousel__slide">
        <img src={images[currentIndex]} alt="Slide" />
      </div>
      <div className="carousel__previous-button" onClick={previousSlide}>&#10094;</div>
      <div className="carousel__next-button" onClick={nextSlide}>&#10095;</div>
    </div>
  );
}

export default Carousel;
