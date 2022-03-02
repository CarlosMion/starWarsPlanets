import React, { useCallback, useState } from 'react';

import Dialog from 'components/Dialogs';
import { Button } from 'components/Button';

import { UseDialogArgs, UseDialogHook } from './types';

export function useDialogModal<P = {}>({
  Component,
  onConfirm = () => {},
  onDismiss = () => {},
  init = false,
  allowDismiss = true,
}: UseDialogArgs<P>): UseDialogHook<P> {
  const [open, setOpen] = useState(init);
  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);
  const dismissDialog = useCallback(() => {
    onDismiss();
    if (allowDismiss) {
      setOpen(false);
    }
  }, [allowDismiss, onDismiss]);
  const confirmDialog = useCallback(() => {
    onConfirm();
    setOpen(false);
  }, [onConfirm]);

  const DialogComponent = useCallback(
    ({ body = '', buttonLabel = 'confirm', planet = {} }) => {
      if (!open) {
        return null;
      }

      if (Component) {
        return (
          <Component
            onDismiss={dismissDialog}
            onConfirm={confirmDialog}
            planet={planet}
          />
        );
      }

      return (
        <Dialog
          heading="Default Dialog Heading"
          body={body}
          onDismiss={dismissDialog}
          actions={<Button onClick={confirmDialog}>{buttonLabel}</Button>}
        />
      );
    },
    [open, Component, confirmDialog, dismissDialog]
  );

  return [DialogComponent, openDialog, dismissDialog];
}
