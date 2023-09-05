import { Country } from "../types/country";
import data from "../assets/data.json";

const countriesCleanup = () => {
  const countries: Country[] = data.map((country) => {
    return {
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      capital: country.capital || "No Capital",
      region: country.region,
      subRegion: country.subregion,
      flag: country.flag,
      topLevelDomain: country.topLevelDomain.map((domain) => domain),
      currencies: country.currencies
        ? country.currencies.map((currency) => currency.name)
        : ["no currency found"],
      languague: country.languages.map((languague) => languague.name),
      borderCountries: country.borders
        ? country.borders.map(
            (border) =>
              data.filter((country) => country.alpha3Code === border)[0].name
          )
        : "No borders",
    };
  });

  return countries;
};

export const countries = countriesCleanup();
