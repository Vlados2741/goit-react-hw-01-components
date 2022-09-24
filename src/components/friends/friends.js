import PropTypes from 'prop-types';
import {
    Friends,
    FriendCard,
    FriendImage,
    FriendName,
} from "./friends.styled";

// Slyles for Friends
const statusOnlineStyle = {
  color: 'green',
  fontSize: 60,
  padding: 0,
  margin: 0,
};

const statusOfflineStyle = {
  color: 'red',
  fontSize: 60,
  padding: 0,
  margin: 0,
};

export const FriendList = ({ friends }) => {
  return (
      <Friends>
        {friends.map(friend => (
          <FriendCard  key= {friend.id}>
            <span style={friend.isOnline ? statusOnlineStyle : statusOfflineStyle}>•</span>
                <FriendImage
                    src={friend.avatar}
                    alt="User avatar"
                />
                <FriendName>
                    {friend.name}
                </FriendName>
          </FriendCard>
        ))}
      </Friends>
  );
};

FriendList.propTypes = {
  friend: PropTypes.object,
};