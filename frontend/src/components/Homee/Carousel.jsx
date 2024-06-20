
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useTransition, animated } from 'react-spring';
import './carousel.css'

import img_1 from './images/hyd.webp';
import img_2 from './images/jaipurr.webp';
import img_3 from './images/mumbaii.webp';
import img_4 from './images/pune.webp';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

const images = [
  img_1,
  img_2,
  img_3,
  img_4
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    keys: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <GlobalStyle />
      <CarouselWrapper>
        {transitions((style, i) => (
          <Slide
            key={i}
            style={{ ...style, backgroundImage: `url(${images[i]})`,backgroundSize: `100% 100%` }}
          />
        ))}
        <div className="samHeading">
          <h1>STUDENT ALUMNI MEET</h1>
        </div>
      </CarouselWrapper>
    </>
  );
};

const CarouselWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat:repeat;
`;

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  color: white;


`;


export default Carousel;


