import React from 'react';

import { Carousel } from 'antd';
import { Container, Footer } from './styles';

import useWindowSize from '../useWindowSize';

const images = [
  { url: process.env.PUBLIC_URL + "/assets/media/background/home.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/home.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/home.png" }
];

const HomeSlider = () => {
  const [width] = useWindowSize();

  return (
    <Container>
      <Carousel dots={true}>
        {images.map((background, i) => 
            <img 
              key={i} 
              src={background.url} 
              width={width - 17}  />
        )}
      </Carousel>

      <Footer />
    </Container>
  ) 
} 

export default HomeSlider;


