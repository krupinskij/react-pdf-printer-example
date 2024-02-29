import { z } from 'zod';

import { City, CityDetail } from './model';
import { QUERY } from './query';
import { cityDetailsSchema, citySchema, idSchema } from './schema';

const cities = idSchema.options.map((id) => id.value);

const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(''), ms));

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

const getCity = async (city: string): Promise<CityDetail> => {
  // await sleep(2000);
  const [common, details] = await Promise.all<[Promise<any>, Promise<any>]>([
    fetch(`${import.meta.env.BASE_URL}/data/general/${city}.json`).then((resp) => resp.json()),
    fetch(`${import.meta.env.BASE_URL}/data/detail/${city}.json`).then((resp) => resp.json()),
  ]);
  return cityDetailsSchema.parse({ ...common, ...details });
};

const API = {
  getCitiesList,
  getCity,
};

export default API;
export { QUERY };
export * as DC from './model';
export { cities };
