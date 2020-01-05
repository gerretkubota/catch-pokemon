import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import PokemonInfo from './components/PokemonInfo/PokemonInfo.jsx';

import './main.css';

const App = () => (
  <div className="app-container">
    <div className="app-header">Catch a Pokemon!</div>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pokemon/:pokemonId" component={PokemonInfo} />
    </Switch>
  </div>
);

export default App;
