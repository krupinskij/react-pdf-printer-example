import { z } from 'zod';

import {
  attractionSchema,
  backgroundImageSchema,
  cityDetailsSchema,
  citySchema,
  detailsSchema,
  imageSchema,
  supportedLngsSchema,
} from './schema';

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

export type SupportedLng = z.infer<typeof supportedLngsSchema>;

export type City = z.infer<typeof citySchema>;

export type Detail = z.infer<typeof detailsSchema>;

export type CityDetail = z.infer<typeof cityDetailsSchema>;

export type Image = z.infer<typeof imageSchema>;

export type BackgroundImage = z.infer<typeof backgroundImageSchema>;

export type Attraction = z.infer<typeof attractionSchema>;
