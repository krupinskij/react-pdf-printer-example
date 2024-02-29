import { DC, cities } from 'api';

export const isCityId = (city?: string): city is DC.ID => {
  return cities.includes(city as DC.ID);
};
