// src/CoverflowCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './CoverflowCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/images/img_1.jpg',
  '/images/img_2.jpg',
  '/images/img_3.jpg',
  '/images/img_4.jpg',
  '/images/img_5.jpg'
];

const CoverflowCarousel = () => {
  // var settings = {
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: '0',
  //   slidesToShow: 3,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 3000,
  //   cssEase: 'ease',
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };


  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoverflowCarousel;
