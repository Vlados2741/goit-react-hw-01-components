import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileName,
  ProfileInfo,
  ProfileStats,
  StatsFollowers,
  StatsLikes,
  StatsViews,
  StatsLabel,
} from './profile.styled';


export function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage
          src={avatar}
          alt={username}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDescription>
      <ProfileStats>
        <StatsFollowers>
          <StatsLabel>Followers</StatsLabel>
          <span>{followers}</span>
        </StatsFollowers>
        <StatsViews>
          <StatsLabel>Views</StatsLabel>
          <span>{views}</span>
        </StatsViews>
        <StatsLikes>
          <StatsLabel>Likes</StatsLabel>
          <span>{likes}</span>
        </StatsLikes>
      </ProfileStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }).isRequired,
};