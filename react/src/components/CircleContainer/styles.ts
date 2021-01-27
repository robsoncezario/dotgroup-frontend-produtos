import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #6F6F6F;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const Row = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid #343434;
`;

export const CenterColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: white;
  line-height: 43px;
  text-transform: uppercase;
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: white;
  line-height: 19px;
`;