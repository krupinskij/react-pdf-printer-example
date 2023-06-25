import { SupportedLng } from 'translations';

export const cities = [
  'warsaw',
  'krakow',
  'wroclaw',
  'lodz',
  'poznan',
  'gdansk',
  'szczecin',
  'bydgoszcz',
  'lublin',
  'bialystok',
  'katowice',
  'gdynia',
  'czestochowa',
  'radom',
  'torun',
  'rzeszow',
];

type Translated = Record<SupportedLng, string>;

export type City = {
  id: string;
  voivodeship: string;
  area: number;
  population: number;
};

export type Detail = {
  background: BackgroundImage;
  description: string;
  position: { x: number; y: number };
  onlyCoa?: boolean;
  attractions: Attraction[];
};

export type DetailDto = {
  background: BackgroundImageDto;
  description: Translated;
  position: { x: number; y: number };
  onlyCoa?: boolean;
  attractions: AttractionDto[];
};

export type CityDetail = City & Detail;

export type Image = {
  caption: string;
  source?: string;
  src: string;
  thumb: string;
};

export type BackgroundImage = Omit<Image, 'thumb'>;

export type ImageDto = {
  caption: Translated;
  source?: string;
  src: string;
  external?: boolean;
  thumb?: string;
};

export type BackgroundImageDto = Omit<ImageDto, 'thumb'>;

export type Attraction = {
  name: string;
  description: string;
  photos: Image[];
};

export type AttractionDto = {
  name: Translated;
  description: Translated;
  photos: ImageDto[];
};
