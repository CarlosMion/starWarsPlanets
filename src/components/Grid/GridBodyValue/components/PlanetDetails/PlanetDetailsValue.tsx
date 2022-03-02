import React from 'react';

import { isUnwantedProp } from 'utils';
import { AlignableCell } from 'components/Grid/GridBody/styled';

import { IPlanetDetailsValue } from './types';

export const PlanetDetailsValue = ({
  headerNames,
  headerTypes,
  value,
}: IPlanetDetailsValue) => {
  return (
    <>
      {headerNames.map((colName, index) => (
        <>
          {!isUnwantedProp(colName) && (
            <AlignableCell key={colName} type={headerTypes[index]}>
              {value[colName]}
            </AlignableCell>
          )}
        </>
      ))}
    </>
  );
};
