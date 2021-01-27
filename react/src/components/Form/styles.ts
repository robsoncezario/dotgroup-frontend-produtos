import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #6F6F6F;
  z-index: 0;
`;

export const Rectangle = styled.img`
  width: 100%;
  height: 500px;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000 !important;
  padding-top: 10px;
`;

export const Row = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FullWidth = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HalfWidth = styled.div`
  width: 42.5vw;

  @media(max-width: 600px) {
    width: 90vw;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #BEBEBE;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  line-height: 21px; 
  border-radius: 10px;
  height: 60px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  color: #333333;
  z-index: 100;
  cursor: pointer;

  &::placeholder {
    color: #333333;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  width: 90vw;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  color: #333333;
  background-color: #BEBEBE;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  line-height: 21px; 
  border-radius: 10px;
  cursor: pointer;

  &::placeholder {
    color: #333333;
  }
`;

interface ISubmitButton {
  isDisabled?: boolean;
}

export const SubmitButton = styled.div<ISubmitButton>`
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isDisabled ? "#888" : "white"};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.isDisabled ? "#999" : "#333"};
  pointer-events: ${props => props.isDisabled ? "none" : "all"};
  border-radius: 10px;
  transition: background-color .3s, color .3s, opacity .2s; 
  margin-top: 10px;
  align-self: center;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .7;
  }
`;