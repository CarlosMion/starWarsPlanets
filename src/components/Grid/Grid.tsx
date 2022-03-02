import React, { useState } from 'react';

import { IPlanet } from 'api/planets/types';
import { EditPlanet } from 'components/Dialogs/EditPlanet';
import { LoadingDots } from 'components/LoadingDots';
import { useDialogModal } from 'hooks/useDialogModal';

import { GridBody } from './GridBody';
import { GridHeader } from './GridHeader';
import { GridVariants, IGridData } from './types';
import { GridContainer } from './styled';

export const Grid = ({
  headerNames,
  headerTypes,
  values,
  variant,
}: IGridData) => {
  const [EditPlanetModal, openEditPlanetModal] = useDialogModal({
    Component: EditPlanet,
  });
  const [selectedPlanet, setSelectedPlanet] = useState<IPlanet>();

  const openEditPlanet = (planet: IPlanet) => {
    setSelectedPlanet(planet);
    openEditPlanetModal();
  };

  const isPlanet = variant === GridVariants.PLANETS;

  return (
    <>
      {!headerNames.length ? (
        <LoadingDots />
      ) : (
        <GridContainer>
          <GridHeader
            headerNames={headerNames}
            headerTypes={headerTypes}
            isPlanet={isPlanet}
          />
          <GridBody
            headerNames={headerNames}
            headerTypes={headerTypes}
            values={values}
            variant={variant}
            openEditPlanet={openEditPlanet}
          />
        </GridContainer>
      )}
      {isPlanet && <EditPlanetModal planet={selectedPlanet} />}
    </>
  );
};
