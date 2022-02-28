import { RequestException } from 'api/types';
import { useQuery } from 'react-query';

import { get, isResponseError } from '../http-client';
import { IPlanets } from './types';

async function getPlanets() {
  const endpoint = '/planets';

  const result = await get({
    endpoint,
  });
  if (isResponseError(result.status)) {
    throw new RequestException(result as Response);
  }
  return result;
}

export function usePlanets() {
  const { data, error, isFetching, refetch } = useQuery<IPlanets>(
    'getPlanets',
    getPlanets
  );
  return { data, error, isFetching, refetch };
}
