import { QueryFunctionContext, UseQueryOptions } from '@tanstack/react-query';

import { queryKeys } from './keys';
import { idSchema } from './schema';

export type UseGetQueryFunctionContext<TQueryFnKey extends keyof typeof queryKeys> =
  QueryFunctionContext<ReturnType<(typeof queryKeys)[TQueryFnKey]>>;

export type UseGetQueryOptions<
  TQueryFnKey extends keyof typeof queryKeys,
  TQueryFnData = unknown,
  TData = TQueryFnData
> = Omit<
  UseQueryOptions<TQueryFnData, any, TData, ReturnType<(typeof queryKeys)[TQueryFnKey]>>,
  'queryFn' | 'queryKey'
>;

export const cities = idSchema.options.map((id) => id.value);

export const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(''), ms));
