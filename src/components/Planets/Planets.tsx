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

  const { headers, values }: IGridData = buildPlanetsGridData({
    data: planetsData,
  });

  return (
    <div className="App">
      <Grid headers={headers} values={values} />
    </div>
  );
};
