import { IAction } from 'components/Grid/GridBody/types';

export interface IPlanets {
  count?: number;
  next?: string;
  previous?: string;
  results?: IPlanet[];
}
export interface IPlanet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: string;
  residents?: string[];
  films?: string[];
  created: string;
  edited: string;
  url: string;
  actions: IAction[];
}

export interface IAddActionsToAllPlanets {
  planets?: IPlanet[];
}
