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

export const FriendsListItem = (isOnline, avatar, name) => {
    <Friends>
        <FriendCard>
        <span style={isOnline ? statusOnlineStyle : statusOfflineStyle}>•</span>
        <FriendImage
            avatar={avatar}
            name="User avatar"
        />
        <FriendName>
            {name}
        </FriendName>
        </FriendCard>
    </Friends>
}