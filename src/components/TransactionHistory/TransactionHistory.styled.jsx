import styled from '@emotion/styled';

export const Table = styled.table`
  width: 360px;
  box-shadow: -5px -5px 5px #e6dc13, 5px 5px 5px #385fe6;
`;

export const Thead = styled.thead`
  background-color: #0cbefe;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: 24px;
`;

export const Tr = styled.tr`
  :hover {
    background-color: #6b1f30;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ExtendedTr = styled(Tr)`
  background-color: #a09595;
  font-size: 16px;
`;

export const Th = styled.th``;

export const Tb = styled.tbody`
  background-color: #fff;
  border-color: #000;
`;

export const Td = styled.td`
  font-family: 'Roboto';
  text-align: center;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
