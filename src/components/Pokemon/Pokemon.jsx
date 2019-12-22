import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ name, image, catchPokemon }) => (
  <div>
    <h2>Wild Encounter!</h2>
    <img src={image} alt={name} />
    <div>{name}</div>
    <button type="button" onClick={catchPokemon}>
      CATCH!
    </button>
  </div>
);

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  catchPokemon: PropTypes.func,
};

export default Pokemon;
