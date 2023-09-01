import { countries } from "./countriesCleanup";

export const getAllRegions = (): string[] => {
  const regionsWithDuplicates = countries.map((country) => country.region);

  const regionsWithouthDuplicates = [...new Set(regionsWithDuplicates)];

  return regionsWithouthDuplicates;
};
