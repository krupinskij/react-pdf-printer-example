export type City = {
  id: string;
  voivodeship: string;
  area: number;
  population: number;
};

export type CityDetail = City & {
  description: string;
  position: { x: number; y: number };
  onlyCoa?: boolean;
};
