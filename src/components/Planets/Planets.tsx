import React, { FC } from 'react';

import './Planets.css';

import { Grid } from '../Grid';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IGridData } from 'components/Grid/types';
import { buildPlanetsGridData } from 'utils';
import { defaultPlanetActions } from './constants';
import { useNavigate } from 'react-router-dom';
import { IPlanet } from 'api/planets/types';
import { routes } from 'router';

export const Planets: FC = () => {
  const navigate = useNavigate();

  const { data: planetsData } = useSelector(
    (state: RootState) => state.planets
  );

  const planetActions = [
    ...defaultPlanetActions,
    {
      label: 'Go to Details',
      action: (row: IPlanet) => {
        navigate(`${routes.details}/${row.name}`);
      },
    },
  ];

  const { headers, values, actions }: IGridData = buildPlanetsGridData({
    data: planetsData,
    actions: planetActions,
  });
  return (
    <div className="App">
      <Grid headers={headers} values={values} actions={actions} />
    </div>
  );
};
