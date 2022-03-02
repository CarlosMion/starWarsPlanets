import { IFilm } from 'api/films/types';
import { IPlanet } from 'api/planets/types';
import { IResident } from 'api/residents/types';

export interface IBuildPlanetsGridData {
  data?: IPlanet[];
}

export interface IGetPlanetData {
  data?: IPlanet[];
  planetName: string;
}

export interface IBuildPlanetFilmsData {
  film?: IFilm;
  filmEndpoints?: string[];
}

export interface IBuildPlanetResidentsData {
  resident?: IResident;
  residentEndpoints?: string[];
}

export interface IBuildPlanetDetailsData {
  currentPlanet?: IPlanet;
}
