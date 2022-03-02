import React, { FC } from 'react';

import './Planets.css';

import { Grid } from '../../components/Grid';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IGridData } from 'components/Grid/types';
import { buildPlanetsGridData } from 'utils';

export const Planets: FC = () => {
  const planetsData = useSelector(
    (state: RootState) => state.planets.data.results
  );

  const { headerNames, headerTypes, values, variant }: IGridData =
    buildPlanetsGridData({
      data: planetsData,
    });

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Grid
        headerNames={headerNames}
        headerTypes={headerTypes}
        values={values}
        variant={variant}
      />
    </div>
  );
};
