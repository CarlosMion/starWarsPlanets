import { Button } from 'components/Button';
import Dialog from 'components/Dialogs';
import { PlanetForm } from 'components/Forms/PlanetForm';
import React, { FC } from 'react';
import { IEditPlanet } from './types';

export const EditPlanet: FC<IEditPlanet> = ({
  planet,
  onDismiss,
  onConfirm,
}) => {
  return (
    <Dialog
      heading={planet.name}
      body={<PlanetForm onConfirmForm={onConfirm} />}
      onDismiss={onDismiss}
    />
  );
};
