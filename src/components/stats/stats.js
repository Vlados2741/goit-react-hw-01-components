import PropTypes from 'prop-types';
import {
    Stats,
    StatsList,
    StatsItem,
} from './stats.styled';


export function Statistic ({ stats, title }) {
  return (
    <Stats>
      {title && <h2>Upload stats</h2>}
      <StatsList>
        {stats.map(({ id, label, percentage }) =>
          <StatsItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItem>
        )};
      </StatsList>
    </Stats>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};