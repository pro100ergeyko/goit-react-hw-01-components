import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
  margin-bottom: 5px;
  padding: 4px;

  max-width: 100%;
  width: 360px;

  border-radius: 10%;
  box-shadow: -3px -3px 3px #e6dc13, 3px 3px 3px #385fe6;
  background-color: #e6e2f1a1;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 4px;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  margin-top: 10px;
  padding: 10px 10px 0 10px;
  border-radius: 50%;
  background-color: #ababab;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ffffff;

  &:hover {
    background-color: #6b1f30;
    box-shadow: -3px -3px 7px #e1ff07, 3px 3px 5px #0000ff;
  }
`;

export const Info = styled.p`
  color: #000;
  font-family: sans-serif;
  font-size: 24px;
`;

export const Name = styled(Info)`
  font-weight: 700;
`;

export const Tag = styled(Info)`
  font-size: 16px;
`;

export const Location = styled(Info)`
  font-size: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: #686868;
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  margin-bottom: 5px;
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: #000000;
  font-weight: 700;
`;
