import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Loading from '../Loading/Loading.jsx';

const PokemonInfo = ({ match }) => {
  const [pokemonId, setPokemonId] = useState(match.params.pokemonId);
  const [pokemonInfo, setPokemonInfo] = useState({
    pokemonId: 0,
    name: '',
    image: '',
    types: [],
    stats: [],
  });
  const url = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    let cancel;
    axios
      .get(`${url}/${pokemonId}`, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res =>
        setPokemonInfo(() => {
          const { name } = res.data;
          const image = res.data.sprites.front_default;
          const types = res.data.types.map(info => info.type.name);
          let {
            hp,
            attack,
            defense,
            speed,
            specialAttack,
            specialDefense,
          } = '';

          res.data.stats.forEach(info => {
            switch (info.stat.name) {
              case 'hp':
                hp = info.base_stat;
                break;
              case 'attack':
                attack = info.base_stat;
                break;
              case 'defense':
                defense = info.base_stat;
                break;
              case 'speed':
                speed = info.base_stat;
                break;
              case 'special_attack':
                specialAttack = info.special_attack;
                break;
              case 'special_defense':
                specialDefense = info.special_defense;
                break;
              default:
                break;
            }
          });

          return {
            pokemonId,
            name,
            image,
            types,
            stats: {
              hp,
              attack,
              defense,
              speed,
              specialAttack,
              specialDefense,
            },
          };
        })
      )
      .catch(err => alert(err));

    return () => cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemonInfo.pokemonId ? (
        <div>
          <div>
            {pokemonInfo.types.map(type => (
              <li key={type}>{type}</li>
            ))}
          </div>
          <div>
            <div>{pokemonInfo.name}</div>
            <div>{pokemonInfo.pokemonId}</div>
          </div>
          {/* progress bar should be here */}
          <div>
            <li>HP {pokemonInfo.stats.hp}</li>
            <li>ATTACK {pokemonInfo.stats.attack}</li>
            <li>DEFENSE {pokemonInfo.stats.defense}</li>
            <li>SPEED {pokemonInfo.stats.speed}</li>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
  /**
   * name
   * types -> is an array of objects of type.name
   * image -> sprites.front_default
   * Progress Bar with... *
   * stats array of objects { base_stat: 45, stat.name: "speed" }*
   * speed
   * special-defense
   * special-attack
   * defense
   * attack
   * hp
   */
};

PokemonInfo.propTypes = {
  match: PropTypes.object,
};

export default PokemonInfo;
