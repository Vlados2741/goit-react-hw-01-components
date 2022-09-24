import PropTypes from 'prop-types';
import {
    Stats,
    StatsTitle,
    StatsList,
    StatsItem,
} from './stats.styled';


export function Statistic({ stats, title }) {
  return (
    <Stats>
          <StatsTitle>
            {title}
          </StatsTitle>
      <StatsList>
        {stats.map(stats => (
          <StatsItem key={stats.id}>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};