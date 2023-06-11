import i18n, { SupportedLng } from 'translations/i18n';

import { cities } from './data/cities';
import { City, CityDetail, Detail, DetailDto } from './model';
import { QUERY } from './query';

const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(''), ms));

const mapDetails = (details: DetailDto, lng: SupportedLng): Detail => {
  return {
    ...details,
    background: {
      ...details.background,
      caption: details.background.caption[lng],
    },
    description: details.description[lng],
    attractions: details.attractions.map(({ name, description, photos }) => ({
      name: name[lng],
      description: description[lng],
      photos: photos.map((photo) => ({ ...photo, caption: photo.caption[lng] })),
    })),
  };
};

const getCitiesList = async (): Promise<City[]> => {
  // await sleep(2000);
  const citiesList = await Promise.all(cities.map((city) => import(`./data/_/${city}.json`)));
  return citiesList
    .map(({ id, voivodeship, population, area }) => ({
      id,
      voivodeship,
      population,
      area,
    }))
    .sort((c1, c2) => c2.population - c1.population);
};

const getCity = async (city: string): Promise<CityDetail> => {
  // await sleep(2000);
  const [common, details] = await Promise.all<[Promise<City>, Promise<DetailDto>]>([
    import(`./data/_/${city}.json`),
    import(`./data/details/${city}.json`),
  ]);

  return {
    ...common,
    ...mapDetails(details, i18n.language as SupportedLng),
  };
};

const API = {
  getCitiesList,
  getCity,
};

export default API;
export { QUERY };
export { cities };
