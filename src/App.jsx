import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Card from './components/Card/Card.jsx';
// import PokemonList from './components/PokemonList/PokemonList.jsx';

const App = () => {
  const [pokemon, setPokemon] = useState();
  const [totalPokemon, setTotalPokemon] = useState();
  const [randomNum, setRandomNum] = useState();
  // const [caughtPokemon, setCaughtPokemon] = useState([]);

  useEffect(() => {
    let cancel;
    axios
      .get('https://pokeapi.co/api/v2/pokemon/1', {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => setPokemon(res.data.name))
      .catch(err => alert(err));

    return () => cancel();
  }, []);

  return (
    <div>
      <h3>Catch a Pokemon!</h3>
      <div>{pokemon}</div>
    </div>
  );
};

export default App;
