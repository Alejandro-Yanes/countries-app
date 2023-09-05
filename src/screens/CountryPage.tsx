import React from "react";
import { useParams, Link } from "react-router-dom";
import { countries } from "../helpers/countriesCleanup";
import { BiArrowBack } from "react-icons/bi";

export interface Props {}

const CountryPage: React.FunctionComponent<Props> = (props) => {
  let { name } = useParams();
  const country = countries.find((country) => country.name === name);

  const numFormat = new Intl.NumberFormat();

  return (
    <>
      <Link
        to="/"
        className="bg-light-mode-el dark:bg-dark-mode-el flex shadow-md w-[125px] py-2 items-center justify-center rounded-sm gap-3"
      >
        <BiArrowBack /> Back
      </Link>
      {!country ? (
        <p>something went wrong</p>
      ) : (
        <div className="lg:grid lg:grid-cols-2 gap-36 items-center mt-16">
          <img src={country?.flag} alt={`${country?.name} flag`} />
          <div className="lg:mt-0 mt-10">
            <h3 className="font-bold text-extra-big">{country?.name}</h3>
            <div className="lg:grid lg:grid-cols-2 grid-flow-row mt-5">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">Native Name: </span>
                  <span>{country.nativeName}</span>
                </li>
                <li>
                  <span className="font-bold">Population: </span>
                  <span>{numFormat.format(country.population)}</span>
                </li>
                <li>
                  <span className="font-bold">Region: </span>
                  <span>{country.region}</span>
                </li>
                <li>
                  <span className="font-bold">Sub Region: </span>
                  <span>{country.subRegion}</span>
                </li>
                <li>
                  <span className="font-bold">Capital: </span>
                  <span>{country.capital}</span>
                </li>
              </ul>
              <ul className="lg:mt-0 mt-10 flex flex-col gap-2">
                <li>
                  <span className="font-bold">Top Level Domain: </span>
                  <span>
                    {country?.topLevelDomain.map((domain) => `${domain}, `)}
                  </span>
                </li>
                <li>
                  <span className="font-bold">Currencies: </span>
                  <span>{country?.currencies.map((currency) => currency)}</span>
                </li>
                <li>
                  <span className="font-bold">Languages: </span>
                  <span>
                    {country?.languague.map((language) => `${language}, `)}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center gap-2 mt-16">
              <span className="font-bold">Border Countries:</span>
              <div className="flex items-center  gap-2 flex-wrap">
                {typeof country.borderCountries === "string" ? (
                  <Link
                    to={country.borderCountries}
                    className="bg-light-mode-el dark:bg-dark-mode-el flex shadow-md w-[125px] py-2 items-center justify-center rounded-sm gap-3 text-center"
                  >
                    {country.borderCountries}
                  </Link>
                ) : (
                  country.borderCountries.map((border) => (
                    <Link
                      className="bg-light-mode-el dark:bg-dark-mode-el flex shadow-md w-[125px] py-2 items-center justify-center rounded-sm gap-3 text-center"
                      to={`/country/${border}`}
                    >
                      {border}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryPage;
