import React from 'react';

import { DialogContent } from '@reach/dialog';

import {
  Actions,
  Body,
  CloseButton,
  Heading,
  InnerContent,
  ModalContainer,
} from './styled';
import { IconClose } from 'components/icons/close';
import { IDialogProps } from './types';

const Dialog = ({ heading, body, onDismiss, actions }: IDialogProps) => {
  return (
    <ModalContainer isOpen onDismiss={onDismiss}>
      <DialogContent data-testid="overlay" aria-labelledby="modal-text">
        <InnerContent data-testid="modal-inner-content">
          {onDismiss && (
            <CloseButton onClick={onDismiss} data-testid="close-button">
              <IconClose />
            </CloseButton>
          )}

          <div id="modal-text">
            <Heading data-testid="dialog-heading">{heading}</Heading>
            <Body aria-live="polite">{body}</Body>
          </div>

          {actions && <Actions>{actions}</Actions>}
        </InnerContent>
      </DialogContent>
    </ModalContainer>
  );
};

export default Dialog;
