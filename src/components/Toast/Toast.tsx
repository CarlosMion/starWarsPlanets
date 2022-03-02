import React from 'react';
import { ToastContainer, ToastMessage } from './styled';

import { Props } from './types';

export function Toast({ variant, text, onCloseToast }: Props) {
  console.log('uai');

  return (
    <ToastContainer variant={variant} onClick={onCloseToast}>
      <ToastMessage>{text}</ToastMessage>
    </ToastContainer>
  );
}
