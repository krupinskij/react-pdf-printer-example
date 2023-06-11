import { SupportedLng } from 'translations';

type Translated = Record<SupportedLng, string>;

export type City = {
  id: string;
  voivodeship: string;
  area: number;
  population: number;
};

export type Detail = {
  background: Image;
  description: string;
  position: { x: number; y: number };
  onlyCoa?: boolean;
  attractions: Attraction[];
};

export type DetailDto = {
  background: ImageDto;
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
  thumb?: string;
};

export type ImageDto = {
  caption: Translated;
  source?: string;
  src: string;
  thumb?: string;
};

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
