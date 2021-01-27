import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BEBEBE;  
  min-height: 750px;
  box-sizing: border-box;
  padding: 20px;

  @media(max-width: 600px) {
    height: initial !important;
    min-height: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: white !important;
  display: flex;
  align-items: center;
`;

export const ExpandIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const Card = styled.img`
  width: 300px;
  height: 200px;
  border: 10px solid #707070;

  @media(max-width: 600px) {
    margin-top: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 600px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #6F6F6F !important;

  @media(min-width: 600px) {
    margin-left: 20px;
  }

  @media(max-width: 600px) {
    margin-top: 10px;
  }
`;