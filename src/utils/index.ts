import { IGridData } from 'components/Grid/types';
import { keyToValueNamesMap } from './constants';
import { IBuildPlanetsGridData } from './types';

export const buildPlanetsGridData = ({
  data,
  actions,
}: IBuildPlanetsGridData): IGridData => {
  const { results } = data;
  const rawHeaders = Object.keys(results ? results[0] : {});
  const headers = rawHeaders.map(
    (header) => keyToValueNamesMap.get(header) ?? ''
  );
  const onlyValidHeaders = headers.filter((header) => !!header);

  return {
    headers: onlyValidHeaders,
    values: results ?? [],
    actions,
  };
};
