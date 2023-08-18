import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;

  :hover {
    background-color: #6b1f30;
    cursor: pointer;
    color: #fff;
  }
`;

export const FriendListStatus = styled.span`
  display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendListAvatar = styled.img`
  display: block;
`;

export const FriendListName = styled.p`
  font-size: 26px;
  font-weight: 500;
`;
