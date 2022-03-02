import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import { Grid } from 'components/Grid';
import { IGridData } from 'components/Grid/types';
import { buildPlanetsGridData } from 'utils';

import { Container, Title } from './styled';
import { LoadingDots } from 'components/LoadingDots';

export const Planets: FC = () => {
  const planetsData = useSelector(
    (state: RootState) => state.planets.data.results
  );

  const { headerNames, headerTypes, values, variant }: IGridData =
    buildPlanetsGridData({
      data: planetsData,
    });

  return (
    <Container>
      <Title>Star Wars Planets</Title>
      {!planetsData?.length ? (
        <LoadingDots />
      ) : (
        <Grid
          headerNames={headerNames}
          headerTypes={headerTypes}
          values={values}
          variant={variant}
        />
      )}
    </Container>
  );
};
