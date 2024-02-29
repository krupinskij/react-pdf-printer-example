import { useQuery } from '@tanstack/react-query';

import { CityDetails, ID } from 'api/dataContract';
import { UseGetQueryOptions } from 'api/helpers';
import { queryKeys } from 'api/keys';
import { cityDetailsSchema } from 'api/schema';

const getCityDetails = async (city: string): Promise<CityDetails> => {
  // await sleep(2000);
  const [common, details] = await Promise.all<[Promise<any>, Promise<any>]>([
    fetch(`${import.meta.env.BASE_URL}/data/general/${city}.json`).then((resp) => resp.json()),
    fetch(`${import.meta.env.BASE_URL}/data/detail/${city}.json`).then((resp) => resp.json()),
  ]);
  return cityDetailsSchema.parse({ ...common, ...details });
};

const useGetCityDetails = <TSelect = CityDetails>(
  id: ID,
  options?: UseGetQueryOptions<CityDetails, TSelect, ReturnType<typeof queryKeys.cityDetails>>
) => {
  const queryKey = queryKeys.cityDetails(id);
  return useQuery({
    ...options,
    queryKey,
    queryFn: () => getCityDetails(id),
  });
};

export default useGetCityDetails;
