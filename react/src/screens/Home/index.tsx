import React, {useRef, useEffect} from 'react';
import AccordionsContainer from '../../components/AccordionsContainer';
import CircleContainer from '../../components/CircleContainer';
import Footer from '../../components/Footer';
import FormContainer from '../../components/Form';
import Header from '../../components/Header';
import HomeSlider from '../../components/HomeSlider';
import ImagesContainer from '../../components/ImagesContainer';


const HomeScreen = () => {
  const ref = useRef() as any;
  const scrollBottom = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <>
      <HomeSlider />
      <Header onClick={scrollBottom} />
      <ImagesContainer setRef={(value: any) => ref.current = value} />
      <CircleContainer />
      <AccordionsContainer />
      <FormContainer />
      <Footer />
    </>
  )
}

export default HomeScreen;