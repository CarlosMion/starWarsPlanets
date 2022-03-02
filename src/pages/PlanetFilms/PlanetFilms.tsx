import React from 'react';

import { Grid } from 'components/Grid';
import { useParams } from 'react-router-dom';
import { IGridData } from 'components/Grid/types';
import { buildPlanetFilmsData, getPlanetData } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useFilm } from 'api/films';
import { LoadingDots } from 'components/LoadingDots';
import { Title } from 'pages/Planets/styled';

export const PlanetFilms = () => {
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

  const planetFilms = currentPlanet?.films;

  const { film, isLoading } = useFilm({
    endpoint: planetFilms && planetFilms[0],
  });

  const { headerNames, headerTypes, values, variant }: IGridData =
    buildPlanetFilmsData({
      film,
      filmEndpoints: planetFilms,
    });

  return (
    <div className="App">
      <Title>{`Planet ${planetName} Films`}</Title>
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
