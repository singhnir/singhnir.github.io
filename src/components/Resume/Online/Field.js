import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ data }) => (
  <article className="fields-container">
    <header>
      <h4><a href={data.link} target="_blank" rel="noopener noreferrer">{data.company}</a> - {data.position}</h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Field.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Field;
