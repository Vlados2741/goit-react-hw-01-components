import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  background-color: #000000;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: white;
  border-width: 2px;
  border-style: solid;
`;

export const ProfileName = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

export const ProfileInfo = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  font-weight: 500;
  list-style: none;
  padding: 0;
  margin-top: 10px;
  background-color: #696969;
`;

export const StatsFollowers = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-color: #000;
  padding: 12px;
`;

export const StatsLikes = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-color: #000;
  padding: 12px;
`;
export const StatsViews = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #000;
  padding: 12px;
`;

export const StatsLabel = styled.span`
  margin-bottom: 5px;
`;

