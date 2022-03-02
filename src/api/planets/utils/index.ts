import {
  FILMS_ACTION_INDEX,
  planetActions,
  PLANET_DETAILS_INDEX,
  RESIDENTS_ACTION_INDEX,
} from '../constants';
import { IAddActionsToAllPlanets, IPlanet } from '../types';

const addActionsToSinglePlanet = (planet: IPlanet) => {
  const hasFilms = !!planet.films?.length;
  const hasResidents = !!planet.residents?.length;

  return {
    ...planet,
    actions: [
      hasFilms ? planetActions()[FILMS_ACTION_INDEX] : null,
      hasResidents ? planetActions()[RESIDENTS_ACTION_INDEX] : null,
      planetActions()[PLANET_DETAILS_INDEX],
    ],
  } as IPlanet;
};

export const addActionsToAllPlanets = ({ planets }: IAddActionsToAllPlanets) =>
  planets?.map((planet) => addActionsToSinglePlanet(planet));
