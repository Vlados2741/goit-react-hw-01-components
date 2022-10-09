import PropTypes from 'prop-types';
import { FriendsListItem } from "./friendListItem"
export const FriendList = ({ friends }) => {
  return (
      <div>
        {friends.map(({id, isOnline, avatar, name}) => (
          <FriendsListItem
            key = {id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </div>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(PropTypes.object),
};