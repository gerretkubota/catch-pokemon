import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Pokemon from './components/Pokemon/Pokemon.jsx';
// import Card from './components/Card/Card.jsx';
// import PokemonList from './components/PokemonList/PokemonList.jsx';

const App = () => {
  const pokemonURL = 'https://pokeapi.co/api/v2';
  const [pokemon, setPokemon] = useState();
  const [totalPokemon, setTotalPokemon] = useState();
  const [randomId, setRandomId] = useState();
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  useEffect(() => {
    encounterPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calcRandomPokemon = () => Math.floor(Math.random() * 151) + 1;

  const encounterPokemon = () => {
    let cancel;
    axios
      .get(`${pokemonURL}/pokemon/${calcRandomPokemon()}`, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res =>
        setPokemon({
          name: res.data.name,
          image: res.data.sprites.front_default,
        })
      )
      .catch(err => alert(err));
    return () => cancel();
  };

  const catchPokemon = () => {
    console.log('clicked!');
  };

  return (
    <div>
      <h3>Catch a Pokemon!</h3>
      {pokemon ? (
        <Pokemon
          name={pokemon.name}
          image={pokemon.image}
          catchPokemon={catchPokemon}
        />
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default App;
