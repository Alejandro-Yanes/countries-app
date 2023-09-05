import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import CountryCard from "../components/CountryCard";
import { countries as countriesData } from "../helpers/countriesCleanup";
import { getAllRegions } from "../helpers/getAllRegions";
import type { Country } from "../types/country";

function CountriesPage() {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const [search, setSearch] = useState<string>("");
  const [searchType] = useState<string[]>(["capital", "name"]);
  const [showFilter, setShowFilter] = useState<{
    region: string;
    show: boolean;
    activeRegion: boolean;
  }>({ region: "All", show: false, activeRegion: false });
  const regions = getAllRegions();

  const searchFC = (items: any) => {
    return items.filter((item: any) => {
      if (item.region === showFilter.region) {
        return searchType.some((type) => {
          return (
            item[type].toString().toLowerCase().indexOf(search.toLowerCase()) >
            -1
          );
        });
      } else if (showFilter.region === "All") {
        return searchType.some((type) => {
          return (
            item[type].toString().toLowerCase().indexOf(search.toLowerCase()) >
            -1
          );
        });
      }
    });
  };

  return (
    <>
      {/* section topbar */}
      <div>
        <div className="flex flex-col gap-10 justify-between items-start md:flex-row">
          <div className="flex items-center bg-light-mode-el dark:bg-dark-mode-el rounded gap-4 px-5 py-3 shadow-md md:min-w-[30%] min-w-[100%] ">
            <label htmlFor="search" className="ml-5">
              <HiMagnifyingGlass className="cursor-pointer" />
            </label>
            <input
              value={search}
              type="text"
              name=""
              id="search"
              placeholder="Search for a country..."
              className="bg-transparent  placeholder-light-mode-text dark:placeholder-dark-mode-text w-[100%]"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative">
            <button
              className="flex shadow-md items-center justify-between gap-2 bg-light-mode-el dark:bg-dark-mode-el px-5 py-3 rounded w-[250px]"
              onClick={() =>
                setShowFilter((prev) => {
                  return { ...prev, show: !prev.show };
                })
              }
            >
              {showFilter.region ? (
                <p>{showFilter.region}</p>
              ) : (
                <p>Filter By Region</p>
              )}

              {showFilter.activeRegion ? (
                <button
                  onClick={() =>
                    setShowFilter((prev) => {
                      return {
                        ...prev,
                        region: "All",
                        activeRegion: false,
                      };
                    })
                  }
                >
                  <AiOutlineClose className="cursor-pointer" />
                </button>
              ) : (
                <IoIosArrowDown />
              )}
            </button>
            {showFilter.show && (
              <div className="absolute shadow-md w-[250px] top-14 bg-light-mode-el dark:bg-dark-mode-el px-5 py-3 rounded  flex flex-col items-start gap-1">
                {regions &&
                  regions.map((region) => (
                    <button
                      key={region}
                      onClick={() =>
                        setShowFilter((prev) => {
                          return { ...prev, region, activeRegion: true };
                        })
                      }
                    >
                      {region}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* section info */}

      <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-14 pt-10">
        {searchFC(countries).map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </>
  );
}

export default CountriesPage;
