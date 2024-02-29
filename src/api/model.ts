import { z } from 'zod';

import {
  attractionSchema,
  backgroundImageSchema,
  cityDetailsSchema,
  citySchema,
  detailsSchema,
  idSchema,
  imageSchema,
  languageSchema,
} from './schema';

export type ID = z.infer<typeof idSchema>;

export type Language = z.infer<typeof languageSchema>;

export type City = z.infer<typeof citySchema>;

export type Detail = z.infer<typeof detailsSchema>;

export type CityDetail = z.infer<typeof cityDetailsSchema>;

export type Image = z.infer<typeof imageSchema>;

export type BackgroundImage = z.infer<typeof backgroundImageSchema>;

export type Attraction = z.infer<typeof attractionSchema>;
