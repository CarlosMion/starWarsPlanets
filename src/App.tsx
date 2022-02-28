import React from 'react';

import './App.css';

import { Planets } from 'components/Planets';
import { usePlanets } from 'api/planets';
import { useDispatch } from 'react-redux';
import { updateData } from 'redux/slices/planets';
import { IPlanets } from 'api/planets/types';

const App = () => {
  const dispatch = useDispatch();
  const { data } = usePlanets();

  const dispatchUpdate = (data?: IPlanets) =>
    data && dispatch(updateData(data));

  dispatchUpdate(data);

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {data ? <Planets /> : <>LOADING</>}
    </div>
  );
};

export default App;
