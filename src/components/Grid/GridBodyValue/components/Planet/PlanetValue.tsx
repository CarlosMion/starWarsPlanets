import React from 'react';

import { AlignableCell } from 'components/Grid/GridBody/styled';

import { IPlanetValue } from './types';
import { isPlanetAllowedProp, isUnwantedProp } from 'utils';

export const PlanetValue = ({
  headerNames,
  headerTypes,
  value,
}: IPlanetValue) => {
  return (
    <>
      {headerNames.map((colName, index) => (
        <>
          {!isUnwantedProp(colName) ? (
            <AlignableCell key={colName} type={headerTypes[index]}>
              {value[colName]}
            </AlignableCell>
          ) : (
            <>
              {isPlanetAllowedProp(colName) && colName !== 'actions' && (
                <AlignableCell key={colName}>
                  {value[colName].length}
                </AlignableCell>
              )}
            </>
          )}
        </>
      ))}
    </>
  );
};
