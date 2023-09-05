import React from "react";
import type { Country } from "../types/country";
import { Link } from "react-router-dom";

export interface Props {
  country: Country;
}

const CountryCard: React.FunctionComponent<Props> = ({ country }) => {
  return (
    <Link
      to={`country/${country.name}`}
      className="group rounded-md overflow-hidden shadow-md bg-light-mode-el dark:bg-dark-mode-el cursor-pointer"
    >
      <div className="" style={{ maxHeight: "150px", overflow: "hidden" }}>
        <img
          className="group-hover:scale-125 tranform transition duration-500 "
          src={country.flag}
          alt={`Flag of ${country.name}`}
          style={{
            marginTop: "-13px",
            width: "100%",
            objectFit: "fill",
            objectPosition: "bottom",
            minHeight: "100%",
          }}
        />
      </div>
      <div className="p-8 text-left">
        <h3 className="font-bold text-big">{country.name}</h3>
        <ul className="text-small mt-4 ">
          <ol className="mt-1">
            <span className="font-bold ">Population : </span>
            <span>{country.population}</span>
          </ol>
          <ol className="mt-1">
            <span className="font-bold ">Region : </span>
            <span>{country.region}</span>
          </ol>
          <ol className="mt-1">
            <span className="font-bold ">Capital : </span>
            <span>{country.capital}</span>
          </ol>
        </ul>
      </div>
    </Link>
  );
};

export default CountryCard;
