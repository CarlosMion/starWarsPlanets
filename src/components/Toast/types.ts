import { ToastVariantType } from 'types';

export interface IToastProps {
  variant: ToastVariantType;
}

export interface Props extends IToastProps {
  text: string;
  onCloseToast: () => void;
}
