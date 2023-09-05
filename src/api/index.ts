import i18n, { SupportedLng } from 'translations/i18n';

import { City, CityDetail, Detail, DetailDto, cities } from './model';
import { QUERY } from './query';

const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(''), ms));

const mapSrc = (src: string): string => {
  const regexp = /^((http|https):\/\/)/;

  return regexp.test(src) ? src : `${import.meta.env.BASE_URL}${src}`;
};

const mapDetails = (details: DetailDto, lng: SupportedLng): Detail => {
  return {
    ...details,
    background: {
      ...details.background,
      caption: details.background.caption[lng],
      src: mapSrc(details.background.src),
    },
    description: details.description[lng],
    attractions: details.attractions.map(({ name, description, photos }) => ({
      name: name[lng],
      description: description[lng],
      photos: photos.map((photo) => ({
        ...photo,
        caption: photo.caption[lng],
        src: mapSrc(photo.src),
        thumb: mapSrc(photo.thumb ?? photo.src),
      })),
    })),
  };
};

const getCitiesList = async (): Promise<City[]> => {
  // await sleep(2000);
  const citiesList = await Promise.all<Promise<City>>(
    cities.map((city) =>
      fetch(`${import.meta.env.BASE_URL}/data/general/${city}.json`).then((resp) => resp.json())
    )
  );
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
    fetch(`${import.meta.env.BASE_URL}/data/general/${city}.json`).then((resp) => resp.json()),
    fetch(`${import.meta.env.BASE_URL}/data/detail/${city}.json`).then((resp) => resp.json()),
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
