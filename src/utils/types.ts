import { IPlanets } from 'api/planets/types';
import { IAction } from 'components/Grid/types';

export interface IBuildPlanetsGridData {
  data: IPlanets;
  actions: IAction[];
}
