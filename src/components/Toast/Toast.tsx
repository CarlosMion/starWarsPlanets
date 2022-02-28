import React from 'react';
import { ToastContainer, ToastMessage } from './styled';

import { Props } from './types';

export function Toast({ variant, text, onCloseToast }: Props) {
  return (
    <ToastContainer
      variant={variant}
      onClick={onCloseToast}
      data-testid="toast-container"
    >
      <ToastMessage>{text}</ToastMessage>
    </ToastContainer>
  );
}
