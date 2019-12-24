import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

const Pokemon = ({ name, image, catchPokemon }) => (
  <div className="pokemon-container">
    <div className="inner-pokemon-container">
      <h2>Wild Encounter!</h2>
      <img src={image} alt={name} />
      <div className="pokemon-name">{name}</div>
      <button type="button" onClick={catchPokemon}>
        CATCH!
      </button>
    </div>
  </div>
);

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  catchPokemon: PropTypes.func,
};

export default Pokemon;
