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
      <DialogContent aria-labelledby="modal-text">
        <InnerContent>
          {onDismiss && (
            <CloseButton onClick={onDismiss}>
              <IconClose />
            </CloseButton>
          )}

          <div id="modal-text">
            <Heading>{heading}</Heading>
            <Body aria-live="polite">{body}</Body>
          </div>

          {actions && <Actions>{actions}</Actions>}
        </InnerContent>
      </DialogContent>
    </ModalContainer>
  );
};

export default Dialog;
