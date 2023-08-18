import styled from '@emotion/styled';

const getRandomHexColor = idx =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 5px;
  max-width: 100%;
  width: 360px;

  box-shadow: -5px -5px 5px #e6dc13, 5px 5px 5px #385fe6;
  background-color: #e6e2f1a1;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 500;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  background-color: ${props => getRandomHexColor(props.index)};

  :hover {
    background-color: #6b1f30;
    cursor: pointer;
  }
`;

export const StatLaber = styled.span`
  font-size: 16px;
  color: #fff;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;
