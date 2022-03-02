import React from 'react';

import { Grid } from 'components/Grid';
import { useParams } from 'react-router-dom';
import { IGridData } from 'components/Grid/types';
import { buildPlanetsGridData } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const PlanetDetails = () => {
  const { planetName } = useParams<{
    planetName: string;
  }>();

  const { data: planetsData } = useSelector(
    (state: RootState) => state.planets
  );

  const {
    headerNames,
    validRawHeaders,
    headerTypes,
    values,
    isPlanet,
  }: IGridData = buildPlanetsGridData({
    data: planetsData,
  });

  return (
    <div className="App">
      <h1>{`Planet ${planetName} Details`}</h1>
      <Grid
        headerNames={headerNames}
        validRawHeaders={validRawHeaders}
        headerTypes={headerTypes}
        values={values}
        isPlanet={isPlanet}
      />
    </div>
  );
};
