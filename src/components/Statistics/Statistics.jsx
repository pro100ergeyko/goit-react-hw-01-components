import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatListItem,
  StatLaber,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <StatListItem key={item.id}>
            <StatLaber>{item.label}</StatLaber>
            <StatPercentage>{item.percentage}%</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
