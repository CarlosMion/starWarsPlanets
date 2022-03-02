import { IFilm } from 'api/films/types';
import { IPlanet } from 'api/planets/types';
import { IResident } from 'api/residents/types';
import { GridVariants, IGridData } from 'components/Grid/types';
import {
  IBuildPlanetFilmsData,
  IBuildPlanetsGridData,
  IBuildPlanetResidentsData,
  IGetPlanetData,
} from './types';

const getActualTypeForValue = (potentialNumber: string) => {
  const number: number = parseInt(potentialNumber);

  return isNaN(number) ? 'string' : 'number';
};

const headerTypes = (
  properties: {} & {
    [x: string]: PropertyDescriptor;
  }
) => {
  let arrayOfTypes: string[] = [];
  Object.entries(properties).forEach(([_key, property]) => {
    arrayOfTypes = [...arrayOfTypes, getActualTypeForValue(property.value)];
  });

  return arrayOfTypes;
};

const getHeaderNames = (data?: IPlanet | IFilm | IResident): string[] =>
  Object.keys(data ? data : {});

const getHeaderTypes = (data?: IPlanet | IFilm | IResident): string[] => {
  const properties = Object.getOwnPropertyDescriptors(data ? data : {});
  return headerTypes(properties);
};

export const buildPlanetsGridData = ({
  data,
}: IBuildPlanetsGridData): IGridData => {
  const firstPlanet = data ? data[0] : ({} as IPlanet);

  return {
    headerNames: getHeaderNames(firstPlanet),
    headerTypes: getHeaderTypes(firstPlanet),
    values: data ?? [],
    variant: GridVariants.PLANETS,
  };
};

export const getPlanetData = ({
  data,
  planetName,
}: IGetPlanetData): IPlanet | undefined =>
  data?.find((planet: IPlanet) => planet.name === planetName);

export const buildPlanetFilmsData = ({
  film,
  filmEndpoints,
}: IBuildPlanetFilmsData): IGridData => {
  return {
    headerNames: getHeaderNames(film),
    headerTypes: getHeaderTypes(film),
    values: filmEndpoints ?? [],
    variant: GridVariants.FILMS,
  };
};

export const buildPlanetResidentsData = ({
  resident,
  residentEndpoints,
}: IBuildPlanetResidentsData): IGridData => {
  return {
    headerNames: getHeaderNames(resident),
    headerTypes: getHeaderTypes(resident),
    values: residentEndpoints ?? [],
    variant: GridVariants.RESIDENTS,
  };
};
