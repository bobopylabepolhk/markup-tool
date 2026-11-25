import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

type RefetchQuery<T = unknown> = (
  options?: RefetchOptions,
) => Promise<QueryObserverResult<T, Error>>;

export type { RefetchQuery };
