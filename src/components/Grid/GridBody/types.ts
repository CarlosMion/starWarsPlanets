import { IPlanet } from 'api/planets/types';
import { GridVariants } from '../types';

export interface IGridBody {
  headerNames: string[];
  headerTypes: string[];
  values: any[];
  openEditPlanet?: (planet: IPlanet) => void;
  variant: GridVariants;
}

export interface IAction {
  label: string;
  action?: (row: any) => void;
  to?: (row: any) => string;
}
