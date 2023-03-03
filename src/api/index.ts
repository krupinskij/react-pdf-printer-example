import i18n from 'translations/i18n';

import { cities } from './data/cities';
import { City, CityDetail } from './model';
import { QUERY } from './query';

const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(''), ms));

const getCitiesList = async (): Promise<City[]> => {
  // await sleep(2000);
  const citiesList = await Promise.all(cities.map((city) => import(`./data/_/${city}.json`)));
  return citiesList
    .map(({ id, name, voivodeship, population, area }) => ({
      id,
      voivodeship,
      population,
      area,
    }))
    .sort((c1, c2) => c2.population - c1.population);
};

const getCity = async (city: string): Promise<CityDetail> => {
  // await sleep(2000);
  const [common, details] = await Promise.all([
    import(`./data/_/${city}.json`),
    import(`./data/${i18n.language}/${city}.json`),
  ]);

  return {
    ...common,
    ...details,
  };
};

const API = {
  getCitiesList,
  getCity,
};

export default API;
export { QUERY };
export { cities };
