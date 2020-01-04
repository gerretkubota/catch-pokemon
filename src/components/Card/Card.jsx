import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './main.css';

const Card = ({ name, image, release, index, id }) => (
  <div className="card-container">
    <img src={image} alt={name} />
    <h2 className="pokemon-name">{name}</h2>
    <div className="button-group">
      <Link to={`/pokemon/${id}`}>
        <button type="button">GET INFO</button>
      </Link>
      <button
        type="button"
        onClick={e => {
          release(e, index);
        }}
      >
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
  id: PropTypes.number,
};

export default Card;
