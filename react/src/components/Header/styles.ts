import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;

  @media(max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Column = styled.div`
  max-width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;

  &::before {
    @media(max-width: 600px) {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100px;
      background-color: #454545;
      z-index: -1;
    }
  }
`;

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 72px;
  color: #546130;
  text-transform: uppercase;

  @media(max-width: 600px) {
    font-size: 30px;
    color: #FEFEFE;
    line-height: 36px;
  }
`;

export const Description = styled.div`
  max-width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: #2D3B09;

  @media(max-width: 600px) {
    font-size: 16px;
    color: white;
    line-height: 19px;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  transition: opacity .3s;
  cursor: pointer;

  @media(max-width: 600px) {
    margin-top: 40px;
  }

  &:hover {
    opacity: .7;
  }
`;