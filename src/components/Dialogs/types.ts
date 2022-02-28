import { IPlanet } from 'api/planets/types';
import { ReactNode } from 'react';

export interface IDialogProps {
  planet?: IPlanet;
  heading?: ReactNode;
  body?: ReactNode;
  onDismiss?: () => void;
  onConfirm?: () => void;
  actions?: ReactNode;
}
