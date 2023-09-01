import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import "./App.css";
import { countries } from "./helpers/countriesCleanup";
import { getAllRegions } from "./helpers/getAllRegions";
import { Country } from "./types/country";
import CountryCard from "./components/countryCard";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [showFilter, setShowFilter] = useState(false);
  const regions = getAllRegions();

  useEffect(() => {
    const darkModeOn = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (darkModeOn) {
      setTheme("dark");
    }
  }, []);

  return (
    <body className={theme}>
      <main
        className={
          "font-nunito-sans text-light-mode-text dark:text-dark-mode-text"
        }
      >
        <header className=" dark:bg-dark-mode-el">
          <div className="container mx-auto flex justify-between  h-12 items-center">
            <h1 className="font-bold text-big">Where in the world?</h1>
            <button
              className="flex items-center gap-2 "
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
            >
              {theme === "light" ? (
                <>
                  <BsFillSunFill />
                  <h3>Light Mode</h3>
                </>
              ) : (
                <>
                  <BsFillMoonFill />
                  <h3>Dark Mode</h3>
                </>
              )}
            </button>
          </div>
        </header>
        <section className="bg-light-mode-bg dark:bg-dark-mode-bg pt-10 h-auto">
          <div className="container mx-auto">
            {/* section topbar */}
            <div>
              <div className="flex justify-between items-start">
                <div className="flex items-center bg-light-mode-el dark:bg-dark-mode-el rounded min-w-[30%] gap-4 px-5 py-3 ">
                  <label htmlFor="search" className="ml-5">
                    <HiMagnifyingGlass className="cursor-pointer" />
                  </label>
                  <input
                    type="text"
                    name=""
                    id="search"
                    placeholder="Search for a country..."
                    className="bg-transparent  placeholder-light-mode-text dark:placeholder-dark-mode-text"
                  />
                </div>
                <div>
                  <button
                    className="flex items-center gap-2 bg-light-mode-el dark:bg-dark-mode-el px-5 py-3 rounded"
                    onClick={() => setShowFilter((prev) => !prev)}
                  >
                    Filter By Region
                    <IoIosArrowDown />
                  </button>
                  {showFilter && (
                    <div className="bg-light-mode-el dark:bg-dark-mode-el px-5 py-3 rounded mt-2 flex flex-col items-start gap-1">
                      {regions &&
                        regions.map((region) => (
                          <button key={region}>{region}</button>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* section info */}

            <div className="grid grid-cols-4 grid-flow-row gap-14 pt-10">
              {countries &&
                countries.map((country: Country) => (
                  <CountryCard country={country} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
