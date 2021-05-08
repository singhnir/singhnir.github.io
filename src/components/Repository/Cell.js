import React from 'react';
import PropTypes from 'prop-types';
// import url from 'url';
import classes from './Cell.module.css';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
      </header>
      <p className={classes.Cell} align="justify"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.desc}</a></p>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
