import React from 'react';
import PropTypes from 'prop-types';
// maybe have hooks in here to be able to gather info for GET INFO button
const Card = ({ name, image, release, index }) => (
  <div>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <button type="button">GET INFO</button>
    <button type="button" onClick={e => release(e, index)}>
      RELEASE
    </button>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  release: PropTypes.func,
  index: PropTypes.number,
};

export default Card;
