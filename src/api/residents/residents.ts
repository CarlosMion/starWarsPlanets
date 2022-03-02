import { useQuery } from 'react-query';
import { IResident, IResidentVariables } from './types';

import { get, isResponseError } from '../http-client';
import { RequestException } from 'api/types';

async function getResident({ endpoint }: IResidentVariables) {
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

export function useResident({ endpoint }: IResidentVariables) {
  const { data, isLoading } = useQuery<IResident>(
    `planet_resident${endpoint}`,
    () => getResident({ endpoint })
  );
  return { resident: data, isLoading };
}
