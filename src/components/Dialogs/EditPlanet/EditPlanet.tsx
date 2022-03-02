import React, { FC, Suspense } from 'react';

import Dialog from 'components/Dialogs';
import { PlanetForm } from 'components/Forms/PlanetForm';
import { IEditPlanet } from './types';

export const EditPlanet: FC<IEditPlanet> = ({
  planet,
  onDismiss,
  onConfirm,
}) => {
  return (
    <Suspense fallback={null}>
      <Dialog
        heading={planet.name}
        body={<PlanetForm onConfirmForm={onConfirm} />}
        onDismiss={onDismiss}
      />
    </Suspense>
  );
};
