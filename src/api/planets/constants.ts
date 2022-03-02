import { routes } from 'router';
import { IPlanet } from './types';

export const FILMS_ACTION_INDEX = 0;
export const RESIDENTS_ACTION_INDEX = 1;
export const PLANET_DETAILS_INDEX = 2;
export const PLANET_EDIT_INDEX = 2;

export const defaultPlanetActions = [
  {
    label: 'Films',
    action: null,
    to: (row: IPlanet) => `${routes.details}/${row.name}${routes.planetFilms}`,
  },
  {
    label: 'Residents',
    action: null,
    to: (row: IPlanet) =>
      `${routes.details}/${row.name}${routes.planetResidents}`,
  },
];

export const planetActions = (openModal?: () => void) => [
  ...defaultPlanetActions,
  {
    label: 'Details',
    action: null,
    to: (row: IPlanet) => `${routes.details}/${row.name}`,
  },
  {
    label: 'Edit',
    action: openModal && openModal(),
  },
];
