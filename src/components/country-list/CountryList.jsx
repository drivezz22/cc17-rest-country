import { useState } from "react";
import CountryItem from "./CountryItem";
import { all } from "axios";

function CountryList({ allCountries, setSelectedCountry, filterCountries, setFilterCountries }) {
  // 3rd run : Render, #10th Re-render
  const [searchText, setSearchText] = useState("");
  const [isFilter, setIsFilter] = useState({
    all: true,
    asia: false,
    europe: false,
    northAmerica: false,
    southAmerica: false,
    africa: false,
    oceania: false,
    antarctic: false,
  });

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
          className={"filter__btn"}
          onClick={() => {
            filterByRegion("all");
          }}
        >
          All
        </button>
        <button className="filter__btn" onClick={() => filterByRegion("Asia")}>
          Asia
        </button>
        <button className="filter__btn" onClick={() => filterByRegion("Europe")}>
          Europe
        </button>
        <button className="filter__btn" onClick={() => filterByRegion("Americas")}>
          Americas
        </button>
        <button className="filter__btn" onClick={() => filterByRegion("Africa")}>
          Africa
        </button>
        <button className="filter__btn" onClick={() => filterByRegion("Oceania")}>
          Oceania
        </button>
        <button className="filter__btn" onClick={() => filterByRegion("Antarctic")}>
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
