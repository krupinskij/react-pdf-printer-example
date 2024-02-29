import { z } from 'zod';

import i18n from 'translations/i18n';

import { SupportedLng } from './model';

export const supportedLngsSchema = z.union([z.literal('pl'), z.literal('en')]);

const srcSchema = z
  .string()
  .transform((value) =>
    /^((http|https):\/\/)/.test(value) ? value : `${import.meta.env.BASE_URL}${value}`
  );
const translationSchema = z
  .record(supportedLngsSchema, z.string())
  .superRefine((value, ctx): value is Record<z.infer<typeof supportedLngsSchema>, string> => {
    const lngSet = new Set<string>(supportedLngsSchema.options.map((option) => option.value));
    Object.keys(value).forEach((key) => lngSet.delete(key));

    if (lngSet.size > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `missing required keys: ${Array.from(lngSet).join(', ')}`,
        fatal: true,
      });
    }
    return z.NEVER;
  })
  .transform((value) => value[i18n.language as SupportedLng]);

export const imageSchema = z.object({
  caption: translationSchema,
  source: z.string().optional(),
  src: srcSchema,
  thumb: srcSchema,
});

export const backgroundImageSchema = imageSchema.omit({ thumb: true });

export const citySchema = z.object({
  id: z.string(),
  voivodeship: z.string(),
  area: z.number(),
  population: z.number(),
});

export const attractionSchema = z.object({
  name: translationSchema,
  description: translationSchema,
  photos: z.array(imageSchema),
});

export const detailsSchema = z.object({
  background: backgroundImageSchema,
  description: translationSchema,
  position: z.object({ x: z.number(), y: z.number() }),
  onlyCoa: z.boolean().optional(),
  attractions: z.array(attractionSchema),
});

export const cityDetailsSchema = citySchema.merge(detailsSchema);
