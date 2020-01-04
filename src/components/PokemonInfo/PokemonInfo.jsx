import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Loading from '../Loading/Loading.jsx';

const PokemonInfo = ({ match }) => {
  const [pokemonId, setPokemonId] = useState(match.params.pokemonId);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const url = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    let cancel;
    axios
      .get(`${url}/${pokemonId}`, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res =>
        setPokemonInfo(state => {
          console.log(res.data);
          return { ...state, ...res.data };
        })
      )
      .catch(err => alert(err));

    return () => cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{pokemonInfo.id ? <div>gathered</div> : <Loading />}</>;
};

export default PokemonInfo;
