import { FC, ReactNode } from 'react';

import { IEditPlanet } from 'components/Dialogs/EditPlanet/types';
import { IDialogProps } from 'components/Dialogs/types';
import { IPlanet } from 'api/planets/types';

export type DialogCb<T> = (data?: T | null) => void;

export interface IUseDialogBaseArgs<T> {
  onConfirm?: DialogCb<T>;
  onDismiss?: DialogCb<T>;
  type?: string;
  init?: boolean;
  allowDismiss?: boolean;
}

export type UseDialogComponentRequired = {
  Component: React.ComponentType<IEditPlanet>;
};

export type UseDialogArgs<T> = IUseDialogBaseArgs<T> &
  UseDialogComponentRequired;

export interface IUseDialogProps {
  heading?: string;
  body?: ReactNode;
}

export interface IUseDialogComponentProps {
  planet: IPlanet;
  onDismiss: () => void;
  onConfirm: () => void;
}

export type Props = IUseDialogProps & Partial<IDialogProps>;

export type UseDialogHook<T> = [FC<Props>, DialogCb<T>, () => void];
