// Photography.js
import React from 'react';
import Slider from 'react-slick';
import './Photography.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typewriter } from 'react-simple-typewriter';

// import photos
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo7 from './photo7.jpg';

const photos = [
  { src: photo1, alt: 'Photo 1' },
  { src: photo2, alt: 'Photo 2' },
  { src: photo3, alt: 'Photo 3' },
  { src: photo4, alt: 'Photo 4' },
  { src: photo5, alt: 'Photo 5' },
  { src: photo7, alt: 'Photo 7' },
];

function Photography() {
  // slick settings
  const settings = {
    centerMode: true,
    centerPadding: '5px', 
    slidesToShow: 3,       
    focusOnSelect: true,   
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <section className="photography">
      <h2>
      <Typewriter
              words={['Personal photos...']}
              loop={1}
              cursorStyle="_"
              typeSpeed={15}
              delaySpeed={800}
            />
            </h2>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </Slider>
      <h3>
      <Typewriter 
        words={['...turned into personal projects']}
        loop={1}
        cursorStyle="_"
        typeSpeed={15}
        delaySpeed={800}
      />
      </h3>
    </section>
  );
}

export default Photography;
