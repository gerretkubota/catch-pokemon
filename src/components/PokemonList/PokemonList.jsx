import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.jsx';

const PokemonList = ({ caughtPokemon, releasePokemon }) => (
  <div style={{ width: 200 }}>
    {caughtPokemon.map((pokemon, index) => (
      <Card
        key={`${pokemon.name}${index}`}
        name={pokemon.name}
        image={pokemon.image}
        release={releasePokemon}
        index={index}
      />
    ))}
  </div>
);

PokemonList.propTypes = {
  caughtPokemon: PropTypes.array,
  releasePokemon: PropTypes.func,
};

export default PokemonList;
