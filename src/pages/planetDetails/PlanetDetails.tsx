import React from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import { Grid } from 'components/Grid';
import { IGridData } from 'components/Grid/types';
import { buildPlanetDetailsData, getPlanetData } from 'utils';
import { Title } from 'pages/Planets/styled';

export const PlanetDetails = () => {
  const { planetName } = useParams<{
    planetName: string;
  }>();

  const planetsData = useSelector(
    (state: RootState) => state.planets.data.results
  );

  const currentPlanet = getPlanetData({
    data: planetsData,
    planetName: planetName ?? '',
  });

  const { headerNames, headerTypes, values, variant }: IGridData =
    buildPlanetDetailsData({
      currentPlanet,
    });

  return (
    <div className="App">
      <Title>{`Planet ${planetName} Details`}</Title>
      <Grid
        headerNames={headerNames}
        headerTypes={headerTypes}
        values={values}
        variant={variant}
      />
    </div>
  );
};
