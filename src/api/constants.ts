export const FAILED_FETCH_RETRIES = 3;

export const queryConfigDefaults = {
  refetchOnWindowFocus: false,
  retry: FAILED_FETCH_RETRIES,
};
