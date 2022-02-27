import React from 'react';

import './App.css';

import Planets from 'components/Planets';
import { usePlanets } from 'api/planets';

const App = () => {
  usePlanets();
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets />
    </div>
  );
};

export default App;
