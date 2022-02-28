import { IPlanet } from 'api/planets/types';

export interface IEditPlanet {
  onDismiss: () => void;
  onConfirm: () => void;
  planet: IPlanet;
}
