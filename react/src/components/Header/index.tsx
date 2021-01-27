import React from 'react';
import {Wrapper, Column, Title, Description, Icon} from './styles';

interface IHeader {
  onClick: Function;
}

const Header = ({onClick}: IHeader) => {
  return (
    <Wrapper>
      <Column>
        <Title>lorem ipsum</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Description>
        <Icon src={process.env.PUBLIC_URL + "/assets/media/arrows/down-arrow.svg"} onClick={onClick as any} />
      </Column>
    </Wrapper>
  )
}

export default Header;