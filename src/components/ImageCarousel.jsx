import React, { useState } from 'react';
import './ImageCarousel.css';

import person1 from './Images/person1.png';
import person2 from './Images/person2.png';
import person3 from './Images/person3.png';
import person4 from './Images/person4.png';
import person5 from './Images/person5.png';

const ImageCarousel = () => {
  const images = [
    { src: person1, alt: 'Image 1', text: 'Text for image 1' },
    { src: person2, alt: 'Image 2', text: 'Text for image 2' },
    { src: person3, alt: 'Image 3', text: 'Text for image 3' },
    { src: person4, alt: 'Image 4', text: 'Text for image 4' },
    { src: person5, alt: 'Image 5', text: 'Text for image 5' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    // Remove the active class from the previous image container
    document.querySelector('.image-container.active').classList.remove('active');

    // Set the active index to the next image
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>What Our Valuable Clients Think</h1>
      </div>

      <div className="content-container">
        <div className="content-left">
          <h2>Client Testimonial</h2>
          <p>{images[activeIndex].text}</p>
        </div>

        <div className="content-right">
          <div className="image-row">
            {images.map((image, index) => (
              <div
                key={index}
                className={`image-container ${index === activeIndex ? 'active' : 'inactive'}`}
                onClick={() => setActiveIndex(index)}
              >
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`carousel-image ${index === activeIndex ? 'big' : 'small'}`}
                  />
                  <div className="text-slide">
                    <p className="bold-text">{image.text}</p>
                  </div>
                </>
              </div>
            ))}
          </div>
          <div className="arrow next" onClick={handleNextClick}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
