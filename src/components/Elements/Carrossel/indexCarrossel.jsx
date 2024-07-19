import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carrossel.module.css';

const Carousel = ({ apiUrl }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl);
        setImages(response.data); // Assumindo que a API retorna um array de objetos com { url, description }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [apiUrl]);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentImageIndex
                ? "slide active"
                : "slide"
            }
          >
            <img src={image.url} alt={image.description} />
            <div className="image-description">{image.description}</div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>‹</button>
      <button className="carousel-control next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
