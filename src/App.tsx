import React, { FC } from 'react';

import './App.css';

import { Planets } from 'pages/Planets';
import { usePlanets } from 'api/planets';
import { useDispatch } from 'react-redux';
import { updateData } from 'redux/slices/planets';
import { IPlanets } from 'api/planets/types';

export const App: FC = () => {
  return <div className="App">{<Planets />}</div>;
};
