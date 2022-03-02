import React from 'react';

import { Grid } from 'components/Grid';
import { useParams } from 'react-router-dom';
import { IGridData } from 'components/Grid/types';
import { buildPlanetResidentsData, getPlanetData } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useResident } from 'api/residents';

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

  const { headerNames, headerTypes, values, isPlanet }: IGridData =
    buildPlanetResidentsData({
      resident,
      residentEndpoints: planetResidents,
    });

  return (
    <div className="App">
      <h1>{`Planet ${planetName} Residents`}</h1>
      {isLoading ? (
        <>LOADING</>
      ) : (
        <Grid
          headerNames={headerNames}
          headerTypes={headerTypes}
          values={values}
          isPlanet={isPlanet}
        />
      )}
    </div>
  );
};
