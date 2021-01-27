import React from 'react';
import {Row, Container, Circle, CenterColumn, Column, Title, Description} from './styles';
import useWindowSize from '../useWindowSize';

const CircleContainer = () => {
  const [width] = useWindowSize();

  if(width <= 800) {
    return (
        <Container>
          <CenterColumn>
            <Circle src={process.env.PUBLIC_URL + "/assets/media/background/circle.png"} />

            <Title>lorem ipsum</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Description>
        </CenterColumn>
      </Container>
    )
  }

  return (
    <Container>
      <Row>
        <Circle src={process.env.PUBLIC_URL + "/assets/media/background/circle.png"} />
        <Column>
          <Title>lorem ipsum</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Description>
        </Column>
      </Row>
    </Container>
  )
}

export default CircleContainer;