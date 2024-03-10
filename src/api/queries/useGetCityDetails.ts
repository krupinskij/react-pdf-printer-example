import { useQuery } from '@tanstack/react-query';

import { CityDetails, ID } from 'api/dataContract';
import { UseGetQueryFunctionContext, UseGetQueryOptions, sleep } from 'api/helpers';
import { queryKeys } from 'api/keys';
import { cityDetailsSchema } from 'api/schema';

const getCityDetails = async ({
  queryKey,
}: UseGetQueryFunctionContext<'cityDetails'>): Promise<CityDetails> => {
  // await sleep(2000);
  const [, city] = queryKey;
  const [common, details] = await Promise.all<[Promise<any>, Promise<any>]>([
    fetch(`${import.meta.env.BASE_URL}/data/general/${city}.json`).then((resp) => resp.json()),
    fetch(`${import.meta.env.BASE_URL}/data/detail/${city}.json`).then((resp) => resp.json()),
  ]);
  return cityDetailsSchema.parse({ ...common, ...details });
};

const useGetCityDetails = (id: ID, options?: UseGetQueryOptions<'cityDetails', CityDetails>) => {
  const queryKey = queryKeys.cityDetails(id);
  return useQuery({
    ...options,
    queryKey,
    queryFn: getCityDetails,
  });
};

export default useGetCityDetails;
