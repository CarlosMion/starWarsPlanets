import React from 'react';

import { useFilm } from 'api/films';
import { AlignableCell } from 'components/Grid/GridBody/styled';
import { isUnwantedProp } from 'utils';
import { LoadingDots } from 'components/LoadingDots';

import { IFilmValue } from './types';

export const FilmValue = ({ headerNames, headerTypes, value }: IFilmValue) => {
  const { film, isLoading } = useFilm({ endpoint: value });

  const filmAsAny = film as any;

  return (
    <>
      {!isLoading ? (
        headerNames.map((colName, index) => (
          <>
            {!isUnwantedProp(colName) && (
              <AlignableCell key={colName} type={headerTypes[index]}>
                {filmAsAny[colName]}
              </AlignableCell>
            )}
          </>
        ))
      ) : (
        <LoadingDots />
      )}
    </>
  );
};
