import styled from '@emotion/styled';

export const Stats = styled.section`
  width: 300px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const StatsTitle = styled.h2`
  font-size: 22px;
  background-color: #000;
  color: #fff;
  margin: 10px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #696969;
  color: #fff;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  height: 65px;
`;