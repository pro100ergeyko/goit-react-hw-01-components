import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendListStatus,
  FriendListAvatar,
  FriendListName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendListStatus isOnline={isOnline}></FriendListStatus>
      <FriendListAvatar src={avatar} alt="User avatar" width="48" />
      <FriendListName>{name}</FriendListName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
