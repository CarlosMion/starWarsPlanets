import React from 'react';

import { useResident } from 'api/residents';
import { isUnwantedProp } from 'utils';
import { AlignableCell } from 'components/Grid/GridBody/styled';

import { IResidentValue } from './types';

export const ResidentValue = ({
  headerNames,
  headerTypes,
  value,
}: IResidentValue) => {
  const { resident, isLoading } = useResident({ endpoint: value });

  const residentAsAny = resident as any;

  return (
    <>
      {!isLoading &&
        headerNames.map((colName, index) => (
          <>
            {!isUnwantedProp(colName) && (
              <AlignableCell key={colName} type={headerTypes[index]}>
                {residentAsAny[colName]}
              </AlignableCell>
            )}
          </>
        ))}
    </>
  );
};
