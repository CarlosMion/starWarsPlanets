import { IPlanet } from 'api/planets/types';

export interface IPlanetForm {
  onConfirmForm: () => void;
}

export interface IPlanetInfoForm
  extends Omit<
    IPlanet,
    | 'population'
    | 'residents'
    | 'films'
    | 'created'
    | 'edited'
    | 'url'
    | 'actions'
  > {}
