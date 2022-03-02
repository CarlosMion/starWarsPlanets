import { RequestException } from 'api/types';
import { useQuery } from 'react-query';

import { get, isResponseError } from '../http-client';
import { IPlanets } from './types';
import { addActionsToAllPlanets } from './utils';

async function getPlanets() {
  const endpoint = 'https://swapi.dev/api/planets';

  const result = await get({
    endpoint,
  });
  if (isResponseError(result.status)) {
    throw new RequestException(result as Response);
  }
  return result;
}

export function usePlanets() {
  const { data, error, isLoading, refetch } = useQuery<IPlanets>(
    'getPlanets',
    getPlanets
  );

  const preProcessedData = {
    ...data,
    results: addActionsToAllPlanets({ planets: data?.results }),
  };

  return { data: preProcessedData, error, isLoading, refetch };
}
