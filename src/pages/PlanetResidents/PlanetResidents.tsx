import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import { Grid } from 'components/Grid';
import { useParams } from 'react-router-dom';
import { IGridData } from 'components/Grid/types';
import { buildPlanetResidentsData, getPlanetData } from 'utils';
import { useResident } from 'api/residents';
import { LoadingDots } from 'components/LoadingDots';
import { Title } from 'pages/Planets/styled';

export const PlanetResidents = () => {
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
  const planetResidents = currentPlanet?.films;

  const { resident, isLoading } = useResident({
    endpoint: planetResidents && planetResidents[0],
  });

  const { headerNames, headerTypes, values, variant }: IGridData =
    buildPlanetResidentsData({
      resident,
      residentEndpoints: planetResidents,
    });

  return (
    <div className="App">
      <Title>{`Planet ${planetName} Residents`}</Title>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <Grid
          headerNames={headerNames}
          headerTypes={headerTypes}
          values={values}
          variant={variant}
        />
      )}
    </div>
  );
};
