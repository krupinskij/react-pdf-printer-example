import { DC } from 'api';

type ElasticTuple<TTuple extends unknown[]> = TTuple extends [...infer Rest, unknown]
  ? TTuple | ElasticTuple<Rest>
  : [];

export const queryKeys = {
  cityDetails: (...key: ElasticTuple<[DC.ID]>) => ['cityDetails', ...key] as const,
  cityList: (...key: ElasticTuple<[]>) => ['cityList', ...key] as const,
};
