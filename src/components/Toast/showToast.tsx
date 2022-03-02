import React from 'react';
import { toast, ToastPosition } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { Toast } from './Toast';
import { LightTheme } from '../../theme';
import { ToastVariantType } from 'types';

toast.configure({
  toastClassName: 'toast',
  position: 'bottom-right',
  hideProgressBar: true,
  autoClose: 5000,
  closeOnClick: true,
  closeButton: false,
  draggable: false,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
});

type ToastProps = {
  closeToast: () => void;
};

type ToastParams = {
  variant: ToastVariantType;
  message: string;
  position?: ToastPosition;
};

export function showToast({
  variant,
  message,
  position = 'bottom-right',
}: ToastParams) {
  console.log('uai');

  toast(
    ({ closeToast }: ToastProps) => (
      <ThemeProvider theme={LightTheme}>
        <Toast variant={variant} text={message} onCloseToast={closeToast} />
      </ThemeProvider>
    ),
    { position }
  );
}
