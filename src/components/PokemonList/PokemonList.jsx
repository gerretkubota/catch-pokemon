import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.jsx';

import './main.css';

const PokemonList = ({ caughtPokemon, releasePokemon }) => (
  <div className="pokemon-list-container">
    {caughtPokemon.map((pokemon, index) => (
      <Card
        key={`${pokemon.name}${index}`}
        name={pokemon.name}
        image={pokemon.image}
        release={releasePokemon}
        index={index}
        id={pokemon.id}
      />
    ))}
  </div>
);

PokemonList.propTypes = {
  caughtPokemon: PropTypes.array,
  releasePokemon: PropTypes.func,
};

export default PokemonList;
