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
          <span>{stats.followers}</span>
        </StatsFollowers>
        <StatsViews>
          <StatsLabel>Views</StatsLabel>
          <span>{stats.views}</span>
        </StatsViews>
        <StatsLikes>
          <StatsLabel>Likes</StatsLabel>
          <span>{stats.likes}</span>
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
  stats: PropTypes.object.isRequired,
};