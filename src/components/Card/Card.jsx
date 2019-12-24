import React from 'react';
import PropTypes from 'prop-types';
// maybe have hooks in here to be able to gather info for GET INFO button
import './main.css';

const Card = ({ name, image, release, index }) => (
  <div className="card-container">
    <img src={image} alt={name} />
    <h2 className="pokemon-name">{name}</h2>
    <div className="button-group">
      <button type="button">GET INFO</button>
      <button type="button" onClick={e => release(e, index)}>
        RELEASE
      </button>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  release: PropTypes.func,
  index: PropTypes.number,
};

export default Card;
