import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { City } from 'api/dataContract';
import { UseGetQueryOptions, cities } from 'api/helpers';
import { queryKeys } from 'api/keys';
import { citySchema } from 'api/schema';

const getCitiesList = async (): Promise<City[]> => {
  // await sleep(2000);
  const citiesList = await Promise.all<Promise<City>>(
    cities.map((city) =>
      fetch(`${import.meta.env.BASE_URL}/data/general/${city}.json`).then((resp) => resp.json())
    )
  );
  return z
    .array(citySchema)
    .parse(citiesList)
    .sort((c1, c2) => c2.population - c1.population);
};

const useGetCityList = <TSelect = City[]>(
  options?: UseGetQueryOptions<City[], TSelect, ReturnType<typeof queryKeys.cityList>>
) => {
  const queryKey = queryKeys.cityList();
  return useQuery({
    ...options,
    queryKey,
    queryFn: () => getCitiesList(),
  });
};

export default useGetCityList;
