import React from 'react';

import { humanizeText, isPlanetAllowedProp, isUnwantedProp } from 'utils';

import { HeaderCell, HeaderContainer, HeaderRow } from './styled';
import { IGridHeader } from './types';

export const GridHeader = ({
  headerNames,
  headerTypes,
  isPlanet = false,
}: IGridHeader) => {
  return (
    <HeaderContainer>
      <HeaderRow>
        {headerNames.map((colName, index) => (
          <>
            {!isUnwantedProp(colName) ? (
              <HeaderCell key={colName}>{`${humanizeText(colName)}(${
                headerTypes[index]
              })`}</HeaderCell>
            ) : (
              <>
                {isPlanet && isPlanetAllowedProp(colName) && (
                  <HeaderCell key={colName}>{`${humanizeText(
                    colName
                  )}`}</HeaderCell>
                )}
              </>
            )}
          </>
        ))}
      </HeaderRow>
    </HeaderContainer>
  );
};
