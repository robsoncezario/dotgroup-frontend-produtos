import styled from 'styled-components';

export const Aligner = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 500px;
  background-color: #454545;
`;

interface ICardProps {
  withSpace?: boolean;
}

export const Column = styled.div<ICardProps>`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: ${props => props.withSpace ? 30 : 0}px;
  cursor: pointer;
`;

export const ArrowRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ArrowSpacer = styled.div`
  margin-left: 20px;
`;

export const LeftArrowWrapper = styled.div`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
`;

export const RightArrowWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: opacity .3s;

  &:hover {
    opacity: .7;
  }
`;

export const Card = styled.img`
  width: 300px;
  height: 200px;
  border: 10px solid #707070;
`;

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: white;
  margin-top: 30px;
  line-height: 28px;
  text-transform: uppercase;
`;

export const Description = styled.div`
  max-width: 300px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: white;
  margin-top: 30px;
  line-height: 19px;
  margin-top: 20px;
`;
