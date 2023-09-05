import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";

export interface Props {}

const Root: React.FunctionComponent<Props> = () => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    const darkModeOn = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (darkModeOn) {
      setTheme("dark");
    }
  }, []);

  return (
    <div className={theme}>
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
        <section className="bg-light-mode-bg dark:bg-dark-mode-bg pt-16 h-auto min-h-[95vh]">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Root;
