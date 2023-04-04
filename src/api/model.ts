export type City = {
  id: string;
  voivodeship: string;
  area: number;
  population: number;
};

export type CityDetail = City & {
  background: Image;
  description: string;
  position: { x: number; y: number };
  onlyCoa?: boolean;
  tourism: Tourism[];
};

export type Image = {
  caption: string;
  source?: string;
  src: string;
};

export type Tourism = {
  name: string;
  description: string;
  photos: Image[];
};
