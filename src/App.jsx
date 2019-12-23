import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Pokemon from './components/Pokemon/Pokemon.jsx';
// import Card from './components/Card/Card.jsx';
import PokemonList from './components/PokemonList/PokemonList.jsx';

const App = () => {
  const pokemonURL = 'https://pokeapi.co/api/v2';
  const [wildPokemon, setWildPokemon] = useState();
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState();

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
        setWildPokemon({
          name: res.data.name,
          image: res.data.sprites.front_default,
        })
      )
      .catch(err => alert(err));
    return () => cancel();
  };

  const catchPokemon = () => {
    setCaughtPokemon([...caughtPokemon, wildPokemon]);
    encounterPokemon();
  };

  const releasePokemon = (e, index) => {
    caughtPokemon.splice(index, 1);
    setCaughtPokemon([...caughtPokemon]);
  };

  return (
    <div>
      <h3>Catch a Pokemon!</h3>
      {wildPokemon ? (
        <Pokemon
          name={wildPokemon.name}
          image={wildPokemon.image}
          catchPokemon={catchPokemon}
        />
      ) : (
        'Loading'
      )}
      <PokemonList
        caughtPokemon={caughtPokemon}
        releasePokemon={releasePokemon}
      />
    </div>
  );
};

export default App;
