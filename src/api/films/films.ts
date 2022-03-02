import { useQuery } from 'react-query';

import { get, isResponseError } from 'api/http-client';
import { RequestException } from 'api/types';

import { IFilm, IFilmVariables } from './types';

async function getFilm({ endpoint }: IFilmVariables) {
  if (!endpoint) {
    throw new Error('endpoint is missing!');
  }

  const result = await get({
    endpoint,
  });

  if (isResponseError(result.status)) {
    throw new RequestException(result as Response);
  }
  return result;
}

export function useFilm({ endpoint }: IFilmVariables) {
  const { data, isLoading } = useQuery<IFilm>(`planet_film${endpoint}`, () =>
    getFilm({ endpoint })
  );
  return { film: data, isLoading };
}
