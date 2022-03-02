import React, { ReactElement, useMemo } from 'react';

import { GridVariants } from 'components/Grid/types';
import { FilmValue } from './components/Film';
import { PlanetValue } from './components/Planet';
import { PlanetDetailsValue } from './components/PlanetDetails';
import { ResidentValue } from './components/Resident';

import { IGridBodyValue } from './types';

export const GridBodyValue = ({
  headerNames,
  headerTypes,
  value,
  variant,
}: IGridBodyValue) => {
  const component: ReactElement = useMemo(() => {
    switch (variant) {
      case GridVariants.PLANETS:
        return (
          <PlanetValue
            headerNames={headerNames}
            headerTypes={headerTypes}
            value={value}
          />
        );

      case GridVariants.FILMS:
        return (
          <FilmValue
            headerNames={headerNames}
            headerTypes={headerTypes}
            value={value}
          />
        );
      case GridVariants.RESIDENTS:
        return (
          <ResidentValue
            headerNames={headerNames}
            headerTypes={headerTypes}
            value={value}
          />
        );
      case GridVariants.PLANET_DETAILS:
        console.log(value);
        return (
          <PlanetDetailsValue
            headerNames={headerNames}
            headerTypes={headerTypes}
            value={value}
          />
        );
      default:
        return <></>;
    }
  }, [headerNames, headerTypes, value, variant]);

  return component;
};
