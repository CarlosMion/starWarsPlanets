import { CustomConfig, GetOptions } from './types';

export function isResponseError(statusCode: number) {
  return statusCode >= 400;
}

export function get({ endpoint }: GetOptions) {
  const customConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return client(endpoint, customConfig);
}

export async function client(
  endpoint: string,
  { headers: customHeaders, ...customConfig }: CustomConfig
) {
  const config = {
    headers: {
      ...customHeaders,
    },
    ...customConfig,
  };
  return window.fetch(endpoint, config).then(async (response) => {
    const responseInfo = {
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url,
    };
    try {
      const data = await response.json();
      return {
        ...responseInfo,
        ...data,
      };
    } catch (error) {
      return response;
    }
  });
}
