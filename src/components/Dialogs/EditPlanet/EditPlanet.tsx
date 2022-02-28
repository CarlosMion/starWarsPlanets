import { Button } from 'components/Button';
import Dialog from 'components/Dialogs';
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
      body={<></>}
      onDismiss={onDismiss}
      actions={
        <Button onClick={onConfirm} data-testid="dialog-confirm-btn">
          Edit
        </Button>
      }
    />
  );
};
