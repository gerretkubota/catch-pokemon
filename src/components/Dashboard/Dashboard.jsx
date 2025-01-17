import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pokemon from '../Pokemon/Pokemon.jsx';
import PokemonList from '../PokemonList/PokemonList.jsx';
import Loading from '../Loading/Loading.jsx';

const Dashboard = () => {
  const pokemonURL = 'https://pokeapi.co/api/v2';
  const [wildPokemon, setWildPokemon] = useState();
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState(0);

  useEffect(() => {
    grabAllPokemon();
  }, []);

  useEffect(() => {
    if (totalPokemon > 0) {
      encounterPokemon();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPokemon]);

  const calcRandomPokemon = () => Math.floor(Math.random() * totalPokemon) + 1;

  const grabAllPokemon = () => {
    let cancel;
    axios
      .get(`${pokemonURL}/pokedex/national/`, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => setTotalPokemon(res.data.pokemon_entries.length))
      .catch(err => alert(err));
    return () => cancel();
  };

  const encounterPokemon = () => {
    let cancel;
    axios
      .get(`${pokemonURL}/pokemon/${calcRandomPokemon()}`, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setWildPokemon({
          name: res.data.name,
          image: res.data.sprites.front_default,
          id: res.data.id,
        });
      })
      .catch(err => alert(err));
    return () => cancel();
  };

  const catchPokemon = () => {
    setCaughtPokemon(state => {
      const newState = state.slice();
      const pokemonExists = newState.findIndex(
        pokemon => wildPokemon.id === pokemon.id
      );
      if (pokemonExists < 0) {
        newState.push(wildPokemon);
        newState.sort((a, b) => a.id - b.id);
      }
      return newState;
    });
    encounterPokemon();
  };

  const releasePokemon = (e, index) => {
    setCaughtPokemon(state => {
      const newState = state.slice();
      newState.splice(index, 1);
      return newState;
    });
  };

  return (
    <div>
      {wildPokemon && totalPokemon ? (
        <Pokemon
          name={wildPokemon.name}
          image={wildPokemon.image}
          catchPokemon={catchPokemon}
        />
      ) : (
        <Loading />
      )}
      <PokemonList
        caughtPokemon={caughtPokemon}
        releasePokemon={releasePokemon}
      />
    </div>
  );
};

export default Dashboard;
