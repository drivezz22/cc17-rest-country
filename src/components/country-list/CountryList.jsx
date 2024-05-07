import { useState } from "react";
import CountryItem from "./CountryItem";
import { all } from "axios";

function CountryList({ allCountries, setSelectedCountry, filterCountries, setFilterCountries }) {
  // 3rd run : Render, #10th Re-render
  const [searchText, setSearchText] = useState("");
  const initFilterState = {
    all: false,
    asia: false,
    europe: false,
    americas: false,
    africa: false,
    oceania: false,
    antarctic: false,
  };
  const [isFilter, setIsFilter] = useState(initFilterState);

  const handleSearch = () => {
    const filterCountries = allCountries.filter((c) =>
      c.name.common.toLowerCase().includes(searchText)
    );
    setFilterCountries(filterCountries);
  };

  const filterByRegion = (region) => {
    if (region === "all") {
      setFilterCountries(allCountries);
    } else {
      const filterData = allCountries.filter((c) => c.region === region);
      setFilterCountries(filterData);
    }
  };

  return (
    <main className="main">
      <header className="header">
        <h1 className="header__text">Find Your Destination</h1>
      </header>
      <div className="search">
        <input
          className="search__input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search__btn" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="filter">
        <button
          className={isFilter["all"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("all");
            setIsFilter(Object.assign(initFilterState, { all: true }));
          }}
        >
          All
        </button>
        <button
          className={isFilter["asia"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("Asia");
            setIsFilter(Object.assign(initFilterState, { asia: true }));
          }}
        >
          Asia
        </button>
        <button
          className={isFilter["europe"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("Europe");
            setIsFilter(Object.assign(initFilterState, { europe: true }));
          }}
        >
          Europe
        </button>
        <button
          className={isFilter["americas"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("Americas");
            setIsFilter(Object.assign(initFilterState, { americas: true }));
          }}
        >
          Americas
        </button>
        <button
          className={isFilter["africa"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("Africa");
            setIsFilter(Object.assign(initFilterState, { africa: true }));
          }}
        >
          Africa
        </button>
        <button
          className={isFilter["oceania"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("Oceania");
            setIsFilter(Object.assign(initFilterState, { oceania: true }));
          }}
        >
          Oceania
        </button>
        <button
          className={isFilter["antarctic"] ? "filter__btn--selected" : "filter__btn"}
          onClick={() => {
            filterByRegion("Antarctic");
            setIsFilter(Object.assign(initFilterState, { antarctic: true }));
          }}
        >
          Antarctic
        </button>
      </div>
      <div className="country">
        {filterCountries.length > 0 &&
          filterCountries.map((country) => (
            <CountryItem
              key={country.name.official}
              country={country}
              setSelectedCountry={setSelectedCountry}
            />
          ))}
      </div>
    </main>
  );
}

export default CountryList;
