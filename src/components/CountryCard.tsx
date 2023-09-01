import React from "react";
import type { Country } from "../types/country";

export interface Props {
  country: Country;
}

const CountryCard: React.FunctionComponent<Props> = ({ country }) => {
  return (
    <div className="rounded-md bg-light-mode-el dark:bg-dark-mode-el">
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <div>
        <h3 className="font-bold text-big">{country.name}</h3>
        <ul>
          <ol>
            <span className="font-bold">Population</span>
            <span>{country.population}</span>
          </ol>
          <ol>
            <span className="font-bold">Region</span>
            <span>{country.region}</span>
          </ol>
          <ol>
            <span className="font-bold">Capital</span>
            <span>{country.capital}</span>
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
