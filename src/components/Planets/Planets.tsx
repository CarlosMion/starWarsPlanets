import React, { FC } from 'react';

import './Planets.css';

import { Grid } from '../Grid';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IGridData } from 'components/Grid/types';
import { buildPlanetsGridData } from 'utils';

export const Planets: FC = () => {
  const { data: planetsData } = useSelector(
    (state: RootState) => state.planets
  );
  const actionss = [
    {
      label: 'Go to Films',
      action: (row: any) => {
        console.log(`redirect to grid with ${row.films.length} Films`);
      },
    },
    {
      label: 'Go to Residents',
      action: (row: any) => {
        console.log(`redirect to grid with ${row.residents.length} Residents`);
      },
    },
  ];
  const { headers, values, actions }: IGridData = buildPlanetsGridData({
    data: planetsData,
    actions: actionss,
  });
  return (
    <div className="App">
      <Grid headers={headers} values={values} actions={actions} />
    </div>
  );
};
