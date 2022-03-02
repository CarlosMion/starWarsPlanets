import { IPlanet } from 'api/planets/types';
import React, { useMemo } from 'react';
import { GridVariants } from '../types';

import { AlignableCell } from './styled';
import { IGridBodyValue } from './types';

export const GridBodyValue = ({
  headerNames,
  headerTypes,
  value,
  variant,
}: IGridBodyValue) => {
  const dataObject: any = useMemo(() => {
    switch (variant) {
      case GridVariants.PLANETS:
        return {
          ...value,
        } as IPlanet;
      case GridVariants.FILMS:
        return {
          shadow: '4',
          variant: 'solid-reversed',
        };
      case GridVariants.RESIDENTS:
        return {};
      default:
        return {};
    }
  }, [value, variant]);

  return (
    <>
      {headerNames.map((colName, index) => (
        <AlignableCell key={colName} type={headerTypes[index]}>
          {dataObject[colName]}
        </AlignableCell>
      ))}
    </>
  );
};
