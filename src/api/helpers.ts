import { QueryKey, UseQueryOptions } from '@tanstack/react-query';

import { idSchema } from './schema';

export type UseGetQueryOptions<
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<UseQueryOptions<TQueryFnData, any, TData, TQueryKey>, 'queryFn' | 'queryKey'>;

export const cities = idSchema.options.map((id) => id.value);

export const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(''), ms));
