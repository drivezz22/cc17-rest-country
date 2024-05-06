import CountryItem from "./CountryItem";

function CountryList({ allCountries, setSelectedCountry }) {
  // 3rd run : Render, #10th Re-render

  return (
    <main className="main">
      <header className="header">
        <h1 className="header__text">Find Your Destination</h1>
      </header>
      <div className="search">
        <input className="search__input" />
        <button className="search__btn">search</button>
      </div>
      <div className="country">
        {allCountries.length > 0 &&
          allCountries.map((country) => (
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
