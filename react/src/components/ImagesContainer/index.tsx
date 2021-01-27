import React, {useRef} from 'react';
import { 
  Container, 
  Column, 
  Card, 
  Title, 
  Description, 
  LeftArrowWrapper,
  RightArrowWrapper,
  ArrowRow,
  ArrowSpacer,
  Icon,
  Aligner
} from './styles';
import { Carousel } from 'antd';
import useWindowSize from '../useWindowSize';

const images = [
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" },
  { url: process.env.PUBLIC_URL + "/assets/media/background/image.png" }
];

interface IImageContainer {
  setRef: Function;
}

const ImagesContainer = ({setRef} :IImageContainer) => {
  const [width, height] = useWindowSize();
  const single = width < 1200;
  const elRef = useRef() as any;

  const chunk = (array: any[], size: number) =>
    array.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(array.slice(i, i + size));
      }

      return acc;
    }, []);

  /*
nextArrow={<Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/right-arrow.svg"} />}
        prevArrow={<Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/left-arrow.svg"} />}
  */

  const moveBack = () => {
    elRef.current.prev();
  }

  const moveForward = () => {
    elRef.current.next();
  }

  return (
      <Aligner ref={ref => setRef(ref)}>
        <Carousel  
          dots={false} 
          ref={ref => elRef.current = ref}>
          {single && images.map((background, i) => 
            <Container key={i}>
              <Column>
                <Card
                  src={background.url} />
                <Title>lorem ipsum</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>

                <ArrowRow>
                  <Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/left-arrow.svg"} onClick={moveBack} />
                  <ArrowSpacer />
                  <Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/right-arrow.svg"} onClick={moveForward} />
                </ArrowRow>
              </Column>
            </Container>
          )}

          {!single && chunk(images, 3).map((imgs: any) => (
            <Container>
              {imgs.map((background: any, i: number) => 
                <Column key={i} withSpace={(i ) < imgs.length}>
                  <Card src={background.url} />
                  <Title>lorem ipsum</Title>
                  <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
                </Column>
              )}
            </Container>
          ))}
        </Carousel>

        {!single && (
          <>
            <LeftArrowWrapper>
              <Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/left-arrow.svg"} onClick={moveBack} />
            </LeftArrowWrapper>

            <RightArrowWrapper>
              <Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/right-arrow.svg"} onClick={moveForward} />
            </RightArrowWrapper>
          </>
        )}
      </Aligner>
  )
}

export default ImagesContainer;